// constantes---------------------------
const tab = ["grandiloquance", "autoregullation", "degenerescence", "stoechiometrie", "dogmatiquement", "interruptrices", "ambitieusement" ];
const buttonA = document.getElementById('buttonA');
const buttonB = document.getElementById('buttonB');
const buttonC = document.getElementById('buttonC');
const buttonD = document.getElementById('buttonD');
const buttonE = document.getElementById('buttonE');
const buttonF = document.getElementById('buttonF');
const buttonG = document.getElementById('buttonG');
const buttonH = document.getElementById('buttonH');
const buttonI = document.getElementById('buttonI');
const buttonJ = document.getElementById('buttonJ');
const buttonK = document.getElementById('buttonK');
const buttonL = document.getElementById('buttonL');
const buttonM = document.getElementById('buttonM');
const buttonN = document.getElementById('buttonN');
const buttonO = document.getElementById('buttonO');
const buttonP = document.getElementById('buttonP');
const buttonQ = document.getElementById('buttonQ');
const buttonR = document.getElementById('buttonR');
const buttonS = document.getElementById('buttonS');
const buttonT = document.getElementById('buttonT');
const buttonU = document.getElementById('buttonU');
const buttonV = document.getElementById('buttonV');
const buttonW = document.getElementById('buttonW');
const buttonX = document.getElementById('buttonX');
const buttonY = document.getElementById('buttonY');
const buttonZ = document.getElementById('buttonZ');
let messageAffiche = document.getElementById("messageAffiche");
let messageAffiche2 = document.getElementById("messageAffiche2");
let nbrAleatoire ;
let motAleatoire ;
let compteurTentative ;
let message = document.getElementById("message");
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
        console.log(motAleatoire);
    })
})

buttonA.addEventListener("click", verificationA, false );
buttonB.addEventListener("click", verificationB, false );
buttonC.addEventListener("click", verificationC, false );
buttonD.addEventListener("click", verificationD, false );
buttonE.addEventListener("click", verificationE, false );
buttonF.addEventListener("click", verificationF, false );
buttonG.addEventListener("click", verificationG, false );
buttonH.addEventListener("click", verificationH, false );
buttonI.addEventListener("click", verificationI, false );
buttonJ.addEventListener("click", verificationJ, false );
buttonK.addEventListener("click", verificationK, false );
buttonL.addEventListener("click", verificationL, false );
buttonM.addEventListener("click", verificationM, false );
buttonN.addEventListener("click", verificationN, false );
buttonO.addEventListener("click", verificationO, false );
buttonP.addEventListener("click", verificationP, false );
buttonQ.addEventListener("click", verificationQ, false );
buttonR.addEventListener("click", verificationR, false );
buttonS.addEventListener("click", verificationS, false );
buttonT.addEventListener("click", verificationT, false );
buttonU.addEventListener("click", verificationU, false );
buttonV.addEventListener("click", verificationV, false );
buttonW.addEventListener("click", verificationW, false );
buttonX.addEventListener("click", verificationX, false );
buttonY.addEventListener("click", verificationY, false );
buttonZ.addEventListener("click", verificationZ, false );


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
        compteurTentative == 10;
        // afficher -
        messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
//function------------------
 tabMots = motAleatoire.split("");

 function verification (){

     lettre2 = document.getElementsByClassName("bouton").clicked.value;
 }


        //comparer
        function verificationA (){
            lettre = document.getElementById("buttonA").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonA.disabled=true;
                } else{
                    compteurTentative --;
                    buttonA.disabled=true;
                    
                }   
        }
        };
        function verificationB (){
            lettre = document.getElementById("buttonB").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonB.disabled=true;
                } else{
                    compteurTentative --;
                    buttonB.disabled=true;
                    
                }   
        }
        };
        function verificationC (){
            lettre = document.getElementById("buttonC").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonC.disabled=true;
                } else{
                    compteurTentative --;
                    buttonC.disabled=true;
                    
                }   
        }
        };
        function verificationD (){
            lettre = document.getElementById("buttonD").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonD.disabled=true;
                } else{
                    compteurTentative --;
                    buttonD.disabled=true;
                    
                }   
        }
        };
        function verificationE (){
            lettre = document.getElementById("buttonE").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonE.disabled=true;
                } else{
                    compteurTentative --;
                    buttonE.disabled=true;
                }   
        }
        };
        function verificationF (){
            lettre = document.getElementById("buttonF").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonF.disabled=true;
                } else{
                    compteurTentative --;
                    buttonF.disabled=true;
                }   
        }
        };
        function verificationG (){
            lettre = document.getElementById("buttonG").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonG.disabled=true;
                } else{
                    compteurTentative --;
                    buttonG.disabled=true;
                }   
        }
        };
        function verificationH (){
            lettre = document.getElementById("buttonH").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonH.disabled=true;
                } else{
                    compteurTentative --;
                    buttonH.disabled=true;
                }   
        }
        };
        function verificationI (){
            lettre = document.getElementById("buttonI").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonI.disabled=true;
                } else{
                    compteurTentative --;
                    buttonI.disabled=true;
                }   
        }
        };
        function verificationJ (){
            lettre = document.getElementById("buttonJ").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonJ.disabled=true;
                } else{
                    compteurTentative --;
                    buttonJ.disabled=true;
                }   
        }
        };
        function verificationK (){
            lettre = document.getElementById("buttonK").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonK.disabled=true;
                } else{
                    compteurTentative --;
                    buttonK.disabled=true;
                }   
        }
        };
        function verificationL (){
            lettre = document.getElementById("buttonL").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonL.disabled=true;
                } else{
                    compteurTentative --;
                    buttonL.disabled=true;
                    
                }   
        }
        };
        function verificationM (){
            lettre = document.getElementById("buttonM").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonM.disabled=true;
                } else{
                    compteurTentative --;
                    buttonM.disabled=true;
                    
                }   
        }
        };
        function verificationN (){
            lettre = document.getElementById("buttonN").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonN.disabled=true;
                } else{
                    compteurTentative --;
                    buttonN.disabled=true;
                    
                }   
        }
        };
        function verificationO (){
            lettre = document.getElementById("buttonO").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonO.disabled=true;
                } else{
                    compteurTentative --;
                    buttonO.disabled=true;
                }   
        }
        };
        function verificationP (){
            lettre = document.getElementById("buttonP").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonP.disabled=true;
                } else{
                    compteurTentative --;
                    buttonP.disabled=true;
                }   
        }
        };
        function verificationQ (){
            lettre = document.getElementById("buttonQ").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonQ.disabled=true;
                } else{
                    compteurTentative --;
                    buttonQ.disabled=true;
                }   
        }
        };
        function verificationR (){
            lettre = document.getElementById("buttonR").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonR.disabled=true;
                } else{
                    compteurTentative --;
                    buttonR.disabled=true;
                }   
        }
        };
        function verificationS (){
            lettre = document.getElementById("buttonS").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonS.disabled=true;
                } else{
                    compteurTentative --;
                    buttonS.disabled=true;
                }   
        }
        };
        function verificationT (){
            lettre = document.getElementById("buttonT").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonT.disabled=true;
                } else{
                    compteurTentative --;
                    buttonT.disabled=true;
                }   
        }
        };
        function verificationU (){
            lettre = document.getElementById("buttonU").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonU.disabled=true;
                } else{
                    compteurTentative --;
                    buttonU.disabled=true;
                    
                }   
        }
        };
        function verificationV (){
            lettre = document.getElementById("buttonV").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonV.disabled=true;
                } else{
                    compteurTentative --;
                    buttonV.disabled=true;
                }   
        }
        };
        function verificationW (){
            lettre = document.getElementById("buttonW").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonW.disabled=true;
                } else{
                    compteurTentative --;
                    buttonW.disabled=true;
                }   
        }
        };
        function verificationX (){
            lettre = document.getElementById("buttonX").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonX.disabled=true;
                } else{
                    compteurTentative --;
                    buttonX.disabled=true;
                }   
        }
        };
        function verificationY (){
            lettre = document.getElementById("buttonY").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonY.disabled=true;
                } else{
                    compteurTentative --;
                    buttonY.disabled=true;
                }   
        }
        };
        function verificationZ (){
            lettre = document.getElementById("buttonZ").value;
        if (compteurTentative == 0) {
            messageAffiche2.innerHTML=" vous avez perdu!"
        }else {
            if (motAleatoire.includes(lettre)) { // "value" est t'il present
                    i = motAleatoire.indexOf(lettre);// i egal premiere occurance
                    tabAffiche[i] = lettre;
                    messageAffiche.innerHTML="le mot a trouver : " +  tabAffiche;
                    compteurTentative --;
                    buttonZ.disabled=true;
                } else{
                    compteurTentative --;
                    buttonZ.disabled=true;
                }   
        }
        };