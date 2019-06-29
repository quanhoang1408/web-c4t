function show_data() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    if(username == 'admin' && password == 'admin'){
        window.location.assign("trangchu.html")
    }
    else{
        alert("Wrong username or password. Try again !")
    }
}

