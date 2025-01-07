const tabHeader = document.querySelector(".tabheader__items");
let country = document.querySelector('.tabheader__item');
let description = document.querySelector('.tab_content div p b');
let images = document.querySelectorAll('img');

const countryData = {
    'Paris': {
        description: "Paris",
        images: 'about_img.png'
    },
    'London': {
        description: "London",
        images: 'about_img.png'
    },
    'Dubai': {
        description: "Dubai",
        images: 'about_img.png'
    },
    'Moscow': {
        description: "Moscow",
        images: 'about_img.png'
    },
    'Tashkent': {
        description: "Tashkent",
        images: 'about_img.png'
    }
};

tabHeader.addEventListener('click', (events) => {
    if (events.target.matches('.tabheader__item')) {
        tabHeader.querySelectorAll('.tabheader__item').forEach(item => item.classList.remove('tabheader__item_active'));
        events.target.classList.add('tabheader__item_active');

        const selectedCountry = events.target.textContent.trim();

        if (countryData[selectedCountry]) {
            description.textContent = countryData[selectedCountry].description;
            images.forEach((img) => {
                img.src = `./img/${countryData[selectedCountry].images}`;
                img.alt = selectedCountry;
            });
        }
    }
});
