
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
        emptyField.innerHTML = emptyField.innerHTML = "Por favor preencha o campo";
        return false;
    } else if (!email.value.match(re)){
        emptyField.style.display = "inline";
        emptyField.innerHTML = emptyField.innerHTML = "Por favor inserir um endereço de email válido";
        return false;
    } else {
        emptyField.style.display = "none";
        return true;
    }

};

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

//function required()
  //  let checkboxes = document.getElementsByName("interests");
  //  let checkedNum = 0;
  //  for (let i = 0; i < checkboxes.length; i++) {
  //      if (!checkboxes[i].checked) {
  //          checkedNum++;
  //      }
  //  }
  //  if (checkedNum === 0) {
  //      alert("Please choose at least one of the options")
  //      return false;
  //  }
//}