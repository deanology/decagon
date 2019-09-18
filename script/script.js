
// (function startapp() {
//     fetch('http://localhost:3000/Scratch-Cards').then((response) => response.json()).then((res) => console.log(res));
//  })();

document.querySelector('.generatebtn').addEventListener('click', function(e){
    const a = Math.floor(Math.random()*1E16);
    document.querySelector('.serial-number').innerHTML += a;
})
document.querySelector('.generatebtn').addEventListener('click', function(e){
    const b = Math.floor(Math.random()*1E16);
    document.querySelector('.pin').innerHTML += b;
})
