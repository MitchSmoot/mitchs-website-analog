import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';

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

  ngOnInit() {
    if (this.authService.currentUser !== undefined) {
      this.userSignedin = true
    }
  }

}
