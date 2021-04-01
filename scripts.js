const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json', true);
request.onload = function () {

  // On commence à acceder aux données JSON 
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(heroes => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = heroes.name;

      const p = document.createElement('p');
      heroes.biography.fullName = heroes.biography.fullName.substring(0, 300);
      p.textContent = `${heroes.biography.fullName}...`;

      const m = document.createElement('p')
      heroes.biography.placeOfBirth = heroes.biography.placeOfBirth.substring(0, 300);
      m.textContent = `${heroes.biography.placeOfBirth}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      card.appendChild(m);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Il ya un probleme`;
    app.appendChild(errorMessage);
  }
}

request.send();