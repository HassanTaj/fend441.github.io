//#region lecture 11 scripts
// global scope

// variables
var age = 18;

// case of string variables
// we can use  '', "", ``
let name = `Ali`

const isHuman = true;

// 
var country; // undefined, null
var sum = 1 + 2;
var sub = 1 - 2;
console.log(sum);
console.log(sub);

var div = 8 / 2;
console.log(div);

var btn = document.querySelector('.scriptBtn');

// arrow functions () => {}
if (btn !== undefined && btn !== null) {
    btn.addEventListener('click', (event) => {
        // console.log(event);
        // if(event.isDefaultPrevented)
        // event.preventDefault();
        // event.stopPropagation();

        var input = document.querySelector('.my-input');
        let myValue = input.value;
        // input.value = '';

        // run code here
        console.log(`Age: ${age}`);
        console.log(`Name: ${name}`);
        console.log(`Is A Human: ${isHuman}`);

        console.log('Country : ' + country);

        // conditionals 
        if (country == undefined) {
            country = 'Pakistan'
        }

        // backtick
        console.log(`Country : ${country}`);


        // strict equality
        // it checks for the condition and type as well.
        var isAgeANumber = isNaN(18); // is Not A Number, false
        console.log(isNaN('a')); // true

        if (isAgeANumber === false) {
            console.log(`Is Age A Number : ${isAgeANumber}`)
            if (age === 18) {
                console.log('welcome')
            } else {
                console.log(`Age Restricted`)
            }
        }

        // loops

        // while
        // let i = 0;
        // while (i != 10) {
        //     console.log(`Value of i : ${i}`);
        //     i++;
        // }

        // 
        // console.log('Do WHILE')
        // i = 0
        // do {
        //     console.log(`Value of i : ${i}`);
        //     i++;
        // } while (i < 10);

        // for;
        // for(a=0; a<10; a++){
        //     console.log(`Value of a : ${a}`);
        // }

        // arrays
        let fruits = [];
        fruits.push('Apple');
        fruits.push('Mango');
        fruits.push('Avacado');

        let countries = [
            'Pakistan',
            'China',
            'India'
        ];

        // fruits.forEach(fruit => {
        //     console.log(fruit);
        // });

        // for (let countryIndex in countries) {
        //     console.log(countryIndex);
        //     console.log(countries[countryIndex])
        // }

        // for (let c of countries) {
        //     console.log(c);
        // }

        // let brands = new Array();
        // brands.push(...[
        //     'Nike',
        //     'Addidas',
        //     'Boss',
        //     'CA',
        //     'EA Sports',
        // ]);
        // brands.forEach((element, index) => {
        //     console.log(element);
        // });
        // console.log(brands.length);
        // while(brands.length > 0){
        //     brands.pop();
        // }
        // console.log(`Brands Length After pop : ${brands.length}`);

        // brands.splice(brands.indexOf('CA'),1);

        // brands.splice(brands.indexOf('CA'),brands.length);
        // brands.splice(brands.indexOf('EA Sports'),1);
        // console.log(`After Splice`);
        // brands.forEach((element, index) => {
        //     console.log(element);
        // });


    });
}
//#endregion lecture 11 scripts

//#region lecture 12  calculator scripts

//  $()
//  jQuery()
// is called on document.ready
$(function () {
    // alert('hello')
    let inp1 = $('.num1-js');
    let inp2 = $('.num2-js');

    var sumBtn = $('.sum-btn');
    // arrow function
    sumBtn.click((event) => {
        // alert('sum is clicked')
        let sum = parseInt(inp1.val()) + parseInt(inp2.val());
        console.log(sum)
        if (isNaN(sum)) {
            $('#result').html(`<p class='text-danger'>please enter a number</p>`);
        } else {
            $('#result').html(`<p>${sum}</p>`);
        }
    });

    // anonymous function
    // (document.querySelector('.sub-btn')).addEventListener('click',(event)=>{

    // });

    $('.sub-btn').click(function (e) {

        let sub = subtract(parseInt(inp1.val()), parseInt(inp2.val()));

        $('#result').html(`<p>${sub}<p/>`);
    });

    $('.mult-btn').click(function (e) {
        let res = Calculator.Mul(parseInt(inp1.val()), parseInt(inp2.val()))
        $('#result').html(`<p>${res}<p/>`);
    });

    $('.div-btn').click(function (e) {
        let res = Calculator.Div(parseInt(inp1.val()), parseInt(inp2.val()))
        $('#result').html(`<p>${res}<p/>`);
    });

});
// document.ready = function(){
//     alert('hello again')
// };
//#endregion  calculator scripts