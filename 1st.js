

document.write ('<p><span id="date-time">', new Date().toLocaleString(), '<\/span><\/p>')
if (document.getElementById) onload = function () {
	setInterval ("document.getElementById ('date-time').firstChild.data = new Date().toLocaleString()", 50)
}


var images = [
    '1.jpg', 
     '4.jpeg','apple.png','2.jpg','c++.jpeg','m1.jpeg','m2.jpg','3.png','nasa.jpg','phython.jpeg','q1.jpeg'
];
var t = setInterval(next,10000);
var num=0;
function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}


