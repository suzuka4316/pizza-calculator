/**
 * @function checkQuantity() Calculates the cheapest price providable
 * @author Suzuka Fukami <Suzuka.Fukami@tafensw.edu.au>
 * Price range: 1 large pizza is $6.45, 2 large pizzas are $12.00, and 3 large pizzas are $14.00
 * @var qty Number of pizza(s) that will be input by a user
 * @var counter Get an integer division of qty divided by 3
 * @var remainder Get an reminder devided by 3
 * @returns false - This prevents the form from submitting itself and go to another page
 * */

function checkQuantity() {
    var qty = Number(document.getElementById("quantity").value);
    var pizzaPrice = [0, 6.45, 12.00, 14.00];
    var counter = parseInt(qty / 3);
    var remainder = qty % 3;

    //if input is either empty, not number, or smaller than 0 then
    if (qty == "" || isNaN(qty) || qty <= 0) {
        document.getElementById("message").innerHTML = "Invalid input";
    }
    //if qty is smaller than 4 then multiplication result is 0
    //if qty is bigger than 3 then multiplication result changes depending on how many 3 fits inside qty
    else {
        document.getElementById("message").innerHTML = `The total price for ${qty} pizza(s) 
        is $${counter * pizzaPrice[3] + pizzaPrice[remainder]}`;
    }
    return false;
}


function checkQuantity1() {
    var qty = Number(document.getElementById("quantity").value);
    var pizzaPrice = [0, 6.45, 12.00, 14.00];
    var counter;

    if (qty == "" || isNaN(qty) || qty < 0) {
        document.getElementById("message").innerHTML = "Invalid input";
    }
    else if (qty <= 3) {
        for (var i = 0; i < pizzaPrice.length; i++) {
            if (i + 1 == qty) {
                document.getElementById("message").innerHTML = `The total price for ${qty} pizza(s) is $${pizzaPrice[i]}`;
            }
        }
    }
    else if (qty >= 4) {
        if (qty % 3 == 0) {
            counter = qty / 3;
            document.getElementById("message").innerHTML = `The total price for ${qty} pizza(s) is $${counter * pizzaPrice[2]}`;
        }
        else if (qty % 3 == 1) {
            counter = (qty - 1) / 3;
            document.getElementById("message").innerHTML = `The total price for ${qty} pizza(s) is $${counter * pizzaPrice[2] + pizzaPrice[0]}`;
        }
        else if (qty % 3 == 2) {
            counter = (qty - 2) / 3;
            document.getElementById("message").innerHTML = `The total price for ${qty} pizza(s) is $${counter * pizzaPrice[2] + pizzaPrice[1]}`;
        }
    }
    return false;
}