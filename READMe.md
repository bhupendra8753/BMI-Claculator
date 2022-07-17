To run this application please follow following steps :
1. npm istall
2. npm start

To test:
npm test

Their is only one route i.e. /bmi , you can trigger this with Postman
This app will take a JSON object as input and provide you the BMI calculations and other specs with results.

For example w ehave input object i.e. 

[{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg": 85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female","HeightCm": 167, "WeightKg": 82}]

and we will getting the result as :

{
    "status": true,
    "message": [
        {
            "Gender": "Male",
            "HeightCm": 171,
            "WeightKg": 96,
            "bmi": 32.83061454806607,
            "bmiCategory": "Overweight",
            "healthRisk": "Enhanced risk"
        },
        {
            "Gender": "Male",
            "HeightCm": 161,
            "WeightKg": 85,
            "bmi": 32.79194475521777,
            "bmiCategory": "Overweight",
            "healthRisk": "Enhanced risk"
        },
        {
            "Gender": "Male",
            "HeightCm": 180,
            "WeightKg": 77,
            "bmi": 23.76543209876543,
            "bmiCategory": "Normal weight",
            "healthRisk": "Low risk"
        },
        {
            "Gender": "Female",
            "HeightCm": 166,
            "WeightKg": 62,
            "bmi": 22.49963710262738,
            "bmiCategory": "Normal weight",
            "healthRisk": "Low risk"
        },
        {
            "Gender": "Female",
            "HeightCm": 150,
            "WeightKg": 70,
            "bmi": 31.11111111111111,
            "bmiCategory": "Overweight",
            "healthRisk": "Enhanced risk"
        },
        {
            "Gender": "Female",
            "HeightCm": 167,
            "WeightKg": 82,
            "bmi": 29.402273297715947,
            "bmiCategory": "Overweight",
            "healthRisk": "Enhanced risk"
        }
    ]
}

By this results it is easy to frontend UI because data is in JSON form and the developer can play around it.

