// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { MainLayoutComponent } from './layouts/main-layout/main-layout';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { ClientListComponent } from './pages/client-list/client-list';
import { ClientCreateComponent } from './pages/client-create/client-create';
import { ClientDetailsComponent } from './pages/client-details/client-details';
import { OperationListComponent } from './pages/operation-list/operation-list';
import { CaisseManagementComponent } from './pages/caisse-management/caisse-management';
import { AdminManagementComponent } from './pages/admin-management/admin-management';
import { StockManagementComponent } from './pages/stock-management/stock-management';
import { BatchProcessingComponent } from './pages/batch-processing/batch-processing';
import { WipComponent } from './pages/wip/wip';

export const routes: Routes = [
  // 1. La route pour le login est isolée.
  //    Elle n'est PAS la route par défaut.
  {
    path: 'login',
    component: LoginComponent,
  },

  // 2. Le MainLayout EST la route par défaut de l'application.
  //    Toutes les pages protégées sont ses enfants.
  {
    path: '', // <-- Le chemin racine !
    component: MainLayoutComponent,
    // canActivate: [authGuard], // <--- Dans le futur, vous ajouterez un garde ici
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'clients', component: ClientListComponent },
      { path: 'clients/nouveau', component: ClientCreateComponent },
      { path: 'clients/:id', component: ClientDetailsComponent },
      { path: 'operations-list', component: OperationListComponent },
      { path: 'caisse', component: CaisseManagementComponent },
      { path: 'admin', component: AdminManagementComponent },
      { path: 'stock', component: StockManagementComponent },
      { path: 'operations', component: BatchProcessingComponent },
      { path: 'wip', component: WipComponent },

      // Si un utilisateur arrive sur le chemin racine (''),
      // on le redirige vers le tableau de bord.
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },

  // 3. (Optionnel mais recommandé) Rediriger les routes inconnues vers le tableau de bord.
  //    Si vous préférez les rediriger vers la page de login, remplacez 'dashboard' par 'login'.
  { path: '**', redirectTo: 'dashboard' },
];
