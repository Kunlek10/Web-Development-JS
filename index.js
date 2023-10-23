function cal() {
    var inputTot = document.querySelector('.js-total');
    var inputTips = document.querySelector('.js-tips');
    const tot = Number(inputTot.value);
    const tips = Number(inputTips.value);
    const grandTotal = tot + (tips/100) * tot;
    console.log(tot, tips, grandTotal);


document.querySelector('.js-output-resturant').innerHTML = `Total Cost after Tips= ${grandTotal}`;
}

function reverseString() {
    var string = document.querySelector('.js-stringinput');
    var string = string.value;
    let len = string.length
    var newString = "";
    for (i = len - 1; i >= 0; i--) {
        newString += string[i]

    document.querySelector('.output-revString').innerHTML = `Reversed string of: ${string} is: ${newString}`;
    }
}

function palindrome() {
    var givenNum = document.querySelector('.js-number-pl');
    var givenNum = Number(givenNum.value);
    let revNum = 0;
    let temp = givenNum;
    while (temp != 0) {
        var digit = temp % 10;
        revNum = revNum * 10 + digit;
        temp = Math.floor(temp / 10);
    }
    if (givenNum == revNum) {
        var result = 'Palindrome';
    } else {
        var result = 'Not Palindrome';
    }


    document.querySelector('.palindromeOrNOT').innerHTML = `the numner is: ${result}`;
}