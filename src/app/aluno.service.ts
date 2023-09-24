import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Aluno } from './aluno';


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private baseURL = "http://localhost:8080/api/alunos";

  constructor(private HttpCliente: HttpClient) { }

  getAlunosList(): Observable<Aluno[]> {
    return this.HttpCliente.get<Aluno[]>(`${this.baseURL}`);
  }

  createAluno(aluno: Aluno): Observable<Object> {
    return this.HttpCliente.post(`${this.baseURL}`, aluno);
  }

  getAlunobyId(id: number): Observable<Aluno> {
    return this.HttpCliente.get<Aluno>(`${this.baseURL}/${id}`);
  }

  updateAluno(id: number, aluno: Aluno): Observable<Object> {
    return this.HttpCliente.put(`${this.baseURL}/${id}`, aluno);
  }

  deleteAluno(id: number): Observable<Object> {
    return this.HttpCliente.delete(`${this.baseURL}/${id}`);
  }



}
