import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  templateUrl: './log-in.html',
  styleUrls: ['./log-in.scss'],
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule]
})
export class LogIn {

  username: string = "";
  contrasena: string = "";
  errorMsg: string = "";

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    if (!this.username || !this.contrasena) {
      this.errorMsg = "Todos los campos son obligatorios.";
      return;
    }

    this.http.post("http://localhost:3000/login", {
      username: this.username,
      contrasena: this.contrasena
    }).subscribe({
      next: (res: any) => {
        if (res.success) {
          localStorage.setItem("user", JSON.stringify(res.user));
          this.router.navigate(['/home']);
        } else {
          this.errorMsg = "Usuario o contraseña incorrectos.";
        }
      },
      error: () => {
        this.errorMsg = "Error con el servidor.";
      }
    });
  }
}
