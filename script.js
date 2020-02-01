setTimeout("myMove", 100);


function myMove(oposite) {
    var elem = document.getElementById("animation");

    if (oposite == true) {
        document.getElementById("rocket").src = "images/rocket_left.gif";
        var w = window.innerWidth - 150;
        elem.style.left = w + "px";
        elem.style.position = 'absolute';
        var id = setInterval(function () {
            frame(true);
        }, 10);

    } else {
        document.getElementById("rocket").src = "images/rocket_right.gif";
        var w = window.innerWidth - 150;
        console.log("Width of window: " + w + " px");
        elem.style.top = '5px';
        elem.style.left = '1px';
        elem.style.position = 'absolute';
        var id = setInterval(frame, 10);
    }

    function frame(oposite) {
        if (oposite == true) {
            console.log("Left: " + parseInt(elem.style.left));
            if (parseInt(elem.style.left) <= 0) {
                console.log("in if statement");
                document.getElementById("rocket").src = "images/rocket_right.gif";
                clearInterval(id);
            } else {
                console.log("in else statement: " + elem.style.left);
                elem.style.left = parseInt(elem.style.left) - 5 + 'px';
                console.log("in else statement: " + elem.style.left);

            }
        } else {
            if (parseInt(elem.style.left) >= w) {
                myMove(true);
                clearInterval(id);
            } else {
                elem.style.left = parseInt(elem.style.left) + 5 + 'px';
            }
        }
    }

}
