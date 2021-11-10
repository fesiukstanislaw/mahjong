import {Component, OnInit} from '@angular/core';
import {state, style, transition, trigger, animate} from "@angular/animations";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('expandedPanel', [
      state('clicked', style({ boxShadow: '0 0 5px rgb(12, 136, 243, 0.5)' })),
      transition('initial <=> expanded', animate('0.8s')),
    ]),
    trigger('fade', [
      state('false', style({ color: 'black' })),
      state('true', style({ color: 'transparent' })),
      transition('false => true', animate('4000ms ease-in'))
    ]),

  ],
})
export class CardComponent implements OnInit {
  cards: number[] = [];

  prevValue = [];

  isExpanded: boolean = false
  state: string[] = ['initial']

  public fadeIn = false;

  constructor() { }

  ngOnInit(): void {
    for ( let i = 0; i < 15; i++){

      let a;

      do{
        a = this.generateNumber();
      }
      while (this.cards.indexOf(a) !== -1);

      this.cards.push(a);
    }
    this.shuffleAndSum(this.cards);
  }

  expand(index:any) {
    this.state[index] = 'clicked';
  }

  shuffleAndSum(arr: number[]){
    this.cards.push.apply(arr, arr);
  }

  generateNumber(){
    return Math.floor(Math.random() * 39);
  }

  click(event: any){ //Тут повина була бути логіка відгадування карток
    let clickValue = event.target.innerText;
    if(clickValue == this.prevValue){ //
    let classCheck = event.target.classList;
      classCheck.add('clicked');
      let  al = setTimeout(function(){
        classCheck.add('clicked');
      },1500);
    }
    this.prevValue = event;
    let classCheck = event.target.classList;
    let  al = setTimeout(function(){
      classCheck.add('clicked');
    },250);
  }

  ngAfterViewInit() {
    this.fadeIn = true;
  }

}
