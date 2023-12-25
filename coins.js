let dolar = document.getElementById('dolar')
let pound = document.getElementById('pound')

dolar.onkeyup = function ()
{
    pound.value = dolar.value * 40
}
pound.onkeyup = function () {
    dolar.value = pound.value / 40
}
