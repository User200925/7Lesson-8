const containerCards = document.getElementById('container-cards');

const countriesToShow = ["Germany", "United States", "Brazil", "Iceland", "Afghanistan", "Åland Islands", "Albania", "Algeria"];

async function fetchAPI() {
    try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        const filteredData = data.filter(country => countriesToShow.includes(country.name.common));
        generator(filteredData);
    } catch (error) {
        console.log(error);
    }
}

fetchAPI();

function generator(products) {
    containerCards.innerHTML = '';
    products.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${element.flags.svg}" alt="Flag of ${element.name.common}">
            <h3>${element.name.common}</h3>
        `;
        containerCards.appendChild(card);
    });
}

const dayNightToggle = document.getElementById('daynight');
dayNightToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
