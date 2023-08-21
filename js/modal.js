document.getElementById('btn-home').addEventListener('click', function() {
    const productListElement = document.getElementById('product-list');
    const productList = productListElement.innerText;
    productListElement.innerText = '';

    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = totalPriceElement.innerText;
    totalPriceElement.innerText = '0.00';

    const discountElement = document.getElementById('discount');
    const previousDiscount = discountElement.innerText;
    discountElement.innerText = '0.00';

    const totalElement = document.getElementById('total');
    const previousTotal = totalElement.innerText;
    totalElement.innerText = '0.00';
});