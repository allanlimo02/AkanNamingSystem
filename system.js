var cc=document.getElementById('century');
var dd= document.getElementById('day');
var mm=document.getElementById('month');
var yy=document.getElementById('year');
var gender=document.getElementById('gender');


var d=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7


let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];






function validator(){
    if(cc.value==''&& cc.length==2){
        alert('Century cant be blank');
        username.focus();
        return false;
        
    }else
    if (yy.value==''||yy.length==2){
        alert('Enter a valid Year value');
        yy.focus();
        return false;
        
    }else
    if (mm==''||mm.value>12){
        alert('Input a valid value for month');
        month.focus();
        return false;
    }
    if(year=='' && year.length !==4){
        alert('Input a valid year');
        year.focus();
        return false;
    }
    if (gender.value ==''){
        alert(' Gender cant be blank');
        gender.focus();
        return false;

    }else{
        console.log("All set")
    }   
}

function checkGender(){
    
    if(gender.value =='male' ){
        var gn = "male";
    }else if(gender.value == 'female'){
        var gen = "female";
    }else {
      console.log("pass");//Test the radio buttons
    }
      switch(gender){
          case gender = "male":
                switch(day){
                  case (0 || -0):
                    document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is " + maleNames[0];
                  break;
                  case (1 || -1):
                    document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is " + maleNames[1];
                  break;
                  case (2 || -2):
                    document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is " + maleNames[2];
                  break;
                  case (3 || -3):
                    document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is "+ maleNames[3];
                  break;
                  case (4 || -4):
                    document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is " + maleNames[4];
                  break;
                  case (5 || -5):
                    document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is " + maleNames[5];
                  break;
                  case (6 || -6):
                    document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is " + maleNames[6];
                  break;
                  default:
                  // console.console.log("Pass");//Test male case
                }
          break;
          case gender = "female":
                  switch(day){
                    case 0 || -0:
                      document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is  akosua";
                    break;
                    case 1 || -1:
                      document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is adwoa ";
                    break;
                    case 2 || -2:
                      document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is abenaa";
                    break;
                    case 3 || -3:
                      document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is akua";
                    break;
                    case 4 || -4:
                      document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is yaa";
                    break;
                    case 5 || -5:
                      document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is afua";
                    break;
                    case 6 || -6:
                      document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is ama";
                    break;
  
                }
          break
          default:
          console.log("pass");//Test gender switch
}
}  