// constantes---------------------------
const tab = ["grandiloquance", "autoregulation", "degenerescence", "stoechiometrie", "dogmatiquement", "interruptrices", "ambitieusement" ];
const buttonA = document.getElementById('1');
const buttonB = document.getElementById('2');
const buttonC = document.getElementById('3');
const buttonD = document.getElementById('4');
const buttonE = document.getElementById('5');
const buttonF = document.getElementById('6');
const buttonG = document.getElementById('7');
const buttonH = document.getElementById('8');
const buttonI = document.getElementById('9');
const buttonJ = document.getElementById('10');
const buttonK = document.getElementById('11');
const buttonL = document.getElementById('12');
const buttonM = document.getElementById('13');
const buttonN = document.getElementById('14');
const buttonO = document.getElementById('15');
const buttonP = document.getElementById('16');
const buttonQ = document.getElementById('17');
const buttonR = document.getElementById('18');
const buttonS = document.getElementById('19');
const buttonT = document.getElementById('20');
const buttonU = document.getElementById('21');
const buttonV = document.getElementById('22');
const buttonW = document.getElementById('23');
const buttonX = document.getElementById('24');
const buttonY = document.getElementById('25');
const buttonZ = document.getElementById('0');
const pendu1 = document.getElementById('pendu1');
const pendu2 = document.getElementById('pendu2');
const pendu3 = document.getElementById('pendu3');
const pendu4 = document.getElementById('pendu4');
const pendu5 = document.getElementById('pendu5');
const pendu6 = document.getElementById('pendu6');
const pendu7 = document.getElementById('pendu7');
const pendu8 = document.getElementById('pendu8');
const pendu9 = document.getElementById('pendu9');
const pendu10 = document.getElementById('pendu10');

let messageAffiche = document.getElementById("messageAffiche");
let messageAffiche2 = document.getElementById("messageAffiche2");
let nbrAleatoire ;
let motAleatoire ;
let compteurTentative ;
let affichageTentative = document.getElementById("nombreTentative");
let lettre;
let lettre2;
let tabAffiche = ["_","_","_","_","_","_","_","_","_","_","_","_","_","_"];
let tabMots ;
let i;
let bouton;
//evenement ------------------------------

document.querySelectorAll(".bouton").forEach(item =>{
    item.addEventListener('click', verification => {
        lettre = item.value;
        item.style.opacity=.2;
        item.disabled=true
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu! Le mot etait " + motAleatoire + " .";
            pendu9.style.display = "none";
            pendu10.style.display = "block";

        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    
                for (let i = 0 ; i < 14 ; i++){
                    if (motAleatoire[i] == lettre){
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot à trouver : " +  tabAffiche.join('');
                    }
                }
            }else {
                compteurTentative --;
                messageAffiche2.innerHTML=" Il vous reste " + compteurTentative + " tentatives!";
                switch ( compteurTentative){
                    case 9 : 
                    pendu1.style.display = "block";
                    break;
                    case 8 : 
                    pendu1.style.display = "none";
                    pendu2.style.display = "block";
                    break;
                    case 7 : 
                    pendu2.style.display = "none";
                    pendu3.style.display = "block";
                    break;
                    case 6 : 
                    pendu3.style.display = "none";
                    pendu4.style.display = "block";
                    break;
                    case 5 : 
                    pendu4.style.display = "none";
                    pendu5.style.display = "block";
                    break;
                    case 4 : 
                    pendu5.style.display = "none";
                    pendu6.style.display = "block";
                    break;
                    case 3 : 
                    pendu6.style.display = "none";
                    pendu7.style.display = "block";
                    break;
                    case 2 : 
                    pendu7.style.display = "none";
                    pendu8.style.display = "block";
                    break;
                    case 1 : 
                    pendu8.style.display = "none";
                    pendu9.style.display = "block";
                    break;
                }
            }
        }
    })
})


//function------------------------------

    // function generer un chiffre
    function genererUnChiffre(valeurMax) {
        return Math.floor(Math.random() * Math.floor(valeurMax));
    };
        // random valeur tab
        nbrAleatoire =  genererUnChiffre(6);
        // choisir nom
        motAleatoire = tab[nbrAleatoire];
        // compteur 
        compteurTentative = 10;
        // afficher -
        messageAffiche.innerHTML="le mot à trouver : " +  tabAffiche;
//function------------------
 tabMots = motAleatoire.split("");



