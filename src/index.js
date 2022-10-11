let lista = [];
let oteloszt = [];
for (let i = 0; i < 20; i++) {
    lista.push(Math.floor(Math.random() * 30) + 1)
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('kivalogat').addEventListener('click', () => {
    oteloszt = lista.filter(e => e%5==0);
    console.log(oteloszt);
    });
    document.getElementById('hozzad').addEventListener('click', () => {
        let szam = parseInt(document.getElementById('szam').value);
        lista.push(szam);
    }); 
});

class Szazlabu{
    #labakszama;
    constructor(labakszam){
        this.labakSzama = labakszam;
    }
    toString(){
        return this.labakszama+" lábú százlábú";
    }
    static labakbolSzazlabuk(t = []){
        return t.map(e => new Szazlabu(e));
    }   
}