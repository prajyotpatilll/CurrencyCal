const API_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"


const amount1 = document.querySelector(".amount input");
const dropdown = document.querySelectorAll(".box1 select");
const butt = document.querySelector("button");
const message_1 = document.querySelector(".msg-h");
const message_2 = document.querySelector(".msh-hh");
const message_3 = document.querySelector(".msg-l");
const fromcurrency = document.querySelector("#from-box select");
const tocurrency = document.querySelector("#to-box select");


for (select of dropdown) {
    for (let Cuncodes in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = Cuncodes;
        newOption.value = Cuncodes;
        if (select.name === "From" && Cuncodes === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && Cuncodes === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateflag(evt.target);
    });
}

const updateflag = (element) => {
    let currencycode = element.value;
    let cuntcode = countryList[currencycode];
    let newsrc = `https://flagsapi.com/${cuntcode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
}



butt.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amountInput = document.querySelector(".amount input");
    let amountVal = amountInput.value;
    if (typeof amountVal === 'number' && !isNaN(amountVal)) {
        if (amountVal === "" || amountVal < 1) {
            amountVal = 1;
            amountInput.value = "1";
        };
    } else {
        if (amountVal === "" || amountVal < 1 || isNaN(amountVal)) {
            amountVal = 1;
            amountInput.value = "1";
        };
    }

    const url = `${API_URL}/${fromcurrency.value.toLowerCase()}.json`;
    const url2 = `${API_URL}/${tocurrency.value.toLowerCase()}.json`;

    let f1 = tocurrency.value.toLowerCase();
    let f2 = fromcurrency.value.toLowerCase();

    let response = await fetch(url);
    let data = await response.json();
    let fromRate = await data[f2][f1];
    let finalamount = amountVal * fromRate;

    let response2 = await fetch(url2);
    let data2 = await response2.json();
    let fromRate2 = await data2[f1][f2];
    let finalamount2 = amountVal * fromRate2;


    message_1.innerText = `${amountVal} ${fromcurrency.value} = `;
    message_2.innerText = `${finalamount}  ${tocurrency.value}`;

    message_3.innerText = `${amountVal} ${tocurrency.value} = ${finalamount2} ${fromcurrency.value}`;

})


