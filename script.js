const calcy = () =>{
	let  eng = document.getElementById('eng').value;
	let  hin = document.getElementById('hin').value;
	let  math = document.getElementById('math').value;
	let  sci = document.getElementById('sci').value;
	let  art = document.getElementById('art').value;
	
	let totalNum = parseFloat(eng) + parseFloat(hin) + parseFloat(math) + parseFloat(sci) + parseFloat(art);
	document.getElementById('total').innerHTML = totalNum;

	let perce = (totalNum/500) * 100;
	document.getElementById('per').innerHTML = `${perce}%`;

	if(totalNum >= 501){
		alert("Sorry, it is not possible to have a grade over 100%");
	}


	if(perce >= 33){
		document.getElementById('result').innerHTML = "Pass";
		document.getElementById('result').style.color = "green";

	}else{
		document.getElementById('result').innerHTML = "Fail";
		document.getElementById('result').style.color = "red";
	}

	if(perce <= 100 && perce >= 80){
		document.getElementById('grade').innerHTML= "A";	
	}else if(perce <= 79 && perce >= 60){
		document.getElementById('grade').innerHTML= "B";
	}else if(perce <= 59 && perce >= 40){
		document.getElementById('grade').innerHTML= "C";
	}else{
		document.getElementById('grade').innerHTML= "D";
	}
}

