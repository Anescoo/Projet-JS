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
      const img = document.createElement('img')
      img.src = heroes.images.xs
      // Heroes Name
      const HeroTitle = document.createElement('thead');
      HeroTitle.textContent = heroes.name;

      //Full Name 
      const Fname = document.createElement('td');
      heroes.biography.fullName = heroes.biography.fullName;
      Fname.textContent = 'Full Name : ' + `${heroes.biography.fullName}`;
      
      // Place of birth 
      const Place = document.createElement('td')
      heroes.biography.placeOfBirth = heroes.biography.placeOfBirth;
      Place.textContent = 'Place of birth : '+ `${heroes.biography.placeOfBirth}`;
     
      // Gender 
      const Gender = document.createElement('td')
      heroes.appearance.gender = heroes.appearance.gender;
      Gender.textContent = 'Gender : '+`${heroes.appearance.gender}`;
      
      // Power Stats 
      const Power = document.createElement('td')
      Object.entries(heroes.powerstats).forEach(([key, value]) => Power.textContent+=' '+(`${key}: ${value}`));
      ///for (const property in heroes.powerstats){
      // heroes.powerstats = heroes.powerstats;
      //b.textContent = `${Object.entries(heroes.powerstats)}...`;
      ///b.textContent = `${heroes.powerstats[property]}`;
    
    // Race
    const Race = document.createElement('td')
    heroes.appearance.race = heroes.appearance.race;
    Race.textContent = 'Race : ' + `${heroes.appearance.race}`
    // Alignement 
    const Align = document.createElement('td')
    heroes.biography.alignment = heroes.biography.alignment;
    Align.textContent = 'Alignement : '+ `${heroes.biography.alignment}`;
   
    // height 
    const Height = document.createElement('td')
    heroes.appearance.height = heroes.appearance.height;
    Height.textContent = 'Heigth : '+ `${heroes.appearance.height}`;

     // weight 
     const Weight = document.createElement('td')
     heroes.appearance.weight = heroes.appearance.weight;
     Weight.textContent = 'Weigth : '+ `${heroes.appearance.weight}`;

      container.appendChild(card);
      card.appendChild(HeroTitle);
      card.appendChild(img);
      card.appendChild(Fname);
      card.appendChild(Place);
      card.appendChild(Gender);
      card.appendChild(Power);
      card.appendChild(Race);
      card.appendChild(Align);
      card.appendChild(Height);
      card.appendChild(Weight);
      
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Il ya un probleme`;
    app.appendChild(errorMessage);
  }
}

request.send();