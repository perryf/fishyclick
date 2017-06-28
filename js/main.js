//Circle template
function makeCircle(x, y, lr) {
    var circ = document.createElement('div');
    circ.className = 'circle';
    document.getElementById('fishTank').appendChild(circ);
        //Sets starting position
        circ.style.left = x -100 + "px";
        circ.style.top = y -100 + "px";
        //Sets color
        var numString = randomizer();
        circ.style.backgroundColor = numString;
        //Sets size
        var sizeString = sizer();
        circ.style.width = sizeString;
        circ.style.height = sizeString;
        //Adds click event
        circ.addEventListener('click', kickOut);
        //Moves
        if (lr > 1) {
            moveCircleL(x, y, circ); 
        } else {
            moveCircleR(x, y, circ);
        }
        checkForContact(circ);
}

//Moves circles
function moveCircleL(x, y, circ) {
    var id = setInterval(frame, 10);
    function frame() {
        //Resets circles to the left if goes off screen
        if (x >= window.innerWidth + 500) {
            var numString = randomizer();
            circ.style.backgroundColor = numString;
            x = -200 + Math.random()-300;
            y = Math.random()*500+100;
        } else {
        //Moves circles
            x+=2;
            circ.style.left = x -100 + "px";
            circ.style.top = y -100 + "px";
            circ.innerHTML = '<br>' + Math.floor(x);
        }
        checkForContact(circ);
    }
}

//Moves circles
function moveCircleR(x, y, circ) {
    var id = setInterval(frame, 10);
    function frame() {
        //Resets circles to the left if goes off screen
        if (x <= -500) {
            var numString = randomizer();
            circ.style.backgroundColor = numString;
            x = window.innerWidth + Math.random()*100;
            y = Math.random()*500+100;
        } else {
        //Moves circles
            x-=2;
            circ.style.left = x -100 + "px";
            circ.style.top = y -100 + "px";
            circ.innerHTML = '<br>' + Math.floor(x);
        } 
        checkForContact(circ);
    }
}

function checkForContact(circ) {
    var otherCircles = document.getElementsByClassName('circle');
    /*
    otherCircles.filter(function(el) {
        return el != circ;
    });
    */
    /*
    function others(el){
        return el != circ;
    }
    function filterCircles() {
        otherCircles.filter(others);
    }
    */
    document.getElementById('counter').innerHTML = otherCircles.length;
    
    var thisX = circ.style.left;
    thisX = Number(thisX.slice(0, thisX.length-2));
    document.getElementById('thisX').innerHTML = thisX;
    //alert(otherCircles);

        for (var i = 0; i <= otherCircles.length; i++){

            if (circ != otherCircles[i]) {
                
                var otherX = window.getComputedStyle(otherCircles[i], null).getPropertyValue("left");
                
                otherX = Number(otherX.slice(0, otherX.length-2));
                //document.getElementById('tester').innerHTML = otherX;

                if (Math.abs(thisX - otherX <= 100)){
                    circ.remove();
                } 
    }
}
    //if (circle.style.left - otherCircles.left <100) {}
}

function kickOut() {
    this.remove();
}

//Makes a bunch of circles!
function circles() {
        var y = Math.random()*500+100;
        var lr = Math.random()*2;
        if(lr > 1) {
            var x = -200 - Math.random()*100;
            makeCircle(x, y, lr);
        } else {
            var x = window.innerWidth + Math.random()*100;
            makeCircle(x, y, lr);
        }
}

//Colors circles
var randomizer = function() {
    var num1 = Math.floor((Math.random()*256)).toString();
    var num2 = Math.floor((Math.random()*256)).toString();
    var num3 = Math.floor((Math.random()*256)).toString();
    var numString = 'rgb(' + num1 + ', ' + num2 + ', ' + num3 + ')';
    return numString;
}

//Sizes circles
var sizer = function() {
    var size = Math.floor((Math.random()*220) + 40).toString();
    var sizeString = size + "px";
    return sizeString;
}
//Checks if circles collide
var collider = function(x, y, circ) {

}

//Eats circles
/*
var circleEater = function(x, y) {
    this.x = x;
    this.y = y;
    circX = document.getElement
    if (this.x - circ.x <= 40) {
        alert("hi");
    }
}
*/


//More circles button
var button = document.getElementById('moreCircles');
button.addEventListener('click', circles);