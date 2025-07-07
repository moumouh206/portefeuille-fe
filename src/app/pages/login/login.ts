import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <--- Importer RouterLink

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {}
