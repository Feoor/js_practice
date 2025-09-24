// 1
class RadioStation {
  constructor(name, url, city = '', imageUrl = '') {
    this.name = name;
    this.url = url;
    this.city = city;
    this.imageUrl = imageUrl;
  }

  play(playElement) {
    playElement.src = this.url;
    playElement.play();
  }

  render(parentElement, onSelect, isSelected) {
    const div = document.createElement("div");
    div.className = "station" + (isSelected ? " selected" : "");

    const img = document.createElement("img");
    img.className = "station__img";
    img.src = this.imageUrl || "https://via.placeholder.com/38x38?text=FM";
    img.alt = this.name;

    const info = document.createElement("div");
    info.className = "station__info";

    const name = document.createElement("div");
    name.className = "station__name";
    name.textContent = this.name;

    const city = document.createElement("div");
    city.className = "station__city";
    city.textContent = this.city || "Город неизвестен";

    info.appendChild(name);
    info.appendChild(city);

    div.appendChild(img);
    div.appendChild(info);

    div.addEventListener('click', () => onSelect(this));

    parentElement.appendChild(div);
  }
}

const stationsContainer = document.getElementById('stations');
const radioStations = [
  new RadioStation('Nanoq FM', 'https://getnanoq.retro-radio.dk/Nanoq-TX-1', 'Гренландия'),
  new RadioStation('Võmba FM', 'https://n13.radiojar.com/f1tu5maaxqruv?1757909774=&rj-tok=AAABmUulDYEAoh-NPdVLBaQFxg&rj-ttl=5', 'Хельсинки'),
  new RadioStation('Eurodance', 'https://radiorecord.hostingradio.ru/eurodance96.aacp', 'Москва')
];

let selectedStation = radioStations[0];

function renderStations() {
  stationsContainer.innerHTML = '';
  radioStations.forEach(station =>
    station.render(stationsContainer, selectStation, station === selectedStation)
  );
}

function selectStation(station) {
  selectedStation = station;
  updateCurrentStation();
  renderStations();
  station.play(document.getElementById('radioPlayer'));
}

function updateCurrentStation() {
  document.getElementById('currentImg').src = selectedStation.imageUrl || "https://via.placeholder.com/120x120?text=FM";
  document.getElementById('currentName').textContent = selectedStation.name;
  document.getElementById('currentCity').textContent = selectedStation.city || "Город неизвестен";
}

updateCurrentStation();
renderStations();

// 2
class ProductCard {
  #data;
  #element;

  constructor(data, parentElement) {
    this.#data = data;
    this.parentElement = parentElement;
  }

  render() {
    const productCol = document.createElement('div');
    productCol.classList.add('col')

    const productCard = document.createElement('div');
    productCard.classList.add('product-card', 'card', 'h-100');
    productCard.innerHTML = `
          <img src="${this.#data.image}" class="card-img-top" alt="${this.#data.title}">
          <div class="card-body">
            <h4 class="card-title">${this.#data.title}</h4>
            <p class="card-text">${this.#data.price}</p>
            <button class="btn btn-primary">Добавить в корзину</button>
          </div>
        `;
    productCol.appendChild(productCard);
    this.parentElement.appendChild(productCol);
    this.#element = productCard;
    this.#attachEvents();
  }

  #attachEvents() {
    this.#element.addEventListener('mouseenter', this.#handleMouseEnter.bind(this));
    this.#element.addEventListener('mouseleave', this.#handleMouseLeave.bind(this));
  }

  #handleMouseEnter() {
    this.#element.classList.add('hovered');
  }
  #handleMouseLeave() {
    this.#element.classList.remove('hovered');
  }
}

const products = [
  {
    title: "Наушники X100",
    price: "49900 ₸",
    image: "https://m.media-amazon.com/images/I/61-0dR5fsdL._AC_UY654_QL65_.jpg"
  },
  {
    title: "Игровая мышь GX200",
    price: "29900 ₸",
    image: "https://compress.ru/img/post/2015/03/30/genius-gx-gaming-gila.jpg"
  },
  {
    title: "Клавиатура ProKey",
    price: "39900 ₸",
    image: "https://extremecomp.ru/media/img/330000/337182_v01_b.jpg"
  },
  {
    title: "Монитор UltraWide",
    price: "89900 ₸",
    image: "https://img.al-style.kz/35639_1.jpg"
  },
  {
    title: "собака",
    price: "15000 ₸",
    image: "https://frankfurt.apollo.olxcdn.com/v1/files/ug5a6e38soe12-KZ/image"
  },
  {
    title: "eletroperforator",
    price: "25000 ₸",
    image: "https://static.baza.farpost.ru/v/1649315351400_bulletin"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const productsContainer = document.getElementById('products');

  products.forEach(productData => {
    const card = new ProductCard(productData, productsContainer);
    card.render();
    console.log(`Товар добавлен:\nНазвание: ${productData.title}\nЦена: ${productData.price}\nImage: ${productData.image}`);
  });
})


