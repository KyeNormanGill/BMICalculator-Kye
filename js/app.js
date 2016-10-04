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
	var weight = document.getElementById("_weight").value;
	var height = document.getElementById("_height").value;
	var result = calcBMIImperial(height, weight);
	window.alert(result);
};