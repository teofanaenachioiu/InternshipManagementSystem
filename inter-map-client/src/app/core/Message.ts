export class Message {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;

  constructor(name: string, email: string, subject: string, phone: string, message: string) {
    this.name = name;
    this.email = email;
    this.subject = subject;
    this.phone = phone;
    this.message = message;
  }
}
