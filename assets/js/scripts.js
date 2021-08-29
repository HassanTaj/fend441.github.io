// JSON
// Java Script Object Notation

// variable naming convention in javascript is camelCase

// var person = {
//     name:'Ali',
//     age: 30,
//     gender:'Male',
//     isMarried: false,
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.gender);

// console.log(person.isMarried);
// person.isMarried = true;
// console.log(person.isMarried);

// var carouselList = [
//     {
//         imageUrl: './assets/img/carousel_1.png',
//         imageAlt: 'Carousel Image 1',
//         description: 'lorem ipsum',
//         title: 'Banner 1'
//     },
//     {
//         imageUrl: './assets/img/carousel_2.jpg',
//         imageAlt: 'Carousel Image 2',
//         description: 'lorem ipsum',
//         title: 'Banner 2'
//     },
//     {
//         imageUrl: './assets/img/carousel_3.png',
//         imageAlt: 'Carousel Image 3',
//         description: 'lorem ipsum',
//         title: 'Banner 3'
//     }
// ]



//#region Helper functions
function getCarouselItemTemplate(carouselItem, isActive) {
    // condition ? true case :  false case;
    return `<div class="carousel-item ${(isActive == true ? 'active' : '')}">
    <img src="${carouselItem.imageUrl}" class="d-block w-100" alt="${carouselItem.imageAlt}">
    <div class="carousel-caption d-none d-md-block">
        <h5>${carouselItem.title}</h5>
        <p>${carouselItem.description}</p>
    </div>
</div>`;
}
//#endregion Helper functions


//#region DOM script
$(function () {

    // dynamic data using simple array
    // let images = [];
    // for (const item of carouselList) {
    //     // console.log(item);
    //     images.push(getCarouselItemTemplate(item, (item.title == carouselList[0].title)));
    // }
    // $('.carousel-inner').html(images);

    // ajax
    $.ajax({
        url: 'data/carousel.json',
        method: 'GET'
    }).done(function (response) {
        // console.log(response);
        let data = response.data;
        let images = [];
        for (const item of data) {
            images.push(getCarouselItemTemplate(item, (item.title == data[0].title)));
        }
        // document.querySelector('.carousel-inner').innerHTML=images;
        $('.carousel-inner').html(images);
    })
        .fail(function (jqXhr, statusCode, error) {
            console.log('the web request failed.')
        });

    // implementing pixabay api
    var API_KEY = '22539635-ae5a4d97f7a17590532d8457a';
    var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent('mobile phone');

    $.ajax({
        url: URL,
        method: 'GET'
    }).done(HandleResponse)
      .fail(function (jqXhr, statusCode, error) { console.log("something went wrong.") });


    // console.log("before response");
    var endPoint = `https://pixabay.com/api/?key=${API_KEY}&q=`;
    $('.nav-link').click(function (event) {
        event.preventDefault();
        let loader = $('.loader');
        loader.removeClass('d-none');
        $('#responseOutlet').html('');

        let q = $(this).data('query');
        $.ajax({
            url: endPoint + encodeURIComponent(q),
            method: 'GET'
        }).done((res) => {
            loader.addClass('d-none');
            HandleResponse(res);
        }).fail((jqXhr, statusCode, error) => {
            console.table([jqXhr, statusCode, error]);
        })
    });

});

function HandleResponse(response) {
    // totalHits
    // hits
    // total
    console.log(response);
    // debugger
    if (response !== undefined && response !== null) {
        let htmlString = [];

        response.hits.forEach(hit => {
            let cardHtmlString = getProductTemplateString(hit);
            htmlString.push(cardHtmlString);
        });

        $('#responseOutlet').html(htmlString);

        initCart();
    }
}

function getProductTemplateString(item) {

    let imageUrl = item.imageURL;

    if (imageUrl == '' || imageUrl == undefined || imageUrl == null) {
        imageUrl = item.previewURL
    }

    if (imageUrl == '' || imageUrl == undefined || imageUrl == null) {
        imageUrl = item.largeImageURL;
    } else {
        // TODO: Add placeholder image
        // imageUrl = 'assets/img/placecholder.jpg';
    }

    return `<div class="col-3">
    <div class="card mb-3">
        <img class="img-fluid rounded-2 max200height" src="${imageUrl}" alt="${item.tags}">
        <div class="card-body px-2">
            <h5 class="card-title text-capitalize" style="font-size: 16px;">${item.tags}</h5>
            <p class="card-text" style="font-size: 14px;">
                <strong>Price</strong> 400$
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta id aspernatur iure! Commodi natus totam fugiat voluptate aspernatur placeat aperiam qui a eaque distinctio. Debitis?
                </p>
            </p>
            <div class="">
                <button class="btn btn-warning"><i class="fa fa-star"></i></button>
                <button class="btn btn-secondary">Buy <i class="fa fa-money-bill-wave-alt"></i></button>
                <button class="btn btn-primary addtocart" data-id="${item.id}" data-name="${item.tags}" data-image="${imageUrl}" data-price="400">Add To <i class="fa fa-cart-plus"></i></button>
            </div>
        </div>
    </div>
   </div>`;
}
function getCartItemTemplateString(ci) {
    return `<div class="col-6">
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${ci.imageUrl}" style="height:100%;min-height:105px;max-height:110px" class="img-fluid rounded-start" alt="${ci.name}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${ci.name}</h5>
                    <p class="card-text"><small class="text-muted">${ci.price}</small></p>
                </div>
            </div>
        </div>
    </div>
</div>`;
}

function initCart() {
    // add to cart
    $('.addtocart').click(function (event) {
        event.preventDefault();
        let item = $(this);
        // debugger
        let cartItem = {
            id: item.data('id'),
            name: item.data('name'),
            imageUrl: item.data('image'),
            price: item.data('price')
        };

        Cart.add(cartItem);

        let cartItems = Cart.getAll();
        let count = (!!cartItems && !!cartItems.length) ? cartItems.length : 0;
        $('.item-count-js').text(count);
    });

    let cartItems = Cart.getAll();
    // let count = (cartItems !== undefined && cartItems.length > 0) ? cartItems.length : 0;
    let count = (!!cartItems && !!cartItems.length) ? cartItems.length : 0;
    $('.item-count-js').text(count);

    if (count > 0) {
        let  cartItemStrings = [];
        cartItems.forEach(x => {
            cartItemStrings.push(getCartItemTemplateString(x));
        });
        $('#cartOutlet').html(cartItemStrings);
    }

    // clear cart 
    $('.clear-cart').click((e)=>{
        e.preventDefault();
        Cart.clear();
        $('#cartOutlet').html('');
    });
}

//#endregion DOM script