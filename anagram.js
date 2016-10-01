// Created by Jacob C. Scherba
// September 30, 2016

function CheckAnagram(){

	var wordOne = document.getElementbyID("wordOne").value,
		wordTwo = document.getElementbyID("wordTwo").value;

	function checkBlank(){
		if(wordOne === '' || wordTwo === ''){
			alert("Whoops! Please enter two strings.");
			return false;
		}
	}

	function checkValid(){
		if (/[a-zA-Z]/.test(wordOne) == false || /[a-zA-Z]/.test(wordTwo) == false) {
  			alert("Please only enter letters in your strings!");
  			return false;
		}
	}

	if(checkBlank && checkValid){

		if(wordOne.split("").sort().join("") === wordTwo.split("").sort().join("")){
			console.log("These strings are anagrams!");
      			return true;
		}
	}
}
