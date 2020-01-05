import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  items: any;
  constructor() { }

  ngOnInit() {
    this.items = [
      {title: 'For interMap', date: '1 November 2019', internship: 'Build Your Robot', username: 'Felix Mada', hidden: false,
      feedback: 'Organizing documents has never been one of my strengths, but InterMap helped me get rid of this concern. ' +
        'Now, I work at the company of my dreams and the road up to this point has been extremely easy thanks to this app. ',
      image: 'assets/img/feedback1.jpg'},
      {title: 'The best map', date: '23 August 2019', internship: 'Bitdefender Master', username: 'Florentina Pop', hidden: true,
        feedback: ' What can I say about interMap other than what has already been said? It\'s the map that guides your steps towards a' +
          'successful future. It can be seen that it is made from the soul, from students to students.',
        image: 'assets/img/feedback2.jpg'},
      {title: 'Explorer', date: '2 September 2019', internship: 'StartUp Hub', username: 'Ernest Ardelean', hidden: true,
        feedback: 'InterMap is full of useful information that is easy to access. I am excited about the idea that I can find the ' +
          'companies and their internships, all in one place, which helps me to put my options in balance faster and to choose the one ' +
          'that suits me best. ', image: 'assets/img/feedback3.jpg'},
      {title: 'Best solution', date: '10 October 2019', internship: 'JavaScript Superstar', username: 'Maria Ivanovici', hidden: true,
        feedback: ' \n' +
          'I am a very curious person by nature but I still love well organized things. InterMap is the perfect solution for me, because ' +
          'it gives me the opportunity to have all the applications for internships in one place, allowing me to evaluate them in the' +
          ' end in a fast and efficient way.',
        image: 'assets/img/feedback4.jpg'},
      {title: 'The easy way', date: '20 July 2019', internship: '.JAR', username: 'David Barbulescu', hidden: true,
        feedback: ' \n' +
          'Using interMap I got rid of the fear of the CV and the stress that I will forget the companies I applied to. ' +
          'I recommend to any student to use this application to make their life easier.',
        image: 'assets/img/feedback5.jpg'},
      ];
  }

  toggle(items: any, item: any) {
    for (const itemm of items) {
        itemm.hidden = true;
    }
    item.hidden = !item.hidden;
  }

}
