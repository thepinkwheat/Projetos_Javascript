const btn_createItem = window.document.getElementById('create-item')
const itemList = window.document.getElementById('list')
let itemValue = window.document.getElementById('itemValue')

btn_createItem.addEventListener('click', createItem)

function createItem(){
    let item = document.createElement('div')
    let btnItem = document.createElement('button')
    let textItem = document.createTextNode(itemValue.value)

    btnItem.innerText = 'Excluir'    
    btnItem.className = 'btn'
    item.className = "item-list"

    
    
    item.appendChild(btnItem)
    item.appendChild(textItem)

    console.log(item)

    itemList.appendChild(item)
}