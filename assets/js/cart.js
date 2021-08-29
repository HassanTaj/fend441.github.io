var Cart = function () {
    let cartKey = 'productCart';
    // id, name, image url, price
    function addToCart(item) {
        if (localStorage !== undefined) {
            let cart = getCart();
            // if (cart == 0) {
            //     cart.push(item);
            // } else {
            //     // get the product and update it's quantity and price
            // }
            cart.push(item);
            localStorage.setItem(cartKey, JSON.stringify(cart));
        } else {
            alert(`This browser doesn't support local Storage`);
        }
    }

    function getCart() {
        if (localStorage !== undefined) {
            let res = [];
            let cart = localStorage.getItem(cartKey);
            if(!!cart && !!cart.length){
                res = Array.from(JSON.parse(cart))
            }
            return res;
        } else {
            alert(`This browser doesn't support local Storage`);
        }
    }

    function getById(id) {
        if (localStorage !== undefined) {
            let cart = JSON.parse(localStorage.getItem(cartKey));
            let item = Array.from(cart).find(x => x.id == id);
            return item;
        } else {
            alert(`This browser doesn't support local Storage`);
        }
    }

    function clearCart(){
        if (localStorage !== undefined) {
            localStorage.removeItem(cartKey);
        } else {
            alert(`This browser doesn't support local Storage`);
        }
    }
    return {
        add: addToCart,
        getAll: getCart,
        get:getById,
        clear:clearCart
    }
}();