import { Component } from '@angular/core';
import { AuthService } from '../providers/auth-service/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public authservise: AuthService) {}

  OnLogOut(){
    this.authservise.logout();
  }

}
