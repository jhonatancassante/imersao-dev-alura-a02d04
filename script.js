function Converter() {
  var valorElemento = document.getElementById("valor");
  var valorDolar = valorElemento.value;
  var valorDolarNumerico = parseFloat(valorDolar);
  var cotacaoDolar = 5.21;
  var cotacaoBitcoin = 0.000021;

  var valorRealNumerico = valorDolarNumerico * cotacaoDolar;

  var valorElementoConvertido = document.getElementById("valorConvertido");
  var valorReal = "O resultado em real é R$ " + valorRealNumerico.toFixed(2);
  valorElementoConvertido.innerHTML = valorReal;

  var valorBitcoinNumerico = valorDolarNumerico * cotacaoBitcoin;
  var valorElementoBitcoin = document.getElementById("valorBitcoin");
  var valorBitcoin =
    "O resultado em Bitcoin é de " + valorBitcoinNumerico.toFixed(6);
  valorElementoBitcoin.innerHTML = valorBitcoin;
}