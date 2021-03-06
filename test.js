// Memory Buttons
const memory8gb = document.getElementById('8gb');
const memory16gb = document.getElementById('16gb');

// Storage Buttons
const ssd256gb = document.getElementById('ssd-256gb');
const ssd512gb = document.getElementById('ssd-512gb');
const ssd1tb = document.getElementById('ssd-1tb');

// Delivery Option's Buttons
const freeDelivery = document.getElementById('free-delivery');
const expressDelivery = document.getElementById('express-delivery');

// Best Price Field
const bestPriceText = document.getElementById('best-price');

// Extra Memory Cost
const extraMemoryCost = document.getElementById('memory-cost');

// Extra Storaage Cost
const extraStorageCost = document.getElementById('storage-cost');

// Delivery Cost
const extraShippingCost = document.getElementById('delivery-charge');

// Price
const price = document.getElementById('price');

// Promo Code Section
const promoCode = document.getElementById('Promo');

// Promo Apply Button
const apply = document.getElementById('apply');

// Grand Total Field
const grandTotal = document.getElementById('grand-total');

// Active NonActive Function
function isContain(elem) {
    return elem.classList.contains('active');
}

// Promo Code
apply.addEventListener('click', function() {
    if (promoCode.value == 'stevekaku') {
        grandTotal.innerText = price.innerText * 0.8;
    } else {
        document.getElementById('invalid-promo-text').innerText = 'Invalid promocode!';
    }
})


// Update Total Function
function updateTotal() {
    const bestPrice = Number(bestPriceText.innerText);
    const memoryCost = Number(extraMemoryCost.innerText);
    const storageCost = Number(extraStorageCost.innerText);
    const deliveryCost = Number(extraShippingCost.innerText);
    const total = bestPrice + memoryCost + storageCost + deliveryCost;
    price.innerText = total;
    grandTotal.innerText = total;
}

// 8GB Unified Memory
memory8gb.addEventListener('click', function() {
    // Active or Non Active Check
    if (!isContain(memory8gb)) {
        memory8gb.classList.add('active');
        memory16gb.classList.remove('active');
    }
    // Add Extra Memory Cost
    extraMemoryCost.innerText = '0';
    // Update Price
    updateTotal()
})

// 16GB Unified Memory
memory16gb.addEventListener('click', function() {
    // Active or Non Active Check
    if (!isContain(memory16gb)) {
        memory8gb.classList.remove('active');
        memory16gb.classList.add('active');
    }
    // Add Extra Memory Cost
    extraMemoryCost.innerText = '180';
    // Update Price
    updateTotal()
})

// 256GB SSD Storage
ssd256gb.addEventListener('click', function() {
    // Active or Non Active Check
    if (!isContain(ssd256gb)) {
        ssd256gb.classList.add('active');
        ssd512gb.classList.remove('active');
        ssd1tb.classList.remove('active');
    }
    // Add Extra Storage Cost
    extraStorageCost.innerText = '0';
    // Update Price
    updateTotal()
})

// 512GB SSD Storage
ssd512gb.addEventListener('click', function() {
    // Active or Non Active Check
    if (!isContain(ssd512gb)) {
        ssd256gb.classList.remove('active');
        ssd512gb.classList.add('active');
        ssd1tb.classList.remove('active');
    }
    // Add Extra Storage Cost
    extraStorageCost.innerText = '100';
    // Update Price
    updateTotal()
})

// 1TB SSD Storage
ssd1tb.addEventListener('click', function() {
    // Active or Non Active Check
    if (!isContain(ssd1tb)) {
        ssd256gb.classList.remove('active');
        ssd512gb.classList.remove('active');
        ssd1tb.classList.add('active');
    }
    // Add Extra Storage Cost
    extraStorageCost.innerText = '180';
    // Update Price
    updateTotal()
})

// Free Prime Delivery
freeDelivery.addEventListener('click', function() {
    console.log('jdgfi');
    // Active or Non Active Check
    if (!isContain(freeDelivery)) {
        freeDelivery.classList.add('active');
        expressDelivery.classList.remove('active');
    }
    // Add Extra SHipping Cost
    extraShippingCost.innerText = '0';
    // Update Price
    updateTotal()
})

// Express Delivery
expressDelivery.addEventListener('click', function() {
    // Active or Non Active Check
    if (!isContain(expressDelivery)) {
        freeDelivery.classList.remove('active');
        expressDelivery.classList.add('active');
    }
    // Add Extra SHipping Cost
    extraShippingCost.innerText = '20';
    // Update Price
    updateTotal()
})