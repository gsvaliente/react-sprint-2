// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: 'cooking oil',
    price: 10.5,
    type: 'grocery',
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: 'Pasta',
    price: 6.25,
    type: 'grocery',
  },
  {
    id: 3,
    name: 'Instant cupcake mixture',
    price: 5,
    type: 'grocery',
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: 'All-in-one',
    price: 260,
    type: 'beauty',
  },
  {
    id: 5,
    name: 'Zero Make-up Kit',
    price: 20.5,
    type: 'beauty',
  },
  {
    id: 6,
    name: 'Lip Tints',
    price: 12.75,
    type: 'beauty',
  },
  {
    id: 7,
    name: 'Lawn Dress',
    price: 15,
    type: 'clothes',
  },
  {
    id: 8,
    name: 'Lawn-Chiffon Combo',
    price: 19.99,
    type: 'clothes',
  },
  {
    id: 9,
    name: 'Toddler Frock',
    price: 9.99,
    type: 'clothes',
  },
];

// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  const isProductInCart = cart.find((product) => product.id === id);
  if (!isProductInCart) {
    const productToAdd = products.find((product) => product.id === id);
    cart = [...cart, { ...productToAdd, quantity: 1 }];
    applyPromotionsCart();
    printCart();
    return;
  }
  cart.map((product) => {
    return product.id === id ? (product.quantity += 1) : product;
  });
  applyPromotionsCart();
  printCart();
}

// Exercise 2
function cleanCart() {
  cart = [];
  printCart();
}

// Exercise 3
function calculateTotal() {
  let totalPrice = 0;
  cart.forEach((item) => {
    totalPrice += item.subTotal;
    total = totalPrice;
  });

  return total;
}

// Exercise 4
function applyPromotionsCart() {
  cart.map((item) => {
    if (item.name === 'cooking oil' && item.quantity >= 3) {
      item.subTotal = item.price * item.quantity * 0.8;
    } else if ((item.name = 'Instant cupcake mixture' && item.quantity >= 10)) {
      item.subTotal = item.price * item.quantity * 0.7;
    } else {
      item.subTotal = item.price * item.quantity;
    }
  });
  calculateTotal();
  return cart;
}

// Exercise 5
const cartList = document.getElementById('cart_list');
const totalPrice = document.getElementById('total_price');
const cartAmount = document.getElementById('count_product');

function printCart() {
  cartList.innerHTML = '';
  totalPrice.innerHTML = '';
  cartAmount.innerHTML = '';

  let amountToPrint = 0;
  cart.forEach((item) => {
    amountToPrint += item.quantity;
    cartList.innerHTML += `
    <tr>
        <th scope="row">${item.name}</th>
        <td>${item.price}</td>
        <td>${item.quantity}</td>
        <td>$${item.subTotal.toFixed(2)}</td>
    </tr>
    `;
    totalPrice.innerHTML = total.toFixed(2);
    cartAmount.innerHTML = amountToPrint;
  });
}

// ** Level II **

// Exercise 7
function removeFromCart(id) {
  const newList = cart.filter((item) => item.id !== id);
  cart = newList;
}

function open_modal() {
  printCart();
}
