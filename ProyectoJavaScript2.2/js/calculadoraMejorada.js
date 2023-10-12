function sumar(n1,n2){
    var resultado=n1+n2;
    var res=document.getElementById("resultado")
    if (n1!=0 && n2!=0){
        respuesta.style.display="block";
        res.innerHTML = `Total de la suma: ${resultado}`;
        res.style.color="black solid";
    }else{
        respuesta.style.display="block";
        res.innerHTML = `verifique sus datos`;
        res.style.color="red";
    }

}
function restar(){
    let n1=parseInt (document.getElementById("n1"). value)
    let n2=parseInt (document. getElementById("n2"). value)
    resultado=n1-n2;
    var res=document.getElementById("resultado")
    if (n1!=0 && n2!=0){
        respuesta.style.display="block";
        res.innerHTML = `Total de la resta : ${resultado}`;
        res.style.color="black solid";
    }else{
        respuesta.style.display="block";
        res.innerHTML = `verifique sus datos`;
        res.style.color="red";
    }
    }
    function multiplicar(){
    let n1=parseInt (document.getElementById("n1").value)
    let n2=parseInt (document.getElementById("n2").value)
    resultado=n1*n2;
    var res=document.getElementById("resultado")
    if (n1!=0 && n2!=0){
        respuesta.style.display="block";
        res.innerHTML = `Total de la multiplicacion : ${resultado}`;
        res.style.color="black solid";
    }else{
        respuesta.style.display="block";
        res.innerHTML = `verifique sus datos`;
        res.style.color="red";
    }
    }
    function dividir0(){
    let n1=parseInt (document. getElementById ("n1"). value)
    let n2=parseInt (document.getElementById("n2"). value)
    resultado=n1/n2;
    var res=document.getElementById("resultado")
    if (n1!=0 && n2!=0){
        respuesta.style.display="block";
        res.innerHTML = `Total de la division : ${resultado}`;
        res.style.color="black solid";
    }else{
        respuesta.style.display="block";
        res.innerHTML = `verifique sus datos`;
        res.style.color="red";
    }
    }
    function potencia(){
    let n1=parseInt(document.getElementById("n1").value)
    resultado=n1*n1;
    var res=document.getElementById("resultado")
    if (n1!=0 && n2!=0){
        respuesta.style.display="block";
        res.innerHTML = `Total de la potencia : ${resultado}`;
        res.style.color="black solid";
    }else{
        respuesta.style.display="block";
        res.innerHTML = `verifique sus datos`;
        res.style.color="red";
    }
    }
    function mostrar(){
        //opc=parseInt (prompt ("ingresa opcion 1 para sumar 2 para restar, 3 multiplicar,4 d
        let n1=parseInt (document.getElementById("n1").value)
        let n2=parseInt (document.getElementById("n2") .value)
        let opc=parseInt (document. getElementById("opc") .value)
        switch (opc){
            case 1:
                sumar(n1,n2)
                break;
            case 2:
                restar()
                break;
            case 3:
                multiplicar()
                break;
            case 4:
                dividir0()
                break;
            case 5: 
                potencia()
                break;
            default:
                alert("opcion no valida");
        }
    }