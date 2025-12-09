DROP DATABASE IF EXISTS GroveRoom_bd;
CREATE DATABASE GroveRoom_bd;
USE GroveRoom_bd;

SET FOREIGN_KEY_CHECKS = 0;


DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(25) NOT NULL,
  `contrasena` varchar(30) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `color` varchar(20) DEFAULT 'yellow',
  `foto_perfil` varchar(255) DEFAULT 'assets/default-user.png',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `correo` (`correo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `usuarios` VALUES 
(1,'music_fan_99','pass1234','fan99@email.com','yellow','assets/default-user.png'),
(2,'sofia_beats','claveSegura.1','sofia.b@email.com','yellow','assets/default-user.png'),
(3,'rocker_mx','guitarra2024','rocker@email.com','yellow','assets/default-user.png'),
(4,'jazz_soul','smoothOperator','jazz.lover@email.com','yellow','assets/default-user.png'),
(5,'urban_king','calle123','urban@email.com','yellow','assets/default-user.png'),
(6,'user1','12345','user1@email.com','#F2D57E','assets/default-user.png'),
(7,'burger_lover','emy','emi@gmail.com','yellow','assets/default-user.png'),
(12,'jaja','emy','asac','yellow','assets/default-user.png'),
(14,'user2','12345','jiasdjo@gmail.com','yellow','assets/default-user.png'),
(16,'beatle_lover','horadeaventura07','example@gmail.com','yellow','assets/default-user.png'),
(18,'papas','12345','asd','yellow','assets/default-user.png'),
(19,'diana','12345','dianis.ym@gmail.com','yellow','assets/default-user.png'),
(21,'papita','12345','asdok@gmail.com','yellow','assets/default-user.png'),
(26,'galletita','123456','emi2@gmail.com','yellow','assets/default-user.png'),
(27,'cookie_cool','cookies','cookie@gmail.com','yellow','https://sfrpanama.com/wp-content/uploads/2023/04/Apri2011-049pwm.jpg'),
(28,'taquito','taquito','taquito@gmail.com','yellow','https://www.kindpng.com/picc/m/663-6636107_taquitos-clipart-banner-black-and-white-library-tacos.png'),
(29,'choocolate_abuelita','choocolate_abuelita','chocolate_abuelita@gmail.com','yellow','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWaRZQ4PUrqOFxCeqcD_wOB_8ww3q1FU0A_w&s'),
(30,'juangalove','juangalove','juangalover@gmail.com','yellow','https://www.sopitas.com/wp-content/uploads/2016/08/meme-juan-gabriel-palmera-origan.png'),
(31,'ludwigvb777','ludwigvb777','beethoven','yellow','https://images.cults3d.com/_4EF90cjSFX_GJFLPGE88wo0DU0=/516x516/filters:no_upscale()/https://fbi.cults3d.com/uploaders/30177156/illustration-file/b4966a9f-757b-4c8a-ac61-93412982cf72/Shrek-Minion-1.png'),
(32,'chuek','chuek','chuek@gmail.com','yellow','https://cdn-img.zerozero.pt/img/planteis/693/7371693_.png');

DROP TABLE IF EXISTS `albums`;
CREATE TABLE `albums` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre_album` varchar(150) NOT NULL,
  `artista` varchar(150) NOT NULL,
  `genero` varchar(30) NOT NULL,
  `fecha_lanzamiento` date DEFAULT NULL,
  `direccion_img` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `albums` VALUES
(1,'Abbey Road','The Beatles','Rock','1969-09-26','https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Beatles_-_Abbey_Road.jpg/250px-Beatles_-_Abbey_Road.jpg'),
(2,'Let It Be','The Beatles','Rock','1970-05-08','https://upload.wikimedia.org/wikipedia/en/7/7a/The_Beatles_-_Let_It_Be.png'),
(3,'Revolver','The Beatles','Rock','1966-08-05','https://upload.wikimedia.org/wikipedia/en/e/ec/Revolver_%28album_cover%29.jpg'),
(4,'Sad Boyz 4 Life II','Junior H','Regional Mexicano','2023-09-07','https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Junior_H_-_%24ad_Boyz_4_Life_II.jpeg/250px-Junior_H_-_%24ad_Boyz_4_Life_II.jpeg'),
(5,'Nevermind','Nirvana','Grunge','1991-09-24','https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg'),
(6,'In Utero','Nirvana','Grunge','1993-09-21','https://upload.wikimedia.org/wikipedia/en/e/e5/In_Utero_%28Nirvana%29_album_cover.jpg'),
(7,'Un Verano Sin Ti','Bad Bunny','Latin Urbano','2022-05-06','https://upload.wikimedia.org/wikipedia/en/6/60/Bad_Bunny_-_Un_Verano_Sin_Ti.png'),
(8,'Debí Tirar Más Fotos','Bad Bunny','Latin Urbano','2023-10-13','https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Bad_Bunny_-_Deb%C3%AD_Tirar_M%C3%A1s_Fotos.png/250px-Bad_Bunny_-_Deb%C3%AD_Tirar_M%C3%A1s_Fotos.png'),
(9,'My Beautiful Dark Twisted Fantasy','Kanye West','Hip-Hop','2010-11-22','https://upload.wikimedia.org/wikipedia/en/thumb/b/be/MBDTF_ALT.jpg/250px-MBDTF_ALT.jpg'),
(10,'Donda','Kanye West','Hip-Hop','2021-08-29','https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Kanye_West_-_Donda_With_Child.png/250px-Kanye_West_-_Donda_With_Child.png'),
(11,'Flower Boy','Tyler, The Creator','Hip-Hop','2017-07-21','https://upload.wikimedia.org/wikipedia/en/c/c3/Tyler%2C_the_Creator_-_Flower_Boy.png'),
(12,'IGOR','Tyler, The Creator','Hip-Hop','2019-05-17','https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Igor_-_Tyler%2C_the_Creator.jpg/250px-Igor_-_Tyler%2C_the_Creator.jpg'),
(13,'DAMN.','Kendrick Lamar','Hip-Hop','2017-04-14','https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png'),
(14,'good kid, m.A.A.d city','Kendrick Lamar','Hip-Hop','2012-10-22','https://upload.wikimedia.org/wikipedia/en/9/93/KendrickGKMC.jpg'),
(15,'Recuerdos del Alma','Los Temerarios','Romántico','2000-06-20','https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Recuerdos_del_Alma.jpg/250px-Recuerdos_del_Alma.jpg'),
(16,'Roamance','Luis Miguel','Pop','1991-11-19','https://upload.wikimedia.org/wikipedia/en/f/f0/Romance_Luis_Miguel.jpg'),
(17,'Random Access Memories','Daft Punk','Electronic','2013-05-17','https://upload.wikimedia.org/wikipedia/en/2/26/Daft_Punk_-_Random_Access_Memories.png'),
(18,'Thriller','Michael Jackson','Pop','1982-11-30','https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png'),
(19,'AT.LONG.LAST.A$AP','ASAP Rocky','Hip Hop','1982-11-30','https://upload.wikimedia.org/wikipedia/en/a/ab/AtLongLastASAPCover.jpg'),
(20,'Tutankamon','Victor Mendivil','Regional','2025-11-30','https://akamai.sscdn.co/uploadfile/letras/albuns/3/a/0/b/3604371753284409.jpg'),
(21,'Muerte','Canserbero','Hip-Hop','2011-11-30','https://i1.sndcdn.com/artworks-000104648677-rfxlzx-t1080x1080.jpg'),
(22,'Starboy','The Weekend','Pop','2016-11-30','https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452'),
(23,'Kids See Ghost','Kanye West','Hip-Hop','2018-11-30','https://m.media-amazon.com/images/I/81vqCvM2EJL.jpg'),
(24,'K.I.D.S.','Mac Miller','Hip-Hop','2010-11-30','https://i.scdn.co/image/ab67616d0000b2739d37f979163154904099eece'),
(25,'Sin Copa','Cartel de Santa','Hip-Hop','2011-09-26','https://i.scdn.co/image/ab67616d0000b273253c87f9234b079eebf0165f'),
(26,'Sticky Fingers','The Rolling Stones','Rock','1970-05-08','https://i.scdn.co/image/ab67616d0000b273f9c12564f883fd39298aad42'),
(27,'111XPANTIA','Fuerza Regida','Regional Mexicano','2025-08-05','https://i.scdn.co/image/ab67616d0000b273a2e90fbdec84b25e46573469'),
(28,'Whole Lotta Red','Playboi Carti','Hip-Hop','2017-09-07','https://i.scdn.co/image/ab67616d0000b27398ea0e689c91f8fea726d9bb'),
(29,'Soy lo que Quiero','Julian Álvarez','Regional Mexicano','2011-09-24','https://i.scdn.co/image/ab67616d0000b2735af71759e94753c1099227c5'),
(30,'Re','Cafe Tacvuba','Rock','1998-09-21','https://i.scdn.co/image/ab67616d0000b2733b9211139eb247b12f6ba6c5'),
(31,'Amor, Amor','José José','Romántico','1980-10-15','https://i.scdn.co/image/ab67616d0000b2733bff4fd7d0797659ee73ff99'),
(32,'Diamond Eyes','Deftones','Metal','2010-05-04','https://i.scdn.co/image/ab67616d0000b273694372f2e1a1b98b792d79dc'),
(33,'Dreaming of You','Selena','Pop Latino','1995-07-18','https://i.scdn.co/image/ab67616d0000b273332344b575d4acea537704f5'),
(34,'Programaton','Zoé','Rock','2013-10-29','https://i.scdn.co/image/ab67616d0000b2732fab9c100d51bfb22d5aff6c'),
(35,'Signos','Soda Stereo','Rock','1986-11-10','https://i.scdn.co/image/ab67616d0000b2734a6f5598c41e77ae78cab725'),
(36,'OK Computer','Radiohead','Alternitive Rock','1997-05-21','https://i.scdn.co/image/ab67616d0000b273c8b444df094279e70d0ed856'),
(37,'Hotel California','Eagles','Rock','1976-12-08','https://i.scdn.co/image/ab67616d0000b2734637341b9f507521afa9a778'),
(38,'Born to Die','Lana Del Rey','Indie Pop','2012-01-27','https://i.scdn.co/image/ab67616d0000b273a1c37f3fd969287c03482c3b'),
(39,'Rumours','Fleetwood Mac','Soft Rock','1977-02-04','https://i.scdn.co/image/ab67616d0000b27357df7ce0eac715cf70e519a7');

DROP TABLE IF EXISTS `post`;
CREATE TABLE `post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `nombre_cancion` varchar(100) NOT NULL,
  `artista` varchar(100) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `link_cancion` varchar(500) NOT NULL,
  `likes` int DEFAULT '0',
  `fecha_post` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `post_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `post` VALUES
(1,1,'Starboy','The Weeknd','Esta canción nunca pasa de moda, el ritmo es increíble.','https://open.spotify.com/track/starboy123',153,'2025-11-23 14:56:55'),
(2,2,'Flowers','Miley Cyrus','Himno total, no puedo dejar de escucharla.','https://open.spotify.com/track/flowers456',342,'2025-11-23 14:56:55'),
(3,3,'De Música Ligera','Soda Stereo','Un clásico del rock en español. ¡Grande Cerati!','https://youtube.com/watch?v=demusicaligera',890,'2025-11-23 14:56:55'),
(4,1,'Monaco','Bad Bunny','Lo nuevo suena durísimo.','https://open.spotify.com/track/monaco789',500,'2025-11-23 14:56:55'),
(5,4,'Take Five','The Dave Brubeck Quartet','Para estudiar o relajarse, el mejor jazz.','https://open.spotify.com/track/takefive000',47,'2025-11-23 14:56:55'),
(6,3,'Smells Like Teen Spirit','Nirvana','La energía de esta canción es inigualable.','https://youtube.com/watch?v=hTWKbfoikeg',1201,'2025-11-23 14:56:55'),
(7,2,'Vampire','Olivia Rodrigo','La letra es muy profunda y la melodía pegajosa.','https://open.spotify.com/track/vampire101',210,'2025-11-23 14:56:55'),
(8,5,'LALA','Myke Towers','Perfecta para el fin de semana.','https://open.spotify.com/track/lala202',600,'2025-11-23 14:56:55'),
(9,1,'ipnon','ni0n','jonjo','oin',1,'2025-11-23 15:49:30'),
(10,1,'Stay','Mac Miller','Esta buena','https://open.spotify.com/intl-es/track/4brX8MJs5hxErgq48f9REO?si=ae58dffb01a742ea',2,'2025-11-23 15:51:18'),
(11,1,'Selfless','The Strokes','Me encanta The Strokes','https://open.spotify.com/intl-es/track/2t0wwvR15fc3K1ey8OiOaN?si=07c285185b4e44c8',3,'2025-11-23 19:25:03'),
(12,6,'El Tucanazo','Los Tucanes De Tijuana','El bajoooo!!!','https://open.spotify.com/intl-es/track/07Ag8vm1pW409NrhpPokFg?si=ca5d583d18a743db',4,'2025-11-23 19:32:06'),
(13,6,'La Chona','Los tucanes de Tijuana','esta de pelos','www.spotify.com',1,'2025-11-25 22:35:14'),
(14,7,'Cruz de Navajas','Mecano',':(','https://open.spotify.com/intl-es/track/73JlqLGG7TKKqKa8F80vPd?si=6ac47657457f441d',4,'2025-11-26 00:20:28'),
(15,19,'La novela','Los acosta','Suena a navidad','https://www.youtube.com/watch?v=d6x2gyBFWVg&list=RDd6x2gyBFWVg&start_radio=1',3,'2025-11-30 02:42:25'),
(16,27,'Minero','El rubius','muy buena rola','https://www.youtube.com/watch?v=VZzSBv6tXMw',2,'2025-12-09 00:06:59'),
(17,28,'Diseñame','Joan Sebastian','Dedicada a mi Maribel Guardia','https://www.youtube.com/watch?v=e7_h4WNnlTU&list=RDe7_h4WNnlTU&start_radio=1',1,'2025-12-09 00:14:15'),
(18,29,'Siempre en Mi Mente','Juan Gabriel','Canción maravillosa de este genio','https://open.spotify.com/intl-es/track/5vmqRHDrMgdbw3CIvQycbj?si=f69c141772534474',1,'2025-12-09 00:31:58'),
(19,30,'Diles','Bad Bunny','Un gozo auditivo en los oidos.','https://open.spotify.com/intl-es/track/6C1RD7YQVvt3YQj0CmuTeu?si=853d279b9db6417c',1223350,'2025-12-09 00:40:28'),
(20,31,'Call Me Maybe','Carly Rae Jepsen','El mustang de la música.','https://www.youtube.com/watch?v=fWNaR-rxAic',34516723,'2025-12-09 00:55:17'),
(21,1,'Starboy','The Weeknd','Esta canción nunca pasa de moda, el ritmo es increíble.','https://open.spotify.com/track/starboy123',150,'2025-12-09 01:02:37'),
(22,2,'Flowers','Miley Cyrus','Himno total, no puedo dejar de escucharla.','https://open.spotify.com/track/flowers456',342,'2025-12-09 01:02:37'),
(23,3,'De Música Ligera','Soda Stereo','Un clásico del rock en español. ¡Grande Cerati!','https://youtube.com/watch?v=demusicaligera',890,'2025-12-09 01:02:37'),
(24,1,'Monaco','Bad Bunny','Lo nuevo suena durísimo.','https://open.spotify.com/track/monaco789',500,'2025-12-09 01:02:37'),
(25,4,'Take Five','The Dave Brubeck Quartet','Para estudiar o relajarse, el mejor jazz.','https://open.spotify.com/track/takefive000',45,'2025-12-09 01:02:37'),
(26,3,'Smells Like Teen Spirit','Nirvana','La energía de esta canción es inigualable.','https://youtube.com/watch?v=hTWKbfoikeg',1200,'2025-12-09 01:02:37'),
(27,2,'Vampire','Olivia Rodrigo','La letra es muy profunda y la melodía pegajosa.','https://open.spotify.com/track/vampire101',210,'2025-12-09 01:02:37'),
(28,5,'LALA','Myke Towers','Perfecta para el fin de semana.','https://open.spotify.com/track/lala202',600,'2025-12-09 01:02:37'),
(29,1,'Starboy','The Weeknd','Esta canción nunca pasa de moda, el ritmo es increíble.','https://open.spotify.com/track/starboy123',150,'2025-12-09 01:04:43'),
(30,2,'Flowers','Miley Cyrus','Himno total, no puedo dejar de escucharla.','https://open.spotify.com/track/flowers456',342,'2025-12-09 01:04:43'),
(31,3,'De Música Ligera','Soda Stereo','Un clásico del rock en español. ¡Grande Cerati!','https://youtube.com/watch?v=demusicaligera',890,'2025-12-09 01:04:43'),
(32,1,'Monaco','Bad Bunny','Lo nuevo suena durísimo.','https://open.spotify.com/track/monaco789',500,'2025-12-09 01:04:43'),
(33,4,'Take Five','The Dave Brubeck Quartet','Para estudiar o relajarse, el mejor jazz.','https://open.spotify.com/track/takefive000',45,'2025-12-09 01:04:43'),
(34,3,'Smells Like Teen Spirit','Nirvana','La energía de esta canción es inigualable.','https://youtube.com/watch?v=hTWKbfoikeg',1200,'2025-12-09 01:04:43'),
(35,2,'Vampire','Olivia Rodrigo','La letra es muy profunda y la melodía pegajosa.','https://open.spotify.com/track/vampire101',210,'2025-12-09 01:04:43'),
(36,5,'LALA','Myke Towers','Perfecta para el fin de semana.','https://open.spotify.com/track/lala202',600,'2025-12-09 01:04:43'),
(37,32,'Payaso','Jose Jose','Dicen que soy un payaso...','https://www.youtube.com/watch?v=cJ7UQOjS6rs&list=RDcJ7UQOjS6rs&start_radio=1',742816,'2025-12-09 01:06:27');

DROP TABLE IF EXISTS `reviews`;
CREATE TABLE `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_album` int NOT NULL,
  `id_usuario` int NOT NULL,
  `estrellas` int DEFAULT NULL,
  `descripcion` varchar(300) DEFAULT NULL,
  `fecha_review` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `likes` int DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `id_album` (`id_album`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`id_album`) REFERENCES `albums` (`id`),
  CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `reviews_chk_1` CHECK (`estrellas` >= 1 AND `estrellas` <= 5)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `reviews` VALUES
(1,5,3,5,'La obra maestra del Grunge. Smells Like Teen Spirit cambió todo.','2025-11-23 19:47:24',0),
(2,7,5,5,'El mejor álbum del 2022, se siente la vibra del verano en cada track.','2025-11-23 19:47:24',0),
(3,17,1,5,'Producción impecable. Giorgio by Moroder es una joya.','2025-11-23 19:47:24',0),
(4,20,2,4,'Me encanta la estética del álbum, aunque prefiero sus trabajos anteriores.','2025-11-23 19:47:24',0),
(5,19,6,5,'Letras crudas y reales. El mejor rapero de habla hispana por mucho.','2025-11-23 19:47:24',1),
(6,12,4,4,'Una mezcla interesante de soul, funk y rap. Muy experimental.','2025-11-23 19:47:24',0),
(7,1,3,5,'Un clásico atemporal. El medley del lado B es insuperable.','2025-11-23 19:47:24',1),
(8,4,5,4,'Los corridos tumbados siguen evolucionando, buen disco de Junior.','2025-11-23 19:47:24',0),
(9,16,2,5,'Perfecto para dedicar. La voz de Luis Miguel es inigualable en los boleros.','2025-11-23 19:47:24',0),
(10,10,1,3,'Tiene canciones increíbles pero el álbum se siente demasiado largo y desordenado.','2025-11-23 19:47:24',0),
(11,14,6,5,'Una narrativa cinematográfica sobre Compton. Clásico instantáneo.','2025-11-23 19:47:24',0),
(12,1,6,4,'obra maestra','2025-11-25 17:26:44',1),
(13,12,6,5,'Otra joya de Tyler','2025-11-25 17:27:07',0),
(14,15,4,3,'cuando te veré otra vez..','2025-11-25 17:51:44',0),
(15,22,4,2,'ay','2025-11-25 18:15:36',3),
(16,20,6,2,'me gusto la pate en la que apareció Mohamed Salah','2025-11-25 22:09:57',3),
(17,23,6,5,'este disco está de pelos','2025-11-25 22:33:46',2),
(18,18,6,3,'me gusto','2025-11-26 01:21:27',1),
(19,16,14,4,'hey','2025-11-26 17:17:08',1),
(20,9,6,4,'Esta bueeno','2025-11-28 02:14:48',1),
(21,16,19,3,'esta bueno','2025-11-30 02:44:24',0),
(22,29,27,3,'la primera rola buenisma','2025-12-09 00:08:47',2),
(23,2,28,1,'no me gusto ZZZ','2025-12-09 00:10:59',2),
(24,29,29,5,'me gusta la banda y el fedelobo esta bien guapo','2025-12-09 00:26:49',1),
(25,20,30,3,'me encanto','2025-12-09 00:35:46',1),
(26,25,31,3,'El mejor album del babo','2025-12-09 00:55:57',1),
(27,4,32,3,'Quien le hizo tanto daño a Junior?','2025-12-09 00:57:10',1);

SET FOREIGN_KEY_CHECKS = 1;

