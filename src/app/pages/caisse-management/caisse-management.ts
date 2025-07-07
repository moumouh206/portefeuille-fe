// src/app/pages/caisse-management/caisse-management.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importer CommonModule pour *ngIf

@Component({
  selector: 'app-caisse-management',
  standalone: true,
  imports: [CommonModule], // Ajouter CommonModule
  templateUrl: './caisse-management.html',
  styleUrl: './caisse-management.css',
})
export class CaisseManagementComponent {
  // Variable pour contrôler l'affichage de la modale de clôture
  isCloseModalOpen = false;

  // Méthode pour ouvrir la modale
  openCloseModal(): void {
    this.isCloseModalOpen = true;
  }

  // Méthode pour fermer la modale
  closeCloseModal(): void {
    this.isCloseModalOpen = false;
  }
}
