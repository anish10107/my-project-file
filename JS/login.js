const form = document.querySelector(".login form"),
continueBtn = form.querySelector(".button input"),
erroeText = form.querySelector(".error-txt");

form.onsubmit = (e)=>{
    e.preventDefault();
}

continueBtn.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/login.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                console.log(data);
                if(data == "success"){
                    location.href = "users.php";    
                }else{
                   erroeText.style.display = "block";
                   erroeText.textContent = data; 
                }
            }
        }
    }
    // we have to send the form data through ajax to php
    let formData = new FormData(form);
    xhr.send(formData);
}