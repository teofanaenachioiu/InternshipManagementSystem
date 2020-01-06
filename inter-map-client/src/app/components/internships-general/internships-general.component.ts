import {Component, OnInit, ViewChild} from '@angular/core';
import {
  SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface, SwiperAutoplayInterface
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-internships-general',
  templateUrl: './internships-general.component.html',
  styleUrls: ['./internships-general.component.css']
})
export class InternshipsGeneralComponent implements OnInit {

  public show = true;

  public slides = [
    'assets/img/Internship1.png',
    'assets/img/Internship2.jpg',
    'assets/img/Internship3.png',
    'assets/img/Internship4.jpg',
    'assets/img/Internship5.jpg',
  ];
  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };

  private autoplay: SwiperAutoplayInterface = {
    disableOnInteraction: false,
    delay: 1000
  };

  public config: SwiperConfigInterface = {
    a11y: true,
    slidesPerView: 3,
    navigation: false,
    pagination: this.pagination,
    autoplay: this.autoplay,
    spaceBetween: 20,
    mousewheel: true,
  };

  constructor() {
  }

  ngOnInit(): void {
  }
}
