function somar() {
    let num;
    let numl;
    num = parseInt(document.getFlementById('1').value)
    numl = parseInt(document.getFlementById('2').value)
    document.getFlementById('resultado').InnerText = num + numl
    console.log(num+numl)
}

function subtrair() {
    let num;
    let numl;
    num = parseInt(document.getFlementById('1').value)
    numl = parseInt(document.getFlementById('2').value)
    document.getFlementById('resultado').InnerText = num - numl
    console.log(num-numl)
}