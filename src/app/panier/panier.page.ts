import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MonpanierService } from '../monpanier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {
panier:any[]
  constructor(private router:Router, private monpanierserv:MonpanierService) {
    this.monpanierserv.getMonPanier().subscribe(
      (reponse: any[])=>{
        this.panier =reponse;
      }
      )
  
   }

  ngOnInit() {
  }

  async close() {
    
  }

}
