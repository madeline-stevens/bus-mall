'use strict';

//array of image objects
var allProducts = [];
//array for new set of randomly generated images
var newImages = [];
var previousImages = [];
var rightIndex = 0;
var leftIndex = 0;
var centerIndex = 0;
//counting the 25 total clicks.
var counter = 0;
var container = document.getElementById('clickableImage');

var viewListResults = document.getElementById('viewresults');

//constructor function
function testProduct(name, filepath){
  this.name = name;
  this.filepath = filepath;
  this.numberTimesViewed = 0;
  this.numberTimesClicked = 0;
  allProducts.push(this);
  newImages.push(this);
};

//if/else statement for local storage. The other piece of this, the .setItem is currently on line 97.
if(localStorage.data) {
  allProducts = JSON.parse(localStorage.data);
} else {
//the already created instances are now nested inside the else.
  var bag = new testProduct('Bag', 'images/bag.jpg');
  var banana = new testProduct('Banana', 'images/banana.jpg');
  var bathroom = new testProduct('Bathroom', 'images/bathroom.jpg');
  var boots = new testProduct('Boots', 'images/boots.jpg');
  var breakfast = new testProduct('Breakfast', 'images/breakfast.jpg');
  var bubblegum = new testProduct('Bubblegum', 'images/bubblegum.jpg');
  var chair = new testProduct('Chair', 'images/chair.jpg');
  var cthulhu = new testProduct('Cthulhu', 'images/cthulhu.jpg');
  var dogduck = new testProduct('Dog-duck', 'images/dog-duck.jpg');
  var dragon = new testProduct('Dragon', 'images/dragon.jpg');
  var pen = new testProduct('Pen', 'images/pen.jpg');
  var petsweep = new testProduct('Pet-sweep', 'images/pet-sweep.jpg');
  var scissors = new testProduct('Scissors', 'images/scissors.jpg');
  var shark = new testProduct('Shark', 'images/shark.jpg');
  var sweep = new testProduct('Sweep', 'images/sweep.png');
  var tauntaun = new testProduct('Tauntaun', 'images/tauntaun.jpg');
  var unicorn = new testProduct('Unicorn', 'images/unicorn.jpg');
  var usb = new testProduct('Usb', 'images/usb.jpg');
  var watercan = new testProduct('Watercan', 'images/water-can.jpg');
  var wineglass = new testProduct('Wineglass', 'images/wine-glass.jpg');
}
//start of randomly generating new set of images after click
function randomIndex(){
  for (var i = 0; i < allProducts.length; i++) {
    leftIndex = Math.floor(Math.random() * allProducts.length);
    centerIndex = Math.floor(Math.random() * allProducts.length);
    rightIndex = Math.floor(Math.random() * allProducts.length);
  }
  newImages = [];
  newImages.push(leftIndex, centerIndex, rightIndex);
};

function randomProducts() {
  randomIndex();

  while(leftIndex === centerIndex || leftIndex === rightIndex || centerIndex === rightIndex || newImages[0] === previousImages[0] || newImages [0] === previousImages[1] || newImages[0] === previousImages[2] || newImages[1] === previousImages[0] || newImages[1] === previousImages[1] || newImages[1] === previousImages[2] || newImages[2] === previousImages[0] || newImages[2] === previousImages[1] || newImages[2] === previousImages[2]){
    // console.log('duplicate caught');
    randomProducts();
  }

//setting each image slot
  left.src = allProducts[rightIndex].filepath;
  center.src = allProducts[leftIndex].filepath;
  right.src = allProducts[centerIndex].filepath;

  left.alt = allProducts[rightIndex].name;
  center.alt = allProducts[leftIndex].name;
  right.alt = allProducts[centerIndex].name;

  allProducts[leftIndex].numberTimesViewed += 1;
  allProducts[centerIndex].numberTimesViewed += 1;
  allProducts[rightIndex].numberTimesViewed += 1;
};

function updatePreviousArray() {
  previousImages.push(leftIndex, centerIndex, rightIndex);
};

function handleClick(event){
  if(event.target.id === 'clickableImage') {
    alert('Make sure you click on an image!');
  }
  for(var i = 0; i < allProducts.length; i++){
    if (event.target.alt === allProducts[i].name){
      allProducts[i].numberTimesClicked++;
      localStorage.setItem('data', JSON.stringify(allProducts));
    }
  }
  previousImages = [];
  updatePreviousArray();
  if (counter < 25){
    onclick = counter++;
    randomProducts();
  } else {
    container.removeEventListener('click', handleClick);
  }
}
randomProducts();

function handleDisplayListResults(){
  // console.log('inside handleDisplayResults');
  var picList = document.getElementById('pic-list');
  function displayList() {
    // console.log('inside displayList');
    picList.innerHTML = '';
    for (var i = 0; i < allProducts.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = allProducts[i].name + ' has been clicked ' + allProducts[i].numberTimesClicked + ' times.';
      picList.appendChild(liEl);

    }
  }
  displayList();
  drawChart();
}
//CHART stuff
//Charts rendered using Chart JS v.2.6.0
// http://www.chartjs.org/
//notice how drawChart is called above this function.
function drawChart(){
  var chartLabel = [];
  var chartData = [];
  for (var i = 0; i < allProducts.length; i++) {
    chartData.push(allProducts[i].numberTimesClicked);
    chartLabel.push(allProducts[i].name);
  }

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartLabel,
      datasets: [{
        label: '# of clicks',
        data: chartData,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

//EVENT LISTENERS
container.addEventListener('click', handleClick);
viewListResults.addEventListener('click', handleDisplayListResults);
