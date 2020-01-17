var localsubUser = JSON.parse(localStorage.getItem('SubUser')) ;

if(localsubUser){
    var lessEigteen=0;
    var eighteenToFifty=0;
    var fiftyup=0;
    var d= new Date()
    for (var i = 0; i < localsubUser.length; i++) {
        if(localsubUser[i].age<18){
            lessEigteen++;
        }
        else if(localsubUser[i].age>18 && localsubUser[i].age<50)
        {
            eighteenToFifty++;
        }
        else if(localsubUser[i].age>50){
            fiftyup++;
        }
        if( d.getDate() == new Date(localsubUser[i].birthdate).getDate() && d.getMonth() == new Date(localsubUser[i].birthdate).getMonth()){
            
            document.getElementById('birthday').innerHTML = `Today is ${localsubUser[i].name} Birthday`
            
        }
    }
    
    document.getElementById('18under').textContent = lessEigteen;
    document.getElementById('18to50').textContent = eighteenToFifty;
    document.getElementById('50up').textContent = fiftyup;
    


}


