// Данные карточек
const cardsData = [
  {
    img: "./img/card1.png",
    name: "Azure Dream",
    color: "blue",
    colorName: "Синий",
    price: 2.15
  },
  {
    img: "./img/card2.png",
    name: "Scarlet Blaze",
    color: "red",
    colorName: "Красный",
    price: 1.75
  },
  {
    img: "./img/card3.png",
    name: "Emerald Forest",
    color: "green",
    colorName: "Зелёный",
    price: 3.05
  },
  {
    img: "./img/card4.png",
    name: "Golden Sun",
    color: "yellow",
    colorName: "Жёлтый",
    price: 1.25
  },
  {
    img: "./img/card1.png",
    name: "Violet Night",
    color: "purple",
    colorName: "Фиолетовый",
    price: 2.85
  },
  {
    img: "./img/card2.png",
    name: "Crimson Wave",
    color: "red",
    colorName: "Красный",
    price: 2.35
  },
  {
    img: "./img/card3.png",
    name: "Oceanic",
    color: "blue",
    colorName: "Синий",
    price: 1.95
  },
  {
    img: "./img/card4.png",
    name: "Lime Twist",
    color: "green",
    colorName: "Зелёный",
    price: 1.55
  }
];

// Рендер карточек
function renderCards(cards) {
  const cardsContainer = document.getElementById('cards');
  cardsContainer.innerHTML = '';
  cards.forEach(card => {
    cardsContainer.innerHTML += `
      <div class="card" data-color="${card.color}" data-price="${card.price}" data-name="${card.name}">
        <span class="color-label" style="background:${card.color};"></span>
        <img src="${card.img}" alt="">
        <h3>${card.name}</h3>
        <div class="btm">
          <div class="left">
            <p class="top">Current bid</p>
            <div class="bottom">
              <img src="./img/mdi_ethereum.png" alt="">
              <p>${card.price}</p>
            </div>
            <div style="font-size:13px; color:#888;">${card.colorName}</div>
          </div>
          <div class="right">
            <a href="" class="card_btm">PLACE BID</a>
          </div>
        </div>
      </div>
    `;
  });
}

// Сортировка
function sortCards(type) {
  let sorted = [...cardsData];
  if (type === 'color') {
    sorted.sort((a, b) => a.color.localeCompare(b.color));
  } else if (type === 'price') {
    sorted.sort((a, b) => a.price - b.price);
  } else if (type === 'name') {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
  }
  renderCards(sorted);
}

// События на кнопки
document.addEventListener('DOMContentLoaded', () => {
  renderCards(cardsData);

  document.querySelectorAll('.button[data-sort]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      sortCards(this.dataset.sort);
    });
  });
});