const targets = document.querySelector("#charactersTableBody")
const name = document.querySelector("#characterName")

function addItem(card){
    targets.appendChild(card)
}

function clear() {
  name.value = "";
}

export { addItem, clear, name, targets}