import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth-service/auth.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public name: string;
  public lastname: string;
  public email: string;
  public password: string;
  public wp: number;
  public username: string;

  public validPassword: boolean = true;
  public validWP: boolean = true;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  OnSubmitRegister() {
    if (this.formValid()) {
      this.auth.register(this.email, this.password, this.name, this.lastname, this.username, this.wp).then( auth => {
        this.router.navigate(['products'])
        console.log(this.auth)
      }).catch(err=> console.log(err))
    }
  }

  formValid(): boolean {
    this.validPassword = this.password && this.password.length > 6;
    this.validWP = this.wp && (this.wp+"").length >= 10;
    return this.validPassword && this.validWP;
  }

}
