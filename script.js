
//Function
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function(){

    //Function Variable
    const nameInput = document.getElementById("full-name");
    const emailInput = document.getElementById("email-address");
    const addressInput = document.getElementById("full-address");
    
    const nameValue = nameInput.value;
    const emaileValue = emailInput.value;
    const addressValue = addressInput.value;

    const formData = document.getElementById("form-data");
    const errorText = document.getElementById("error-data");
   

    //Condition
    if(nameValue && emaileValue && addressValue){
        formData.innerHTML =`<p>Form submited By: ${nameValue}, Email: ${emaileValue}, Address: ${addressValue}</p>`;
        errorText.innerHTML ="";
        nameInput.value ="";
        emailInput.value = "";
        addressInput.value = "";
    }
    else{
        errorText.innerHTML = '<p class ="text-warning">Please fill out all required fields</p>'
        formData.innerHTML = "";
    }
});


