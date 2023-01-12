
let screen = document.getElementById("scr");

// last(las) and latest(lat) variables for 2 whole numbers
let las = " ";
let lat = " ";
let result = " ";

// boolean to confirm the start of the second variable
let isSpace = false;
let operator = " ";

//for-loop to drive the function for integer-button press
for (let b = 0; b < 10; b++) {
    document.getElementById(b).onclick = function (){
        if (isSpace == false) {

            las = b + 10 * las;

        }
        else {

            lat = b + 10 * lat;
        }

        screen.innerText = las + " " + operator + " " + lat;
    }
}

//Functions for Mathematical operators

function plus() {
    operator = "+";
    isSpace = true;
    screen.innerText = las + " " + operator + " " + lat;

}

function minus() {
    operator = "-";
    isSpace = true;
    screen.innerText = las + " " + operator + " " + lat;
}

function multiply() {
    operator = "X";
    isSpace = true;
    screen.innerText = las + " " + operator + " " + lat;
}

function divide() {
    operator = "/";
    isSpace = true;
    screen.innerText = las + " " + operator + " " + lat;
}

function factorial() {
   
    operator = "!";
    screen.innerText = las + " " + operator + " " + lat;
}

function power() {
    operator = "^";
    isSpace = true;
    screen.innerText = las + " " + operator + " " + lat;
}

function binary() {
    operator = "BIN";
    screen.innerText = las + " " + operator + " " + lat;
}

function dec() {
    operator = "DEC";
    screen.innerText = las + " " + operator + " " + lat;
}

function decimal() {
    if (isSpace == false) {

        las = las * 1/10;

    }
    else {

        lat = lat * 1/10;

    }

    screen.innerText = las + " " + operator + " " + lat;

}

function backspace() {
    if (isSpace == false) {
        let unit = las % 10;

        las = las - unit;
        las = las / 10;
        

    }
    else {
        let unit = lat % 10;

        lat = lat - unit;
        lat = lat / 10;
        

    }

    screen.innerText = las + " " + operator + " " + lat;
}
function clear() {
    isSpace = false;
    las = result;
    lat = " ";
    operator = " ";
}
function equals() {

    if (operator == "+") {
        result = las + lat;
        screen.innerText = result;
        clear();
    }
    else if (operator == "-") {
        result = las - lat;
        screen.innerText = result;
        clear();
    }
    else if (operator == "X") {
        result = las * lat;
        screen.innerText = result;
        clear();
    }
    else if (operator == "!") {
        let factorial = 1;
        for (let i = las; i > 0; i--) {
            factorial = factorial * i;
        }
        screen.innerText = factorial;
        clear();
        las = factorial;
    }
    else if (operator == "^") { //as an alternative, you can also use the " ** " operator instead of using a loop
        let power = lat;
        result = 1;
        for (let i = 0; i < power; i++) {
            result = result * las;
        }
        screen.innerText = result;
        clear();
    }
    else if (operator == "BIN") { 

        let reversedBin = "";
        let decimalNum = las;
        let i = 0;
        
       

        while (decimalNum > 0) {
            if (decimalNum % 2 == 0) {
                reversedBin += "0";
                i++;
                decimalNum = Math.floor(decimalNum / 2);
                
            }
            else {
                reversedBin += "1";
                i++;
                decimalNum = Math.floor(decimalNum / 2);
                
            }
        }
        
        
        screen.innerText = reversedBin.split('').reverse().join('');
        clear();
        las = reversedBin.split('').reverse().join('');
       
    }
    else if (operator == "DEC") {  

        var binaryNum = las;
        var binaryNum2 = las;
        let decimalNum = 0;
        let i = 0;
        let isBin = true;
        while (binaryNum2 >= 1) {
            let remainder = binaryNum2 % 10;
            
            if (remainder != 0 && remainder != 1) {
                screen.innerText = "Please enter a valid binary number."
                isBin = false;
                break;
            }

            binaryNum2 = (binaryNum2 - remainder) / 10;
        }
        if (isBin == true) {
            while (binaryNum >= 1) {
                let remainder = binaryNum % 10;
                decimalNum += (remainder * Math.pow(2, i));
                i++;

                binaryNum = (binaryNum - remainder) / 10;

            }
            screen.innerText = decimalNum;
        }
    }
    else {
        result = las / lat;
        screen.innerText = result;
        clear();
    }
    
}

function dash() {
    las = " ";
    lat = " ";
    operator = " ";
    result = " ";
    isSpace = false;
    screen.innerText = "--MEMORY CLEARED--";
} 
