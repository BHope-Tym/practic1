const btn =document.querySelector(".btn-t");
const theme=document.querySelector("#theme-link");
btn.addEventListener("click", function(){
    if(theme.getAttribute("href") == "../Styles/account.css"){
        theme.href="../Styles/account-light.css";
    } else {
        theme.href="../Styles/account.css";
    }
});
