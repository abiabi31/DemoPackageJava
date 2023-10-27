  

      window.onload = function() {
        var value1 = localStorage.getItem('myValuea');
        var value2= localStorage.getItem('myValueb');
        var value3= localStorage.getItem('myValuec');
        var value4= localStorage.getItem('myValued');
        var value5= localStorage.getItem('myValuee');
        var value6= localStorage.getItem('myValuef');
        var value7= localStorage.getItem('myValueg'); 
        var value8= localStorage.getItem('myValueh');

        var outputa = document.getElementById('value-output-1');
        var outputb = document.getElementById('value-output-2');
        var outputc = document.getElementById('value-output-3');
        var outputd = document.getElementById('value-output-4');
        var outpute = document.getElementById('value-output-5');
        var outputf = document.getElementById('value-output-6');
        var outputg = document.getElementById('value-output-7');
        var outputh = document.getElementById('value-output-8');
        outputa.innerText = value1;
        outputb.innerText = value2;
        outputc.innerText = value3;
        outputd.innerText = value4;
        outpute.innerText = value5;
        outputf.innerText = value6;
        outputg.innerText = value7;
        outputh.innerText = value8;
        

      };   
      
var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};
 
 
$('#downloadButton').click(function () {
    doc.fromHTML($('#div').html(), 15, 15, {
        'width': 700,
        'elementHandlers': specialElementHandlers
    });
    doc.save('sample_file.pdf');
});