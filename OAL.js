/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/
console.log(
  "\n",
  "-------------------------------------------------EX1------------------------------------------"
);

const firstVariable = [1, 2, 3, 4, 5];
console.log("Variable with numbers is: ", firstVariable);

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/
console.log(
  "\n",
  "-------------------------------------------------EX2------------------------------------------"
);
const me = { name: "Akb", surname: "Ra", email: "AkbRa@gmail.com", age: 27 };
const secondVariable = me;
console.log("\n", "Variable with object is: ", secondVariable);

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/
console.log(
  "\n",
  "-------------------------------------------------EX3------------------------------------------"
);
me.drivingLicense = true;
console.log("Variable with Driving License info is: ", me);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/
console.log(
  "\n",
  "-------------------------------------------------EX4------------------------------------------"
);
delete me.age;
console.log("Variable without age is: ", me);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/
console.log(
  "\n",
  "-------------------------------------------------EX5------------------------------------------"
);
const me2 = { name: "Akb", surname: "Ra", email: "RaAkb@gmail.com" };
me.email !== me2.email
  ? console.log("emails are not same")
  : console.log("emails are same");

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/
console.log(
  "\n",
  "-------------------------------------------------EX6------------------------------------------"
);
const totalShoppingCart = 10;
let totalAmount;
let shippingCost = 5;
totalAmount =
  totalShoppingCart > 50 ? totalShoppingCart : totalShoppingCart + shippingCost;
console.log("\n", "Your total amount with shipping is:", totalAmount);

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
console.log(
  "\n",
  "-------------------------------------------------EX7------------------------------------------"
);
let blackFridayDiscount = (totalShoppingCart * 20) / 100;
let totalWithDiscount = totalShoppingCart - blackFridayDiscount;
totalAmount =
  totalWithDiscount > 50 ? totalWithDiscount : totalWithDiscount + shippingCost;
console.log(
  "\n",
  "Your total amount with black friday discount and shipping is",
  totalAmount
);

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/
console.log(
  "\n",
  "-------------------------------------------------EX8------------------------------------------"
);
const car = { brand: "Audi", model: "A5", licensePlate: "meow" };
const car2 = Object.assign({}, car);
const car3 = Object.assign({}, car);
const car4 = Object.assign({}, car);
const car5 = Object.assign({}, car);
const car6 = Object.assign({}, car);
car2.licensePlate = "woof";
car3.licensePlate = "quack";
car4.licensePlate = "bee";
car5.licensePlate = "moo";
car6.licensePlate = "oui";

/*console.log(
  "\n",
  car,
  "\n",
  car2,
  "\n",
  car3,
  "\n",
  car4,
  "\n",
  car5,
  "\n",
  car6
);*/

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/
console.log(
  "\n",
  "-------------------------------------------------EX9------------------------------------------"
);
let carsForRent = [car, car2, car3, car4, car5, car6];
console.log("All Cars avaliable for rent are: ", carsForRent);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/
console.log(
  "\n",
  "-------------------------------------------------EX10------------------------------------------"
);
carsForRent.pop();
carsForRent.shift();

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/
console.log(
  "\n",
  "-------------------------------------------------EX11------------------------------------------"
);
console.log("Cars currently avaliabe for rent are: ", carsForRent);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/ console.log(
  "\n",
  "-------------------------------------------------EX12------------------------------------------"
);
const car10 = Object.assign({}, car);
const car11 = Object.assign({}, car);
const car12 = Object.assign({}, car);
car10.licensePlate = "new";
car11.licensePlate = "new";
car12.licensePlate = "new";

const carsForSale = [car10, car11, car12];
let totalCars = [carsForRent.concat(carsForSale)];
// console.log("\n", totalCars);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/
console.log(
  "\n",
  "-------------------------------------------------EX13------------------------------------------"
);
for (let i = 0; i < carsForSale.length; i++) {
  console.log(i);
  console.log(carsForSale[i].brand);
  console.log(carsForSale[i].model);
  console.log(carsForSale[i].licensePlate);
}
