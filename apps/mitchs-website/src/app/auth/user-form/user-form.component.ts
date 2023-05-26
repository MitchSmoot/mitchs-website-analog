import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  constructor(private authService: AuthService) {}

  authLoading = this.authService.isLoading
  userSignedIn = false
  userForm = new FormGroup({
    email: new FormControl<string>(''),
    name: new FormControl<string>(''),
    password: new FormControl<string>(''),
    passworConfirmation: new FormControl<string>('')
    })

  ngOnInit() {
    if (this.authService.currentUser !== undefined) {
      this.userSignedIn = true
    }
  }

  onSubmit() {
    console.log(this.userForm.value.email, this.userForm.value.password)
    if (this.userForm.value.email && this.userForm.value.password) {

      this.authService.userSignIn(this.userForm.value.email, this.userForm.value.password)
    }
  }

}
