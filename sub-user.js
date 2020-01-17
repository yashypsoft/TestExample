var activeUser = JSON.parse(localStorage.getItem("activeUser"));

if (activeUser) {
  var d = new Date();
  if (
    d.getDate() == new Date(activeUser.birthdate).getDate() &&
    d.getMonth() == new Date(activeUser.birthdate).getMonth()
  ) {
    document.getElementById('birthday').innerHTML =`<img src="birthday.png" alt="" width="240px">`
  }
}
