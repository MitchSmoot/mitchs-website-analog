import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'mitchs-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  constructor(private authService: AuthService) {}

  authLoading = this.authService.isLoading
  currentUser: any
  signUpMode = false
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
    if(this.userForm.value.email && this.userForm.value.password)
    if (!this.signUpMode) {
      this.authService.userSignIn(this.userForm.value.email, this.userForm.value.password)
    } else {
      if (this.userForm.value.name) {
        this.authService.userSignUp(this.userForm.value.email, this.userForm.value.password, this.userForm.value.name)
      }
    }
  }

  toggleButtonClicked() {
    this.signUpMode = !this.signUpMode
    this.userForm.reset()
  }

  signOutButtonClicked() {
    this.authService.signOut()
  }

}
