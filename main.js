let acc = document.getElementsByClassName("accordion");
let content = document.getElementsByClassName("content");

for(let i=0; i<acc.length; i++)
{
    acc[i].onclick = function()
    {
        for(let d=0; d<acc.length; d++)
        {
            if(i == d)
            {

            }
            else
            {
                content[d].classList.remove("show");
            }
        }

        content[i].classList.toggle("show");
    }
}

function button()
{
    let a = document.querySelector("#input").value;
    document.getElementById("natija").innerText = a;   
}