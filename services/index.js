const express = require("express");
const cors = require("cors");
const db = require("./db")
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


app.get("/usuarios", (req, res) => {
  db.query("SELECT * FROM Usuarios", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// ▶ Actualizar foto de perfil
app.put("/user/:id/photo", (req, res) => {
  const { foto_perfil } = req.body;
  db.query(
    "UPDATE Usuarios SET foto_perfil = ? WHERE id = ?",
    [foto_perfil, req.params.id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Foto actualizada" });
    }
  );
});

app.post("/usuarios", (req, res) => {
  const { username, contrasena, correo } = req.body;
  db.query(
    "INSERT INTO Usuarios (username, contrasena, correo) VALUES (?, ?, ?)",
    [username, contrasena, correo],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Usuario registrado", id: result.insertId });
    }
  );
});


// ▶ Obtener todos los posts
app.get("/posts", (req, res) => {
  db.query(
    `SELECT Post.*, Usuarios.username, Usuarios.foto_perfil
     FROM Post
     INNER JOIN Usuarios ON Usuarios.id = Post.usuario_id
     ORDER BY fecha_post DESC`,
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
});

// ▶ Crear post
app.post("/posts", (req, res) => {
  const { usuario_id, nombre_cancion, artista, descripcion, link_cancion } = req.body;
  db.query(
    `INSERT INTO Post
    (usuario_id, nombre_cancion, artista, descripcion, link_cancion)
    VALUES (?, ?, ?, ?, ?)`,
    [usuario_id, nombre_cancion, artista, descripcion, link_cancion],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Post creado", id: result.insertId });
    }
  );
});


// ▶ Obtener álbumes
app.get("/albums", (req, res) => {
  const genre = req.query.genre;

  let query = "SELECT * FROM Albums";
  let params = [];

  if (genre) {
    query += " WHERE genero = ?";
    params.push(genre);
  }

  db.query(query, params, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// ▶ Obtener álbum por ID
app.get("/albums/:id", (req, res) => {
  db.query("SELECT * FROM Albums WHERE id = ?", [req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result[0]);
  });
});


// ▶ Crear reseña
app.post("/reviews", (req, res) => {
  const { id_album, id_usuario, estrellas, descripcion } = req.body;

  db.query(
    `INSERT INTO Reviews (id_album, id_usuario, estrellas, descripcion)
     VALUES (?, ?, ?, ?)`,
    [id_album, id_usuario, estrellas, descripcion],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Review creada", id: result.insertId });
    }
  );
});

app.put("/posts/:id/likes", (req, res) => {
  const id = req.params.id;
  const { likes } = req.body;

  db.query(
    "UPDATE Post SET likes = ? WHERE id = ?",
    [likes, id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Likes actualizados" });
    }
  );
});

app.put("/reviews/:id/likes", (req, res) => {
  const id = req.params.id;
  const { likes } = req.body;

  db.query(
    "UPDATE Reviews SET likes = ? WHERE id = ?",
    [likes, id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Likes actualizados" });
    }
  );
});

app.get("/posts/:id", (req, res) => {
  db.query(
    `SELECT Post.*, Usuarios.username, Usuarios.foto_perfil
     FROM Post
     INNER JOIN Usuarios ON Usuarios.id = Post.usuario_id
     WHERE Post.id = ?`,
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result[0]);
    }
  );
});

app.post("/login", (req, res) => {
  const { username, contrasena } = req.body;

  db.query(
    "SELECT * FROM Usuarios WHERE username = ? AND contrasena = ?",
    [username, contrasena],
    (err, result) => {
      if (err) return res.status(500).json({ success: false });
      if (result.length === 0) {
        return res.json({ success: false });
      }
      res.json({
        success: true,
        user: {
          id: result[0].id,
          username: result[0].username,
          correo: result[0].correo,
          foto_perfil: result[0].foto_perfil
        }
      });
    }
  );
});

// ▶ Obtener usuario por ID
app.get("/user/:id", (req, res) => {
  db.query("SELECT id, username, correo, foto_perfil FROM Usuarios WHERE id = ?", [req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.length === 0) return res.status(404).json({ error: "Usuario no encontrado" });
    res.json(result[0]);
  });
});

app.get("/reviews/:id", (req, res) => {
  const id = req.params.id;

  const query = `
    SELECT Reviews.*,
           Albums.nombre_album, Albums.artista, Albums.direccion_img,
           Usuarios.username, Usuarios.foto_perfil
    FROM Reviews
    INNER JOIN Albums ON Reviews.id_album = Albums.id
    INNER JOIN Usuarios ON Reviews.id_usuario = Usuarios.id
    WHERE Reviews.id = ?;
  `;

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("Error al obtener review:", err);
      return res.status(500).json({ error: "Error del servidor" });
    }

    if (result.length === 0) {
      return res.status(404).json({ error: "Review no encontrada" });
    }

    res.json(result[0]);
  });
});

// ▶ Obtener TODAS las reviews
app.get("/reviews", (req, res) => {
  db.query(`
    SELECT Reviews.*, Usuarios.username, Usuarios.foto_perfil, Albums.nombre_album, Albums.artista, Albums.direccion_img
    FROM Reviews
    INNER JOIN Usuarios ON Usuarios.id = Reviews.id_usuario
    INNER JOIN Albums ON Albums.id = Reviews.id_album
    ORDER BY fecha_review DESC;
  `, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

app.get("/user/:id/reviews", (req, res) => {
  const userId = req.params.id;

  const query = `
    SELECT
      Reviews.*,
      Albums.nombre_album,
      Albums.artista,
      Albums.direccion_img,
      Usuarios.username,
      Usuarios.foto_perfil
    FROM Reviews
    INNER JOIN Albums ON Albums.id = Reviews.id_album
    INNER JOIN Usuarios ON Usuarios.id = Reviews.id_usuario
    WHERE Reviews.id_usuario = ?
    ORDER BY Reviews.fecha_review DESC
  `;

  db.query(query, [userId], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

app.get("/user/:id/posts", (req, res) => {
  const userId = req.params.id;

  const query = `
    SELECT
      Post.*,
      Usuarios.username,
      Usuarios.foto_perfil
    FROM Post
    INNER JOIN Usuarios ON Usuarios.id = Post.usuario_id
    WHERE Post.usuario_id = ?
    ORDER BY Post.fecha_post DESC
  `;

  db.query(query, [userId], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

app.get("/genres", (req, res) => {
  db.query(
    "SELECT DISTINCT genero AS nombre FROM Albums ORDER BY genero ASC",
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
});



const PORT = 3000;
app.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:" + PORT);
});


