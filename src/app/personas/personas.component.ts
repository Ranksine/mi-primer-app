import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: "./personas.component.html",
    styleUrls: ['./personas.component.css'],
    // styles: [`
    //     h1{
    //         color: red;
    //     }
    // `]
})
export class PersonasComponent{
    deshabilitar = false;
    mensaje = 'No se ha agregado ninguna persona mijito';
    titulo = 'Ingenierito';

    agregarPersona(){
    this.mensaje = 'Persona agregada, yupi!';
    }

    // Metodo de event binding 
    // modificarTitulo(event: Event){
    //     console.log('Entrando a metodo ModificarTitulo');
    //     this.titulo = (<HTMLInputElement>event.target).value;
    // }
}