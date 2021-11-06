'use strict';

let imgDiv = document.getElementById('imgDiv');
let form = document.getElementById('form');
let table=document.getElementById('table');

let places = [];

let images=['img/HAWAII exam.jpg','img/ITALY exam.png','img/LONDON exam.png'
  ,'img/MALAYSIA exam.png','img/PARIS exam.png','img/SLOVAKIA exam.png',];
// let images=[];

// function imgObject(name,source){
//   this.name=name;
//   this.source=source;

//   images.push(this);
// }
// new imgObject('HAWAII','img/HAWAII exam.jpg');
// new imgObject('LONDON','img/LONDON exam.png');
// new imgObject('PARIS','img/PARIS exam.png');
// new imgObject('ITALY','img/ITALY exam.png');
// new imgObject('SLOVAKIA','img/SLOVAKIA exam.png');
// new imgObject('MALAYSIA','img/MALAYSIA exam.png');

function tripPlace(name, trip, type) {
  this.name = name;
  this.trip = trip;
  this.type = type;
  //   this.images=images;


  this.render();

  places.push(this);
}

tripPlace.prototype.render = function () {

  let img = document.createElement('img');
  imgDiv.appendChild(img);

  for (let i = 0; i < images.length; i++) {
   
    
    img.setAttribute("src", images[i]);
    
  }


  let p = document.createElement('p');
  imgDiv.appendChild(p);
  p.textContent = `Place Name : ${this.name}`;

  let p1 = document.createElement('p');
  imgDiv.appendChild(p1);
  p1.textContent = `Trip Place :  ${this.trip}`;

  let p2 = document.createElement('p');
  imgDiv.appendChild(p2);
  p2.textContent = ` Type Of Transport :  ${this.type}`;
// try the strech goal
let li=document.createElement('button');
imgDiv.appendChild(li);
li.textContent='x';

li.addEventListener('click',clicker)

function clicker(){
    imgDiv.deleterow(imgDiv.rows.length -1);
}

//.................................
};

form.addEventListener('submit', submitter);

function submitter(event) {
  event.preventDefault();

  let name = event.target.name.value;
  let trip = event.target.trip.value;
  let type = event.target.type.value;

    // let imgname=event.target.trip.value;

    // new imgObject(imgname,'img/HAWAII exam.jpg');
    // new imgObject(imgname,'img/LONDON exam.png');
    // new imgObject(imgname,'img/PARIS exam.png');
    // new imgObject(imgname,'img/ITALY exam.png');
    // new imgObject(imgname,'img/SLOVAKIA exam.png');
    // new imgObject(imgname,'img/MALAYSIA exam.png');

  new tripPlace(name, trip, type);

  form.reset();
  setItem();
}


function setItem() {
  localStorage.setItem('place', JSON.stringify(places));
}

function GetItem() {
  let string = localStorage.getItem('place');
  let objString = JSON.parse(string);

  if (objString !== null) {
    for (let i = 0; i < objString.length; i++) {
      new tripPlace(objString[i].name, objString[i].trip, objString[i].type);

    }
  }
}

// eslint-disable-next-line new-cap
GetItem();


// REmove LOcal Storage
let btn = document.getElementById('btn');

btn.addEventListener('click', clicker);

function clicker() {
  localStorage.clear();
  location.reload();
}
