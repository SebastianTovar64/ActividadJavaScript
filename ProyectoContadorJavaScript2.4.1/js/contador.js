window.addEventListener('keydown',(e)=>{
    if (e.key =="+"){
        icremento()
}
else if (e.key =="-"){
    descremento()
}
})
let contador=0;
const valor=document.getElementById("valor")

function incremento(){
    //alert("incremento")
    contador+=1;
    //localStorage.setItem("contador",contador)
    valor.innerHTML=contador;
}
function decremento(){
    //alert("incremento")
    if (contador>0){
        contador-=1;
        valor.innerHTML=contador;
    }else{
        contador=0;
        valor.innerHTML=contador;
    }
}
function resetear(){
    contador=0;
    valor.innerHTML=contador;
}
