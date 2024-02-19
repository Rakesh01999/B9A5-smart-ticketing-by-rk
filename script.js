// Get a reference to the button element
const button = document.getElementById("btn");

// Disable the button
button.disabled = true;

// console.log('connected yes') ;

const seats = document.querySelectorAll('.seat');
// console.log(seats) ;

let totalSeat = 40;
let seatCounter = 0;
let totalPrice = 0;
for (let i = 0; i < seats.length; i++) {
    const seat = seats[i];
    // console.log(seat) ;
    seat.addEventListener('click', function (event) {
        // console.log('click') ;
        const seatName = seat.querySelector('span').innerText;
        // console.log(seatName) ;

        seatCounter++;
        totalSeat--;

        totalPrice += 550;
        // set bg color
        if(seatCounter>4){
            alert('please select less than or equal to FOUR seat') ;
            return false ;
        }
        event.target.style.backgroundColor = '#1DD100';

        const seatNameContainer = document.getElementById('seatName-container');

        const p = document.createElement('p');
        p.innerText = seatName + " " + 'Economoy' + " " + '550';
        seatNameContainer.appendChild(p);
        
        
        // console.log(totalPrice) ;
        document.getElementById('seat-counter').innerText = seatCounter;
        document.getElementById('total-seat').innerText = totalSeat;
        document.getElementById('total-price').innerText = 'BDT' + ' ' + totalPrice;
        document.getElementById('grand-total').innerText = 'BDT' + ' ' + totalPrice;
        // const grandTotal = document.getElementById('grand-total') ;

        // check validation of stcntr & phnnmbr

        // Get the input element by its ID
        let phoneNumberInput = document.getElementById('number');
        
        // Check if the input field is non-empty when a form is submitted

        // Check if the value of the input field is empty
        if (seatCounter>=1 && phoneNumberInput.value.trim() != '') {
            // If empty, show an alert message
            // alert('Phone number field is required!');
            // Prevent the form from submitting
            // Enable the button
            button.disabled = false;
        }

    });
}

// let phoneNumberInput = document.getElementById('number');
//     if (seatCounter>=1 && seatCounter<=4 && phoneNumberInput.value.trim() != '') {
//         // Enable the button
//         button.disabled = false;
//     }
//     else {
//         alert('Please select minimum 1 and maximum 4 seat');
//         // document.getElementById('input-field').value = '';
//          // Disble the button
//          button.disabled = true;
//     }

var phoneNumberInput = document.getElementById('number');

    phoneNumberInput.addEventListener('blur', function() {
        if (phoneNumberInput.value.trim() === '') {
            alert('Phone number field is required!');
        }
        else{
            // Enable the button
            button.disabled = false;
        }
    });

const applyBtn = document.getElementById('apply-btn');

applyBtn.addEventListener('click', function () {
    // console.log('clicked') ;

    // get the value from input
    // const couponElement = document.getElementById('input-field').value ;
    // const couponCode = couponElement.split(' ').join('').toUpperCase(); 
    // console.log(couponCode) ;
    const couponCode = document.getElementById('input-field').value;
    // const couponCode = couponElement.split(' ').join('').toUpperCase(); 
    console.log(couponCode);


    if (totalPrice > 0 && totalPrice <= 2200) {
        if (couponCode == 'NEW15') {
            // console.log( totalPrice) ;
            const discountElement = document.getElementById('discount-price');
            // console.log(discountElement) ;
            const discountAmount = totalPrice * 0.15;
            discountElement.innerText = discountAmount.toFixed(2);
            // console.log(discountAmount) ;
            const restTotal = totalPrice - discountAmount;
            const total = document.getElementById('grand-total');
            total.innerText = 'BDT' + ' ' + restTotal.toFixed(2);
            document.getElementById('input-field').value = '';
            if (seatCounter>=1 && phoneNumberInput.value.trim() != '') {
                // Enable the button
                button.disabled = false;
            }
        }
        else if (couponCode == 'Couple 20') {
            // console.log( totalPrice) ;
            const discountElement = document.getElementById('discount-price');
            // console.log(discountElement) ;
            const discountAmount = totalPrice * 0.2;
            discountElement.innerText = discountAmount.toFixed(2);
            // console.log(discountAmount) ;
            const restTotal = totalPrice - discountAmount;
            const total = document.getElementById('grand-total');
            total.innerText = 'BDT' + ' ' + restTotal.toFixed(2);
            document.getElementById('input-field').value = '';
            if (seatCounter>=1 && phoneNumberInput.value.trim() != '') {
                // Enable the button
                button.disabled = false;
            }
        }
        else {
            alert('Invalid Coupon Code');
            document.getElementById('input-field').value = '';
        }
    }
    else {
        alert('Please select minimum 1 and maximum 4 seat');
        document.getElementById('input-field').value = '';
    }
});

// next-button
// const nextBtn = document.getElementById('btn');

//     // let phoneNumberInput = document.getElementById('number');
//     if (seatCounter>=1 && seatCounter<=4 && phoneNumberInput.value.trim() != '') {
//         // Enable the button
//         button.disabled = false;
//     }
//     else {
//         alert('Please select minimum 1 and maximum 4 seat');
//         // document.getElementById('input-field').value = '';
//          // Disble the button
//          button.disabled = true;
//     }



