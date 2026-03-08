const dataJson = document.querySelector('div[data-json]');
const json = dataJson.getAttribute('data-json');
console.log(JSON.parse(json));