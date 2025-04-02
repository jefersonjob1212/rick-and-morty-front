import { Component, OnInit } from '@angular/core';
import { PersonagemService } from '../../services/personagem.service';
import { Personagem } from '../../models/personagem';
import { Result } from '../../models/result';
import { PersonagemFiltro } from '../../models/personagem-filtro';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personagens-page',
  templateUrl: './personagens-page.component.html',
  styleUrl: './personagens-page.component.css'
})
export class PersonagensPageComponent implements OnInit {

  personagens: Personagem[] = [];
  prev?: string;
  next?: string;
  totalPages: number = 0;
  nome: string = '';
  genero: string = '';
  status: string = '';
  existeRegistro: boolean = true;
  filter!: FormGroup;

  constructor(
    private personagemService: PersonagemService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.filter = this.formBuilder.group({
      nome: [''],
      genero: [''],
      status: ['']
    });

    this.firstPage();
  }

  prevPage(): void {
    this.personagemService.prev(this.prev!).subscribe((response: Result) => {
      this.personagens = response.results;
      this.prev = response.info.prev;
      this.next = response.info.next;
    });
  }

  nextPage(): void {
    this.personagemService.next(this.next!).subscribe((response: Result) => {
      this.personagens = response.results;
      this.prev = response.info.prev;
      this.next = response.info.next;
    });
  }

  firstPage(): void {
    const filter: PersonagemFiltro = this.filter?.getRawValue();
    if (!filter.nome && !filter.genero && !filter.status) {
      this.personagemService.getAll().subscribe((response: Result) => {
        this.personagens = response.results;
        this.prev = response.info.prev;
        this.next = response.info.next;
        this.totalPages = response.info.pages;
      });
    } else {
      this.filtrar();
    }
  }

  lastPage(): void {
    const filter: PersonagemFiltro = this.filter.getRawValue();
    if (!filter.nome && !filter.genero && !filter.status) {
      this.personagemService.getAll(this.totalPages).subscribe((response: Result) => {
        this.personagens = response.results;
        this.prev = response.info.prev;
        this.next = response.info.next;
      });
    } else {
      this.filtrar(true);
    }
  }

  filtrar(ultimaPagina: boolean = false): void {
    // const filtro: PersonagemFiltro = {
    //   nome: this.nome,
    //   genero: this.genero,
    //   status: this.status
    // };
    //  
    // {
    //   nome: 'Rick',
    //   genero: 'male',
    //   status: ''
    // }
    const filtro: PersonagemFiltro = this.filter.getRawValue();
    if(ultimaPagina) {
      filtro.pagina = this.totalPages;
    }
    this.personagemService.filter(filtro).subscribe({
      next: (response: Result) => {
        this.personagens = response.results;
        this.prev = response.info.prev;
        this.next = response.info.next;
        this.totalPages = response.info.pages;
        this.existeRegistro = true;
      },
      error: () => {
        this.existeRegistro = false;
      }
    });
  }
}
