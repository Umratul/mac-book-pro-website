// memory function
function updateMemoryCost(memoryIs8gb) {
    const extraMemory = document.getElementById('extra-memory');
    const extraMemoryCost = extraMemory.innerText;
    if (memoryIs8gb)
    {
        extraMemory.innerText = 0; 
    }
    else {
        extraMemory.innerText = 180;
    }
    calculateTotalCost();
    return extraMemoryCost;
}

// storage function
function updateStorageCost(storage) {
    const extraStorage = document.getElementById('extra-storage');
    const extraStorageCost = extraStorage.innerText;
    if (storage==256) {
        extraStorage.innerText = 0;
    }
    else if (storage == 512) {
        extraStorage.innerText = 100;
    }
    else if (storage == 1000) {
        extraStorage.innerText = 180;
    }
    calculateTotalCost();
}

// delivery function
function updateDeliveryCharge(charge) {
    const deliveryCharge = document.getElementById('delivery-charge');
    const extraDelivery = deliveryCharge.innerText;
    if (charge == true) {
        deliveryCharge.innerText = 0;
        
    }
    else {
        deliveryCharge.innerText = 20;
    }  
    calculateTotalCost();
}


// total price function
function calculateTotalCost() {
    const bestPrice = document.getElementById('best-price').innerText;
    const extraMemoryPrice = document.getElementById('extra-memory').innerText;
    const extraStoragePrice = document.getElementById('extra-storage').innerText;
    const extraDeliveryPrice = document.getElementById('delivery-charge').innerText;

    const finalTotalPrice = parseFloat(bestPrice) + parseFloat(extraMemoryPrice) + parseFloat(extraStoragePrice) + parseFloat(extraDeliveryPrice);

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = finalTotalPrice;
    return finalTotalPrice;
    
}
        // promo code function
 function promoCode() {   
    const inputField = document.getElementById('promo-code');
    const codeInput = inputField.value;
    if (codeInput == 'stevekaku') {
        let totalCost = calculateTotalCost();
        
        totalCost = totalCost - totalCost * .2;
        document.getElementById('afterDiscount-price').innerText = totalCost;
        inputField.value = '';
    }
}

    // memory
document.getElementById('btn-8gb-memory').addEventListener('click', function () {
    // const extraMemory = document.getElementById('extra-memory');
    // const extraMemoryCost = extraMemory.innerText;
    // extraMemory.innerText = 0;    
    updateMemoryCost(true);
});

document.getElementById('btn-16gb-memory').addEventListener('click', function () {
    // const extraMemory = document.getElementById('extra-memory');
    // const extraMemoryCost = extraMemory.innerText;
    // extraMemory.innerText =180;
    
    updateMemoryCost(false);
});

            // storage
    document.getElementById('btn-256gb-storage').addEventListener('click', function () {
    // const extraStorage = document.getElementById('extra-storage');
    // const extraStorageCost = extraStorage.innerText;
        // extraStorage.innerText = 0;
        updateStorageCost(256);

});
    document.getElementById('btn-512gb-storage').addEventListener('click', function () {
    // const extraStorage = document.getElementById('extra-storage');
    // const extraStorageCost = extraStorage.innerText;
    //     extraStorage.innerText = 100;
    updateStorageCost(512);
});
    document.getElementById('btn-1TB-storage').addEventListener('click', function () {
    // const extraStorage = document.getElementById('extra-storage');
    // const extraStorageCost = extraStorage.innerText;
    //     extraStorage.innerText = 180;
        updateStorageCost(1000);
    });

        // delivery charge
    document.getElementById('btn-free-delivery').addEventListener('click', function () {
        // const deliveryCharge = document.getElementById('delivery-charge');
        // const extraDelivery = deliveryCharge.innerText;
        // deliveryCharge.innerText = 0;
        updateDeliveryCharge(true);
    });

    document.getElementById('btn-delivery-charge').addEventListener('click', function () {
        // const deliveryCharge = document.getElementById('delivery-charge');
        // const extraDelivery = deliveryCharge.innerText;
        //     deliveryCharge.innerText = 180;
        updateDeliveryCharge(false);
});
  
 //apply for promo code
document.getElementById('apply-btn').addEventListener('click', function () {
    promoCode();
    });
