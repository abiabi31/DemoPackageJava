function submitValue() {


  var inputa = document.getElementById('value-input-1').value;
  var inputb = document.getElementById('value-input-2').value;
  var inputc = document.getElementById('value-input-3').value;
  var inputd = document.getElementById('value-input-4').value;
  var inpute = document.getElementById('value-input-5').value;
  var inputf = document.getElementById('value-input-6').value;
  // var inputg = document.getElementById('value-input-7').value;
  // var inputh = document.getElementById('value-input-8').value;
  // console.log(inputh);
  // console.log(inputg);
  // var valuea = inputa.value;
  // var valueb = inputb.value;
  // var valuec = inputc.value;
  // var valued = inputd.value;
  // var valuee = inpute.value;
  // var valuef = inputf.value;
  // var valueg = inputg.value;
  // var valueh = inputh.value;

  localStorage.setItem('myValuea', inputa);
  localStorage.setItem('myValueb', inputb);
  localStorage.setItem('myValuec', inputc);
  localStorage.setItem('myValued', inputd);
  localStorage.setItem('myValuee', inpute);
  localStorage.setItem('myValuef', inputf);
  localStorage.setItem('myValueg', check);
  localStorage.setItem('myValueh',check1);

  var check = document.getElementById("value-input-7");  
  var check1= document.getElementById("value-input-8");  
  if (check.checked == true && check1.checked == true){  
    return document.getElementById("error").innerHTML = "Please mark only one checkbox either Yes or No";  
  }  
  else if (check.checked == true){  
    var y = document.getElementById("value-input-7").value;  
    return document.getElementById("result").innerHTML = y;   
  }   
  else if (check1.checked == true){  
    var n = document.getElementById("'value-input-8'").value;  
    return document.getElementById("result").innerHTML = n;  
  }  
  else {  
    return document.getElementById("error").innerHTML = "*Please mark any of checkbox";  
  }  
  
  // window.location.href = 'p.html';

}
var inputa = document.getElementById('value-input-1');
const maxLength = 24;
inputa.addEventListener("input", function () {
  const inputText = this.value;
  if (inputText.length > maxLength ) {
    this.value = inputText.slice(0, maxLength);
    charWarning.textContent = " "; 
  }else{
    charWarning.textContent = "";
  }
  
});
var inputb = document.getElementById('value-input-2');
const maxLength1 = 24;
inputb.addEventListener("input", function () {
  const inputText = this.value;
  if (inputText.length > maxLength1) {
    this.value = inputText.slice(0, maxLength1);
    charWarning1.textContent = " ";
  } else {
    charWarning1.textContent = "";
  }
});
var inputd = document.getElementById('value-input-4');
const maxLength2 = 3;
inputd.addEventListener("input", function () {
  const inputText = this.value;
  if (inputText.length > maxLength2) {
    this.value = inputText.slice(0, maxLength2);
    charWarning2.textContent = "";
  } else {
    charWarning2.textContent = "";
  }
});
var inpute = document.getElementById('value-input-5');
const maxLength3 = 12;
inpute.addEventListener("input", function () {
  const inputText = this.value;
  if (inputText.length > maxLength3) {
    this.value = inputText.slice(0, maxLength3);
    charWarning3.textContent = "";
}
  else {
    charWarning3.textContent = "";
  }
});

