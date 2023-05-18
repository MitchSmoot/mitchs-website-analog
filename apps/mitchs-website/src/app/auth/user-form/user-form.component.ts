import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'user-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  constructor(private authService: AuthService) {}

  userSignedin = false
  userForm = new FormGroup({
    email: new FormControl<string>(''),
    name: new FormControl<string>(''),
    password: new FormControl<string>(''),
    passworConfirmation: new FormControl<string>('')
    })

  ngOnInit() {
    if (this.authService.currentUser !== undefined) {
      this.userSignedin = true
    }
  }

}
