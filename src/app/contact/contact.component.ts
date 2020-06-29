import { Component, OnInit } from '@angular/core';
import { ServerModel } from '../models/ServerModel';
import { ContactInfoModel } from '../models/ContactInfoModel';
import { HttpClient} from '@angular/common/http';
import { interval } from 'rxjs';
import { DataModel } from '../models/DataModel';
import { fetchJsonPost } from '../services/http';
import { ProtocolR } from '../models/Protocol';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactInfoDataFromServer: ContactInfoModel[] = [];
  showInputFields = false;
    mySubscription: any;

  constructor(private http: HttpClient) {
    this.showcontactInfo();

    this.doStuff();

  }


  ngOnInit() {
  }

  showcontactInfo() {
    this.http.get<ContactInfoModel[]>(
      this.ConstructGetContactInfoUrl() )
      .subscribe(
        responseData => {
          this.contactInfoDataFromServer = responseData;
        }
      );
  }



  doStuff() {
    try {
      this.showInputFields = this.checkIfSuperUser();
    } catch (Error) {
      // console.log();
    }
  }

  checkIfSuperUser() {
    const obj = JSON.parse(DataModel.account);
  //  console.log(obj[0].is_super_user);
    const isSuper = obj[0].is_super_user;


    return isSuper == true;
  }

  async submitNewContactDetails(event) {

    event.preventDefault();
    const target = event.target;


    const house = target.querySelector('#name').value;
    const place = target.querySelector('#place').value;
    const address = target.querySelector('#address').value;
    const postalCode = target.querySelector('#postalCode').value;
    const mail = target.querySelector('#mail').value;
    const telephone = target.querySelector('#telephone').value;
    const url = this.ConstructPostContactInfoUrl();
    const data = JSON.stringify({ name: house, place, address, postal_code: postalCode,  telephone, mail });


    await fetchJsonPost(url, data.toString(), ProtocolR.PUT);
  }


  ConstructPostContactInfoUrl() {
    const host = ServerModel.host;
    const port = ServerModel.port;
    const token = JSON.parse(DataModel.account)[0].token.toString();
    const url = 'http://' + host + ':' + port + '/api/ContactInfo/ChangeContactInfo?token=' + token;
    return url;
  }



  ConstructGetContactInfoUrl() {
    const host = ServerModel.host;
    const port = ServerModel.port;
    const url = 'http://' + host + ':' + port + '/api/ContactInfo/getContactInfo';
    return url;
  }


}
