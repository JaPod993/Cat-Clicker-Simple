document.addEventListener("DOMContentLoaded",function(){

    let cats = {
        names : ["Bonifacy", "Filemon", "Pankracy", "Mruczek", "Tygrysek"],
        files : ["cat1", "cat2", "cat3", "cat4", "cat5"],
        click : 0,
        list : document.querySelector('.cats-list'),
        clickedCat : document.querySelector('.cat-clicker'),
        fragment : document.createDocumentFragment(),
        cat : document.querySelectorAll('.list'),
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
            kitty.classList = 'kitty-wrapper';
            let singleCat = '<p class="cat-name">' + cats.names[index] +'</p><img src="images/' + value + '.jpg" alt="cat" class="cats"><p class="clicks">0 clicks</p>';
            kitty.innerHTML = singleCat;
            kitty.style.display = 'none';
            cats.fragment.appendChild(kitty);
        });
        cats.clickedCat.appendChild(cats.fragment);

    }
    kittens();



    let catImages = document.querySelectorAll('.cats');
    let kociaLista = document.querySelectorAll('.list');
    let wrapper = document.querySelectorAll('.kitty-wrapper');
    let clicks = document.querySelectorAll('.clicks');
    kociaLista[0].classList.add('active');
    wrapper[0].style.display = 'block';


    //listening and counting cat clicks
    catImages.forEach (function (value, index) {
        value.addEventListener('click', (function(clicker) {
            return function () {
                clicker += 1;
                clicks[index].innerHTML = clicker + ' clicks';
            };
        })(cats.click));
    });

    // event for clicking cats
    kociaLista.forEach(function (value, index) {
       value.addEventListener('click', function () {
           for(let i=0; i<5; i++){
               wrapper[i].style.display = 'none';
               kociaLista[i].classList.remove('active');
           }
           wrapper[index].style.display = 'block';
           kociaLista[index].classList.add('active');
       });
    });
});
