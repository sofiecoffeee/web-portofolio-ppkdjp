//ini Javascript
replaceName();

function replaceName() {
    let guestName = prompt("Kenalan dulu yuk! siapa namamu?", "");
    document.getElementById("guest_name").innerHTML = guestName;

}

let indexSlide = 1
showSlide(1);

function nextSlide(n) {
    showSlide (indexSlide += n);
}

function showSlide(index) {
    // get DOM semua image banner
    let listImage = document.getElementsByClassName('banner');
    console.log(indexSlide)
    console.log(listImage)

    //reset indexSlide
    if (index > listImage.length) indexSlide = 1;

    //hide all images
    let i = 0
    while (i < listImage.length) {
        listImage[i].style.display = 'none';
       i++;
     }

     //show selector image
     listImage[indexSlide - 1].style.display = 'block';
    }


    //auto-run banner
    setInterval(() => nextSlide(1), 2000);

function validateForm() {
    let inputName = document.getElementById('input-name').value;
    let inputDate = document.getElementById('input-date').value;
    let inputSex = '';
    let inputMessages = document.getElementById('input-messages').value;

    let radioButtons = document.getElementsByName('input-sex')
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            inputSex = radioButton.value;
            break;
        }
    }

    if (inputName == "" || inputDate == "" || inputSex == "" || inputMessages == "") {
        alert("Lengkapi data!");
} else {
    document.getElementById('sender-name').innerHTML = inputName;
    document.getElementById('sender-birth-date').innerHTML = inputDate;
    document.getElementById('sender-sex').innerHTML = inputSex;
    document.getElementById('sender-messages').innerHTML = inputMessages;

    //allert ('Sukses submit');
}

console.log(inputName);
}