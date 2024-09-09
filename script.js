const convertButton = document.querySelector(".convert-button")
const currencySelec = document.querySelector(".currency-selec")


function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.5
    const euroToday = 6.2
    const libraToday = 7.3
    const bitcoinToday = 312959.2

    if (currencySelec.value == 'dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelec.value == 'euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelec.value == 'libra') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelec.value == 'bitcoin') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


}

function changeCurrency (){
     const currencyName = document.getElementById("currency-name")
     const currencyImage = document.querySelector(".currency-img")

     if (currencySelec.value == 'dolar'){
        currencyName.innerHTML = "Dólar Ameriano"
        currencyImage.src ="./assets/dolar.png"
     }

     
     if (currencySelec.value == 'euro'){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
     }

     if (currencySelec.value == 'libra'){
        currencyName.innerHTML = "Libra"
        currencyImage.src ="./assets/libra.png"
     }

     if (currencySelec.value == 'bitcoin'){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src ="./assets/bitcoin.png"
     }


     convertValues()

    }


currencySelec.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)