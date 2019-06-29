function show_data() {
    var firstname = document.getElementById("inputEmail4").value;
    var lastname = document.getElementById("inputPassword4").value;
    var email = document.getElementById("inputAddress").value;
    var address = document.getElementById("inputAddress2").value;
    var city = document.getElementById("inputCity").value;
    if (firstname==null || firstname=="",lastname==null || lastname=="",email==null || email=="",address==null || address=="",city==null){
        console.log("loi");
    }
    else{
        alert("Your registration form successful! We will contact you as soon as possible!")
    }
}