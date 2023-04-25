import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  sign: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  page2(obj){
    const a=localStorage.getItem("sign")
    this.sign=JSON.parse(a);
    this.router.navigate(['/home']);
  }
}
