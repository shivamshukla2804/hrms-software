import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  tags1=['Designs','Scope of work','WireFrame','RoadMap',];
  tags2=['Project Plan','User stories','project App Links','Other'];
  constructor() { }

  ngOnInit(): void {
  }

}
