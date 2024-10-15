const select = document.getElementById('select');

const todos = document.getElementsByClassName('fotohorario');

const sexto = document.getElementById('6o');
const setimo = document.getElementById('7o');
const oitavo = document.getElementById('8o');
const nono = document.getElementById('9o');
const primeiro = document.getElementById('1m');
const segundo = document.getElementById('2m');
const terceiro = document.getElementById('3m');





    sexto.style.display = 'none'
    setimo.style.display = 'none'
    oitavo.style.display = 'none'
    nono.style.display = 'none'
    primeiro.style.display = 'none'
    segundo.style.display = 'none'
    terceiro.style.display = 'none'
    

select.addEventListener('change', () =>{
    sexto.style.display = 'none'
    setimo.style.display = 'none'
    oitavo.style.display = 'none'
    nono.style.display = 'none'
    primeiro.style.display = 'none'
    segundo.style.display = 'none'
    terceiro.style.display = 'none'

    console.log(select.value)
    if(select.value == "3m"){
        terceiro.style.display = "block"
    }else if(select.value == "2m"){
        segundo.style.display = "block"
    }else if(select.value == "1m"){
        primeiro.style.display = "block"
    }else if(select.value == "9"){
        nono.style.display = "block"
    }else if(select.value == "8"){
        oitavo.style.display = "block"
    }else if(select.value == "7"){
        setimo.style.display = "block"
    }else if(select.value == "6"){
        sexto.style.display = "block"
    }else{
        terceiro.style.display = "block"
        segundo.style.display = "block"
        primeiro.style.display = "block"
        nono.style.display = "block"
        oitavo.style.display = "block"
        setimo.style.display = "block"
        sexto.style.display = "block"
    }
        
    
})