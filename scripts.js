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

  // On commence à accèder aux données JSON 
  
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(heroes => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
     
      // Heroes Name
      const h1 = document.createElement('h1');
      h1.textContent = heroes.name;

      //Full Name 
      const p = document.createElement('p');
      heroes.biography.fullName = heroes.biography.fullName.substring(0, 300);
      p.textContent = `${heroes.biography.fullName}...`;
      
      // Place of birth 
      const m = document.createElement('p')
      heroes.biography.placeOfBirth = heroes.biography.placeOfBirth.substring(0, 300);
      m.textContent = `${heroes.biography.placeOfBirth}...`;
     
      // Gender 
      const n = document.createElement('p')
      heroes.appearance.gender = heroes.appearance.gender.substring(0, 300);
      n.textContent = `${heroes.appearance.gender}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      card.appendChild(m);
      card.appendChild(n);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Il ya un probleme`;
    app.appendChild(errorMessage);
  }
}

request.send();

/* -- Fonctione de tri de la barre de recherche -- */

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}