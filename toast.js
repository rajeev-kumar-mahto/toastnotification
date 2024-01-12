const notifications =document.querySelector(".notifications");
const button = document.querySelectorAll(".button .btn");

const toastDetails ={
    timer : 5000,
    success:{
        icon:'fa-circle-check',
        text:'Success: This is a success toast',
    },
    error:{
        icon:'fa-circle-xmark',
        text:'error: This is a success toast',
    },
    warning:{
        icon:'fa-triangle-exclamation',
        text:'warning: This is a success toast',
    },
    info:{
        icon:'fa-circle-info',
        text:'info: This is a success toast',
    },
}
const removeToast = (toast) => {
    toast.classList.add("hide");
    if(toast.timeoutID) clearTimeout(toast.timeoutID);
    setTimeout(()=>toast.remove(),500);
}
const createToast = (id) =>{
    const {icon,text} = toastDetails[id];
    const toast =document.createElement("li");
    toast.className = `toast ${id}`;

    toast.innerHTML = `<div class="column">
                            <i class="fa-solid ${icon}"></i>
                            <span>${text}</span>
                        </div>
                        <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`
    notifications.appendChild(toast);  
    toast.timeoutID = setTimeout(()=>removeToast(toast),toastDetails.timer);                 
}

button.forEach(btn =>{
    btn.addEventListener("click",()=> createToast(btn.id));
});