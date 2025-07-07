// src/app/pages/admin-management/admin-management.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type AdminTab = 'users' | 'roles';

@Component({
  selector: 'app-admin-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-management.html',
})
export class AdminManagementComponent {
  activeTab: AdminTab = 'users';

  // Variables pour les modales
  isUserModalOpen = false;
  isRoleModalOpen = false;

  // Méthode pour changer l'onglet
  selectTab(tab: AdminTab): void {
    this.activeTab = tab;
  }

  // Méthodes pour gérer les modales
  openModal(type: 'user' | 'role'): void {
    if (type === 'user') this.isUserModalOpen = true;
    if (type === 'role') this.isRoleModalOpen = true;
  }

  closeModals(): void {
    this.isUserModalOpen = false;
    this.isRoleModalOpen = false;
  }
}
