import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mi Perfil', url: '/perfil', icon: 'person' },
    { title: 'Recetas Guardadas', url: '/recetas', icon: 'bookmark' },
    { title: 'Mis recetas', url: '/mis', icon: 'restaurant' },
    { title: 'Planificacion Semanal', url: '/planificacion', icon: 'calendar' },
    { title: 'Pocket Community', url: '/pocket', icon: 'people' },
    { title: 'Inicio', url: '/inicio', icon: 'home' },
  ];

}
