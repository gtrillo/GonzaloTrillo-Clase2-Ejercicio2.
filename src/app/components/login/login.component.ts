import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuario: string = '';
  contrasena: string = '';

  constructor(private user: UsuarioService, private router: Router) {}

  ingresar() {
    const credentials = { email: this.usuario, password: this.contrasena };
    
    this.user.login(credentials)
      .then(response => {
        console.log('Inicio de sesión exitoso:', response);
        this.router.navigate(['/bienvenido']);
      })
      .catch(error => {
        console.log('Error en el inicio de sesión:', error);
        console.log(this.usuario);
        console.log(this.contrasena);
        // Aquí puedes manejar el error, mostrar mensajes de error, etc.
      });
  }
}
