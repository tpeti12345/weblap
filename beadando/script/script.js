document.getElementById('eredmeny').addEventListener('click', bead);

function bead() {
    const elso = document.querySelector('input[name="elso"]:checked'); 
    const masodik = document.querySelector('input[name="masodik"]:checked');
    if (!elso || !masodik) {
        alert("Kérlek válassz egy autó márkát és egy rally csoportot!");
        return;
    }
    let pont = pontok(elso.value, masodik.value);
    let jopont = Math.round(pont)
    document.getElementById('vege').innerHTML = `<p><strong>Pontjaid Száma: </strong>${jopont}</p>`;
}

function pontok(marka, csoport) {
    let pont = 0;
    
    if (marka == 'C' && csoport == 'C') { //Ford + Group N
        pont += 10;
    } else if (marka == 'A' && csoport == 'B') { // Audi + Group B
        pont += 10;
    } else if (marka == 'B' && csoport == 'A') { //Hyundai + WRC
        pont += 10;
    }

    if (marka == 'B' && csoport == 'B') { // Hyundai + Group B
        pont -= 5;
    } else if (marka == 'A' && csoport == 'A') { // audi+ WRC
        pont -= 5;
    }
    
    let lero = document.getElementById('loero');
    let ero = parseInt(lero.value);
    let hibauz = document.getElementById('hiba');
    let max = 0;
    
    switch (csoport) {
        case 'A': // WRC
            max = 400;
            break;
        case 'B': //Group b
            max = 99999;
            break;
        case 'C': // group N
            max = 250;
            break;
    }
    if (ero > max) {
        hibauz.textContent = "A választott rally csoporthoz túl magas a lóerő! A maximális értéket a csoportok fül alatt találod!";
    } else {
        hibauz.textContent = "";
    }
    pont += ero / 100;
    
    return pont;
}
