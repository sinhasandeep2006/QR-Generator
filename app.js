let imgBox =document.getElementById("mgBox");
let qrimage =document.getElementById("qrimage");
let qrtext =document.getElementById("qrtext");
let buttons = document.querySelector(".button");
buttons.addEventListener('click', (e)=> {
    if(qrtext.value.length>0){
        qrimage.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value;
        imgBox.classList.add('show-img')
    }
    else{
        qrtext.classList.add('error')
        setTimeout(()=>{
            qrtext.classList.remove('error');
        },1000)
    }
})
