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
  currentUser = {}
  signUp = false
  userForm = new FormGroup({
    email: new FormControl<string>(''),
    name: new FormControl<string>(''),
    password: new FormControl<string>(''),
    passwordConfirmation: new FormControl<string>('')
    })

  ngOnInit() {
     this.currentUser = this.authService.currentUser;
  }

  onSubmit() {
    console.log(this.userForm.value)
    if (!this.signUp) {

      this.authService.userSignIn(this.userForm.value.email, this.userForm.value.password)
    } else {
      this.authService.userSignUp(this.userForm.value.email, this.userForm.value.password, this.userForm.value.name)
    }
  }

  toggleButtonClicked() {
    this.signUp = !this.signUp
    this.userForm.reset()
  }

  signOutButtonClicked() {
    this.authService.signOut()
  }

}
