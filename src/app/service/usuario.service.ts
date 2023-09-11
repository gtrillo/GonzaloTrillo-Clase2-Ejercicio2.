import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private auth: Auth) { }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Inicio de sesión exitoso
        const user = userCredential.user;
        // Hacer algo con el usuario
        return user;
      })
      .catch((error) => {
        // Manejar errores de inicio de sesión
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error: ${errorCode} - ${errorMessage}`);
        // Puedes lanzar una excepción personalizada aquí si lo deseas
        throw error;
      });
  }
}
