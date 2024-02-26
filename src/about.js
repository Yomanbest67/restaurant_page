function about() {
    const about = document.createElement('div');
    const title = document.createElement('h1');
    const contacts = [
        createContact('John John', 'Manager<br>777-555-113<br>JohnJohn@realemail.com'),
        createContact('Andrew John', 'Event Coordinator<br>777-555-120<br>AndrewJohn@realemail.com'),
        createContact('General Support', 'Our Dedicated Team!<br>777-555-125<br>support@realemail.com')
    ];

    title.textContent = 'Contact Us!'


    about.appendChild(title);

    for (const contact of contacts){
        about.appendChild(contact);
    }

    about.classList.add('about');
    
    return about;
}

function createContact(name, details) {
    const contactDiv = document.createElement('div');
    const contactName = document.createElement('h2');
    const contactDetails = document.createElement('p');

    contactDiv.classList.add('contact');
    contactName.classList.add('name');
    contactDetails.classList.add('details');

    contactName.textContent = name;
    contactDetails.innerHTML = details;

    contactDiv.appendChild(contactName);
    contactDiv.appendChild(contactDetails);

    return contactDiv;
}

export default about