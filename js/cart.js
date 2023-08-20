document.getElementById('card-1').addEventListener('click', function() {
    const getProductName = document.getElementById('product-1-name');
    const productName = getProductName.innerText;

    const getProductPrice = document.getElementById('product-1-price');
    const productPrice = parseFloat(getProductPrice.innerText);

    const productList = document.getElementById('product-list');
    const count = productList.childElementCount;
    const p = document.createElement('p');
    p.classList.add('mb-1');
    p.innerText = `${count + 1}. ${productName}`;
    productList.appendChild(p);

    const totalPriceElement = document.getElementById('total-price');
    const previousTotalPrice = parseFloat(totalPriceElement.innerText);

    const newTotalPrice = previousTotalPrice + productPrice;

    totalPriceElement.innerText = newTotalPrice.toFixed(2);

    if(totalPriceElement > 0) {
        document.getElementById
    }
});

document.getElementById('card-2').addEventListener('click', function() {
    const getProductName = document.getElementById('product-2-name');
    const productName = getProductName.innerText;

    const getProductPrice = document.getElementById('product-2-price');
    const productPrice = parseFloat(getProductPrice.innerText);

    const productList = document.getElementById('product-list');
    const count = productList.childElementCount;
    const p = document.createElement('p');
    p.classList.add('mb-1');
    p.innerText = `${count + 1}. ${productName}`;
    productList.appendChild(p);

    const totalPriceElement = document.getElementById('total-price');
    const previousTotalPrice = parseFloat(totalPriceElement.innerText);

    const newTotalPrice = previousTotalPrice + productPrice;

    totalPriceElement.innerText = newTotalPrice.toFixed(2);
});

document.getElementById('card-3').addEventListener('click', function() {
    const getProductName = document.getElementById('product-3-name');
    const productName = getProductName.innerText;

    const getProductPrice = document.getElementById('product-3-price');
    const productPrice = parseFloat(getProductPrice.innerText);

    const productList = document.getElementById('product-list');
    const count = productList.childElementCount;
    const p = document.createElement('p');
    p.classList.add('mb-1');
    p.innerText = `${count + 1}. ${productName}`;
    productList.appendChild(p);

    const totalPriceElement = document.getElementById('total-price');
    const previousTotalPrice = parseFloat(totalPriceElement.innerText);

    const newTotalPrice = previousTotalPrice + productPrice;

    totalPriceElement.innerText = newTotalPrice.toFixed(2);
});

document.getElementById('card-4').addEventListener('click', function() {
    const getProductName = document.getElementById('product-4-name');
    const productName = getProductName.innerText;

    const getProductPrice = document.getElementById('product-4-price');
    const productPrice = parseFloat(getProductPrice.innerText);

    const productList = document.getElementById('product-list');
    const count = productList.childElementCount;
    const p = document.createElement('p');
    p.classList.add('mb-1');
    p.innerText = `${count + 1}. ${productName}`;
    productList.appendChild(p);

    const totalPriceElement = document.getElementById('total-price');
    const previousTotalPrice = parseFloat(totalPriceElement.innerText);

    const newTotalPrice = previousTotalPrice + productPrice;

    totalPriceElement.innerText = newTotalPrice.toFixed(2);
});

document.getElementById('card-5').addEventListener('click', function() {
    const getProductName = document.getElementById('product-5-name');
    const productName = getProductName.innerText;

    const getProductPrice = document.getElementById('product-5-price');
    const productPrice = parseFloat(getProductPrice.innerText);

    const productList = document.getElementById('product-list');
    const count = productList.childElementCount;
    const p = document.createElement('p');
    p.classList.add('mb-1');
    p.innerText = `${count + 1}. ${productName}`;
    productList.appendChild(p);

    const totalPriceElement = document.getElementById('total-price');
    const previousTotalPrice = parseFloat(totalPriceElement.innerText);

    const newTotalPrice = previousTotalPrice + productPrice;

    totalPriceElement.innerText = newTotalPrice.toFixed(2);
});

document.getElementById('card-6').addEventListener('click', function() {
    const getProductName = document.getElementById('product-6-name');
    const productName = getProductName.innerText;

    const getProductPrice = document.getElementById('product-6-price');
    const productPrice = parseFloat(getProductPrice.innerText);

    const productList = document.getElementById('product-list');
    const count = productList.childElementCount;
    const p = document.createElement('p');
    p.classList.add('mb-1');
    p.innerText = `${count + 1}. ${productName}`;
    productList.appendChild(p);

    const totalPriceElement = document.getElementById('total-price');
    const previousTotalPrice = parseFloat(totalPriceElement.innerText);

    const newTotalPrice = previousTotalPrice + productPrice;

    totalPriceElement.innerText = newTotalPrice.toFixed(2);
});