function reverseString() {
    var input = document.querySelector('.js-stringinput');
    var string = input.value;
    let newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    const el = document.querySelector('.output-revString');
    el.textContent = `Reversed: ${newString}`;
}

function palindrome() {
    var givenNum = Number(document.querySelector('.js-number-pl').value);
    let revNum = 0;
    let temp = givenNum;
    while (temp != 0) {
        var digit = temp % 10;
        revNum = revNum * 10 + digit;
        temp = Math.floor(temp / 10);
    }
    var result = givenNum === revNum ? 'Palindrome ✓' : 'Not a Palindrome ✗';
    document.querySelector('.palindromeOrNOT').innerHTML = `The number is: <strong>${result}</strong>`;
}

function cal() {
    const tot = Number(document.querySelector('.js-total').value);
    const tips = Number(document.querySelector('.js-tips').value);
    const grandTotal = tot + (tips / 100) * tot;
    document.querySelector('.js-output-resturant').innerHTML = `Total with tip: <strong>$${grandTotal.toFixed(2)}</strong>`;
}
