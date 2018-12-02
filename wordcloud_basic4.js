

var txt;
var counts = {};
var keys = [];
var canvas;
var x;
var y;
var xarray = [];
var yarray = [];

function preload() {
txt = loadStrings('kafka.txt');
font = loadFont('assets/SourceSansPro-Regular.otf');
}

function setup() {
x = 0;
y = 0;
smooth();
//textSize(20);
  textFont(font);
  background(0);
  textAlign(CENTER, CENTER);
  //noCanvas();
  canvas = createCanvas(1024, 800);
  
  for (var i = 0; i < 1000; i++){
    xarray[i] = i * random(20); // berechne x-Startposition
  }
   for (var i = 0; i < 1000; i++){
    yarray[i] = i * random(20); // berechne x-Startposition
  }
  

  var allwords = txt.join("\n");
  var tokens = allwords.split(/\W+/);
  console.log(tokens);
  for ( var i = 0;i < tokens.length; i++){
    var word = tokens[i].toLowerCase();
    if (!/\d+/.test(word)) {}
    if (counts[word] == undefined) {
      counts[word] = 1;
      keys.push(word);
    } else {
      counts[word] = counts[word] +1;
    }
  }

keys.sort(compare);

function compare(a, b) {
  var countA = counts[a];
  var countB = counts[b];
  return countB - countA;
}



for (var i = 0; i < keys.length; i++){
var key = keys[i];
textSize(30);
  fill(random(255));
  text(keys[i],xarray[i]+x, yarray[i]+y);
  //textSize((allwords/tokens) *3000);
  //fill(random(255));
   //textSize((counts[word] /tokens) *3000);
    //ellipse(xarray[i], 50, 10, 10); // zeichnen
    //  text(keys[i],xarray[i], xarray[i]);
    }
    
   //fill(random(255));
   //textSize(20);
   //text(keys[i], random(width), random(height));
 
}


function draw() {
  
  
  background(0);
  
for (var i = 0; i < keys.length; i++){
//var key = keys[i];

  
   //textSize((counts[word] /tokens) *3000);
    //ellipse(xarray[i], 50, 10, 10); // zeichnen
      text(keys[i],xarray[i]+x, yarray[i]+y);
    }
  x = x+random(-1,1);
  y = y+random(-1,1);
    
   
      
    //xarray[i]++; // hochzählen
  }
  
