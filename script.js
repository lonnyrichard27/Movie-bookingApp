const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

// update the total price and number of seats ('count')
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    // get the length of the nodelist and reflecting it on our view 
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// movie select event
movieSelect.addEventListener('change', (e ) => {
    //  the '+' sign here is converting that value to a number
    ticketPrice = +e.target.value;
    updateSelectedCount()
})
container.addEventListener('click', (e) => {
    // checking if seats are occupied 
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        // this toggle function allows you to unselect stuff youve clicked 
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
})