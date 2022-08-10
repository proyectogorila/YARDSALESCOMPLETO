//seleccion del elemento span del email acitvo
const emailActive = document.querySelector(".emailActiv__email");
//seleccion de contenedor de menu del email activo
const emailMenu = document.querySelector(".container-MyAccount");

// seleccion
const emailCheckbox = document.querySelector(".check__checkbox");
const singingNav = document.querySelector(".menu-derecha__sing-in");
const emailAct = document.querySelector(".menu-derecha__emailActive");

const singoutMenu = document.querySelector(".MyAccount__sing-out");

//quita el id inactive al cargar la pagina para que se pueda ver ein singin
singingNav.removeAttribute("id", "inactive");

//proceso en el que se logea con el checkbox y activa el email

emailCheckbox.addEventListener("click", toogleEmailcheckox);

function toogleEmailcheckox() {
    if (emailCheckbox.checked) {
        emailAct.removeAttribute("id", "inactive");
        singingNav.setAttribute("id", "inactive");
    } else {
        emailAct.setAttribute("id", "inactive");
        singingNav.removeAttribute("id", "inactive");
        emailMenu.classList.add("inactive");
    }
}

//proceso en el que se puede deslogear con el item sing out del menu account
singoutMenu.addEventListener("click", singoutfunction);

function singoutfunction() {
    emailMenu.classList.add("inactive");
    emailCheckbox.checked = false;
    toogleEmailcheckox();
}

// proceso en que si se hace clin en el email aparece el menu account

emailActive.addEventListener("click", toggleEmailMenu);

function toggleEmailMenu() {
    emailMenu.classList.toggle("inactive");
    console.log("Toggling email menu");
}
