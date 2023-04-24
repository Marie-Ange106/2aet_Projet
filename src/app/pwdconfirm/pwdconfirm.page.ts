import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pwdconfirm',
  templateUrl: './pwdconfirm.page.html',
  styleUrls: ['./pwdconfirm.page.scss'],
})
export class PwdconfirmPage implements OnInit {
  confirm: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  page1(obj){
    const a=localStorage.getItem("confirm")
    this.confirm=JSON.parse(a);
    this.router.navigate(['/forgetpwd']);
  }
  page2(obj:any){
    localStorage.setItem('log',JSON.stringify(obj));
    this.router.navigate(['/login']);
  }
  
}
