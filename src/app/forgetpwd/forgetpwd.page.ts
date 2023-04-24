import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpwd',
  templateUrl: './forgetpwd.page.html',
  styleUrls: ['./forgetpwd.page.scss'],
})
export class ForgetpwdPage implements OnInit {
  forget: any;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  page(obj:any){
    const a=localStorage.getItem("forget")
    this.forget=JSON.parse(a);
    this.router.navigate(['/login']);
   
  }
  page1(obj:any){
    localStorage.setItem('confirm',JSON.stringify(obj));
    this.router.navigate(['/pwdconfirm']);
  }
}
