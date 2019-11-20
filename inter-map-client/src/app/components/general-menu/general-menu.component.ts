import {Component, HostListener, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-general-menu',
  templateUrl: './general-menu.component.html',
  styleUrls: ['./general-menu.component.css']
})

export class GeneralMenuComponent implements OnInit {

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event) {
    console.log('Scroll Event');
  }


}
