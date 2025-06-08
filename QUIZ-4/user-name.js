function userName(name){
    console.log(name)
    if (!name) {
    throw new Error("Invalid data provided");
    }

    const card = document.createElement('div')
    card.classList.add('names')
    
    card.innerHTML = 
    `
    <tr>
        <td>${name}</td>
    </tr>
    `

    return card

}

export default userName