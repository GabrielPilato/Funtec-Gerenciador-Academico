import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private baseURL = "http://localhost:8080/api/cursos";

  constructor(private httpClient: HttpClient) { }

  getCursosList(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(`${this.baseURL}`);
  }

  createCurso(curso: Curso): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, curso);
  }

  getCursoById(id: number): Observable<Curso> {
    return this.httpClient.get<Curso>(`${this.baseURL}/${id}`);
  }

  updateCurso(id: number, curso: Curso): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, curso);
  }

  deleteCurso(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
