import { Component } from '@angular/core';
import { Hero } from './hero';
import { LittleTourComponent } from './little-tour.component';
import { HeroFormComponent } from './hero-form.component';

@Component({
    selector: 'my-app',
    template: `
    <hero-form></hero-form>
    `
})
export class AppComponent {
  
}
