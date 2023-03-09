
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}
const resultEl = document.getElementById("result");
const lowerEl = document.getElementById("lowercase");
const upperEl = document.getElementById("uppercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");

let ranData ={
     lower : getRandomLower,
     upper : getRandomUpper,
     number : getRandomNumber,
     symbol : getRandomsymbols
};

generateEl.addEventListener('click',() => {
   const lowerBag = lowerEl.Checked;
   console.log(lowerBag)
})



function getRandomLower(){
    const lowCase = "abcdefghijklmnopqrstuvwxyz";
    return lowCase[Math.floor(Math.random()* lowCase.length)];
}
function getRandomUpper(){
    const bigCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return bigCase[Math.floor(Math.random()* bigCase.length)];
   

}
function getRandomNumber(){
    const numCase = "1234567890";
    return numCase[Math.floor(Math.random()* numCase.length)];
  
}
function getRandomsymbols(){
    const symbolCase = "~!@#$%^&*()_+";
    return symbolCase[Math.floor(Math.random()* symbolCase.length)];
  
}
console.log(getRandomsymbols())



