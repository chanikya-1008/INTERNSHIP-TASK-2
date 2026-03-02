// FORM VALIDATION
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");

    let valid = true;
    document.querySelectorAll(".error").forEach(el => el.textContent="");

    if(name.value.trim()===""){
        name.nextElementSibling.textContent="Required";
        valid=false;
    }

    if(email.value.trim()===""){
        email.nextElementSibling.textContent="Required";
        valid=false;
    } else if(!/^\S+@\S+\.\S+$/.test(email.value)){
        email.nextElementSibling.textContent="Invalid Email";
        valid=false;
    }

    if(phone.value.trim()===""){
        phone.nextElementSibling.textContent="Required";
        valid=false;
    }

    if(message.value.trim()===""){
        message.nextElementSibling.textContent="Required";
        valid=false;
    }

    if(valid){
        alert("Form Submitted Successfully");
        form.reset();
    }
});

// GALLERY
const addImageBtn = document.getElementById("addImage");
const imageInput = document.getElementById("imageInput");
const gallery = document.getElementById("gallery");

addImageBtn.addEventListener("click", function(){

    const file = imageInput.files[0];
    if(!file){
        alert("Select an image first");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e){
        const wrapper = document.createElement("div");
        wrapper.classList.add("image-wrapper");

        const img = document.createElement("img");
        img.src = e.target.result;

        const del = document.createElement("button");
        del.textContent="×";
        del.classList.add("delete-btn");

        del.onclick = function(){
            wrapper.remove();
        };

        wrapper.appendChild(img);
        wrapper.appendChild(del);
        gallery.appendChild(wrapper);
    };

    reader.readAsDataURL(file);
    imageInput.value="";
});

// SCROLL REVEAL
const reveals = document.querySelectorAll(".card");

window.addEventListener("scroll", ()=>{
    reveals.forEach(card=>{
        const windowHeight = window.innerHeight;
        const elementTop = card.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            card.classList.add("active");
        }
    });
});