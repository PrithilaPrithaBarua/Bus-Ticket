let result = 0;
let discount = 0;


function updateResult(value, buttonId) {
    const button = document.getElementById(buttonId);


    if (button.style.backgroundColor === 'green') {
        result -= value;
        button.style.backgroundColor = '';
    } else {
        result += value;
        button.style.backgroundColor = 'green';
    }


    // Ensure result is positive
    result = Math.max(result, 0);


    document.getElementById('result').textContent = result;
}












function applyCoupon() {
    const couponCodeInput = document.getElementById('couponCode');
    const applyButton = document.getElementById('applyButton');


    const enteredCoupon = couponCodeInput.value.trim().toLowerCase();


    if (enteredCoupon === 'new15') {
        // Apply 15% discount
        discount = 0.15;
    } else if (enteredCoupon === 'couple20') {
        // Apply 20% discount
        discount = 0.20;
    } else {
        // No coupon or invalid coupon entered
        discount = 0;
    }


    // Calculate discounted result
    const discountedResult = result - (result * discount);


    // Ensure discounted result is not negative
    result = Math.max(discountedResult, 0);


    document.getElementById('result').textContent = result;


    // Disable the Apply button after applying a coupon
    applyButton.disabled = true;
}

