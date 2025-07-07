// src/app/pages/batch-processing/batch-processing.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importer FormsModule pour ngModel

type BatchTab = 'manualEntry' | 'telecompensation' | 'transfers';
type OperationType = 'payment' | 'certification' | 'general'; // Types pour le formulaire

@Component({
  selector: 'app-batch-processing',
  standalone: true,
  imports: [CommonModule, FormsModule], // Ajouter FormsModule
  templateUrl: './batch-processing.html',
  styleUrl: './batch-processing.css',
})
export class BatchProcessingComponent {
  activeTab: BatchTab = 'manualEntry';
  selectedOperationType: OperationType = 'payment'; // Pour le formulaire dynamique

  selectTab(tab: BatchTab): void {
    this.activeTab = tab;
  }
}
