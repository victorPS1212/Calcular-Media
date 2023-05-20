import { Component } from '@angular/core';

interface Aluno {
  nota1: number;
  nota2: number;
  nota3: number;
  nota4: number;
  reprovado: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alunos: Aluno[] = [
    { nota1: 0, nota2: 0, nota3: 0, nota4: 0, reprovado: false },
  ];

  media: number | null = null;

  calcularMedia() {
    let soma = 0;

    for (let aluno of this.alunos) {
      const mediaAluno = (aluno.nota1 + aluno.nota2 + aluno.nota3 + aluno.nota4) / 4;
      aluno.reprovado = mediaAluno < 7;
      soma += mediaAluno;
    }
    this.media = soma / this.alunos.length;
  }
}