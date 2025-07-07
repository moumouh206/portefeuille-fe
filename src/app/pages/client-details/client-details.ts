// src/app/pages/client-details/client-details.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

type Tab = 'info' | 'history' | 'checkbooks' | 'actions';

@Component({
  selector: 'app-client-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './client-details.html',
})
export class ClientDetailsComponent {
  activeTab: Tab = 'info';

  // Variables de contrôle pour les modales
  isBlockModalOpen = false;
  isOpposeModalOpen = false;
  isRemiseModalOpen = false;

  // Méthode pour changer l'onglet actif
  selectTab(tab: Tab): void {
    this.activeTab = tab;
  }

  // Méthodes pour ouvrir et fermer les modales
  openModal(modalName: 'block' | 'oppose' | 'remise'): void {
    if (modalName === 'block') this.isBlockModalOpen = true;
    if (modalName === 'oppose') this.isOpposeModalOpen = true;
    if (modalName === 'remise') this.isRemiseModalOpen = true;
  }

  closeModals(): void {
    this.isBlockModalOpen = false;
    this.isOpposeModalOpen = false;
    this.isRemiseModalOpen = false;
  }
}
