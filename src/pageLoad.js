const HomePage = () => {
    const content = document.getElementById("content");

    const headline = document.createElement("div");
    const main = document.createElement("div");

    headline.setAttribute("class", "headline");
    main.setAttribute("class", "main");

    const headlinetext = document.createElement("h2");
    headlinetext.textContent = "HOME PAGE";

    const text_content = document.createElement("div");
    const image_content = document.createElement("div");

    text_content.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit porro dolore amet deserunt accusamus expedita vitae doloribus, quaerat quis voluptatibus voluptatum quidem quos nihil consequuntur saepe distinctio blanditiis placeat ?";

    main.appendChild(text_content);
    main.appendChild(image_content);

    headline.appendChild(headlinetext);

    content.appendChild(headline);
    content.appendChild(main);

    return content;
};

const MenuPage = () => {
    const content = document.getElementById("content");

    const headline = document.createElement("div");
    const main = document.createElement("div");

    headline.setAttribute("class", "headline");
    main.setAttribute("class", "main");

    const headlinetext = document.createElement("h2");
    headlinetext.textContent = "MENU PAGE";

    const text_content = document.createElement("ul");
    const items = ["POTATO", "TOMATO", "MEAT", "OLIVE OIL"];
    items.forEach(itemText => {
        const liElement = document.createElement("li");
        liElement.textContent = itemText;
        text_content.appendChild(liElement);
    })

    main.appendChild(text_content);

    headline.appendChild(headlinetext);

    content.appendChild(headline);
    content.appendChild(main);

    return content;
};

const AboutPage = () => {
    const content = document.getElementById("content");

    const headline = document.createElement("div");
    const main = document.createElement("div");

    headline.setAttribute("class", "headline");
    main.setAttribute("class", "main");

    const headlinetext = document.createElement("h2");
    headlinetext.textContent = "ABOUT PAGE";

    const name_content = document.createElement('div');
    const contact_content = document.createElement('div');
    name_content.style.display = 'flex';
    contact_content.style.display = 'flex';

    const name_title = document.createElement('p');
    name_title.textContent = "Name : ";
    const name_input = document.createElement('input');

    const contact_title = document.createElement('p');
    contact_title.textContent = "Contact : ";
    const contact_input = document.createElement('input');

    name_content.appendChild(name_title);
    name_content.appendChild(name_input);
    contact_content.appendChild(contact_title);
    contact_content.appendChild(contact_input);

    main.appendChild(name_content);
    main.appendChild(contact_content);

    headline.appendChild(headlinetext);

    content.appendChild(headline);
    content.appendChild(main);

    return content;
};

export {HomePage, MenuPage, AboutPage};
