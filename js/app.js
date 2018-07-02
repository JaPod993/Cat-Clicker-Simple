document.addEventListener("DOMContentLoaded",function(){

    let cats = {
        cat : document.querySelectorAll('.cats'),
        clicks : document.querySelectorAll('.clicks'),
        name : document.querySelectorAll('.cat-name'),
        click : 0
    };

    cats.name[0].textContent = "Bonifacy";
    cats.name[1].textContent = "Filemon";

    for(let i = 0; i<=1; i++){
        cats.cat[i].addEventListener('click', (function (clickCopy) {
            return function() {
                clickCopy += 1;
                cats.clicks[i].textContent = clickCopy + " clicks";
            };
        })(cats.click));
    }
});
