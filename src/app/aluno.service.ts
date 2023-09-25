import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Aluno } from './aluno';


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private baseURL = "http://localhost:8080/api/alunos";

  constructor(private HttpClient: HttpClient) { }

  getAlunosList(): Observable<Aluno[]> {
    return this.HttpClient.get<Aluno[]>(`${this.baseURL}`);
  }

  createAluno(aluno: Aluno): Observable<Object> {
    return this.HttpClient.post(`${this.baseURL}`, aluno);
  }

  getAlunobyId(id: number): Observable<Aluno> {
    return this.HttpClient.get<Aluno>(`${this.baseURL}/${id}`);
  }

  updateAluno(id: number, aluno: Aluno): Observable<Object> {
    return this.HttpClient.put(`${this.baseURL}/${id}`, aluno);
  }

  deleteAluno(id: number): Observable<Object> {
    return this.HttpClient.delete(`${this.baseURL}/${id}`);
  }



}
