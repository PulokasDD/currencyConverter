const ulListCurrency = document.getElementById('currency_container').children[1]

document.addEventListener('DOMContentLoaded', async () => {
  let currency;
  const API_KEY = '8aae28e1529af2709c13';
  await fetch(`https://free.currconv.com/api/v7/convert?q=USD_RUB,EUR_RUB&compact=ultra&apiKey=${API_KEY}`)
    .then(res => res.json())
    .then(data => currency = data)
  ulListCurrency.innerHTML = `<li><b>Курс € ${currency.EUR_RUB.toFixed(2)}<b/><li/><li><b>Курс $ ${currency.USD_RUB.toFixed(2)}<b/><li/>`
})
