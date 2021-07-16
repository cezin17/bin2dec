const bin = document.getElementById('bin')
const btn = document.querySelector('button')
let result = document.getElementById('result')


btn.onclick = function(){
    bin2dec()
}

function bin2dec(){
    let digit = parseInt(bin.value, 2)
    console.log(digit)
}