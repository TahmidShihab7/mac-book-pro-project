// Functions

// Adding Extra Price 
function priceAdd(costID, price) {
    const preCost = document.getElementById(costID);
    preCost.innerHTML = price;
    totalPrice();
    return preCost;
};

// Total Price Count 
function totalPrice() {
    const memoryCost = document.getElementById('memory-cost');
    const storageCost = document.getElementById('storage-cost');
    const deliveryCost = document.getElementById('delivery-cost');
    const preTotalPrice = document.getElementById('total-price');
    const totalPrice = 1299 + parseInt(memoryCost.innerText) + parseInt(storageCost.innerText) + parseInt(deliveryCost.innerText);
    preTotalPrice.innerHTML = totalPrice;
    const totalPriceFinal = document.getElementById('total-price-final');
    totalPriceFinal.innerHTML = totalPrice;
}

//  Calling Function By ID

function btnClicked(btnID, costID, price) {
    document.getElementById(btnID).addEventListener('click', function () {
        priceAdd(costID, price);
    });
};


// Functions Calling

btnClicked('memory-1', 'memory-cost', 0);
btnClicked('memory-2', 'memory-cost', 180);
btnClicked('storage-1', 'storage-cost', 0);
btnClicked('storage-2', 'storage-cost', 100);
btnClicked('storage-3', 'storage-cost', 180);
btnClicked('delivery-1', 'delivery-cost', 0);
btnClicked('delivery-2', 'delivery-cost', 20);





function finalPricePromo() {
    const promoField = document.getElementById('promo-field');
    const priceFinal = document.getElementById('total-price-final');
    const totalPrice = document.getElementById('total-price');
    const discount = parseInt(totalPrice.innerHTML) / 100 * 20;
    if (promoField.value == 'stevekaku') {
      const totalPriceFinalPromo = parseInt(totalPrice.innerHTML) - discount;
      priceFinal.innerHTML = totalPriceFinalPromo;
    }
    promoField.value = '';
};



// Applying Promo Code 

document.getElementById('promo-btn').addEventListener('click', function () {
finalPricePromo();
});


