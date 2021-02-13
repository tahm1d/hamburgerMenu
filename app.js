const ham = document.querySelector(".hamburger");
const cont = document.querySelector(".content");
const spanEl = document.querySelectorAll("span");


function toggleNav()
{
    ham.addEventListener("click", function()
    {
        document.querySelector(".nav").classList.toggle("open");
        cont.classList.toggle("shift");
        //spanEl.classList.toggle("change");
        hamChanger();
        
    });
};


function hamChanger()
{
    for(let item of spanEl)
    {

        item.classList.toggle("change");
    }
};


toggleNav();