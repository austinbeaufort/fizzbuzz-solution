// BROWSER SOLUTION!
let fizzy = document.querySelector('.fizzy');
let fizzDoc = '';


for(let i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        fizzDoc += `<img src="https://i.ibb.co/VWMGVVt/FIZZBUZZ.png" width="150px" alt="FIZZBUZZ" border="0">
        ` ;
    } else if(i % 3 == 0) {
        fizzDoc += `<img src="https://i.ibb.co/dMTxX8H/COKE.png" width="40px" alt="COKE" border="0">
        `;
    } else if(i % 5 == 0) {
        fizzDoc += `<img src="https://i.ibb.co/9vDChWB/BUZZ.png" width="150px" alt="BUZZ" border="0">
        `;
    }
    else {
        fizzDoc += `${i}
        `;
    }
    fizzy.innerHTML = fizzDoc;
}


// ALSO SEE IT IN THE CONSOLE!
for(let i = 1; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
    } else if(i % 3 == 0) {
        console.log('Fizz');
    } else if(i % 5 == 0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}