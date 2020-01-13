import {Component, OnInit} from '@angular/core';
import {ContactService} from './contact.service';
import {FormControl, Validators} from '@angular/forms';
import {Message} from '../../core/Message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  subject = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  message = new FormControl('', [Validators.required]);

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
  }


  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  sendMessage() {
    if (this.name.invalid || this.email.invalid || this.subject.invalid || this.phone.invalid || this.message.invalid) {
      return;
    }
    const message = new Message(this.name.value, this.email.value, this.subject.value, this.phone.value, this.message.value);

    this.contactService.sendMessageContact(message).subscribe(res =>{
      this.name.setValue('');
      this.phone.setValue('');
      this.email.setValue('');
      this.subject.setValue('');
      this.message.setValue('');
      alert(res);
    }, error => {
      alert(error);
    });
  }
}
