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
  item_qty: number = 0;
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

  async onAdd(){
    this.item_qty += 1;
    console.log(this.item_qty + 1);
  }

  async onSub(){
    if(this.item_qty-1 < 1){
      this.item_qty = 1;
      console.log('item_1->' + this.item_qty)
    }
    else{
      this.item_qty -= 1;
      console.log('item_2->' + this.item_qty);
    }

  }
}
