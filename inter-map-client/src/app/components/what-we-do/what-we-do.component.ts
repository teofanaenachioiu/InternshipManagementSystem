import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css']
})
export class WhatWeDoComponent implements OnInit {

  items: any;
  constructor() { }

  ngOnInit() {
    this.items = [
      {title: 'What we offer', icon: 'assets/img/first-list-icon.png', icontext: 'assets/img/right-side-image_1.jpg',tag: '#what-we-offer', text: 'Lomo austin health goth meditation quinoa, banh mi pork belly man bun hella ugh migascardigan gluten-free. Gochujang dreamcatcher tofu brunch banjo. VHS austin cardigan squid poke tumeric humblebrag next level everyday carry biodiesel put a bird on it raw denim. Fanny pack aesthetic kinfolk twee succulents roof party wayfarers meggings ugh tumblr shaman kale chips green. Before they sold out live-edge kinfolk man bun pop-up scenester ramps taiyaki tacos raclette mixtape la croix post-ironic leggings. Twee typewriter taxidermy, woke farm-to-table hell of cliche celiac meggings.'},
      {title: 'For students', icon: 'assets/img/second-list-icon.png', icontext: 'assets/img/right-side-image_2.jpg', tag: '#for-students', text: 'Lomo austin health goth meditation quinoa, banh mi pork belly man bun hella ugh migascardigan gluten-free. Gochujang dreamcatcher tofu brunch banjo. VHS austin cardigan squid poke tumeric humblebrag next level everyday carry biodiesel put a bird on it raw denim. Fanny pack aesthetic kinfolk twee succulents roof party wayfarers meggings ugh tumblr shaman kale chips green. Before they sold out live-edge kinfolk man bun pop-up scenester ramps taiyaki tacos raclette mixtape la croix post-ironic leggings. Twee typewriter taxidermy, woke farm-to-table hell of cliche celiac meggings.'},
      {title: 'For companies', icon: 'assets/img/third-list-icon.png', icontext: 'assets/img/right-side-image_3.jpg',tag: '#for-companies', text: 'Lomo austin health goth meditation quinoa, banh mi pork belly man bun hella ugh migascardigan gluten-free. Gochujang dreamcatcher tofu brunch banjo. VHS austin cardigan squid poke tumeric humblebrag next level everyday carry biodiesel put a bird on it raw denim. Fanny pack aesthetic kinfolk twee succulents roof party wayfarers meggings ugh tumblr shaman kale chips green. Before they sold out live-edge kinfolk man bun pop-up scenester ramps taiyaki tacos raclette mixtape la croix post-ironic leggings. Twee typewriter taxidermy, woke farm-to-table hell of cliche celiac meggings.'},
      {title: 'About CV', icon: 'assets/img/fourth-list-icon.png', icontext: 'assets/img/right-side-image_4.jpg',tag: '#about-cv', text: 'Lomo austin health goth meditation quinoa, banh mi pork belly man bun hella ugh migascardigan gluten-free. Gochujang dreamcatcher tofu brunch banjo. VHS austin cardigan squid poke tumeric humblebrag next level everyday carry biodiesel put a bird on it raw denim. Fanny pack aesthetic kinfolk twee succulents roof party wayfarers meggings ugh tumblr shaman kale chips green. Before they sold out live-edge kinfolk man bun pop-up scenester ramps taiyaki tacos raclette mixtape la croix post-ironic leggings. Twee typewriter taxidermy, woke farm-to-table hell of cliche celiac meggings.'},
      {title: 'Photos', icon: 'assets/img/fivth-list-icon.png', icontext: 'assets/img/right-side-image_5.jpg',tag: '#photos', text: 'Lomo austin health goth meditation quinoa, banh mi pork belly man bun hella ugh migascardigan gluten-free. Gochujang dreamcatcher tofu brunch banjo. VHS austin cardigan squid poke tumeric humblebrag next level everyday carry biodiesel put a bird on it raw denim. Fanny pack aesthetic kinfolk twee succulents roof party wayfarers meggings ugh tumblr shaman kale chips green. Before they sold out live-edge kinfolk man bun pop-up scenester ramps taiyaki tacos raclette mixtape la croix post-ironic leggings. Twee typewriter taxidermy, woke farm-to-table hell of cliche celiac meggings.'},
    ];
  }

}
