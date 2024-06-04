

function validateForm () {
    const nama = document.forms['message-form'] ['input-nama'].value
    const birthDate = document.forms['message-form']['tgl-lahir'].value
    const gender = document.forms['message-form']['gender'].value
    const message = document.forms['message-form']['pesan'].value
    
    if (nama == "" || birthDate == "" || gender == "" || message == "") {
        alert("Tidak Boleh Kosong!");
        return false;
    }

setSenderUI(nama, birthDate, gender, message);
return false;
}

function setSenderUI(nama, birthDate, gender, message) {
    document.getElementById("input-nama").innerHTML = nama;
    document.getElementById("tgl-lahir").innerHTML = birthDate;
    document.getElementById("gender").innerHTML = gender;
    document.getElementById("pesan").innerHTML = message;
}


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("mySlides");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;
    
    for (i = 0; i < imgList.length; i++) {
        imgList[i].Style.display = "none";
    }

    imgList [slideIndex - 1].style.display = "block";
}

setInterval(() => {

}, 1000);

