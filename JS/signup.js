const form = document.querySelector(".signup form"),
continueBtn = form.querySelector(".button input"),
erroeText = form.querySelector(".error-txt");

form.onsubmit = (e)=>{
    e.preventDefault();
}

continueBtn.onclick = ()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/signup.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                if(data == "success"){
                    location.href = "users.php";    
                }else{
                    erroeText.textContent = data;
                    erroeText.style.display = "block"; 
                }
            }
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}