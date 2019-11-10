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
    'assets/img/feed-post-1.jpg',
    'assets/img/feed-post-2.jpg',
    'assets/img/feed-post-3.jpg',
    'assets/img/feed-post-4.jpg',
    'assets/img/feed-post-5.jpg',
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
