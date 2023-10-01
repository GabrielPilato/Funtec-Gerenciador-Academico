import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chamada } from './chamada';
import { ChamadaId } from './chamadaId';

@Injectable({
  providedIn: 'root'
})
export class ChamadaService {

  private baseURL = "http://localhost:8080/api/chamadas";

  constructor(private httpClient: HttpClient) { }

  getChamadaList(): Observable<Chamada[]> {
    return this.httpClient.get<Chamada[]>(`${this.baseURL}`);
  }

  getChamadaListCadastrados(): Observable<Chamada[]> {
    return this.httpClient.get<Chamada[]>(`${this.baseURL}/cadastrados`);
  }

  getChamadaListCadastradosByTurma(idTurma: number): Observable<Chamada[]> {
    return this.httpClient.get<Chamada[]>(`${this.baseURL}/${idTurma}/cadastrados`);
  }

  createListaChamada(idTurma: number, dt_chamada: Date, idAluno: number[], chamadaBody: Chamada[]) {
    return this.httpClient.post(`${this.baseURL}/${idTurma}/${dt_chamada}/?idAlunos=${idAluno}`, chamadaBody);
  }

  createChamada(idTurma: number, idAluno: number, dt_chamada: Date, chamada: Chamada): Observable<Object> {
    console.log(this.baseURL + "/" + idTurma + "/" + idAluno + "/" + dt_chamada);
    return this.httpClient.post(`${this.baseURL}/${idTurma}/${idAluno}/${dt_chamada}`, chamada);
  }

  getChamadaById(id: ChamadaId): Observable<Chamada> {
    return this.httpClient.get<Chamada>(`${this.baseURL}/${id.turmaId}/${id.alunoId}/${id.dt_chamada}`);
  }

  updateChamada(id: string, chamada: Chamada): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, chamada);
  }

  deleteChamada(id: string): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
