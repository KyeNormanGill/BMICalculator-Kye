/* 
	═══════════════════════════════════════════
	Author: Kye Norman-Gill
	Website: katsura.shianra.com
	Version: 1.0
	═══════════════════════════════════════════ 
*/

/*
	@func calcBMIMetric
	@desc Calculates the body mass index from the height in meters and weight in kilograms given.
	@param height
	@param weight
	@returns BMI
*/
var calcBMIMetric = function(height, weight) {
	return weight/(height*height);
}

/*
	@func calcBMIImperial
	@desc Calculates the body mass index from the height in inches and weight pounds given.
	@param height
	@param weight
	@returns BMI
*/
var calcBMIImperial = function(height, weight){
	return (weight*703)/(height*height)
}

/*
	@func centimetersToMeters
	@desc Converts centimeters to meters.
	@param centimeters
	@returns metres
*/
var centimetersToMeters = function(centimeters){
	return centimeters/100;
}

/*
	@func inchesToMeters
	@desc Converts inches to meters.
	@param inches
	@returns metres
*/
var inchesToMeters = function(inches)
{
	return inches * 0.0254;
}

/*
	@func inchesToMeters
	@desc Converts inches to meters.
	@param inches
	@returns metres
*/
var poundsToKilograms = function(pounds){
	return pounds/2.2046;
}

/*
	@desc Gets both values and calulcates bmi and sends an alert box with the result
*/
document.getElementById("calc").onclick = function() {

	
	var heightSelect = document.getElementById("height");
	var heightOption = heightSelect.options[heightSelect.selectedIndex].value;

	var weightSelect = document.getElementById("weight");
	var weightOption = weightSelect.options[weightSelect.selectedIndex].value;

	var weight = document.getElementById("_weight").value;
	var height = document.getElementById("_height").value;


	if(weightOption == "kilogram" && heightOption == "inch")
	{
		document.getElementById("result").innerHTML = (calcBMIMetric(inchesToMeters(height), weight));
	}
	else if(weightOption == "pound" && heightOption == "meter")
	{
		document.getElementById("result").innerHTML = (calcBMIMetric(height, poundsToKilograms(weight)));
	}
	else if(weightOption == "pound" && heightOption == "centimeter")
	{
		document.getElementById("result").innerHTML = (calcBMIMetric(centimetersToMeters(height), poundsToKilograms(weight)));
	}
	else if(weightOption == "kilogram" && heightOption == "meter")
	{
		document.getElementById("result").innerHTML = (calcBMIMetric(height, weight));
	}
	else if(weightOption == "kilogram" && heightOption == "centimeter")
	{
		document.getElementById("result").innerHTML = (calcBMIMetric(centimetersToMeters(height), weight));
	}
	else if(weightOption == "pound" && heightOption == "inch")
	{
		document.getElementById("result").innerHTML = (calcBMIImperial(height, weight));
	}

	if(document.getElementById("result").innerHTML <= 18.5 && document.getElementById("result").innerHTML > 0)
	{
		document.getElementById("dynamicResponse").innerHTML = ("Underweight!");
	}
	else if(document.getElementById("result").innerHTML > 18.5 && document.getElementById("result").innerHTML <= 24.9)
	{
		document.getElementById("dynamicResponse").innerHTML = ("Normal or Healthy Weight");
	}
	else if(document.getElementById("result").innerHTML > 24.9 && document.getElementById("result").innerHTML <= 29.9)
	{
		document.getElementById("dynamicResponse").innerHTML = ("Overweight");
	}
	else if(document.getElementById("result").innerHTML > 29.9)
	{
		document.getElementById("dynamicResponse").innerHTML = ("Obese!");
	}
	else
	{
		document.getElementById("dynamicResponse").innerHTML = ("I don't know how you managed to get a negative number but you should get that checked out!");
	}
};