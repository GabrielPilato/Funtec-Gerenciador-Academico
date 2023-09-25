import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from './professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private baseURL = "http://localhost:8080/api/professores";

  constructor(private HttpClient: HttpClient) { }

  getProfessoresList(): Observable<Professor[]> {
    return this.HttpClient.get<Professor[]>(`${this.baseURL}`);
  }

  createProfessor(professor: Professor): Observable<Object> {
    return this.HttpClient.post(`${this.baseURL}`, professor);
  }

  getProfessorbyId(id: number): Observable<Professor> {
    return this.HttpClient.get<Professor>(`${this.baseURL}/${id}`);
  }

  updateProfessor(id: number, professor: Professor): Observable<Object> {
    return this.HttpClient.put(`${this.baseURL}/${id}`, professor);
  }

  deleteProfessor(id: number): Observable<Object> {
    return this.HttpClient.delete(`${this.baseURL}/${id}`);
  }
}
