//Validações Formulário


//Campo Nome
const validateText = () => {
    const name = document.getElementById("firstname");
    const showMsgClass  = document.getElementById("name");
    if (name.value == null || name.value == ""){
        showMsgClass.style.display = "inline";
        return false;
    } else {
        showMsgClass.style.display = "none";
        return true;
    }
};

//Campo Email
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

//Campo Telefone
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

//Nome dos Ficheiros de Upload
const uploadFeedback = (elem, file) => {
    const displayElem = document.getElementById(elem);
    const fileValue = document.getElementById(file).value.split("\\");
    const index = fileValue.length - 1;
    const fileName = fileValue[index];
    displayElem.style.display="flex";
    displayElem.innerHTML = fileName;
}
//Selecionar no máximo 4 opções
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

//Selecionar no minimo 1 opção
function minOne(elem, checkbox) {
    const display = document.getElementById(elem);
    const checkboxes = document.getElementsByName(checkbox);
    let checkedNum = 0;
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
        checkedNum++;
        }
    }
    if (checkedNum === 0){
        display.style.display="inline";
        return false
    } else {
        display.style.display="none";
        return true;
    }
}
//Maiores de 18
function minOneAge() {
    const displayElemAge = document.getElementById("displayElemAge");
    const checkboxes = document.getElementById("adulto");
    if (checkboxes.checked) {
        displayElemAge.style.display="none";
        return true;
    } else {
        displayElemAge.style.display="inline";
        return false;
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

//Interesses
const funcInt = () => {maxFour(), minOne("displayElemInt", "interests")} 

//Botão Submit
const goToProfile = () =>{
    const validations = [minOne("displayElemLang", "lang"), minOne("displayElemInt", "interests"), minOneAge(), validateText(), validateEmail(), validatePhone(),];
    const result = (acc, item) => item === false ? acc + 1 : acc;
    const go = validations.reduce(result, 0);
    if (go === 0) {
        location.href="./drinkingbuddy.html";
    }
}

