// src/app/pages/checkbook-orders/checkbook-orders.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckbookOrderService } from '../../services/checkbook-order'; // <--- Importer le service

@Component({
  selector: 'app-checkbook-orders',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkbook-orders.html',
})
export class CheckbookOrdersComponent implements OnInit {
  commandes: any[] = [];
  selectedCommande: any | null = null;

  isDetailModalOpen = false;
  isStatusModalOpen = false;

  // Modèle pour les formulaires des modales
  currentDetail = { idCompte: null, nbrCarnet: 1 };
  currentStatus = { nouveauStatut: 'VALIDEE', motif: '' };

  // Injecter le service
  constructor(private orderService: CheckbookOrderService) {}

  ngOnInit(): void {
    this.loadCommandes();
  }

  loadCommandes(): void {
    // Simuler un idPosteComptable, en production il viendrait de l'utilisateur connecté
    const idPosteComptable = 1;
    this.orderService.getCommandes(idPosteComptable).subscribe((data) => {
      this.commandes = data;
    });
  }

  selectCommande(commande: any): void {
    this.selectedCommande = commande;
    this.orderService
      .getCommandeDetails(commande.idCommande)
      .subscribe((details) => {
        this.selectedCommande.details = details;
      });
  }

  // --- Actions API ---
  createCommande(): void {
    // Simuler des IDs, en production ils viendraient de l'utilisateur/contexte
    const request = { idUser: 1, idPosteComptable: 1 };
    this.orderService.createCommande(request).subscribe(() => {
      alert('Nouvelle commande créée avec succès !');
      this.loadCommandes(); // Recharger la liste
    });
  }

  saveDetail(): void {
    const idUser = 1; // Simulé
    if (typeof this.currentDetail.idCompte !== 'number' || isNaN(this.currentDetail.idCompte)) {
      alert('Veuillez sélectionner un compte valide.');
      return;
    }
    const request = {
      ...this.currentDetail,
      idCompte: Number(this.currentDetail.idCompte),
      dateDemande: new Date().toISOString().split('T')[0],
      idCommande: this.selectedCommande.idCommande,
      idUser: idUser,
    };
    // Note: Il faudrait une logique pour différencier la création de la mise à jour
    this.orderService.addCommandeDetail(request).subscribe(() => {
      alert('Détail enregistré !');
      this.selectCommande(this.selectedCommande); // Recharger les détails
      this.closeModals();
    });
  }

  deleteDetail(idDetail: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce détail ?')) {
      this.orderService.deleteCommandeDetail(idDetail).subscribe(() => {
        alert(`Détail ${idDetail} supprimé.`);
        this.selectCommande(this.selectedCommande); // Recharger les détails
      });
    }
  }

  saveStatus(): void {
    const idUser = 1; // Simulé
    this.orderService
      .changeStatusCommande(
        this.selectedCommande.idCommande,
        this.currentStatus.nouveauStatut,
        idUser,
        this.currentStatus.motif
      )
      .subscribe(
        (response) => {
          alert('Statut changé avec succès !');
          this.loadCommandes(); // Recharger la liste principale
          this.closeModals();
        },
        (error) => {
          alert(
            `Erreur: ${
              error.error.message || 'Impossible de changer le statut'
            }`
          );
        }
      );
  }

  // --- Gestion des Modales ---
  openModal(type: 'detail' | 'status', detailData: any = null): void {
    if (type === 'detail') {
      // Si on modifie un détail, on pré-remplit le formulaire
      this.currentDetail = detailData
        ? { ...detailData }
        : { idCompte: null, nbrCarnet: 1 };
      this.isDetailModalOpen = true;
    }
    if (type === 'status') {
      this.isStatusModalOpen = true;
    }
  }

  closeModals(): void {
    this.isDetailModalOpen = false;
    this.isStatusModalOpen = false;
  }
}
