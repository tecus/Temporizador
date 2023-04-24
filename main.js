const inicia = document.querySelector('#input')
const boton = document.querySelector('#btn')
const status = document.querySelector('#finish')

let conversionCronometro;
boton.addEventListener('click', ()=>{
    conversionCronometro = parseInt(inicia.value);
    if( isNaN(conversionCronometro)  || conversionCronometro<0){
        return
    }
    regresiva(conversionCronometro)
})

function regresiva(tiempo) {
    if(tiempo===0){
        status.textContent='Finish'
        return
    }else{
        setTimeout(regresiva,1000,tiempo-1)
        status.textContent=`${tiempo}`
        return
    }
}