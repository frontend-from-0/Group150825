/*
===========================================================
  SHOPPING CART APPLICATION
===========================================================
In this project, you'll create a simple Shopping Cart to
simulate adding items, removing items, calculating totals,
and applying discounts.

You'll practice:
1. Classes and objects
2. Encapsulation and abstraction
3. Methods (functions inside a class)
4. Arrays and basic array methods (push, filter, find)
5. Conditional statements (if-else)

Below is a step-by-step guide with comments explaining
each part. You can test each step by running the code in
Node.js or a browser console.
*/

/*
-----------------------------------------------------------
  STEP 1: Create the ShoppingCart Class
-----------------------------------------------------------
1. Define a `ShoppingCart` class.
2. Add a constructor that initializes an empty private 
   array `#items` to store the cart items.
3. Add a `viewCart` method to display all items in the cart.
*/
class ShoppingCart {
  #items;
  #total;

  constructor() {
    this.#items = [];
    this.#total = 0;
  }

  viewCart() {
    console.log('Viewing the cart');

    for (const item of this.#items) {
      console.log(
        `Name: ${item.name}, Price: ${item.price.amount} ${item.price.currency} Quantity: ${item.quantity}`,
      );
    }
    console.log('---------------------');
  }

  /*
-----------------------------------------------------------
  STEP 2: Add Items to the Cart
-----------------------------------------------------------
1. Create an `addItem` method in the `ShoppingCart` class.
2. The method should:
   - Accept `name`, `price`, and `quantity` as parameters.
   - Check if the item already exists in the cart.
     - If it exists, increase the quantity.
     - Otherwise, add the new item to the `#items` array.
*/

  // newItem should be an object
  addItem(newItem) {
    console.log(
      `Adding a new item to the cart. Item name ${newItem.name}, quantity: ${newItem.quantity}`,
    );
    for (let i = 0; i < this.#items.length; i++) {
      if (this.#items[i].name === newItem.name) {
        this.#items[i].quantity += newItem.quantity;
         this.#total += (newItem.price.amount * newItem.quantity); 
        return;
      }
    }

    this.#items.push(newItem);
    this.#total += (newItem.price.amount * newItem.quantity);
  }

  // getTotal() {
  //   let total = 0;
  //   for (const item of this.#items) {
  //     total += item.price.amount * item.quantity;
  //   }
  //   console.log(`The total of the all products: ${total}`);
  //   return total;
  // }

  get total () {
    console.log(`The total of the all products: ${this.#total}`);
    return this.#total;
  }


/*
-----------------------------------------------------------
  STEP 3: Remove Items from the Cart
-----------------------------------------------------------
1. Add a `removeItem` method to the `ShoppingCart` class.
2. The method should:
   - Accept the `name` of the item to remove.
   - Remove the item from the `#items` array if it exists.
*/
  removeItem(name) {
    const index = this.#items.findIndex((item) => item.name === name);

    if (index !== -1) {
      const item = this.#items[index];
      // Subtract the total cost of the specific item line
      this.#total -= item.price.amount * item.quantity;
      this.#items.splice(index, 1);

      console.log(`Removed ${name} from the cart.`);
    } else {
      console.log(`Item ${name} not found.`);
    }
  }
/*
-----------------------------------------------------------
  STEP 4: Calculate the Total Cost
-----------------------------------------------------------
1. Add a `getTotal` method to the `ShoppingCart` class.
2. The method should:
   - Calculate and return the total cost of all items in 
     the cart.
*/
  getTotal() {
    console.log(`Total Cost: $${this.#total}`);
    return this.#total;
  }
/*
-----------------------------------------------------------
  STEP 5: Apply a Discount
-----------------------------------------------------------
1. Add an `applyDiscount` method to the `ShoppingCart` class.
2. The method should:
   - Accept a discount code (e.g., 'SAVE10', 'SAVE20').
   - Apply a percentage discount to the total cost if the 
     code is valid.
3. Use an object to store discount codes and their values.
*/
  applyDiscount(code) {
    const discounts = {
      'SAVE10': 0.10,
      'SAVE20': 0.20 
    };
    if (discounts.hasOwnProperty(code)) {
      const discountPercent = discounts[code];
      const discountAmount = this.#total * discountPercent;
      const finalPrice = this.#total - discountAmount;

      console.log(`Discount Applied: ${code}`);
      console.log(`New Total after discount: $${finalPrice}`);
      return finalPrice;
    } else {
      console.log('Invalid discount code.');
      return this.#total;
    }
  }
}

const ShoppingCart1 = new ShoppingCart();
shoppingCart1.viewCart();
shoppingCart1.addItem({
  name: 'Tablet',
  price: { amount: 1000, currency: 'USD' },
  quantity: 1,
});

shoppingCart1.viewCart();
shoppingCart1.addItem({
  name: 'Tablet',
  price: { amount: 1000, currency: 'USD' },
  quantity: 1,
});
shoppingCart1.addItem({
  name: 'Monitor',
  price: { amount: 500, currency: 'USD' },
  quantity: 2,
});
shoppingCart1.viewCart();
shoppingCart1.getTotal();

shoppingCart1.removeItem('Tablet');
shoppingCart1.viewCart();
shoppingCart1.getTotal();