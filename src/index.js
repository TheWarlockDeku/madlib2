var Body1, Body2, verb, person, noise;
function Next(){
 Body1 = document.getElementById("Body1").value;
 Body2 = document.getElementById("Body2").value;
 verb = document.getElementById("verb").value;
 person = document.getElementById("person").value;
 noise = document.getElementById("noise").value;
//noise = noise.toUpperCase();
document.getElementById("textbox").value= `To dance, first put your ${Body1} on ${person}'s ${Body2} then you ${verb} while you ${noise}.`;
//document.getElementById("results").style.display="flex";
document.getElementById("inputs").style.display="none";
};
function reset(){
  document.getElementById("Body1").value="";
  document.getElementById("Body2").value="";
  document.getElementById("verb").value="";
  document.getElementById("person").value="";
  document.getElementById("noise").value="";
  document.getElementById("textbox").value="";
  document.getElementById("inputs").style.display="initial";
  document.getElementById("results").style.display="initial";
 }

document.getElementById("nextBtn").addEventListener("click", Next);
document.getElementById("resetB").addEventListener("click", reset);
