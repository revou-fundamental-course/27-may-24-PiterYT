
function validasiForm () {
    const nama = document.forms['message-form'] ['input-nama'].value
    const birthDate = document.forms['message-form']['tgl-lahir'].value
    const gender = document.forms['message-form']['kelamin'].value
    const message = document.forms['message-form']['pesan'].value
    
    if (nama == "" || birthDate == "" || gender == "" || message == "") {
        alert("Tidak Boleh Kosong!");
        return false;
    }

setSenderUI(nama, birthDate, gender, message);
return false;
}

function setSenderUI(nama, birthDate, gender, message) {
    document.getElementById("result-nama").innerHTML = nama;
    document.getElementById("result-tgl").innerHTML = birthDate;
    document.getElementById("result-gender").innerHTML = gender;
    document.getElementById("result-pesan").innerHTML = message;
}


let slideIndex = 1;
showBanner(slideIndex);

 function plusBanner(n) {
     showBanner(slideIndex == n);
 }

 function showBanner(slideIndex) {
    let index;
    let imgList = document.getElementsByClassName("mySlides");
     if (slideIndex > imgList.length) slideIndex = 1;
     else if (slideIndex < 1) slideIndex = imgList.length;
    


    for (index = 0; index < imgList.length; index++) {
        imgList[index].style.display = "none";
     }

    imgList [slideIndex - 1].style.display = "none";
}

// let index = 0;
// while (index < imgList.length) {
//    imgList[index].style.display = 'none';
//     index++
// }

//     imgList[slideIndex - 1].style.display ='block';

// setInterval(() => {

// }, 1000);




// function validateForm () {
//     let namaInput = document.getElementById("input-nama").value;
//     let birthDate = document.getElementById("tgl-lahir").value;
//     let gender = document.getElementById("Kelamin").value;
//     let message = document.getElementById("pesan").value;
//     if (namaInput == null || namaInput =='') {
//         alert('Nama Kamu Kosong nih, harap di isi ya');}
//        else if (birthDate == null || birthDate =='') {
//             alert('Tanggal Lahir Kamu Kosong nih, harap di isi ya');}
//            else if (gender == null || gender =='') {
//                 alert('Kamu Laki-laki  atau Perempuan, tolong di isi ya');}
//                else if (message == null || message =='') {
//                     alert('Bingung ya mau Pesan apa, masih kosong nih Pesannya');}
//                              else {
//         console.log(namaInput, birthDate, gender, message);
//     }
// }



// function showBanner() {
//     document.getElementsByClassName('mySlides')[0].style.display = 'block';
// } 