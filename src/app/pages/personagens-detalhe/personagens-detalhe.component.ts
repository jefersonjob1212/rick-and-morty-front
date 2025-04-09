import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonagemService } from '../../services/personagem.service';
import { Personagem } from '../../models/personagem';

@Component({
  selector: 'app-personagens-detalhe',
  templateUrl: './personagens-detalhe.component.html',
  styleUrl: './personagens-detalhe.component.css'
})
export class PersonagensDetalheComponent implements OnInit {

  private idPersonagem!: number;
  public personagem!: Personagem;

  constructor(
    private activatedRoute: ActivatedRoute,
    private personagemService: PersonagemService
  ) {}

  ngOnInit(): void {
    this.idPersonagem = this.activatedRoute.snapshot.params['id'];
    this.personagemService.getById(this.idPersonagem).subscribe(response => this.personagem = response);
  }

}
