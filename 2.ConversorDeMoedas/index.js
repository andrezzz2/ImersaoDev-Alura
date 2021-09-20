function Converter(){
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    var valorEmReal = valorEmDolarNumerico * 5;

    var valorConvertido = "O resultado em real é R$ " + valorEmReal;

    var valorConvertidoElemento = document.getElementById("valorConvertido");
    valorConvertidoElemento.innerHTML = valorConvertido;
    

}