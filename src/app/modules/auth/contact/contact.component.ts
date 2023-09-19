import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  nameUser: string | undefined;
  mailUser: string | undefined;
  massage: string | undefined;


  constructor() { }

  ngOnInit() {
  }

}
