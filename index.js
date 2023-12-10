let count = 0;
let countEl = document.getElementById("count-el");
function increment() {
  count++;
  countEl.innerText = count;
}
let preMassage = "Previous entries : ";
let saveEl = document.getElementById("save-el");
function save() {
  preMassage += count + " - ";
  saveEl.textContent = preMassage;
  count= 0;
  countEl.textContent = count;
}