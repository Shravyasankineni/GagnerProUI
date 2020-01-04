import { Component, OnInit } from '@angular/core';
import { Organization } from './Organization';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-organizationform',
  templateUrl: './organizationform.component.html',
  styleUrls: ['./organizationform.component.css']
})
export class OrganizationformComponent implements OnInit {
  org: Organization = new Organization('', 0, '', '', '', 'Date', '', 0);
  message: any;
  constructor(private service: UserRegistrationService) { }

  ngOnInit() {
  }

  public organizationRegisterNow() {
    console.log('button worked');
    const resp = this.service.orgDoRegistration(this.org);
    resp.subscribe ((data) => this.message = data);
  }

}
