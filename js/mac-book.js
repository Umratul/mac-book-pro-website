document.getElementById('btn-8gb-memory').addEventListener('click', function () {
    const extraMemory = document.getElementById('extra-memory');
    const extraMemoryCost = extraMemory.innerText;
    extraMemory.innerText = 0;    
});

document.getElementById('btn-16gb-memory').addEventListener('click', function () {
    const extraMemory = document.getElementById('extra-memory');
    const extraMemoryCost = extraMemory.innerText;
    extraMemory.innerText =180;
    // console.log(extraMemoryCost);
});
            // storage
    document.getElementById('btn-256gb-storage').addEventListener('click', function () {
    const extraStorage = document.getElementById('extra-storage');
    const extraStorageCost = extraStorage.innerText;
        extraStorage.innerText = 0;
});
    document.getElementById('btn-512gb-storage').addEventListener('click', function () {
    const extraStorage = document.getElementById('extra-storage');
    const extraStorageCost = extraStorage.innerText;
        extraStorage.innerText = 100;
});
    document.getElementById('btn-1TB-storage').addEventListener('click', function () {
    const extraStorage = document.getElementById('extra-storage');
    const extraStorageCost = extraStorage.innerText;
        extraStorage.innerText = 180;
    });

        // delivery charge
    document.getElementById('btn-free-delivery').addEventListener('click', function () {
        const deliveryCharge = document.getElementById('delivery-charge');
        const extraDelivery = deliveryCharge.innerText;
            deliveryCharge.innerText = 0;
    });

    document.getElementById('btn-delivery-charge').addEventListener('click', function () {
        const deliveryCharge = document.getElementById('delivery-charge');
        const extraDelivery = deliveryCharge.innerText;
            deliveryCharge.innerText = 180;
});
            
            