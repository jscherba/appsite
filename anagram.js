// Created by Jacob C. Scherba
// September 30, 2016

button.onclick(){

	var wordOne = document.getElementbyID("wordOne").value,
		wordTwo = document.getElementbyID("wordTwo").value;

	
	if(wordOne === '' || wordTwo === ''){
		document.getElementByID("answer").innerHTML = "Whoops! Please enter two strings.";
		return false;
	}
	

	
	else if (/[a-zA-Z]/.test(wordOne) == false || /[a-zA-Z]/.test(wordTwo) == false) {
			document.getElementByID("answer").innerHTML = "Please only enter letters in your strings!";
			return false;
	}
	

	else {

		if(wordOne.split("").sort().join("") === wordTwo.split("").sort().join("")){
			document.getElementByID("answer").innerHTML = "These strings are anagrams!";
			return true;
		}
	}
}
