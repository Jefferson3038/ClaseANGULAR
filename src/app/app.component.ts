import { Component, OnInit } from '@angular/core';
interface Usuarios{
  titulo:string;
  subtitulo:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public users: Usuarios[]=[];

  ngOnInit(): void{
    this.users=[
      {titulo:"Jose Perez",subtitulo:"Lo mas duro"},
      {titulo:"Jose Perez",subtitulo:"Lo mas duro"},
      {titulo:"Jose Perez",subtitulo:"Lo mas duro"},
    ]
  }
}