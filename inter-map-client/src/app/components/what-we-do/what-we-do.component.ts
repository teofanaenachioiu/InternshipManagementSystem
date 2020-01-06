import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.css']
})
export class WhatWeDoComponent implements OnInit {

  items: any;

  constructor() {
  }

  ngOnInit() {
    this.items = [
      {
        hidden: false, title: 'About Intermap', icon: 'assets/img/logo_negru_no_bg.png', icontext: 'assets/img/intremapRight.jpg',
        tag: 'what-we-offer', text: 'We aim to facilitate student access to internships, gathering all the information in one place. ' +
          'InterMap is a platform that includes dozens of intercom companies, open to the public.' +
          'To explore the map of internships all you need to do is to click the login button and after that go to create an account.' +
          'After that, every location on interMAP is yours to explore.'
      },
      {
        hidden: true, title: 'For students', icon: 'assets/img/ForStud.png', icontext: 'assets/img/ForStudentsImage.jpg',
        tag: 'for-students', text: 'If you are a student, all you have to do is want one of our internship. ' +
          'Check the list we have prepared for you, and if at least one fits you. All you need is to create an account, ' +
          'fill in some data and you can apply for the dream internship.'
      },
      {
        hidden: true, title: 'For companies', icon: 'assets/img/forComp.jpg', icontext: 'assets/img/ForCompaniesImage.jpg',
        tag: 'for-companies', text: 'As a company, you are the key element of student development. All you have to do is come and meet' +
          ' the students with internship offers and openness to learn new things. Prepare interesting and educational internship and ' +
          'upload them to our platform. Once this is public, you can see in real time the number of registered candidates, ' +
          'you can compare them according to the criteria established by you and you have everything available with the help of the ' +
          'application.'
      },
      {
        hidden: true, title: 'About CV', icon: 'assets/img/cv.jpg', icontext: 'assets/img/ForCVImage.jpg',
        tag: 'about-cv', text: 'When it comes to applying for an internship the important element is the CV. ' +
          'We all went through the stress of organizing it and the panic that we forgot to write something. ' +
          'Here, on interMap, this is already a memory. After you sign in, enter your profile and there you have a series of fields to ' +
          'complete and after applying to an internship, companies will look at your profile and choose the information that interests' +
          ' them. This is how companies get rid of tens of emails with CVs and you get rid of the stress of creating it.'
      },
      {
        hidden: true, title: 'Why interMap', icon: 'assets/img/information.png', icontext: 'assets/img/right-side-image_5.jpg',
        tag: 'photos', text: '\n' +
          'Are you looking for an internship for college? Want to see what the atmosphere is in a company or a team that works ' +
          'enthusiastic on a project? Or maybe you just want to do an internship that will help you to be employed later. Stop with the ' +
          'list of companies and the mountain of leaflets next to you trying to find something suitable. You can find all this just a ' +
          'click away on interMap. Come on, press LOGIN and you will see that we all the right things in the right place!'
      },
    ];
  }

  toggle(items: any, item: any) {
    for (const itemm of items) {
        itemm.hidden = true;
    }
    item.hidden = !item.hidden;
  }
}
