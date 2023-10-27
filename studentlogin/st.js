document.getElementById("for").addEventListener("submit", function (event) {
    event.preventDefault();
    const te = document.getElementById("tex").value;
    const pas = document.getElementById("pass").value;
    // if(pas==="abish" &&  te==="abish"){
    //     window.location.href= "file:///D:/a.js/studendtask/loginpage/e.html";


    // } else{
    //     document.getElementById("error").innerHTML=" Incorrect ........ "
    // }

    pas === "abish" && te === "abish" ? window.location.href = "file:///D:/a.js/studendtask/loginpage/e.html" : document.getElementById("error").innerHTML = " Incorrect ........ "

});

