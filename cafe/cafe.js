"use strict";

const $ = selector => document.querySelector(selector);
const orderBox = $("#order");

document.addEventListener("DOMContentLoaded", () => {
    // Variables to hold the IDs of the images and buttons along with a counter for the total
    var espresso = $("#espresso_info");
    var latte = $("#latte_info");
    var cappuccino = $("#cappuccino_info");
    var coffee = $("#coffee_info");
    var biscotti = $("#biscotti_info");
    var scone = $("#scone_info");
    var place = $("#place_order");
    var clear = $("#clear_order");
    var total = 0;

    // preload images
    var links = $("#menu_images").querySelectorAll("a");

    for (let link of links) {
        const image = new Image();
        image.src = link.href;
    }

    // attach mouseover and mouseout events for each image
    for ( let link of links) {
        espresso.addEventListener("mouseover", () => {
            espresso.src = "images/espresso_info.jpg";
        });
        espresso.addEventListener("mouseout", () => {
            espresso.src = "images/espresso.jpg";
        });
        latte.addEventListener("mouseover", () => {
            latte.src = "images/latte_info.jpg";
        });
        latte.addEventListener("mouseout", () => {
            latte.src = "images/latte.jpg";
        }); 
        cappuccino.addEventListener("mouseover", () => {
            cappuccino.src = "images/cappuccino_info.jpg";
        });
        cappuccino.addEventListener("mouseout", () => {
            cappuccino.src = "images/cappuccino.jpg";
        });
        coffee.addEventListener("mouseover", () => {
            coffee.src = "images/coffee_info.jpg";
        });
        coffee.addEventListener("mouseout", () => {
            coffee.src = "images/coffee.jpg";
        }); 
        biscotti.addEventListener("mouseover", () => {
            biscotti.src = "images/biscotti_info.jpg";
        });
        biscotti.addEventListener("mouseout", () => {
            biscotti.src = "images/biscotti.jpg";
        });
        scone.addEventListener("mouseover", () => {
            scone.src = "images/scone_info.jpg";
        });
        scone.addEventListener("mouseout", () => {
            scone.src = "images/scone.jpg";
        });         
    }

    // attach click events to add an item to the select element and add the amount to the total 
    espresso.addEventListener('click', () => {
        const option = new Option('$1.95 - Espresso');
        orderBox.add(option,undefined);
        total = total + 1.95;
    })
    latte.addEventListener('click', () => {
        const option = new Option('$2.95 - Latte ');
        orderBox.add(option,undefined);
        total = total + 2.95;
    })
    cappuccino.addEventListener('click', () => {
        const option = new Option('$3.45 - Cappuccino');
        orderBox.add(option,undefined);
        total = total + 3.45;
    })
    coffee.addEventListener('click', () => {
        const option = new Option('$1.75 - Coffee');
        orderBox.add(option,undefined);
        total = total + 1.75;
    })
    biscotti.addEventListener('click', () => {
        const option = new Option('$1.95 - Biscotti');
        orderBox.add(option,undefined);
        total = total + 1.95;
    })
    scone.addEventListener('click', () => {
        const option = new Option('$2.95 - Scone');
        orderBox.add(option,undefined);
        total = total + 2.95;
    })

    // adds click event to the place order button to display the total of the order
    place.addEventListener('click', () => {
        $("#total").innerHTML = "Total: $" + (total).toFixed(2);
    })

    // adds click event to the clear order button to clear the selection box, remove the total display, and set total to 0
    clear.addEventListener('click', () => {
        let index = orderBox.options.length;
        while (index--) {
            orderBox.remove(index);
        }
        total = 0;
        $("#total").innerHTML = "";
    })

});


