// Created by Jacob C. Scherba
// September 30, 2016

function CheckAnagram(){

	var topWord = document.getElementById("wordOne").value,
		bottomWord = document.getElementById("wordTwo").value;

	console.log(topWord);
	console.log(bottomWord);
	
	if(topWord == "" || bottomWord == ""){
		document.getElementById("answer").innerHTML = "Whoops! Please enter two strings.";
		return false;
	}
	

	
	else if (/[^a-zA-Z]/.test(topWord) || /[^a-zA-Z]/.test(bottomWord)) {
			document.getElementById("answer").innerHTML = "Please only enter letters in your strings!";
			console.log("Fucker");
			return false;
	}
	

	else {

		if(topWord.split("").sort().join("") === bottomWord.split("").sort().join("")){
			document.getElementById("answer").innerHTML = "These strings are anagrams!";
			console.log(document.getElementById("answer").value);
			return true;
		}
		else {
			document.getElementById("answer").innerHTML = "These strings are not anagrams!";
			console.log("These are not anagrams!");
		}
	}
}
