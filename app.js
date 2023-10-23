var addbtn = document.getElementsByClassName("icon")
var item_number = document.querySelector("#item-value")
var cartIcon = document.querySelector(".cart")

var itemslist = [
    {
        name: "This was our pact",
        quantity: 0,
        dollars: 7,
        cents: 49,
    },
    {
        name: "The famous five",
        quantity: 0,
        dollars: 4,
        cents: 59,
    },
    {
        name: "Matilda",
        quantity: 0,
        dollars: 6,
        cents: 80,
    },
    {
        name: "Harry Potter",
        quantity: 0,
        dollars: 10,
        cents: 0,
    },
    {
        name: "For Young Readers",
        quantity: 0,
        dollars: 7,
        cents: 29,
    },
    {
        name: "Wimpy Kid - DIY",
        quantity: 0,
        dollars: 4,
        cents: 99,
    },
    {
        name: "Dart Board",
        quantity: 0,
        dollars: 17,
        cents: 49,
    },
    {
        name: "Connect Four",
        quantity: 0,
        dollars: 19,
        cents: 99,
    },
    {
        name: "Jenga",
        quantity: 0,
        dollars: 20,
        cents: 99,
    },
    {
        name: "Monopoly",
        quantity: 0,
        dollars: 19,
        cents: 49,
    },
    {
        name: "Bookmarks",
        quantity: 0,
        dollars: 12,
        cents: 49,
    },
    {
        name: "Birthday Card",
        quantity: 0,
        dollars: 12,
        cents: 49,
    },
    {
        name: "Stuffed toys",
        quantity: 0,
        dollars: 15,
        cents: 99,
    },
    {
        name: "Dream catcher drawing",
        quantity: 0,
        dollars: 18,
        cents: 49,
    },
];

for (let i = 0; i < addbtn.length; i++) {
    addbtn[i].addEventListener("click", () => {
        itemslist[i].quantity++;
        updateCart()
    })
}

function updateCart() {
    let cart = 0;
    for (let i = 0; i < addbtn.length; i++) {
        cart = cart + itemslist[i].quantity;
        item_number.textContent = cart;
    }
}

function updatePrice() {
    let totalPriceInCents = 0;

    for (i = 0; i < itemslist.length; i++) {
        totalPriceInCents =
            totalPriceInCents +
            itemslist[i].quantity * (itemslist[i].dollars * 100 + itemslist[i].cents);
    }
    finalDollars = Math.floor(totalPriceInCents / 100);
    finalCents = totalPriceInCents % 100;
}

cartIcon.addEventListener("click", finalOutput)

function finalOutput() {
    updatePrice()
    var text = "";
    for (let i = 0; i < itemslist.length; i++) {
        if (itemslist[i].quantity !== 0) {
            console.log("Item name:" + itemslist[i].name + " - Quantity: " + itemslist[i].quantity )
            text += "Item name:" + itemslist[i].name + " - Quantity: " + itemslist[i].quantity + " ; "; 
        }


    }
    console.log(
        "The total amount is " + finalDollars + "$ and " + finalCents + " cents")
    text += "The total amount is " + finalDollars + "$ and " + finalCents + " cents";
    window.open("https://wa.me/7670937152?text="+text)    
} 


