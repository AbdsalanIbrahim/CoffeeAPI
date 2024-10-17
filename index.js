const orderForm = document.getElementById('order-form');
const orderSummary = document.getElementById('order-summary');

orderForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const coffee = document.getElementById('coffee').value;
    const size = document.getElementById('size').value;

    const orderItem = document.createElement('li');
    orderItem.textContent = `${name} (Phone: ${phone}, Address: ${address}) ordered a ${size} ${coffee}.`;
    orderSummary.appendChild(orderItem);
    orderForm.reset();
});

