/* 
	══════════════════════ஜ۩۞۩ஜ═════════════════════
	Author: Kye Norman-Gill
	Website: katsura.shianra.com
	Version: 1.0
	══════════════════════ஜ۩۞۩ஜ═════════════════════ 
*/

/*
	@desc Weight and Height variables.
*/
var weight = 0.0;
var height = 0.0;

/*
	@func calcBMI
	@desc Calculates the body mass index from the height and weight given.
	@param height
	@param weight
	@returns BMI
*/
var calcBMI = function(height, weight) {
	var BMI = 0.0;
	var heightSquared = height * height;
	
	BMI = weight / heightSquared;
	
	return BMI;
}

/*
	@desc Gets both values and calulcates bmi and sends an alert box with the result
*/
document.getElementById("calc").onclick = function() {
	weight = document.getElementById("_weight").value;
	height = document.getElementById("_height").value;
	var result = calcBMI(height, weight);
	window.alert(result);
};