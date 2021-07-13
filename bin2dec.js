function bin2dec(bin){
    let digit = parseInt(bin, 2)
    alert("Digit: "+digit)
}
bin2dec(prompt("Enter the desired binary: "))

function dec2bin(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    alert("Binary: "+bin);
}
dec2bin(prompt("Enter the desired number: "));