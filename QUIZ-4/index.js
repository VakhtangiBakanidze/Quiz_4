import userName from "./user-name.js";
import { addItem, clear, name,targets } from "./dom.js";
import { getUser } from "./fetch.js";
const chars = []

document.addEventListener("DOMContentLoaded", async () => {
    const currentChars = await getUser()
    // console.log(currentChars)
    chars.push(...currentChars.results.map(item => item.name))
    const showInfo = chars.map(user => userName(user));
    targets.append(...showInfo)

})

document.querySelector(".button").addEventListener("click", ()=>{
    const nameValue = name.value

    if (!nameValue) {
        const message = "Name bar is empty"
        alert(message)
        throw new Error(message)
    }

  
    chars.push(nameValue)
        const showInfo = chars.map(user => userName(user));
        targets.innerHTML=""
    targets.append(...showInfo)
    // addItem(nameVal)
    clear()
})

document.querySelector("#searchInput").addEventListener("input", (event) => {
    console.log(event.target.value.toLowerCase())
    const query = event.target.value;

    const filtered = chars.filter(user =>
        user.toLowerCase().includes(query)
    )

    const showInfo = filtered.map(user => userName(user))
    targets.innerHTML = ""
    targets.append(...showInfo)
});