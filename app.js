'use strict';
//array of image objects
var allProducts = [];
//array for randomly generated images?
var imageArray = [];

//right, left and center slots for images
var rightIndex;
var leftIndex;
var centerIndex;

var counter =

container.addEventListener('click', handleClick);

//constructor function
function testProduct(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.tally = 0;
  this.clicks = 0;
  allProducts.push(this);
  imageArray.push(this);

};

//instances
var bag = new testProduct('bag', 'images/bag.jpg');
var banana = new testProduct('banana', 'images/banana.jpg');
var bathroom = new testProduct('bathroom', 'images/bathroom.jpg');
var boots = new testProduct('product', 'images/boots.jpg');
var breakfast = new testProduct('breakfast', 'images/breakfast.jpg');
var bubblegum = new testProduct('bubblegum', 'images/bubblegum.jpg');
var chair = new testProduct('chair', 'images/chair.jpg');
var cthulhu = new testProduct('cthulhu', 'images/cthulhu.jpg');
var dogduck = new testProduct('dog-duck', 'images/dog-duck.jpg');
var dragon = new testProduct('dragon', 'images/dragon.jpg');
var pen = new testProduct('pen', 'images/pen.jpg');
var petsweep = new testProduct('pet-sweep', 'images/pet-sweep.jpg');
var scissors = new testProduct('scissors', 'images/scissors.jpg');
var shark = new testProduct('shark', 'images/shark.jpg');
var sweep = new testProduct('sweep', 'images/sweep.png');
var tauntaun = new testProduct('tauntaun', 'images/tauntaun.jpg');
var unicorn = new testProduct('unicorn', 'images/unicorn.jpg');
var usb = new testProduct('usb', 'images/usb.gif');
var watercan = new testProduct('watercan', 'images/water-can.jpg');
var wineglass = new testProduct('wineglass', 'images/wine-glass.jpg');

function randomProducts() {
  function randomPics() {
    for(var i = 0; i < 3; i++) {
      rightIndex = Math.floor(Math.random() * allProducts.length);
      leftIndex = Math.floor(Math.random() * allProducts.length);
      centerIndex = Math.floor(Math.random() * allProducts.length);
    }
    var right = document.getElementById('right');
    var left = document.getElementById('left');
    var center = document.getElementById('center');

    right.src = allProducts[rightIndex].filepath;
    left.src = allProducts[leftIndex].filepath;
    center.src = allProducts[centerIndex].filepath;
  }
  randomPics();
};
randomProducts();

function handleClick(event){
  if(event.target.id === 'clickableImage') {
    alert('Make sure you click on an image!');
  }

}

// if statement saying clicks are less than 25
// on every click i want it to increment upon every click
// onClick increment the counter once more
// get a console.log to confirm
