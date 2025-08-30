//logic for our custom contact form
document.addEventListener("DOMContentLoaded", function () {
  // business account
  const businessAccountCheckbox = document.querySelector("#businessAccount");
  const companyInfoDiv = document.querySelector("#companyInfo");
  //initialize hidden company info
  companyInfoDiv.classList.add("hidden");
  // toggle company info visibility
  businessAccountCheckbox.addEventListener("change", function (e) {
    companyInfoDiv.classList.toggle("hidden");
  });

  // contact reason
  const contactReasonSelect = document.querySelector("#contactReason");
  const productNameField = document.querySelector("#productNameField");
  // initialize productNameField hidden
  productNameField.classList.add("hidden");
  // toggle productNameField visibility based on contactReasonSelect value
  contactReasonSelect.addEventListener("change", function(e){
    if(contactReasonSelect.value === "product"){
      productNameField.classList.remove("hidden");
    } else {
      productNameField.classList.add("hidden");
    }
  })

const orderNumberField = document.querySelector("#orderNumberField");
  // initialize orderNumberField hidden
  orderNumberField.classList.add("hidden");
  // toggle orderNumberField visibility based on contactReasonSelect value
  contactReasonSelect.addEventListener("change", function(e){
    if(contactReasonSelect.value === "order"){
      orderNumberField.classList.remove("hidden");
    } else {
      orderNumberField.classList.add("hidden");
    }
  })

});
