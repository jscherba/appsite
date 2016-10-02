// Created by Jacob C. Scherba
// September 30, 2016

function CheckAnagram(){

	var topWord = document.getElementById("wordOne").value,
		bottomWord = document.getElementById("wordTwo").value;

	console.log(topWord);
	
	console.log(typeof(topWord));
	console.log("fuck");
	console.log(bottomWord);
	
	if(topWord === '' || bottomWord === ''){
		document.getElementById("answer").value = "Whoops! Please enter two strings.";
		return false;
	}
	

	
	else if (/[a-zA-Z]/.test(topWord) == false || /[a-zA-Z]/.test(bottomWord) == false) {
			document.getElementById("answer").value = "Please only enter letters in your strings!";
			return false;
	}
	

	else {

		if(topWord.value.split("").sort().join("") === bottomWord.value.split("").sort().join("")){
			document.getElementById("answer").value = "These strings are anagrams!";
			console.log(document.getElementById("answer").value);
			return true;
		}
	}
}
