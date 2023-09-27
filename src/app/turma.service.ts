import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Turma } from './turma';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  private baseURL = "http://localhost:8080/api/turmas";

  constructor(private httpClient: HttpClient) { }

  getTurmaList(): Observable<Turma[]> {
    return this.httpClient.get<Turma[]>(`${this.baseURL}`);
  }

  createTurma(idCurso: number, idProfessor: number, turma: Turma): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/${idCurso}/${idProfessor}`, turma);
  }

  getTurmaById(id: number): Observable<Turma> {
    return this.httpClient.get<Turma>(`${this.baseURL}/${id}`);
  }

  updateCurso(id: number, turma: Turma): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, turma);
  }

  deleteCurso(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
