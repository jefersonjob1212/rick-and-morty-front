import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Personagem } from '../../models/personagem';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css'
})
export class TabelaComponent implements OnChanges {

  @Input() public personagens: Personagem[] = [];
  @Input() public prev?: string;
  @Input() public next?: string;

  @Output() public onFirstPage: EventEmitter<void> = new EventEmitter<void>();
  @Output() public onPrevPage: EventEmitter<void> = new EventEmitter<void>();
  @Output() public onNextPage: EventEmitter<void> = new EventEmitter<void>();
  @Output() public onLastPage: EventEmitter<void> = new EventEmitter<void>();
  @Output() public onVisualize: EventEmitter<Personagem> = new EventEmitter<Personagem>();

  existeRegistro: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['personagens'].currentValue) {
     this.existeRegistro = this.personagens.length > 0; 
    }
  }

  firstPage(): void {
    this.onFirstPage.next();
  }

  prevPage(): void {
    this.onPrevPage.next();
  }

  nextPage(): void {
    this.onNextPage.next();
  }

  lastPage(): void {
    this.onLastPage.next();
  }

  visualizarPersonagem(personagem: Personagem): void {
    this.onVisualize.next(personagem);
  }

}
