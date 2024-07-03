const API_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json"


const amount1 = document.querySelector(".amount input");
const dropdown = document.querySelectorAll(".box1 select");
const message_1 = document.querySelector(".msg-h");
const message_2 = document.querySelector(".msg-hh");
const message_3 = document.querySelector(".msg-l")
const butt = document.querySelector("button");



for (select of dropdown) {
    for (let Cuncodes in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = Cuncodes;
        newOption.value = Cuncodes;
        if(select.name === "From" && Cuncodes === "USD"){
            newOption.selected = "selected";
        }else if(select.name === "to" && Cuncodes === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    
    select.addEventListener("change", (evt) => {
        updateflag(evt.target);
      });
}

const updateflag=(element)=>{
    let currencycode=element.value;
    let cuntcode = countryList[currencycode];
    let newsrc = `https://flagsapi.com/${cuntcode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
}


