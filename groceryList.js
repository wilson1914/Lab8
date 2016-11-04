var total =0;
 var groceryList = [
   {name: "Cherios",
 	price: 3.00},
   {name: "Eggs",
 	price: 4.00},
   {name: "Milk",
 	price: 2.00},
   {name: "Lettuce",
 	price: 1.00},
   {name: "Ketchup",
 	price: 3.00},
   {name: "Mustard",
 	price: 2.00},
   {name: "Cookies",
 	price: 4.50},
   {name: "Yogurt",
 	price: 2.00},
   {name: "Creamer",
 	price: 3.00},
   {name: "Bread",
 	price: 3.50},
   {name: "Salsa",
 	price: 4.00}
 ];

function addName() {
   
}
 for (var i=0; i<groceryList.length;i++){
      
   total+=groceryList[i].price;
  
 	    console.log(groceryList[i].name + " $" + groceryList[i].price.toFixed(2));

  
   var printedList = document.createElement('div');
   
   printedList.innerHTML = groceryList[i].name + " $" + groceryList[i].price.toFixed(2);


   document.body.appendChild(printedList);

}

groceryList.totalAmount = function(){

   var total = 0;
      for (var i = 0; i < groceryList.length; i++) {
         total = total + groceryList[i].price;
      }
   return total.toFixed(2);
};

var printedTotal = document.createElement('div');

printedTotal.innerHTML = "Total $ " +groceryList.totalAmount();

document.body.appendChild(printedTotal);
console.log("Total: $"+total);