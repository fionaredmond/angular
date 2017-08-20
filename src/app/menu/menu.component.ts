import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

	dishes: Dish[] = [
	{
	  name:'Hawaiian Pizza',
	  image: '/assets/images/hawaiianpizza.png',
	  category: 'mains',
	  label:'9 inch',
	  price:'8.99',
	  description:'A unique combination of  tomato sauce, cheese, pineapple, and Canadian bacon or ham. Some versions may include peppers, mushrooms, or bacon.'               
	},
	{
	  name:'Lasagne',
	  image: '/assets/images/lasagne.jpg',
	  category: 'mains',
	  label:'',
	  price:'11.99',
	  description:'Layered lasgna noodles, italian sausage and beef, ricotta cheese, tomato sauce, and baked mozzarella and romano cheese.'
	},
	{
	  name:'Spaghetti Bolognese',
	  image: '/assets/images/spaghetti.png',
	  category: 'mains',
	  label:'New',
	  price:'9.99',
	  description:'A pasta dish consisting of spaghetti served with a sauce made from tomatoes, minced beef garlic wine and herbs.'                   
	},
	{
	  name:'Classic Italian Cheesecake',
	  image: '/assets/images/cheesecake.jpg',
	  category: 'dessert',
	  label:'',
	  price:'2.99',
	  description:'Mix the cream cheese and ricotta cheese together in a mixing bowl until well combined. Stir in the sugar, eggs, lemon juice, vanilla, cornstarch, flour, and butter. ' 
	}
	];

  constructor() { }

  ngOnInit() {
  }

}
