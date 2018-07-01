document.addEventListener("DOMContentLoaded",function(){
    const cat = document.querySelector('.cat-img');
    const number = document.querySelector('.clicks-number');
    let clicks = 0; //number of clicks

    cat.addEventListener('click', function() {
       clicks += 1;
       number.textContent = clicks + " clicks";
    });
});

