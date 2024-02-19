// console.log('connected yes') ;

const seats = document.querySelectorAll('.seat') ;
// console.log(seats) ;

let totalSeat = 40 ;
let seatCounter = 0 ;
let totalPrice = 0 ;
for(let i=0 ;i<seats.length ;i++){
    const seat = seats[i];
    // console.log(seat) ;
    seat.addEventListener('click',function(event){
        // console.log('click') ;
        const seatName = seat.querySelector('span').innerText ;
        // console.log(seatName) ;

        // set bg color
        event.target.style.backgroundColor = '#1DD100';
       
        const seatNameContainer = document.getElementById('seatName-container') ;

        const p = document.createElement('p') ;
        p.innerText = seatName + " " + 'Economoy' + ' ' + '550' ;
        seatNameContainer.appendChild(p);
        seatCounter++ ;
        totalSeat-- ;

        totalPrice+=550 ;
        // console.log(totalPrice) ;
        document.getElementById('seat-counter').innerText = seatCounter ;
        document.getElementById('total-seat').innerText = totalSeat ;
        document.getElementById('total-price').innerText = 'BDT' + ' ' + totalPrice ;
    });
}


const applyBtn = document.getElementById('apply-btn') ;

applyBtn.addEventListener('click', function(){
    // console.log('clicked') ;

    // get the value from input
    // const couponElement = document.getElementById('input-field').value ;
    // const couponCode = couponElement.split(' ').join('').toUpperCase(); 
    // console.log(couponCode) ;
    const couponCode = document.getElementById('input-field').value ;
    // const couponCode = couponElement.split(' ').join('').toUpperCase(); 
    console.log(couponCode) ;
    
    
    if(totalPrice > 0 && totalPrice <= 2200){
        if(couponCode == 'NEW15'){
            // console.log( totalPrice) ;
            const discountElement = document.getElementById('discount-price') ;
            // console.log(discountElement) ;
            const discountAmount = totalPrice * 0.15 ;
            discountElement.innerText = discountAmount.toFixed(2) ;
            // console.log(discountAmount) ;
            const restTotal = totalPrice - discountAmount ;
            const total = document.getElementById('grand-total') ;
            total.innerText = 'BDT' + ' ' + restTotal.toFixed(2) ;
            document.getElementById('input-field').value ='' ;
            
        }
        else if(couponCode == 'Couple 20'){
            // console.log( totalPrice) ;
            // const discountElement = document.getElementById('discountPrice') ;
            // console.log(discountElement) ;
            const discountAmount = totalPrice * 0.2 ;
            // discountElement.innerText = discountAmount.toFixed(2) ;
            // console.log(discountAmount) ;
            const restTotal = totalPrice - discountAmount ;
            const total = document.getElementById('grand-total') ;
            total.innerText = 'BDT' + ' ' + restTotal.toFixed(2) ;
            document.getElementById('input-field').value ='' ;
            
        }
        else{
            alert('Invalid Coupon Code') ;
            document.getElementById('input-field').value ='' ;
        }
    }
    else{
        alert('Please select minimum 1 and maximum 4 seat') ;
        document.getElementById('input-field').value ='' ;
    }
});


function click(){
    const fullSite = document.getElementById('full-site');
    fullSite.classList.add("hidden") ;

    const successSection = document.getElementById('success');
    successSection.classList.remove("hidden"); 
}

