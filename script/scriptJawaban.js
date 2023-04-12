// Tambahkan kode JavaScript kalian di file ini
let btnSubmit = document.getElementById("submit-form")
let warning = document.getElementById("warning")

function handleGetFormData () {
    let nameDom = document.getElementById("name").value
    let emailDom = document.getElementById("email").value
    let cityDom = document.getElementById("city").value
    let zipCodeDom = document.getElementById("zip-code").value
    let statusDom = document.getElementById("status").checked
  
    let result = {
        name : nameDom, 
        email : emailDom, 
        city : cityDom,
        zipCode : zipCodeDom,
        status : statusDom
    }
    return result
}

function isNumber(string) {
    return !isNaN(string) ? true : false;
}

function checkboxIsChecked() {
    return document.getElementById("status").checked == true ? true : false;
}

function validateFormData(obj) {
  if (!obj.name || !obj.email || !obj.city) return false;
  if (!isNumber(obj.zipCode)) return false;
  if (!checkboxIsChecked()) return false;
  return true;
}

function submit(){
    event.preventDefault()
    if (!validateFormData(handleGetFormData())) {
        warning.innerHTML = "Periksa form anda sekali lagi";
    } else {
        warning.innerHTML = "";
    }
}
const form = document.querySelector("form");
form.addEventListener("submit", submit);