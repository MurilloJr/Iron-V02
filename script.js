function dormindo() {
    document.querySelector('#photos').classList.remove('sorridente')
    document.querySelector('#photos').classList.remove('acordado');
    document.querySelector('#photos').classList.add('dormindo')
}

function acordado() {
    document.querySelector('#photos').classList.remove('sorridente')
    document.querySelector('#photos').classList.remove('dormindo');
    document.querySelector('#photos').classList.add('acordado')
}

function sorridente() {
    document.querySelector('#photos').classList.remove('dormindo')
    document.querySelector('#photos').classList.remove('acordado')
    document.querySelector('#photos').classList.add('sorridente')
}

window.alert ("Preparado(a) para tanta beleza? Se sim, clique em ok.")