'use strict';

var allProducts = [];
var imageArray = [];

function testProduct(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.tally = 0;
  this.clicks = 0;
  allProducts.push(this);
  imageArray.push(this);

}

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
var sweep = new testProduct('sweep', 'images/sweep.jpg');
var tauntaun = new testProduct('tauntaun', 'images/tautaun.jpg');
var unicorn = new testProduct('unicorn', 'images/unicorn.jpg');
var usb = new testProduct('usb', 'images/usb.jpg');
var watercan = new testProduct('watercan', 'images/water-can.jpg');
var wineglass = new testProduct('wineglass', 'images/wineglass.jpg');

function randomPic1() {
  var randomNum = Math.floor(Math.random() * allProducts.length);
  document.getElementById('img1').src = imageArray[randomNum];
}

function randomPic2() {
  var randomNum = Math.floor(Math.random() * allProducts.length);
  document.getElementById('img2').src = imageArray[randomNum];
}

function randomPic3() {
  var randomNum = Math.floor(Math.random() * allProducts.length);
  document.getElementById('img3').src = imageArray[randomNum];
}

function allRandom () {
  randomPic1();
  randomPic2();
  randomPic3();
}
