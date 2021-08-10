import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  {

  products:any[] = [
    {
      id:1,
      nombre:"Reloj Apple",
      precio:"$900",
      subcategoria:"Relojes",
      marca:"Apple",
      disponibilidad:0,
      estado:"Inactivo",
      destacado:"Si"
    },
    {
      id:2,
      nombre:"Pelota para chicos",
      precio:"$10",
      subcategoria:"Juguetes",
      marca:"Adidas",
      disponibilidad:100,
      estado:"Activo",
      destacado:"No"
    }
  ]
}