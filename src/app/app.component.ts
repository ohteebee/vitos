import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  pizzas: any;
  showpizza: boolean = false;
  reviews: any[];
  sections: any[];
  ngOnInit(): void {
    this.sections = [{
      label: 'Appetizers',
      id: 'apps',
      breakpoint: 8,
      items:
      [
        {
          name: 'French Fries',
          price: '$2.75'
        }, {
          name: 'Chicken Wings (10)',
          price: '$8.25'
        }, {
          name: 'Fried Mozarella Sticks (7)',
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
        id: 'salads',
        overview: 'DRESSINGS:<br>Ranch, Rasberry Vinaigrette, Creamy Italian, Our House Italian Dressing',
        breakpoint: 4,
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
            description: 'Add Chicken - $2.50',
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
        id: 'lite',
        overview: 'A low-carb alternative. No bread or pasta. Served with a side salad.',
        breakpoint: 3,
        items: [
          { name: 'Meatball Parmigiana', price: '$7.95' },
          { name: 'Chicken Parmigiana', price: '$8.95' },
          { name: 'Veal Cutlet Parmigiana', price: '$10.50' },
          { name: 'Eggplant Parmigiana', price: '$8.95' },
          { name: 'Sausage Parmigiana', price: '$7.95' }
        ]
      }, {
        label: 'Lunch Menu', overview: 'Lunch 11-2:30PM Monday thru Saturday<br>Add Drink for $1.25',
        id: 'lunch',
        breakpoint: 9,
        items: [
          { name: 'Pizza & Salad', description: 'A 6-inch pizza served with one topping of choice ($0.75 per extra topping)', price: '$7.95' },
          { name: 'Deli Stomboli & Salad', description: 'Ham, Salami, Pepperoni, and Mozzarella', price: '$7.95' },
          { name: 'Traditional Lasagna', price: '$9.25' },
          { name: 'Tortellini Romanissimo', price: '$9.25', description: 'Cheese tortellini, sauteed shrimp, and chicken tossed with sundried tomatoes in our garlic, lemon, and wine sauce' },
          {
            name: 'Shrimp & Chicken Luciano',
            description: 'Sautéed in blend Tomatoes Garlic, Basil and 0live 0il',
            price: '$9.50'
          },
          { name: 'Sausage & Chicken Pesto', price: '$9.50', description: 'Italian Sausage (Hot on Mild) and Chicken Tossed with a Pesto Basil and Alfredo blend' },
          { name: 'Eggplant Parmigiana', price: '$9.25' },
          { name: 'Fettucccine Alfredo', price: '$7.50', description: 'Add Chicken and Broccoli $9.50' },
          { name: 'Tortellini Michaelangelo', price: '$9.25', description: 'Cheese Tortellini with a blend of Spinach and Ham tossed in our Creamy Alfredo Sauce' },
          { name: 'Chicken Marsala', price: '$9.50' },
          { name: 'Chicken Parmigiana', price: '$9.25' },
          { name: 'Shrimp & Chicken Cabonara', price: '$9.50', description: 'Sauteed Shrimp and Chicken tossed with Diced Panchetta, Caramelized Onions and Garlic in our Creamy Alfredo Sauce' },
          { name: 'Stuffed Shells', price: '$8.50' },
          { name: 'Sausage Contadina', price: '$9.25', description: 'Tossed with Caramelized Onions Mushrooms and Roasted Peppers with Marinara Sauce (Hot or Mild)' },
          { name: 'Linguine with Clam Sauce', price: '$9.50', description: '(Red or White)' },
          { name: 'Rigatoni Primavera', description: 'Mixed Vegetables tossed with Basil, Garlic, Olive Oil, and Butter', price: '$7.95' },
          { name: 'Spaghetti with Tomato Sauce', price: '$7.10', description: 'With Meatballs and Meat Sauce or Sausage $8.25' },
          { name: 'Shrimp & Chicken Pink Sauce', description: 'Sauteed jumbo shrimp and strips of chicken in a combination of creamy alfredo and tomato sauce', price: '$9.50' },
          { name: 'Veal Parmigiana', price: '$10.95' },
          { name: 'Baked Ziti', price: '$8.25' }
        ]
      }, {
        label: 'Calzones & Strombolis',
        id: 'calzones',
        overview: 'All items come with a side of tomato sauce.',
        breakpoint: 3,
        items: [
          { name: 'Cheese Calzone', description: 'Fresh dough filled with ricotta and mozzarella cheese. Your choice of additional toppings, $0.95 extra', price: '$6.75' },
          { name: 'Deli Stromboli', description: 'Fresh dough filled with ham, salami and pepperoni complimented by mozzarella', price: '$8.25' },
          { name: 'Vegetarian Delight', description: 'Fresh dough filled with spinach, eggplant, onions, green peppers, mushrooms and mozzarella', price: '$8.25' },
          { name: 'Chicken Stromboli', description: 'Fresh dough filled with grilled chicken and mozzarella', price: '$8.25' },
          { name: 'BBQ Chicken Stromboli', description: 'Fresh dough filled with grilled chicken, BBQ sauce and mozzarella', price: '$8.25' },
          { name: 'Tizio Delight', description: 'Fresh dough filled iwth meatballs, sausage, mushrooms, green peppers, onions and mozzarella', price: '$8.25' }
        ]
      }, {
        label: 'Pasta',
        id: 'pasta',
        overview: 'All pasta dishes come with our House Salad and bread. Your choice of spaghetti, linguine, fettuccine, rigatoni or angel hair.',
        breakpoint: 16,
        items: [
          { name: 'Tomato Sauce', price: '$8.75' },
          { name: 'Meat Sauce', price: '$10.95' },
          { name: 'Sausage', price: '$10.95' },
          { name: 'Meatballs', price: '$10.95' },
          { name: 'Aglio E. Olio', description: 'With anchovies - $0.95 extra', price: '$8.95' },
          { name: 'Alla Luciano', description: 'Freshly diced tomatoes tossed with garlic, fresh basil and a nice mix of italian spices', price: '$10.25' },
          { name: 'Carbonara', description: 'Pancetta (Italian bacon), onion and peas tossed in an alfredo sauce', price: '$11.25' },
          { name: 'Alla Puttanesca', description: 'Onions, capers, kalamata olives, anchovies and fresh marinated tomatoes, tossed in a spicy marinara sauce', price: '$11.25' },
          { description: 'Beneath are pasta specialties, served with house salad and bread' },
          { name: 'Traditional Italian Lasagna', description: 'Layers of pasta with meat sauce, ricotta and Parmesan cheese with melted mozzarella', price: '$12.25' },
          { name: 'Baked Ziti', description: 'Ziti pasta tossed with ricotta, parmesan cheese and tomato sauce. Topped with mozzarella cheese and baked to order', price: '$10.95' },
          { name: 'Rigatoni Alla Vodka', description: 'Sauteed prosciatto, roasted peppers, onions and green peas tossed with our vodka sauce', price: '$11.50' },
          { name: 'Sausage Contadina', description: 'Italian sausage sauteed with onions, mushrooms and roasted peppers tossed with marinara sauce and rigatoni', price: '$12.95' },
          { name: 'Chicken Parmigiana with Spaghetti', description: 'Braded chicken topped with tomato sauce and mozzarella sauce', price: '$13.95' },
          { name: 'Chicken Marsala with Spaghetti', description: 'Sauteed chicken breasts in our marsala wine sauce', price: '$13.95' },
          { name: 'Eggplant Parmigiana with Spaghetti', description: 'Fresh eggplant layers topped with tomato sauce, mozzarella and Parmesan cheese', price: '$13.95' },
          { name: 'Chicken Broccoli Alfredo', description: 'Sauteed strips of chicken and broccoli and alfredo sauce', price: '$14.25' },
          // { name: 'Cheese Ravioli', price: '$10.25' },
          { name: 'Sausage & Chicken Pesto', price: '$14.25', description: 'Italian sausage (Hot or mild) and chicken, tossed with a pesto basil and alfredo blend' },

          { name: 'Fettucine Alfredo', price: '$10.95' },
          { name: 'Tortellini Michelangelo', description: 'Cheese stuffed tortellini, ham and spinach in a cream and Parmesan sauce', price: '$13.25' },
          { name: 'Rigatoni Primavera', description: 'Rigatoni tossed with fresh sauteed vegetables, fresh basil, olive oil and garlic in a wine butter sauce', price: '$11.95' },
          { name: 'Romanissimo with Tortellini', description: 'Sauteed jumbo shrimp and strips of chicken with garlic, olive oil, sundried tomatoes and basil in a fresh lemon wine sauce', price: '$15.25' },
          { name: 'Chicken Cacciatore', description: 'Sauteed strips of chicken with green peppers, onions and mushrooms with a red wine marinara suace', price: '$14.25' },
          { name: 'Shrimp & Chicken in Pink Sauce', description: 'Sauteed jumbo shrimp and strips of chicken in a combination of creamy alfredo and tomato sauce', price: '$15.25' },
          { name: 'Stuffed Shells', description: 'Pasta shells stuffed with ricotta cheese and topped with tomato sauce. Slowly baked with mozzarella cheese on top', price: '$11.25' },
          { name: 'Chicken Siciliano', description: 'Sauteed chicken breast topped with prosciutto, mozzarella cheese and roasted peppers in a lemon wine butter sauce', price: '$15.25' },
          { name: 'Manicotti', description: 'Pasta filled with ricotta and Romano cheese, then topped with tomato sauce and mozzarella cheese', price: '$10.95' },
          { name: 'Chicken New Orleans', description: 'Sauteed chicken tossed in our Cajun spiced alfredo sauce and served over fettuccine', price: '$14.75' }
        ]
      }, {
        label: 'Subs',
        id: 'subs',
        overview: 'Garnished with your choice of lettuce, tomato, onion, mayonnaise, hot peppers and our italian dressing.',
        breakpoint: 5,
        items: [
          { name: 'Italian Combination', description: 'Classic combination of ham, capiocia, genoa salami and provolone cheese', price: '$7.55' },
          { name: 'Ham & Provolone Cheese', price: '$7.35' },
          { name: 'Caprese Classico', description: 'Fresh mozzarella, tomato and roasted peppers with olive oil, balsamic vinaigrette and fresh basil. Add prosciutto $1.00 extra', price: '$7.55' },
          { name: 'Steak & Cheese', description: 'Lettuce, tomato, mayonnaise, sauteed onions, mushrooms and sweet peppers', price: '$7.55' },
          { name: 'Pizza Steak & Chese', description: 'Grilled steak and provolone cheese topped with our tomato sauce', price: '$7.55' },
          { name: 'Chicken Steak & Cheese', description: 'Thinly sliced chicken grilled with mushrooms, sweet peppers and onions. Served with lettuce tomatoes and mayonnaise', price: '$7.55' },
          { description: 'The following subs are prepared with tomato sauce and melted mozzarella cheese.' },
          { name: 'Meatball Parmigiana', price: '$7.55' },
          { name: 'Veal Cutlet Parmigiana', price: '$8.95' },
          { name: 'Chicken Parmigiana', price: '$8.25' },
          { name: 'Eggplant Parmigiana', price: '$8.25' },
          { name: 'Sausage Parmigiana', price: '$7.55' }
        ]
      }, {
        label: 'For the Kids',
        id: 'kids',
        overview: 'Drink included.',
        breakpoint: 3,
        items: [
          { name: 'Fettuccine Alfredo', price: '$5.00' },
          { name: 'Spaghetti with Tomato Sauce', price: '$3.95' },
          { name: 'Spaghetti with Meatballs', price: '$5.00' },
          { name: 'Chicken Tenders with Fries', price: '$5.00' },
          { name: '6-inch Pizza', price: '$5.00' }
        ]
      }, {
        label: 'Seafood',
        id: 'sea',
        overview: 'All Seafood dishes come with our House Salad and bread.',
        breakpoint: 4,
        items: [
          { name: 'Linguine with Clam Sauce', description: 'Sauteed baby clams with your choice of red or white sauce', price: '$13.95' },
          { name: 'Frutti di Mare', description: 'A combination of sauteed mussels, jumbo shrimp, fresh calamari (squid) and baby clams with marinara sauce over linguine', price: '$18.95' },
          { name: 'Mussels Marinara', description: 'Fresh mussels sauteed over fresh spices and marinara sauce over linguine', price: '$14.25' },
          { name: 'Shrimp Scampi', description: 'Sauteed jumbo shrimp with fresh garlic, fresh basil fresh parsley, butter and olive oil over linguine', price: '$14.95' },
          { name: 'Shrimp Fra Diavlo', description: 'Jumbo shrimp sauteed in our spicy marinara sauce over linguine', price: '$14.95' },
          { name: 'Linguine with Calamari', description: 'Fresh calamari sauteed with your choice of tomato sauce or white sauce', price: '$13.95' },
          { name: 'Mussels Alla Luciano', description: 'Sauteed with fresh garlic, basil, lemon and fresh chopped tomatoes in a white wine sauce', price: '$14.25' },
          { name: 'Shrimp New Orleans', description: 'Sauteed shrimp tossed in our Cajun spiced alfredo sauce and served on a bed of fettucine', price: '$14.95' }
        ]
      }, {
        label: 'Veal',
        id: 'veal',
        overview: 'All Veal dishes come with our House Salad and bread.',
        breakpoint: 2,
        items: [
          { name: 'Veal Parmigiana with Spaghetti', price: '$16.25' },
          { name: 'Veal Piccatta', description: 'Lemon, butter and capers in a wine sauce', price: '$18.25' },
          { name: 'Veal Marsala', price: '$18.25' }
        ]
      }, {
        label: 'Beverages',
        id: 'drinks',
        breakpoint: 2,
        items: [
          { name: 'Pepsi, Diet Pepsi, Sweetened & Unsweetened Iced Tea', price: '$1.95' },
          { name: 'Ask your server about Beer and Wine' }
        ]
      },
      {
        label: 'Pizzas',
        id: 'pizza',
        breakpoint: 0,
        items: []
      }
    ];
    this.pizzas = {
      label: 'Specialty Pizzas',
      items: [
        { name: 'Meat Lovers', description: 'Bacon, sausage, pepperoni, ham', prices: ['$10.75', '$17.95', '$20.95'] },
        { name: 'Benitos Lovers', description: 'Pepperoni, sausage, onions, mushrooms and green peppers', prices: ['$10.75', '$17.95', '$20.95'] },
        { name: 'Healthy Vegetarian', description: 'Black olives, roasted peppers, artichoke hearts and spinach with tomato sauce', prices: ['$10.75', '$16.95', '$19.95'] },
        { name: 'Pizza del Pescatore', description: 'Baby clams and shrimp on top of olive oil, garlic with mozzarella (white)', prices: ['$10.75', '$16.25', '$19.95'] },
        { name: 'Conzumel Fiesta Grande', description: 'Salsa, ground beef, onions and jalapenos', prices: ['$10.25', '$16.50', '$19.50'] },
        { name: 'Grecian Pizza', description: 'Spinach, feta cheese, black olives and fresh tomatoes (Tomato sauce pizza)', prices: ['$10.25', '$16.95', '$19.95'] },
        { name: 'Southern-Style Pizza', description: 'Grilled chicken, sausage, onions and Benito\'s own BBQ pizza sauce', prices: ['$10.25', '$17.25', '$19.95'] },
        { name: 'Hawaiian Pizza', description: 'Ham and pineapple (Tomato sauce pizza)', prices: ['$9.15', '$14.75', '$17.50'] },
        { name: 'Ricotta Pizza', description: 'Fresh tomatoes, ricotta, garlic and olive oil (white)', prices: ['$9.15', '$14.75', '$17.50'] },
        { name: 'Pizza di Nonno Benito', description: 'Grilled chicken and roasted peppers on a pesto base sauce', prices: ['$10.50', '$17.25', '$19.50'] }
      ]
    };
    this.reviews = [
      {
        name: 'Jonathan Hairgrove',
        message: '"Vito\'s pizzeria treats me like family every time I walk in. It\'s like having an Italian uncle that is always cooking rain or shine."'
      },
      {
        name: 'Wood',
        message: "\"I love italian food, and this is about the best I can find... This is what I'd call Italian home cooking.\""
      }];
  }
  getLinks(): any[] {
    let links = [];
    for (let sect of this.sections) {
      if (sect.id && sect.id.length)
        links.push({ 'id': sect.id, 'label': sect.label });
    }
    return links;
  }
}
