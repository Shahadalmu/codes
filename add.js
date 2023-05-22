function addOffice() {
  var name = document.getElementById('var-name').value;
  var floor = document.getElementById('var-floor').value;
  var office = document.getElementById('var-number').value;
  var omajor = document.getElementById('var-major').value;
  var round = document.getElementById('var-round').value;
  var errorMessage = document.getElementById('error');

  if (name == "" || floor == "" || office == "" || omajor == "" || A == "") {
    errorMessage.textContent = "الرجاء التحقق من تعبئة جميع الحقول";
    errorMessage.style.display = "block";
  } else {
    alert('تمت إضافة المكتب بنجاح');
    window.location.href = 'index.css'
  }
}

function cancel() {
  // Clear the input fields
  document.getElementById("var-name").value = "";
  document.getElementById("var-floor").value = "";
  document.getElementById("var-number").value = "";
  document.getElementById("var-major").value = "";
  document.getElementById("var-round").value = "";
  window.location.href = 'index.css'
}
