document.getElementById('btn-apply').addEventListener('click', function() {
    const inputField = document.getElementById('input');
    const inputFieldValue = inputField.value;
    inputField.value = '';

    if(inputFieldValue == 'SELL200') {
        const totalPriceElement = document.getElementById('total-price');
        const totalPrice = parseFloat(totalPriceElement.innerText);

        const discountElement = document.getElementById('discount');
        const previousDiscount = parseFloat(discountElement.innerText);

        const newDiscount = previousDiscount + (totalPrice * (20/100));
        discountElement.innerText = newDiscount.toFixed(2);

        const totalElement = document.getElementById('total');
        const previousTotal = parseFloat(totalElement.innerText);

        const newTotal = previousTotal + (totalPrice - newDiscount);
        totalElement.innerText = newTotal.toFixed(2);
    }

    else {
        const totalPriceElement = document.getElementById('total-price');
        const totalPrice = parseFloat(totalPriceElement.innerText);

        const totalElement = document.getElementById('total');
        const previousTotal = parseFloat(totalElement.innerText);

        const newTotal = previousTotal + totalPrice;
        totalElement.innerText = newTotal.toFixed(2);
    }
});