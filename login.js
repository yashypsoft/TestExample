var loginStatus = localStorage.getItem("loginStatus")?loginStatus:false;

if (localStorage.getItem("AdminUser")) {
  document.getElementById("blockregister").style.display = "none";
  console.log("hello");
} else {
  document
    .getElementById("registerbtn")
    .addEventListener("click", () => (location.href = "regitstration.html"));
}

var LoginSession = [];

AdminData = JSON.parse(localStorage.getItem("AdminUser"));

SubUserData = JSON.parse(localStorage.getItem("SubUser"));
// console.log(SubUserData[0]);
for (var i = 0; i < SubUserData.length; i++) {
  console.log(SubUserData[i].email);
}

function loginUser(id) {
  var loginEmail = document.getElementById("loginemail").value;
  var loginPassword = document.getElementById("loginpassword").value;
  var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var err = document.getElementById("error");

  if (!loginEmail.match(emailFormat)) {
    err.innerHTML = "Enter valid email id";
  } else if (loginPassword == "") {
    err.innerHTML = "Enter valid Password field";
  } else if (AdminData) {
    if (
      AdminData["email"] == loginEmail &&
      AdminData["password"] == loginPassword
    ) {
        localStorage.setItem('loginStatus',!loginStatus);
      location.href = "dashboard.html";
    } else if (SubUserData) {
      for (var i = 0; i < SubUserData.length; i++) {
        if (SubUserData[i].email === loginEmail) {
        
          if (
            SubUserData[i].email == loginEmail &&
            SubUserData[i].password == loginPassword
          ) {
            localStorage.setItem('loginStatus',!loginStatus);
            localStorage.setItem('activeUser',JSON.stringify(SubUserData[i]));
            location.href = "sub-user.html";
          } else {
            err.innerHTML = "enter valid email and Password";
          }
        }
      }
     
    }
  }
  else{
      alert("Register First");
  }
}
