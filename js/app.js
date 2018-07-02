document.addEventListener("DOMContentLoaded",function(){
    const catOne = document.querySelector('.cat-img-one');
    const catTwo = document.querySelector('.cat-img-two');
    const numberOne = document.querySelector('.clicks-number-one');
    const numberTwo = document.querySelector('.clicks-number-two');
    let firstName = document.querySelector('.first-name');
    let secondName = document.querySelector('.second-name');
    let clickOne = 0; //number of clicks
    let clickTwo = 0; //number of clicks

    firstName.textContent = "Bonifacy";
    secondName.textContent = "Filemon";

    catOne.addEventListener('click', function() {
       clickOne += 1;
       numberOne.textContent = clickOne + " clicks";
    });

    catTwo.addEventListener('click', function() {
        clickTwo += 1;
        numberTwo.textContent = clickTwo + " clicks";
    });
});

