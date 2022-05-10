// Function called whenever user tab on any box
function win() {

	// Setting DOM to all boxes or input field
	var b1, b2, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;

	//player X wins
	if (b1 == 'X' && b2 == 'X' && b3 == 'X') {
		document.getElementById('print').innerHTML = "Player X Won";
		disable();
	}
	else if (b1 == 'X' && b4 == 'X' && b7 == 'X') {
		document.getElementById('print').innerHTML = "Player X Won";
		disable();
	}
	else if (b7 == 'X' && b8 == 'X' && b9 == 'X') {
		document.getElementById('print').innerHTML = "Player X Won";
		disable();
	}
	else if (b3 == 'X' &&	b6 == 'X' && b9 == 'X') {
		document.getElementById('print').innerHTML = "Player X Won";
		disable();
	}
	else if (b1 == 'X' &&	b5 == 'X' && b9 == 'X') {
		document.getElementById('print').innerHTML = "Player X Won";
		disable();
	}
	else if (b3 == 'X' &&	b5 == 'X' && b7 == 'X') {
		document.getElementById('print').innerHTML = "Player X Won";
		disable();
	}
	else if (b2 == 'X' &&	b5 == 'X' && b8 == 'X') {
		document.getElementById('print').innerHTML = "Player X Won";
		disable();
	}
	else if (b4 == 'X' &&	b5 == 'X' && b6 == 'X') {
		document.getElementById('print').innerHTML = "Player X Won";
		disable();
	}

	//player O wins
	else if (b1 == 'O' && b2 == 'O' && b3 == 'O') {
		document.getElementById('print').innerHTML = "Player O Won";
		disable();
	}
	else if (b1 == 'O' && b4 == 'O' && b7 == 'O') {
		document.getElementById('print').innerHTML = "Player O Won";
		disable();
	}
	else if (b7 == 'O' && b8 == 'O' && b9 == 'O') {
		document.getElementById('print').innerHTML = "Player O Won";
		disable();
	}
	else if (b3 == 'O' && b6 == 'O' && b9 == 'O') {
		document.getElementById('print').innerHTML = "Player O Won";
		disable();
	}
	else if (b1 == 'O' && b5 == 'O' && b9 == 'O') {
		document.getElementById('print').innerHTML = "Player O Won";
		disable();
	}
	else if (b3 == 'O' && b5 == 'O' && b7 == 'O') {
		document.getElementById('print').innerHTML = "Player O Won";
		disable();
	}
	else if (b2 == 'O' && b5 == 'O' && b8 == 'O') {
		document.getElementById('print').innerHTML = "Player O Won";
		disable();
	}
	else if (b4 == 'O' && b5 == 'O' && b6 == 'O') {
		document.getElementById('print').innerHTML = "Player O Won";
		disable();
	}

	// tie
	else if (b1 !== null && b2 !== null && b3 !== null && b4 !== null && b5 !== null && b6 !== null && b7 !== null && b8 !== null && b9 !== null) {
			document.getElementById('print').innerHTML = "Match Tie";
	}
	else {
		if (flag == 1) {
			document.getElementById('print').innerHTML = "Player X's Turn";
		}
		else {
			document.getElementById('print').innerHTML = "Player O's Turn";
		}
	}
}

// Function to reset game
function reset() {
	location.reload();
	document.getElementById('b1').value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';

}

function disable() {
	document.getElementById("b1").disabled = true;
	document.getElementById("b2").disabled = true;
	document.getElementById("b3").disabled = true;
	document.getElementById("b4").disabled = true;
	document.getElementById("b5").disabled = true;
	document.getElementById("b6").disabled = true;
	document.getElementById("b7").disabled = true;
	document.getElementById("b8").disabled = true;
	document.getElementById("b9").disabled = true;
}

flag = 1;
function play(s) {
	if (flag == 1){
		switch (s){
			case 1:
				document.getElementById("b1").value = "X";
				document.getElementById("b1").disabled = true;
				break;
			case 2:
				document.getElementById("b2").value = "X";
				document.getElementById("b2").disabled = true;
				break;
			case 3:
				document.getElementById("b3").value = "X";
				document.getElementById("b3").disabled = true;
				break;
			case 4:
				document.getElementById("b4").value = "X";
				document.getElementById("b4").disabled = true;
				break;
			case 5:
				document.getElementById("b5").value = "X";
				document.getElementById("b5").disabled = true;
				break;
			case 6:
				document.getElementById("b6").value = "X";
				document.getElementById("b6").disabled = true;
				break;
			case 7:
				document.getElementById("b7").value = "X";
				document.getElementById("b7").disabled = true;
				break;
			case 8:
				document.getElementById("b8").value = "X";
				document.getElementById("b8").disabled = true;
				break;
			case 9:
				document.getElementById("b9").value = "X";
				document.getElementById("b9").disabled = true;
				break;
		}
		flag = 0;
	}
	else {
		switch (s){
			case 1:
				document.getElementById("b1").value = "O";
				document.getElementById("b1").disabled = true;
				break;
			case 2:
				document.getElementById("b2").value = "O";
				document.getElementById("b2").disabled = true;
				break;
			case 3:
				document.getElementById("b3").value = "O";
				document.getElementById("b3").disabled = true;
				break;
			case 4:
				document.getElementById("b4").value = "O";
				document.getElementById("b4").disabled = true;
				break;
			case 5:
				document.getElementById("b5").value = "O";
				document.getElementById("b5").disabled = true;
				break;
			case 6:
				document.getElementById("b6").value = "O";
				document.getElementById("b6").disabled = true;
				break;
			case 7:
				document.getElementById("b7").value = "O";
				document.getElementById("b7").disabled = true;
				break;
			case 8:
				document.getElementById("b8").value = "O";
				document.getElementById("b8").disabled = true;
				break;
			case 9:
				document.getElementById("b9").value = "O";
				document.getElementById("b9").disabled = true;
				break;
		}
		flag = 1;
	}
}
