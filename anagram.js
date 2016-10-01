// Created by Jacob C. Scherba
// September 30, 2016

function CheckAnagram(){

	var wordOne = document.getElementbyId("wordOne").value,
		wordTwo = document.getElementbyId("wordTwo").value;

	
	if(wordOne === '' || wordTwo === ''){
		document.getElementById("answer").value = "Whoops! Please enter two strings.";
		return false;
	}
	

	
	else if (/[a-zA-Z]/.test(wordOne) == false || /[a-zA-Z]/.test(wordTwo) == false) {
			document.getElementById("answer").value = "Please only enter letters in your strings!";
			return false;
	}
	

	else {

		if(wordOne.split("").sort().join("") === wordTwo.split("").sort().join("")){
			document.getElementById("answer").value = "These strings are anagrams!";
			return true;
		}
	}
}
