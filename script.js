const validateText = () => {
    const name = document.getElementById("firstname");
    const showMsgClass  = document.getElementById("name");
    if (name.value == null || name.value == ""){
        showMsgClass.style.display = "inline";
        return false;
    } 
    showMsgClass.style.display = "none";
    return true;
};

const validateEmail = () => {
    const email = document.getElementById("email");
    const emptyField  = document.getElementById("emptyField");
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value == null || email.value == ""){
        emptyField.style.display = "inline";
        emptyField.innerHTML = "Por favor preencha o campo";
        return false;
    } else if (!email.value.match(re)){
        emptyField.style.display = "inline";
        emptyField.innerHTML = "Endereço de email inválido";
        return false;
    } else {
        emptyField.style.display = "none";
        return true;
    }
};

const validateDate = () => {
    const date = document.getElementById("bday").value;

};

const validatePhone = () => {
    const phone = document.getElementById("phone");
    const empty_phone = document.getElementById("empty_phone");
    const phoneRe = /^\d{9}$/;
    if(phone.value == null || phone.value == ""){
        empty_phone.style.display="inline";
        empty_phone.innerHTML = "Por favor preencha o campo";
        return false;
    } else if(!phone.value.match(phoneRe)){
        empty_phone.style.display="inline";
        empty_phone.innerHTML =  "Número de telefone inválido";
        return false;
    } else {
        empty_phone.style.display="none";
        return true;
    }
};

const uploadFeedbackCc = () => {
    const displayElem = document.getElementById("displayElemCc");
    const fileValue = document.getElementById("up_cc").value.split("\\");
    const index = fileValue.length - 1;
    const fileName = fileValue[index];
    displayElem.style.display="flex";
    displayElem.innerHTML = fileName;
}
const uploadFeedbackFoto = () => {
    const displayElem = document.getElementById("displayElemFoto");
    const fileValue = document.getElementById("up_foto").value.split("\\");
    const index = fileValue.length - 1;
    const fileName = fileValue[index];
    displayElem.style.display="flex";
    displayElem.innerHTML = fileName;
}
const uploadFeedbackVideo= () => {
    const displayElem = document.getElementById("displayElemVideo");
    const fileValue = document.getElementById("up_video").value.split("\\");
    const index = fileValue.length - 1;
    const fileName = fileValue[index];
    displayElem.style.display="flex";
    displayElem.innerHTML = fileName;
}
function maxFour() {
    let checkboxes = document.getElementsByName("interests");
    let checkedNum = 0;
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
        checkedNum++;
        }
    }
    for (let i = 0; i < checkboxes.length; i++){
        if (checkedNum >= 4 && !checkboxes[i].checked){
            checkboxes[i].disabled = true;
        }else {
            checkboxes[i].disabled = false;
        }
    }
}

function minOne() {
    const displayElemLang = document.getElementById("displayElemLang");
    const checkboxes = document.getElementsByName("lang");
    let checkedNum = 0;
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
        checkedNum++;
        }
    }
    if (checkedNum == 0){
        displayElemLang.style.display="inline";
    } else {
        displayElemLang.style.display="none";
    }
}
function minOneAge() {
    const displayElemAge = document.getElementById("displayElemAge");
    const checkboxes = document.getElementById("adulto");
    if (checkboxes.checked) {
        displayElemAge.style.display="none";
    } else {
        displayElemAge.style.display="inline";
    }
}


//Dropdown Menu - Guia

function openMenu(){
    const dropdownMenu = document.getElementById("guidemenu");
    dropdownMenu.style.display="flex";

}
function closeMenu(){
    const dropdownMenu = document.getElementById("guidemenu");
    dropdownMenu.style.display="none";

}


