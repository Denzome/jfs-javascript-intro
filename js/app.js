
let myNumber = 15;
if(typeof myNumber != 'number'){
    console.log('This is not a number');

}else if(myNumber%15 === 0){
        console.log('GenBuzz');
}else if(myNumber%3 === 0){
    console.log('Gen');
}else if(myNumber%5 === 0){
    console.log('Buzz');
}
else{
    console.log(myNumber);
}


//E-Commerce Item list

let items = 'shoes';
switch(items){
 case 'jeans':
    console.log('Jeans are $25');

break;

case 'Hat':
    console.log('Hat are $12');

break;

case 'Scoks':
    console.log('Hat are $2');

break;

default:
    console.log('Invalued item');

break;
}

//Print a random integer

let random = Math.floor(Math.random()*50)+50;
console.log(random);