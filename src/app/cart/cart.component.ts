import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  total=0;
  checkoutForm;
  constructor(private cartService: CartService, 
  private formBuilder: FormBuilder,) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.total = this.items.reduce((sum, current) => sum + current.price, 0);
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.total = 0;
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }


}