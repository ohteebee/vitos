import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  pizzas: any;
  reviews: any[];
  sections: any[];
  ngOnInit(): void {
    this.sections = [{
      label: 'Appetizers',
      items:
      [
        {
          name: 'French Fries',
          price: '$2.75'
        }, {
          name: 'Fried Mozarella Sticks',
          price: '$6.50'
        }, {
          name: 'Side Order of Meatballs (4)',
          price: '$2.50'
        }, {
          name: 'Mozzarella Caprese',
          description: 'Fresh Mozzarella, Sliced Tomatoes, sauteed Roasted Peppers, Basil, Olive Oil and Balsamic Vinegar',
          price: '$7.95'
        }, {
          name: 'Antipasto Della Casa',
          price: '$8.95'
        }, {
          name: 'Fried Calamari',
          price: '$7.95'
        }, {
          name: 'Pizza Bianca',
          description: 'Fresh Garlic, Olive Oil and Mozzarella',
          price: '$6.95'
        },
        {
          name: 'Garlic Bread',
          description: 'With Cheese - $3.25',
          price: '$2.25'
        }, {
          name: 'Sausage Alla Domenico',
          description: 'Italian Sausage sauteed with Roasted Peppers, Fresh Garlic and Balsamic Vinegar. Served over a Bed of Lettuce',
          price: '$7.25'
        }, {
          name: 'Mussels Marinara',
          description: 'Sauteed mussels with marinara Sauce',
          price: '$8.95'
        }, {
          name: 'Mussels Alla Luciano',
          description: 'Sauteed Mussels with Fresh Garlic, Basil, Lemon, Diced Onions, Diced Tomatoes and Wine',
          price: '$8.95'
        }, {
          name: 'Bruschetta',
          price: '$6.95'
        }, {
          name: 'Eggplant Rollatini',
          description: 'Eggplant stuffed with Ricotta Cheese, Spinach and Romano Cheese. Topped with Tomato Sauce and Mozzarella Cheese',
          price: '$7.50'
        }
      ]
    }, {
        label: 'Salads',
        overview: 'DRESSINGS:<br>Ranch, Rasberry Vinaigrette, Creamy Italian, Our House Italian Dressing',
        items: [
          {
            name: 'House Salad',
            description: 'Lettuce, Tomatoes, Onions, Cucumbers, and Olives',
            price: '$5.95'
          }, {
            name: 'Side House Salad',
            price: '$2.95'
          }, {
            name: 'Caesar Salad',
            price: '$5.95'
          }, {
            name: 'Side Caesar Salad',
            description: 'Add Chicken +$2.50',
            price: '$2.95'
          }, {
            name: 'Chef Salad',
            description: 'Our version of the House Salad with Ham, Salame, and Provolone Cheese',
            price: '$7.95'
          }, {
            name: 'Southern Fried Chicken Salad',
            description: 'Breaded Chicken cutlet topped with Bacon and served over Lettuce with Tomatoes, Onions, Cucumbers and Olives',
            price: '$7.95'
          }, {
            name: 'Tuscan Chicken Salad',
            description: 'Marinated Grilled Chicken tossed with Peppers and Onions over our version of the House Salad',
            price: '$7.95'
          }
        ]
      }, {
        label: 'Lite Line',
        overview: 'A low-carb alternative. No bread or pasta. Served with a side salad.',
        items: [
          { name: 'Meatball Parmigiana', price: '$7.95' },
          { name: 'Chicken Parmigiana', price: '$8.95' },
          { name: 'Veal Cutlet Parmigiana', price: '$10.50' },
          { name: 'Eggplant Parmigiana', price: '$8.95' },
          { name: 'Sausage Parmigiana', price: '$7.95' }
        ]
      }, {
        label: 'Lunch Menu', overview: 'Lunch 11-2:30PM Monday thru Saturday<br>Add Drink for $1.25',
        items: [
          { name: 'Pizza & Salad', description: 'A 6-inch pizza served with one topping of choice (+$0.75 per extra topping)', price: '$7.95' },
          { name: 'Deli Stomboli & Salad', description: 'Ham, Salami, Pepperoni, and Mozzarella', price: '$7.95' },
          { name: 'Traditional Lasagna', price: '$9.25' },
          { name: 'Tortellini Romanissimo', price: '$9.25' },
          {
            name: 'Shrimp & Chicken Luciano',
            description: 'Sautéed in blend Tomatoes Garlic, Basil and 0live 0il',
            price: '$9.50'
          }, {
            name: 'Deli Stromboli & Salad',
            description: 'Ham, Salami, Pepperoni, and Mozzarella',
            price: '$7.95'
          },
          { name: 'Sausage & Chicken Pesto', price: '$9.50', description: 'Italian Sausage (Hot on Mild) and Chicken Tossed with a Pesto Basil and Alfredo blend' },
          { name: 'Traditional Lasagna', price: '$9.25' },
          { name: 'Tortellini Romanissimo', price: '$9.25' },
          { name: 'Cheese Tortellini Fettuccine Alfredo', description: 'Add Chicken and Broccoli $9.50', price: '$7.50' },
          { description: 'Chicken tossed sautéed Shrimp, and with Sun Dried Tomatoes with a blend of n our Garlic, Lemon, and Wine Sauce' },
          { name: 'Shrimp & Chicken Cabonara', price: '$9.50' },
          { name: 'Eggplant Parmigiana', price: '$9.25' },
          { description: 'Tomato Sauce and Alfredo Sauce', price: '$' },
          { name: 'Tortellini Michaelangelo', price: '$9.25', description: 'Cheese Tortellini with a blend of Spinach and Ham tossed in our Creamy Alfredo Sauce' },
          { name: 'Chicken Marsala', price: '$9.50' },
          { name: 'Chicken Parmigiana', price: '$9.25' },
          { name: 'Shrimp & Chicken Cabonara', price: '$9.50', description: 'Sauteed Shrimp and Chicken tossed with Diced Panchetta, Caramelized Onions and Garlic in our Creamy Alfredo Sauce' },
          { name: 'Stuffed Shells', price: '$8.50' },
          { name: 'Sausage Contadina', price: '$9.25', description: 'Tossed with Caramelized Onions Mushrooms and Roasted Peppers with Marinara Sauce (Hot or Mild)' },
          { name: 'Linguine with Clam Sauce', price: '$9.50', description: '(Red or White)' },
          { name: 'Rigatoni Primavera', description: 'Mixed Vegetables tossed with Basil, Garlic, Olive Oil, and Butter', price: '$7.95' },
          { name: 'Spaghetti with Tomato Sauce', price: '$7.10', description: 'With Meatballs and Meat Sauce or Sausage $8.25' },
          { name: 'Veal Parmigiana', price: '$10.95' },
          { name: 'Baked Ziti', price: '$8.25' }
        ]
      }, {
        label: 'Subs',
        overview: 'Garnished with your choice of Lettuce, Tomato, Onion, Mayonnaise, Hot Peppers and our Italian Dressing',
        items: [
          // Lettuce, Tomatto, Mayonnaise, sautéed Onions, Mushrooms and Sweet Peppers
          // Steak & Cheese price: '$7.55'
          //
          // Pizza Steak & Cheese price: '$7.55'
          // Italian Combination price: '$7.55'
          // Grilled Steak and Provolone Cheese
          // Classic combination of Ham, Pepperoni,
          // Genoa Salami and Provolone Cheese
          // opped with our Tomato Sauce
          // Ham & Provolone Cheese price: '$7.35'
          // Chicken Steak & Cheese price: '$7.55'
          // Thinly sliced Chicken Grilled with Mushrooms
          // Caprese classico price: '$7.55'
          // Sweet Peppers and price: '$Onions. Served w'
          // Lettuce, Tomatoes, and Mayonnaise
          // Fresh Mozzarella, Tomato, and
          // Roasted Peppers
          // with Olive Oil, Balsamic Vinaigrette and Fresh Basil
          // (With Prosciutto
          // 00 extra)
          // The following subs are prepared with
          //{name:  'Tomato Sauce and Melted Mozzarella Cheese', price: '$7.55'},
          // Meatball Parmigiana
          // price: '$8.95'
          // name: 'Veal Cutlet Parmigiana', price: '$8.25' },
          // {name: 'Chicken Parmigiana',  price: '$8.25'},
          // {name: 'Pepsi' },
          // Peps
          // {name: 'Eggplant Parmigiana', price: '$7.55'}
          // {description: 'Sausage Parmigiana', price: '$1.95'},
          // {name: 'Iced Tea', description: 'Sweetened and Unsweetened' }

        ]
      }
    ];
    this.pizzas = {
      specials: [
        {
          name: 'Saucey Pizza',
          description: 'Regular pizza 12 inch crust'
        },
        {
          name: 'Special',
          description: 'Everything on it'
        }
      ],
      toppings: {
        veggies: [
          'Mushroom',
          'Black olive',
          'Tomato',
          'Jalapeno',
          'Pineapple'
        ],
        meats: [
          'Anchovy',
          'Pepperoni'
        ]
      }
    };
    this.reviews = [
      {
        name: 'Jonathan Hairgrove',
        message: "Vito's pizzeria treats me like family every time I walk in. It's like going over to my Uncle Vito\'s house for dinner"
      },
      {
        name: 'Generic Longtime Customer',
        message: "Been a friend of Pat's for years, he is non only a great cook but a great friend. Vitos is a true dime in the rough. 10/10!"
      }];
  }
}
