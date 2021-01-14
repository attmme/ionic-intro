import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() { }

  arrayContingut = [
    {
      nom: 'Katy',
      data: '25/04/2019 15:26',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum dolores culpa est, accusantium, praesentium vel recusandae cupiditate rem, quibusdam nobis provident.'
    }, {
      nom: 'Salomon',
      data: '25/04/2019 17:26',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum dolores culpa est, accusantium, praesentium vel recusandae cupiditate rem, quibusdam nobis provident.'
    }, {
      nom: 'Bondary',
      data: '26/04/2019 16:26',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum dolores culpa est, accusantium, praesentium vel recusandae cupiditate rem, quibusdam nobis provident.'
    }

  ];




}
