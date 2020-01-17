
var localsubUser = JSON.parse(localStorage.getItem('SubUser')) ;
var id =localsubUser?localsubUser.length+1:1;
var user = localsubUser?localsubUser:[];

//sub user
var SubUser = function(id,name,email,password,birthdate,age,type){
    this.id =id;
    this.name = name;
    this.email =email; 
    this.password = password;
    this.birthdate = birthdate;
    this.age= age;
    this.type = "subuser";
}


//Add user
 function addUser() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var birthdate = document.getElementById('birthdate').value;

    var age = new Date().getFullYear() - new Date(birthdate).getFullYear();
    console.log(age);
    
    var err = document.getElementById("error");
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    var subUserData = new SubUser(id,name,email,password,birthdate,age);
    if (name == "") {
        err.innerHTML = "Enter a name";
    }else if(!email.match(emailFormat)){
        err.innerHTML = "enter valid email id";
    }else if(password == "") {
        err.innerHTML = "Please enter valid password";
    }else if(birthdate==""){
        err.innerHTML = "Please enter birthdate";
    }else{
        user.push(subUserData);
        localStorage.setItem('SubUser',JSON.stringify(user));
    }
   
    
};


//check session
if(localsubUser){
    for (var i = 0; i < localsubUser.length; i++) {
  
   
        var tbl = document.getElementById("displaytbl");
        var tr = tbl.insertRow(i+1);
    
        for (var k = 0; k < SubUser.length; k++) {
          var td = document.createElement("td");
          td = tr.insertCell(k);
          if (k == 0) {
            td.innerHTML = localsubUser[i].name;
          } else if (k == 1) {
            td.innerHTML = localsubUser[i].email;
          }else if(k==2){
            td.innerHTML = localsubUser[i].password;
          }
          else if(k==3){
            td.innerHTML = localsubUser[i].birthdate;
          }else if(k==4){
            td.innerHTML = localsubUser[i].age;
          }else if(k==5){
            td.innerHTML = `<input type="button" value="edit"  onclick="editAction(${localsubUser[i].id-1})" > <input type="button" value="delete"  onclick="deleteUser(${localsubUser[i].id-1})">`;            
          }
        }
      }
}

//delete user in action
function deleteUser(id){
    user.pop(localsubUser[id].id);
    localStorage.setItem('SubUser',JSON.stringify(user));
    location.reload();
}


//edit action
function editAction(id){
   
    document.getElementById('taskuser').innerHTML = "Update User";
    document.getElementById("name").value =  localsubUser[id].name;
    document.getElementById("email").value = localsubUser[id].email;
    document.getElementById("password").value = localsubUser[id].password;
    document.getElementById('birthdate').value = localsubUser[id].birthdate;
    document.getElementById('actionChange').innerHTML = ` <input type="submit" value="Update User" id="adduser" onclick="updateUser(${localsubUser[id].id-1})">`;
}

//update action

function updateUser(uid){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var birthdate = document.getElementById('birthdate').value;

  var age = new Date().getFullYear() - new Date(birthdate).getFullYear();
  console.log(age);
  
  var err = document.getElementById("error");
  var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


  var subUserData = new SubUser(uid+1,name,email,password,birthdate,age);
 
  if (name == "") {
      err.innerHTML = "Enter a name";
  }else if(!email.match(emailFormat)){
      err.innerHTML = "enter valid email id";
  }else if(password == "") {
      err.innerHTML = "Please enter valid password";
  }else if(birthdate==""){
      err.innerHTML = "Please enter birthdate";
  }else{
    user.pop(localsubUser[uid].id);
    localStorage.setItem('SubUser',JSON.stringify(user));
      user.push(subUserData);
      localStorage.setItem('SubUser',JSON.stringify(user));
  }
}

