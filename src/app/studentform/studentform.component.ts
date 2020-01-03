import { Student } from './Student';
import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit {
   std: Student = new Student('', '', 'Date', '', '', 0, '', ' ', '', '');
   message: any;
  constructor(private service: UserRegistrationService) { }

  ngOnInit() {
  }

  public studentRegisterNow() {
    console.log('button worked');
    const resp = this.service.stdDoRegistration(this.std);
    resp.subscribe ((data) => this.message = data);
  }

}
