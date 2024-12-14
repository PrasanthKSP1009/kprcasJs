function submitForm(details, isValid, a) {
    if (a == 1){
        console.log("Not Authorised user");
        return
    }
  console.log(details);
  isValid(a);
}
function validation() {
    setTimeout(()=>{
        console.log("All the fields got validated");
    }, 500)
    
}
a = 1
submitForm("Form Submitted Successfully!!!", validation, a);
