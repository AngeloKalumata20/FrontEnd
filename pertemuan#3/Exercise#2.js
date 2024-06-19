// Modifikasi Exercise 1
// Menggunakan IIFE & callback

//IIFE
(function (berat, tinggi){
	let hitungbmi = berat / (tinggi **2)
	let classification;
	if(hitungbmi < 18.5){
		classification = "Underweight"
	}else if (hitungbmi >= 18.5 && hitungbmi <= 24.9){
		classification = "Normal Range"
	}else if (hitungbmi >= 25){
		classification = "Overweight"
	}else if (hitungbmi > 25 && hitungbmi <= 29.9){
		classification = "Preobese"
	}else{
		classification = "Obese"
	}
	console.log("BMI Anda = " + hitungbmi + ",Kategori Anda = " + classification)
})(64, 1.68)

//Callback

function hitungBMI(berat, tinggi){
	let hitungbmi = berat / (tinggi **2)
        let classification;
        if(hitungbmi < 18.5){
                classification = "Underweight"
        }else if (hitungbmi >= 18.5 && hitungbmi <= 24.9){
                classification = "Normal Range"
        }else if (hitungbmi >= 25){
                classification = "Overweight"
        }else if (hitungbmi > 25 && hitungbmi <= 29.9){
                classification = "Preobese"
        }else{
                classification = "Obese"
        }
        console.log("BMI Anda = " + hitungbmi + ",Kategori Anda = " + classification)

}

function output(callback){
	callback(64, 1.68)
}

output(hitungBMI)

