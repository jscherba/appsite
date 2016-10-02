// Created by Jacob C. Scherba
// September 30, 2016

function CheckAnagram(){

	var wordOne = document.getElementById("wordOne").value,
		wordTwo = document.getElementById("wordTwo").value;

	console.log(wordOne);
	console.log(wordTwo);
	
	if(wordOne.value === '' || wordTwo.value === ''){
		document.getElementById("answer").value = "Whoops! Please enter two strings.";
		console.log("Whoops");
		return false;
	}
	

	
	else if (/[a-zA-Z]/.test(wordOne.value) == false || /[a-zA-Z]/.test(wordTwo.value) == false) {
			document.getElementById("answer").value = "Please only enter letters in your strings!";
			return false;
	}
	

	else {

		if(wordOne.value.split("").sort().join("") === wordTwo.value.split("").sort().join("")){
			document.getElementById("answer").value = "These strings are anagrams!";
			console.log(document.getElementById("answer").value);
			return true;
		}
	}
}
