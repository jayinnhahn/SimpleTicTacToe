var a;
var id;
 function clicked(clicked) {
     
    if (a == 1) {
     
        if (clicked.innerHTML == "") {
            clicked.innerHTML = "X";
            id = clicked.id;
        if (id == 1) {
            if (document.getElementById('2').innerHTML == "X" && document.getElementById('3').innerHTML == "X" || document.getElementById('4').innerHTML == "X" && document.getElementById('7').innerHTML == "X" || document.getElementById('5').innerHTML == "X" && document.getElementById('9').innerHTML == "X") {
                document.getElementById('output').innerHTML = 'x IS THE WINNER';
            }
        }
        else if (id == 2) {
            if (document.getElementById('1').innerHTML == "X" && document.getElementById('3').innerHTML == "X" || document.getElementById('5').innerHTML == "X" && document.getElementById('8').innerHTML == "X") {
                document.getElementById('output').innerHTML = 'x IS THE WINNER';
            }
        }
        else if (id == 3) {
            if (document.getElementById('1').innerHTML == "X" && document.getElementById('2').innerHTML == "X" || document.getElementById('6').innerHTML == "X" && document.getElementById('9').innerHTML == "X" ||
            document.getElementById('5').innerHTML == "X" && document.getElementById('7').innerHTML == "X") {
                document.getElementById('output').innerHTML = 'x IS THE WINNER';
            }
        }
        else if (id == 4) {
            if (document.getElementById('1').innerHTML == "X" && document.getElementById('7').innerHTML == "X" || document.getElementById('5').innerHTML == "X" && document.getElementById('6').innerHTML == "X") {
                document.getElementById('output').innerHTML = 'x IS THE WINNER';
            }
        }
        else if (id == 5) {
            if (document.getElementById('2').innerHTML == "X" && document.getElementById('8').innerHTML == "X" || document.getElementById('4').innerHTML == "X" && document.getElementById('6').innerHTML == "X" || document.getElementById('3').innerHTML == "X" && document.getElementById('7').innerHTML == "X" || document.getElementById('1').innerHTML == "X" && document.getElementById('9').innerHTML == "X") {
                document.getElementById('output').innerHTML = 'x IS THE WINNER';
            }
        }
        else if (id == 6) {
            if (document.getElementById('3').innerHTML == "X" && document.getElementById('9').innerHTML == "X" || document.getElementById('4').innerHTML == "X" && document.getElementById('5').innerHTML == "X") {
                document.getElementById('output').innerHTML = 'x IS THE WINNER';
            }
        }
        else if (id == 7) {
            if (document.getElementById('8').innerHTML == "X" && document.getElementById('9').innerHTML == "X" || document.getElementById('1').innerHTML == "X" && document.getElementById('4').innerHTML == "X" || document.getElementById('3').innerHTML == "X" && document.getElementById('5').innerHTML == "X") {
                document.getElementById('output').innerHTML = 'x IS THE WINNER';
            }
        }
        else if (id == 8) {
            if (document.getElementById('7').innerHTML == "X" && document.getElementById('9').innerHTML == "X" || document.getElementById('2').innerHTML == "X" && document.getElementById('5').innerHTML == "X") {
                document.getElementById('output').innerHTML = 'x IS THE WINNER';
            }
        }
        else if (id == 9) {
            if (document.getElementById('3').innerHTML == "X" && document.getElementById('6').innerHTML == "X" || document.getElementById('7').innerHTML == "X" && document.getElementById('8').innerHTML == "X" || document.getElementById('1').innerHTML == "X" && document.getElementById('5').innerHTML == "X") {
                document.getElementById('output').innerHTML = 'x IS THE WINNER';
            }  
        }
        return a = 0;
    }
 }
 else {
    if (clicked.innerHTML == "") {
    clicked.innerHTML = "O";
    id = clicked.id;
        if (id == 1) {
            if (document.getElementById('2').innerHTML == "o" && document.getElementById('3').innerHTML == "O" || document.getElementById('4').innerHTML == "O" && document.getElementById('7').innerHTML == "O" || document.getElementById('5').innerHTML == "O" && document.getElementById('9').innerHTML == "O") {
                document.getElementById('output').innerHTML = 'O IS THE WINNER!';
            }
        }
        else if (id == 2) {
            if (document.getElementById('1').innerHTML == "O" && document.getElementById('3').innerHTML == "O" || document.getElementById('5').innerHTML == "O" && document.getElementById('8').innerHTML == "O") {
                document.getElementById('output').innerHTML = 'O IS THE WINNER!';
            }
        }
        else if (id == 3) {
            if (document.getElementById('1').innerHTML == "O" && document.getElementById('2').innerHTML == "O" || document.getElementById('6').innerHTML == "O" && document.getElementById('9').innerHTML == "O" ||
            document.getElementById('5').innerHTML == "O" && document.getElementById('7').innerHTML == "O") {
                document.getElementById('output').innerHTML = 'O IS THE WINNER!';
            }
        }
        else if (id == 4) {
            if (document.getElementById('1').innerHTML == "O" && document.getElementById('7').innerHTML == "O" || document.getElementById('5').innerHTML == "O" && document.getElementById('6').innerHTML == "O") {
                document.getElementById('output').innerHTML = 'O IS THE WINNER!';
            }
        }
        else if (id == 5) {
            if (document.getElementById('2').innerHTML == "O" && document.getElementById('8').innerHTML == "O" || document.getElementById('4').innerHTML == "O" && document.getElementById('6').innerHTML == "O" || document.getElementById('3').innerHTML == "O" && document.getElementById('7').innerHTML == "O" || document.getElementById('1').innerHTML == "O" && document.getElementById('9').innerHTML == "O") {
                document.getElementById('output').innerHTML = 'O IS THE WINNER!';
            }
        }
        else if (id == 6) {
            if (document.getElementById('3').innerHTML == "O" && document.getElementById('9').innerHTML == "O" || document.getElementById('4').innerHTML == "O" && document.getElementById('5').innerHTML == "O") {
                document.getElementById('output').innerHTML = 'O IS THE WINNER!';
            }
        }
        else if (id == 7) {
            if (document.getElementById('8').innerHTML == "O" && document.getElementById('9').innerHTML == "O" || document.getElementById('1').innerHTML == "O" && document.getElementById('4').innerHTML == "O" || document.getElementById('3').innerHTML == "O" && document.getElementById('5').innerHTML == "O") {
                document.getElementById('output').innerHTML = 'O IS THE WINNER!';
            }
        }
        else if (id == 8) {
            if (document.getElementById('7').innerHTML == "O" && document.getElementById('9').innerHTML == "O" || document.getElementById('2').innerHTML == "O" && document.getElementById('5').innerHTML == "O") {
                document.getElementById('output').innerHTML = 'O IS THE WINNER!';
            }
        }
        else if (id == 9) {
            if (document.getElementById('3').innerHTML == "O" && document.getElementById('6').innerHTML == "O" || document.getElementById('7').innerHTML == "O" && document.getElementById('8').innerHTML == "O" || document.getElementById('1').innerHTML == "O" && document.getElementById('5').innerHTML == "O") {
                document.getElementById('output').innerHTML = 'O IS THE WINNER!';
            }
        }

        return a = 1;
        }
    }
}