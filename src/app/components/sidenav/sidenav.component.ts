import { style } from '@angular/animations';
import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  myDomeElem: any;

  constructor() { }

  ngOnInit(): void {
  }

  isShowDiv: boolean = true;


  show() {
    this.isShowDiv = !this.isShowDiv
  }

}
