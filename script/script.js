let btnSubmit = document.getElementById("submit-form");

function handleGetFormData() {
  let nameDom = document.getElementById("name").value;
  let emailDom = document.getElementById("email").value;
  let cityDom = document.getElementById("city").value;
  let zipCodeDom = document.getElementById("zip-code").value;
  let statusDom = document.getElementById("status").checked;

  let result = {
    name: nameDom,
    email: emailDom,
    city: cityDom,
    zipCode: parseInt(zipCodeDom),
    status: statusDom,
  };
  return result;
}

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(handleGetFormData());
  console.log(!handleGetFormData === null);
  console.log(validateFormData(handleGetFormData()));
});

function isNumber(string) {
  return !isNaN(string) ? true : false;
}

console.log(isNumber("asdsa"));

function checkboxIsChecked() {
  return document.getElementById("status").checked == true ? true : false;
}

function validateFormData(obj) {
  if (!obj.name || !obj.email || !obj.city) return false;
  if (!isNumber(obj.zipCode)) return false;
  if (!checkboxIsChecked()) return false;
  return true;
}

function validateFormData(formData) {
  // validasi form terisi semua
  if (!formData.name || !formData.email || !formData.city) {
    return false;
  }

  // validasi jika zipcode bukan angka
  if (!isNumber(formData.zipCode)) {
    return false;
  }

  // validasi jika checkbox belum dicentang
  if (!checkboxIsChecked()) {
    return false;
  }

  return true;
}
