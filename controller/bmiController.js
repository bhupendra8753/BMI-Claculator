const logger = require("./../services/loggerService");
const _ = require("underscore")

let bmiCaluator = (req, res) => {
	let input = req.body;
	if(_.isEmpty(input)){
		return res.status(200).json({
            status: false, 
            message: "Json Input object missing"
        });	
	}
	for(let i = 0; i < input.length; i++){
		let weight = input[i].WeightKg;
        let heightCM = input[i].HeightCm;
		let height = heightCM / 100;
		if(isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0){
			return res.status(200).json({
				status: false, 
				message: "Input parameter values must be positive numbers"
			});	
		} else {
			let bmi = weight / Math.pow(height, 2);
			input[i].bmi = bmi; 

			for(let j = 0; j<input.length ; j++){
				if(input[j].bmi <= 18.4){
					
					input[j].bmiCategory = 'Underweight';
					input[j].healthRisk = 'Malnutrition risk';
				} else if(input[j].bmi >= 18.5 && bmi <= 24.9){
					
					input[j].bmiCategory = "Normal weight";
					input[j].healthRisk = 'Low risk';
				} else if(input[j].bmi >= 25 && bmi <= 29.9){
					
					input[j].bmiCategory = "Overweight";
					input[j].healthRisk = 'Enhanced risk';
				} else if(input[j].bmi >= 30 && bmi <= 34.9){
					
					input[j].bmiCategory = 'Moderately obese';
					input[j].healthRisk = 'Medium risk';
				} else if(input[j].bmi >= 35 && bmi <= 39.9){
					
					input[j].bmiCategory= 'Severely obese';
					input[j].healthRisk = 'High risk';
				} else if(input[j].bmi >= 40){
					
					input[j].bmiCategory = 'Veryseverely obese Challenge';
					input[j].healthRisk = 'Very high risk';				
				}
			}	
		}
	}
	logger.info(input)
	return res.status(200).json({
		status: true, 
		message: input
	});	
}


module.exports = {
	bmiCaluator
}