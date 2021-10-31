let profileClick = document.getElementById("profile");

profileClick.addEventListener("click", profileShow);
function profileShow() {

    let dropdown = document.getElementById("profileclick");
    let Bool = dropdown.getAttribute("style")
    if (Bool == "display:none !important"){
    dropdown.setAttribute("style", "display:inline-block !important") }
    else {
        
        dropdown.setAttribute("style", "display:none !important") 

    }

}