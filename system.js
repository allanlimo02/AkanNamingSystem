
function val(){
  var uname=document.getElementById("uname").value;
  var cc=document.getElementById("century").value;
  var yy=document.getElementById("age").value;
  var mm=document.getElementById("month").value;
  var dd=document.getElementById("date").value;

  
  // Form Validator 
  if(uname==''){
      window.alert('Kindly input a valid Name');
      uname.focus();  
      return false;

  }
   if(cc=='' ){
      window.alert('Kindly input a valid century');
      cc.focus();  
      return false;

  }
  if(yy==''){
      window.alert('Input a valid year');
      yy.focus();
      return false;

  }
  else if(mm==''){
      window.alert('Input a valid month');
      mm.focus();
      return false;

  }
  else if(mm>=13){
      window.alert('Input a valid month');
      mm.focus();
      return false;

  }
  else if(dd==''){
      window.alert('Input a valid date');
      dd.focus();
      return false;

  }
 else  if(dd>=31){
      window.alert('Input a valid date');
      mm.focus();
      return false;

  }


  
 //return true;

 var dCalc=parseInt((((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd )%7);

 var gmale=document.getElementById("malegender").checked;
 var gfemale=document.getElementById("femalegender").checked;
 
  if(gmale == false && gfemale == false){
     alert("Select your gender")
 }
 
 
 var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  var male =["Kwasi","Kwadwo","Kwabena","Kwaku","yaw","Kofi","Kwame"];
  var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  
  if(dCalc==0 && gmale==true){
      window.alert("Dear "+uname+",\n Your Akana name is: "+male[0]+ "\n and you were born on: "+days[0])
  }
  else if(dCalc==1 && gmale==true){
      window.alert("Dear "+uname+",\n Your Akana name is: "+male[1]+ "\n and you were born on: "+days[1])
  }
  else if(dCalc==2 && gmale==true){
      window.alert("Dear "+uname+",\n Your Akana name is: "+male[2]+ "\n and you were born on: "+days[2])
  }
  else if(dCalc==3 && gmale==true){
      window.alert("Dear "+uname+",\n Your Akana name is: "+male[3]+ "\n and you were born on: "+days[3])
  }
  else if(dCalc==4 && gmale==true){
      window.alert("Dear "+uname+",\n Your Akana name is: "+male[4]+ "\n and you were born on: "+days[4])
  }
  else if(dCalc==5 && gmale==true){
      window.alert("Dear "+uname+",\n Your Akana name is: "+male[5]+ "\n and you were born on: "+days[5])
  }
  else if(dCalc==6 && gmale==true){
      window.alert("Dear "+uname+",\n Your Akana name is: "+male[6]+ "\n and you were born on: "+days[6])
  }
  else if(dCalc==0 && gfemale==true){
      window.alert("Dear "+uname+",\n Your Akana name is: "+female[0]+ "\n and you were born on: "+days[0])
  }
  else if(dCalc==1 && gfemale==true){
      window.alert("Dear "+uname+",\n Your Akana name is: "+female[1]+ "\n and you were born on: "+days[1])
  }
  else if(dCalc==2 && gfemale==true){
      window.alert("Dear "+uname+",\n Your Akana name is: "+female[2]+ "\n and you were born on: "+days[2])
  }
  else if(dCalc==3 && gfemale==true){
      window.alert("Dear "+uname+",\n Your Akana name is: "+female[3]+ "\n and you were born on: "+days[3])
  }
  else if(dCalc==4 && gfemale==true){
      window.alert("Dear "+uname+",\n Your Akana name is: "+female[4]+ "\n and you were born on: "+days[4])
  }
  else if(dCalc==5 && gfemale==true){
      window.alert("Dear "+uname+",\n Your Akana name is: "+female[5]+ "\n and you were born on: "+days[5])
  }
  else if(dCalc==6 && gfemale==true){
      window.alert("Dear "+uname+",\n Your Akana name is: "+female[6]+ "\n and you were born on: "+days[6])
  }
  else {
      alert("invalid inputs.")
  }

  
  



};