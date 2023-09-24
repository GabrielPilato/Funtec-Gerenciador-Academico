import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from './professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private baseURL = "http://localhost:8080/api/professores";

  constructor(private HttpCliente: HttpClient) { }

  getProfessoresList(): Observable<Professor[]> {
    return this.HttpCliente.get<Professor[]>(`${this.baseURL}`);
  }

  createProfessor(professor: Professor): Observable<Object> {
    return this.HttpCliente.post(`${this.baseURL}`, professor);
  }

  getProfessorbyId(id: number): Observable<Professor> {
    return this.HttpCliente.get<Professor>(`${this.baseURL}/${id}`);
  }

  updateProfessor(id: number, professor: Professor): Observable<Object> {
    return this.HttpCliente.put(`${this.baseURL}/${id}`, professor);
  }

  deleteProfessor(id: number): Observable<Object> {
    return this.HttpCliente.delete(`${this.baseURL}/${id}`);
  }
}
