import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
import { Professional } from './Professional';

@Component({
  selector: 'app-professionalform',
  templateUrl: './professionalform.component.html',
  styleUrls: ['./professionalform.component.css']
})
export class ProfessionalformComponent implements OnInit {
  prf: Professional = new Professional('', '', 'mediumDate', '', '', 0, '', ' ', '', '', '', '', '', '', 0);
   message: any;

  constructor(private service: UserRegistrationService) { }

  ngOnInit() {
  }

  public professionalRegisterNow() {
    console.log('button worked');
    const resp = this.service.prfDoRegistration(this.prf);
    resp.subscribe ((data) => this.message = data);
  }

}
