var date = new Date();
var yy = date.getYear();
var year = (yy < 1000) ? yy + 1900 : yy;
document.write(year);