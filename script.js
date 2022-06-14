const firstDiv = document.querySelector('.container');
const secondDiv = document.querySelector('.container2');

form.addEventListener("submit", (e) => {
    e.preventDefault();
});


function go(currentStep, nextStep) {
    let dNone, dBlock; 

    if(currentStep == 1) {
        dNone = firstDiv;
    } else if(currentStep == 2) {
        dNone = secondDiv;
    }
    
    dNone.style.display = 'none'; 

    if(nextStep == 1) {
        dBlock = firstDiv;
    } else if(nextStep == 2) {
        dBlock = secondDiv;
    }
    
    dBlock.style.display = 'block';
}

function validate(){
    const primeiramedia = document.getElementById('primeiramedia');
    const segundamedia = document.getElementById('segundamedia');

    primeiramedia.style.border = "none";
    segundamedia.style.border = "none";


    if(!primeiramedia.value && !segundamedia.value) {
        primeiramedia.style.border = "1px solid red";
        segundamedia.style.border = "1px solid red";
    
    } else if(!primeiramedia.value) {
        primeiramedia.style.border = "1px solid red";
    
    } else {
        segundamedia.style.border = "1px solid red";
    }

    let media = (parseFloat(primeiramedia.value * 0.4) + parseFloat(segundamedia.value * 0.6)); 
    const result = document.getElementById('resultado');

    if(media >= 7) {
        result.innerHTML = 'Você foi aprovado !'
    } else if(media < 5) {
        result.innerHTML = 'Você foi reprovado !'
    } else {
        result.innerHTML = 'Você está de recuperação !'
        
    }
    go(1,2);

    var elementomediana = document.getElementById('mediana');
    var mediana = "Sua média é: " + media;
    elementomediana.innerHTML = mediana;
}