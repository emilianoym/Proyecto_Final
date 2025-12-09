import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  templateUrl: './registro.html',
  styleUrls: ['./registro.scss'],
})
export class Registro {

  username: string = "";
  contrasena: string = "";
  correo: string = "";
  errorMsg: string = "";
  exitoMsg: string = "";

  constructor(private http: HttpClient, private router: Router) {}

  registrar() {
    // Validación básica
    if (!this.username || !this.contrasena || !this.correo) {
      this.errorMsg = "Todos los campos son obligatorios.";
      return;
    }

    const nuevoUsuario = {
      username: this.username,
      contrasena: this.contrasena,
      correo: this.correo
    };

    this.http.post("http://localhost:3000/usuarios", nuevoUsuario)
      .subscribe({
        next: (res: any) => {
          this.exitoMsg = "Usuario registrado correctamente.";

          // Guardar en localStorage para que ya esté logueado
          localStorage.setItem("user", JSON.stringify({
            id: res.id,
            username: this.username,
            correo: this.correo
          }));

          // Redirigir al home
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 800);
        },
        error: (err) => {
          console.error(err);
          this.errorMsg = "Error al registrar usuario.";
        }
      });
  }

}
