import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public title:string="Usuario"
  public subtitle:string="Soy Fulano y quiero ser tu amigo"
  public imageUsuario:string="https://www.marismith.com/wp-content/uploads/2014/07/facebook-profile-blank-face-600x450.jpeg"
  constructor() { }

  ngOnInit(): void {
  }

}
