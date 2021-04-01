function myFunction() {
  var input, filter, table, tr, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myUL");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
      a = tr[i].getElementsByTagName("table")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
      } else {
          tr[i].style.display = "none";
      }
  }
}
const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('table');
container.setAttribute('id','myUL');
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
      const card = document.createElement('table');
      card.setAttribute('class', 'card');
     
      const im = document.createElement('img')
      im.src = heroes.images.xs
      // Heroes Name
      const h1 = document.createElement('thead');
      h1.textContent = heroes.name;

      //Full Name 
      const p = document.createElement('td');
      heroes.biography.fullName = heroes.biography.fullName.substring(0, 300);
      p.textContent = `${heroes.biography.fullName}...`;
      
      // Place of birth 
      const m = document.createElement('td')
      heroes.biography.placeOfBirth = heroes.biography.placeOfBirth.substring(0, 300);
      m.textContent = `${heroes.biography.placeOfBirth}...`;
     
      // Gender 
      const n = document.createElement('td')
      heroes.appearance.gender = heroes.appearance.gender.substring(0, 300);
      n.textContent = `${heroes.appearance.gender}...`;
      
      // Power Stats 
      const b = document.createElement('td')
      for (const [key, value] of Object.entries(heroes.powerstats)){
      // heroes.powerstats = heroes.powerstats;
      //b.textContent = `${Object.entries(heroes.powerstats)}...`;
      b.textContent = `${key}: ${value}`
    }

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(im);
      card.appendChild(p);
      card.appendChild(m);
      card.appendChild(n);
      card.appendChild(b);
      
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Il ya un probleme`;
    app.appendChild(errorMessage);
  }
}

request.send();