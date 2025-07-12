// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes'; // Assurez-vous que le chemin est correct

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],
  // Vous pouvez ajouter d'autres configurations ici si nécessaire
};
