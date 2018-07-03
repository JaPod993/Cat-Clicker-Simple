document.addEventListener("DOMContentLoaded",function(){

    let cats = {
        clicks : document.querySelectorAll('.clicks'),
        name : document.querySelectorAll('.cat-name'),


        names : ["Bonifacy", "Filemon", "Pankracy", "Mruczek", "Tygrysek"],
        files : ["cat1", "cat2", "cat3", "cat4", "cat5"],
        click : 0,
        list : document.querySelector('.cats-list'),
        clickedCat : document.querySelector('.cat-clicker'),
        fragment : document.createDocumentFragment(),
        cat : document.querySelectorAll('.list')
    };

    //creating list of cats
    function list() {
        cats.names.forEach(function (value) {
            let kitty = document.createElement('p');
            kitty.classList = 'list';
            let singleCatList = value;
            kitty.innerHTML = singleCatList;
            cats.fragment.appendChild(kitty);
        });

        cats.list.appendChild(cats.fragment);
        cats.fragment.innerHTML ='';
    }
    list();

    //creating cats
    function kittens() {
        cats.files.forEach(function (value, index) {
            let kitty = document.createElement('div');
            kitty.classList = 'kitty-wrapper'+ index;
            let singleCat = '<p class="cat-name">' + cats.names[index] +'</p><img src="images/' + value + '.jpg" alt="cat" class="cats"><p class="clicks">0 clicks</p>';
            kitty.innerHTML = singleCat;
            cats.fragment.appendChild(kitty);
        });
        cats.clickedCat.appendChild(cats.fragment);
    }
    kittens();

    // event for clicking cats
    cats.cat.forEach(function (value) {
       value.addEventListener('click', function () {
           kotek();
       });
    });
});
