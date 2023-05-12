let inp = document.getElementById('inp')
let imgbox = document.getElementById('imgbox')
let qrimg = document.getElementById('qrimg')




function qr() {
    
    
    qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= " + inp.value;
    
    
}

