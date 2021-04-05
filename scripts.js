function myFunction() {
  let filter = document.getElementById('filter').value.toUpperCase();
  
  let tableRecord = document.getElementById('tableRecord');
  
  let tr = tableRecord.getElementsByTagName('table');
  let thead = tableRecord.getElementsByTagName('thead');

  for(var i = 0;i<thead.length;i++){
    let td = thead[i];
    if(td){
      let textvalue = td.textContent || td.innerHTML;

      if(textvalue.toUpperCase().indexOf(filter) > -1){
        thead[i].style.display="";
        tr[i].style.display="";

      }else{
        thead[i].style.display= "none";
        tr[i].style.display= "none";

      }
    }
  }
}
const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('table');
container.setAttribute('id','tableRecord');
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
     // Image hero
      const im = document.createElement('img')
      im.src = heroes.images.xs
      // Heroes Name
      const h1 = document.createElement('thead');
      h1.textContent = heroes.name;

      //Full Name 
      const p = document.createElement('td');
      heroes.biography.fullName = heroes.biography.fullName;
      p.textContent = 'Full Name : ' + `${heroes.biography.fullName}`;
      
      // Place of birth 
      const m = document.createElement('td')
      heroes.biography.placeOfBirth = heroes.biography.placeOfBirth;
      m.textContent = 'Place of birth : '+ `${heroes.biography.placeOfBirth}`;
     
      // Gender 
      const n = document.createElement('td')
      heroes.appearance.gender = heroes.appearance.gender;
      n.textContent = 'Gender : '+`${heroes.appearance.gender}`;
      
      // Power Stats 
      const b = document.createElement('td')
      Object.entries(heroes.powerstats).forEach(([key, value]) => b.textContent+=' '+(`${key}: ${value}`));
      ///for (const property in heroes.powerstats){
      // heroes.powerstats = heroes.powerstats;
      //b.textContent = `${Object.entries(heroes.powerstats)}...`;
      ///b.textContent = `${heroes.powerstats[property]}`;
    
    // Race
    const r = document.createElement('td')
    heroes.appearance.race = heroes.appearance.race;
    r.textContent = 'Race : ' + `${heroes.appearance.race}`
    // Alignement 
    const a = document.createElement('td')
    heroes.biography.alignment = heroes.biography.alignment;
    a.textContent = 'Alignement : '+ `${heroes.biography.alignment}`;
   
    // height 
    const h = document.createElement('td')
    heroes.appearance.height = heroes.appearance.height;
    h.textContent = 'Heigth : '+ `${heroes.appearance.height}`;

     // weight 
     const w = document.createElement('td')
     heroes.appearance.weight = heroes.appearance.weight;
     w.textContent = 'Weigth : '+ `${heroes.appearance.weight}`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(im);
      card.appendChild(p);
      card.appendChild(m);
      card.appendChild(n);
      card.appendChild(b);
      card.appendChild(r);
      card.appendChild(a);
      card.appendChild(h);
      card.appendChild(w);
      
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Il ya un probleme`;
    app.appendChild(errorMessage);
  }
}

request.send();