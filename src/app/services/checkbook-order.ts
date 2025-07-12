import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// Définir une URL de base pour l'API
const API_BASE_URL = 'http://localhost:8083/api';

@Injectable({
  providedIn: 'root',
})
export class CheckbookOrderService {
  constructor(private http: HttpClient) {}

  // --- Commandes ---

  // POST /api/commandes
  createCommande(request: {
    idUser: number;
    idPosteComptable: number;
  }): Observable<any> {
    return this.http.post(`${API_BASE_URL}/commandes`, request);
  }

  // GET /api/commandes/search-filtre
  getCommandes(
    idPosteComptable: number,
    codeCommande?: string,
    statut?: string
  ): Observable<any[]> {
    let params = new HttpParams().set(
      'idPosteComptable',
      idPosteComptable.toString()
    );
    if (codeCommande) {
      params = params.set('codeCommande', codeCommande);
    }
    if (statut) {
      params = params.set('statut', statut);
    }
    return this.http.get<any[]>(`${API_BASE_URL}/commandes/search-filtre`, {
      params,
    });
  }

  // PUT /api/commandes/changer-statut
  changeStatusCommande(
    idCommande: number,
    nouveauStatut: string,
    idUser: number,
    motif?: string
  ): Observable<any> {
    const dateStatut = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD
    let params = new HttpParams()
      .set('idCommande', idCommande.toString())
      .set('nouveauStatut', nouveauStatut)
      .set('idUser', idUser.toString())
      .set('dateStatut', dateStatut);

    if (motif) {
      params = params.set('motif', motif);
    }
    return this.http.put(`${API_BASE_URL}/commandes/changer-statut`, null, {
      params,
    });
  }

  // --- Détails de Commande ---

  // GET /api/detail-commandes/by-commande/{idCommande}
  getCommandeDetails(idCommande: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${API_BASE_URL}/detail-commandes/by-commande/${idCommande}`
    );
  }

  // POST /api/detail-commandes/add
  addCommandeDetail(request: {
    idCompte: number;
    nbrCarnet: number;
    dateDemande: string;
    idCommande: number;
    idUser: number;
  }): Observable<any> {
    return this.http.post(`${API_BASE_URL}/detail-commandes/add`, request);
  }

  // PUT /api/detail-commandes/update/{idDetail}
  updateCommandeDetail(
    idDetail: number,
    request: {
      idCompte: number;
      nbrCarnet: number;
      dateDemande: string;
      idCommande: number;
      idUser: number;
    }
  ): Observable<any> {
    return this.http.put(
      `${API_BASE_URL}/detail-commandes/update/${idDetail}`,
      request
    );
  }

  // DELETE /api/detail-commandes/delete/{idDetail}
  deleteCommandeDetail(idDetail: number): Observable<any> {
    return this.http.delete(
      `${API_BASE_URL}/detail-commandes/delete/${idDetail}`
    );
  }
}
