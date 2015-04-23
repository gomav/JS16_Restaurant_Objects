$(document).on('ready', function() {

});

// Part 1

var FoodItem = function(name, calories, vegan, glutenFree, citrusFree){

  // this.name = name || 'HotDog';
  //   this.calories = calories || 900;
  //   this.vegan = vegan || false;
  //   this.glutenFree = glutenFree || false;
  //   this.citrusFree = citrusFree || false;

    this.name = name;
    this.calories = calories;
    if (vegan === true) {
      this.vegan = "vegan";
    } else {
      this.vegan = "not vegan";
    }
    if (glutenFree === true) {
      this.glutenFree = "gluten-free";
    } else {
      this.glutenFree = "not gluten-free";
    }
    if (citrusFree === true) {
      this.citrusFree = "is not citrus";
    } else {
      this.citrusFree = "is citrus";
    }
};


FoodItem.prototype.toString = function(){
  return this.name.charAt(0).toUpperCase() + this.name.slice(1) + " has " + this.calories + " calories. It is " + this.vegan + ", " + this.citrusFree + ", and " + this.glutenFree + ".";

};

var yam = new FoodItem('yam', 80, true, true, true);
var ceviche = new FoodItem('ceviche', 500, false, true, false);
var plantain = new FoodItem('plantain', 100, true, true, true);


var blueCorn = new FoodItem('blue corn', 0, true, true, false);
var caneSugar = new FoodItem('cane sugar', 100, true, true, false);
var orangeJuice = new FoodItem('orange juice', 80, true, true, true);
var vodka = new FoodItem('vodka', 500, false, true, false);
var highFructoseCornSyrup = new FoodItem('high fructose corn syrup', 100, true, true, true);
var flavoring = new FoodItem('flavoring', 0, true, true, true);
var water = new FoodItem('water', 0, true, true, true);

var dough = new FoodItem('dough', 100, true, false, false);
var marinaraSauce = new FoodItem('marinara sauce', 50, true, true, true);
var canadianBacon = new FoodItem('canadian bacon', 150, false, true, true);
var pineApple = new FoodItem('pineapple', 50, true, true, false);
var jalapenós = new FoodItem('jalapenós', 5, true, true, true);

var talapia = new FoodItem('talapia', 100, true, true, false);
var lime = new FoodItem('lime', 10, true, true, true);
var cilantro = new FoodItem('cilantro', 10, true, true, false);
var salt =  new FoodItem('salt', 0, true, true, false);
var sweetPotato = new FoodItem('sweet potato', 40, true, true, false);
var corn = new FoodItem('corn', 50, true, true, false);


console.log(yam.toString());
console.log(ceviche.toString());
console.log(plantain.toString());

// Part 2
//
// 1. Define constructors for the following objects. Add parameters to the
//    constructor for the given properties and add them as instance variables.
//
// 2. Define a toString method on each constructor's prototype. This method
//    should return a string representation of the object, formatted as you
//    choose. toString should not have any side effects. You may want to reuse
//    the toString method of the contained objects. (e.g. the Menu object should
//    call toString on each of its plates to reuse that functionality instead of
//    having to duplicate the code for each plate).
//
// 3. Add the following methods to the Plate object to determine if all the food
//    items within it fit a specific dietary restriction.
//      boolean isVegan
//      boolean isGlutenFree
//      boolean isCitrusFree
//
// 4. Instantiate a Burrito Plate, a Guacamole Plate, and a Margarita Drink.
//
// 5. Instantiate a Menu that contains each of the instantiated Plates and Drinks.
//
// 6. Instantiate a Restaurant that contains the instantiated Menu.
//
// 7. Call the Restaurant's toString method to have it print out all its information.


var  Drink = function(name, description, price, ingredients){ // need to add ingredient array
  this.name = name;
  this.description = description;
  this.price = price;
  this.ingredients = ingredients;


};


var chichaMorada =  new Drink('chicha morada', 'water blue corn cane sugar', 3.00, [water, blueCorn, caneSugar]);
var screwDriver = new Drink('screw driver', 'orange juice vodka', 5.00, [vodka, orangeJuice]);
var pepsiDrink = new Drink('pepsi', 'fountain drink', 3.00, [water, highFructoseCornSyrup, flavoring]);

console.log(screwDriver);
console.log(pepsiDrink);
console.log(chichaMorada);


var Plate = function(name, description, price, ingredients) {
  this.name = name;
  this.description = description;
  this.price = price;
  this.ingredients = ingredients;// ingredients is an array of food items that comprise the plate
};

var pizza = new Plate('pizza', 'canandian bacon pineapple jalapenós', 12.00, [dough, marinaraSauce, canadianBacon, pineApple, jalapenós]);
var ceviche = new Plate('ceviche', 'talapia lime cilantro salt sweet potato corn', 15.00, [talapia, lime, cilantro, salt, sweetPotato, corn]);

console.log(pizza);
console.log(ceviche);

var Order = function(plates){
  this.plates = plates; // Plates refers to an array of Plates
};


var Menu = function(menu){
  this.menu = menu; // menu refers to an array of Plates

};

var Restaurant = function(name, description, menu){
  this.name = name;
  this.description = description;
  this.menu = menu; // menu will be the class Menu for the respective Restaurant
};

var Customer = function(dietaryPreference){
  this.dietaryPreference = dietaryPreference;
};


















//
