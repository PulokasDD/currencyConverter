document.forms.convertForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const API_KEY = '8aae28e1529af2709c13';
  let result;
  const amount = document.getElementById('amountInput').value;
  const from = document.getElementById('fromCurrency').value;
  const to = document.getElementById('toCurrency').value;
  await fetch(`https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=${API_KEY}`)
    .then(res => res.json())
    .then(data => result = Object.entries(data))
  document.getElementById('totalAmount').innerText = (result[0][1] * amount).toFixed(2) + ' ' + to
})

document.getElementsByClassName('nav_link')[1].addEventListener('click', (event) => {
  event.preventDefault()
  document.getElementById('currency_container').classList.add('visibility')
  document.getElementById('convert_container').classList.remove('visibility')
})

document.getElementsByClassName('nav_link')[0].addEventListener('click', (event) => {
  event.preventDefault()
  document.getElementById('currency_container').classList.remove('visibility')
  document.getElementById('convert_container').classList.add('visibility')
})

