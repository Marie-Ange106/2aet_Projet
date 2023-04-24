import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  log: any;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  async showPasswdText(){

  }

  page(obj){
    const a=localStorage.getItem("log")
    this.log=JSON.parse(a);
    this.router.navigate(['/forgetpwd']);
  }

  page2(obj){
    const a=localStorage.getItem("log")
    this.log=JSON.parse(a);
    this.router.navigate(['/pwdconfirm']);
  }
}
