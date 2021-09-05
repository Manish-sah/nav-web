let menu = document.getElementById("menu_link");
let menu_btn = document.getElementById("menu_icon");

menu_btn.addEventListener('click', show_menu);


function show_menu() {
    if (menu.style.display == "block") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
    }
}