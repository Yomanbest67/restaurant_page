function menu () {
    const menu = document.createElement('div');
    const title = document.createElement('h1');

    const menuItems = [
        createItem('Fish', "Our delicious locally-sourced fish are grilled and drizzled with lemon! Just 5$.", "🐟"),
        createItem('Shrimp Fried Rice', "This delectable shrimp fried rice is prepared with lots of love! Just 6$.", "🍤"),
        createItem('Mouth-Watering Paella', "Our paella is served in generous portions! Just 6$.", "🥘"),
        createItem('Fresh Salmon Sushi', "Prepared traditionally with the freshest fish! Just 8$.", "🍣")
    ];
    
    menu.classList.add('menu');
    title.classList.add('menuTitle');
    title.textContent = 'Our Menu!';

    menu.appendChild(title);

    for (const item of menuItems){
        item.classList.add('menuItem');
        menu.appendChild(item);
    }

    return menu;
}

function createItem (name, description, photo) {
    const itemDiv = document.createElement('div');
    const itemDescDiv = document.createElement('div');
    const itemTitle = document.createElement('h2');
    const itemDesc = document.createElement('p');
    const itemPhoto = document.createElement('div');

    itemDescDiv.classList.add('desc');
    itemTitle.classList.add('title');
    itemDesc.classList.add('details');
    itemPhoto.classList.add('photo');

    itemTitle.textContent = name;
    itemDesc.textContent = description;
    itemPhoto.textContent = photo;

    itemDescDiv.appendChild(itemTitle);
    itemDescDiv.appendChild(itemDesc);

    itemDiv.appendChild(itemDescDiv);
    itemDiv.appendChild(itemPhoto);

    return itemDiv;
}

export default menu