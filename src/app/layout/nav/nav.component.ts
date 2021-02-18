import { Component, OnInit } from '@angular/core';

export interface Person {
  name: string;
  blogurl: string;
  twitter: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  constructor() { }

  people: Person[] = [
    {name: 'Cody De Arkland', blogurl: 'https://www.thehumblelab.com', twitter: '@CodyDeArkland'},
    {name: 'Grant Orchard', blogurl: 'https://www.grantorchard.com', twitter: '@GrantOrchard'},
    {name: 'Jon Schulman', blogurl: 'http://www.vaficionado.com', twitter: '@vAficionado'},
    {name: 'Jad El-Zein', blogurl: 'https://www.virtualjad.com', twitter: '@virtualjad'},
    {name: 'Tony Reeves', blogurl: 'https://www.digitalvspace.com', twitter: '@importcarguy'},
    {name: 'Al Rasheed', blogurl: 'https://alarasheedblog.wordpress.com/', twitter: '@al_rasheed'}
  ];

  ngOnInit(): void {
  }

}
