let lista = [];
let oteloszt = [];

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 20; i++) {
        lista.push(Math.floor(Math.random() * 30) + 1)
    }
    oteloszt = lista.filter(e => e%5==0);
    for (let i = 0; i < oteloszt.length; i++) {
        console.log(oteloszt[i]);
    }
});