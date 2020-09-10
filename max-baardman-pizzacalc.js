document.write("<br> PRICE PIZZA'S");
document.write('<br> small pizza per piece €4,75');
document.write('<br> medium pizza per piece €5,50');
document.write('<br> large pizza per piece €6,50');
document.write('<br>');
document.write('<br>');

var smallpizza = prompt("hoeveel small pizza's wilt u");
document.write(smallpizza);
document.write(' small pizza');

const small = 4.75;
var smallpizza;
var price = small * smallpizza
document.write("<br> smallpizza's price €" + price);
document.write('<br>');
document.write('<br>');

var mediumpizza = prompt("hoeveel medium pizza's wilt u");
document.write(mediumpizza);
document.write(' medium pizza');

const medium = 5.50;
var mediumpizza;
var price = medium * mediumpizza
document.write("<br> mediumpizza's price €" + price);
document.write('<br>');
document.write('<br>');

var largepizza = prompt("hoeveel large pizza's wilt u");
document.write(largepizza);
document.write(' large pizza');

const large = 6.50;
var largepizza;
var price = large * largepizza
document.write("<br> largepizza's price €" + price);
document.write('<br>');
document.write('<br>');

var total = small * smallpizza + medium * mediumpizza + large * largepizza
document.write("<br> totaal price €" + total);

