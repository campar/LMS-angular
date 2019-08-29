import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teaching-material',
  templateUrl: './teaching-material.component.html',
  styleUrls: ['./teaching-material.component.scss']
})
export class TeachingMaterialComponent implements OnInit {

  constructor() { }

  nodes = [
    {
      id: 1,
      name: 'Gradivo za I kolokvijum',
      children: [
        { id: 2, name: '01_Uvod u predmet.pdf' },
        { id: 3, name: '02_ Principi kriptologije.pdf' }
      ]
    },
    {
      id: 4,
      name: 'Gradivo za II kolokvijum Folder',
      children: [
        { id: 5, name: '06a_Simetricni blokovski sifarski sistemi DES.pdf' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];
  options = {};

  ngOnInit() {
  }
}
