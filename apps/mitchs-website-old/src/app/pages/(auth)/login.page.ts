import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { UserFormComponent } from "./user-form.component";

@Component({
  selector: 'mitchs-login-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserFormComponent],
  template: `<mitchs-user-form/>`,
  
})
export default class LoginPageComponent {}