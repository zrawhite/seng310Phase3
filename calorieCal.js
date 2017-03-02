function calcCalories() {
	//var women = 655 + (4.35 x weight in pounds) + (4.7 x height in inches) - (4.7 x age in years)
	// (655 + (4.35*weight) + (4.7 * totalInches) - (4.7 * age))
	var output = document.getElementById('output');
	
	var age = parseInt(document.getElementById('age').value);
	var weight = parseInt(document.getElementById('weight').value);
	var feet = parseInt(document.getElementById('heightF').value);
	var inches = parseInt(document.getElementById('heightI').value);
    
	var totalInches = ((feet * 12) + inches)
	
	//Female radio button is checked
	if(document.getElementById('female').checked) {
		output.innerHTML = (655 + (4.35*weight) + (4.7 * totalInches) - (4.7 * age)) ;
	}//Male radio button is checked
	else if(document.getElementById('male').checked) {
		output.innerHTML = (66 + (6.23 * weight) + (12.7 * totalInches) - (6.8 * age));
	}
}