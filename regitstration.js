document.getElementById("registerbtn").addEventListener("click", function() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var isSelectTnc = document.getElementById("tnc").checked;
  var err = document.getElementById("error");

  var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  var AdminUser = function(name,email,password,city,state,type){
    this.name = name;
    this.email = email;
    this.password =password;
    this.city = city;
    this.state = state;
    this.type = "admin";
  };

  if (name == "") {
    err.innerHTML = "Enter a name";
  } else if (!email.match(emailFormat)) {
    err.innerHTML = "enter valid email id";
  } else if (  password == "" ||
    confirmPassword == "" ||
    password != confirmPassword
  ) {
    err.innerHTML = "Please enter valid password";
  } else if (city == "selectcity") {
    err.innerHTML = "Please Select City";
  } else if (state == "selectstate") {
    err.innerHTML = "Please Select State";
  } else if (!isSelectTnc) {
    err.innerHTML = "please Select term and conditions";
  } else if(localStorage.getItem('AdminUser')){
    err.innerHTML= "Admin already registered!";
  }else{
    var adminCreate =new AdminUser(name,email,password,city,state)
    localStorage.setItem("AdminUser",JSON.stringify(adminCreate));
    location.href = "index.html";
  }
});
