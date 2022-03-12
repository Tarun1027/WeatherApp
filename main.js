const api_url='https://api.weather.gov/points/';
var input,input1;
function clicked(){
	const button=document.getElementById('a3');
    const input2 = document.getElementById('a4');
	button.addEventListener("click",function(){
		input=document.getElementById('a1').value;
	    input1=document.getElementById('a2').value;
		input2.value="";
		if(input.length===0 && input1.length===0){
			alert("Please input Latitude and Longitude");
		}
		else if(input.length===0){
			alert("Please input Latitude");
		}
		else if(input1.length===0){
				alert("Please input Longitude");
			}
			else{
				getData();
			}

		});

    document.getElementById('a1').addEventListener("keyup",function(){
        if(document.getElementById('a1').value.length===0){
        input2.value="";
        }
    });
    document.getElementById('a2').addEventListener("keyup",function(){
        if(document.getElementById('a2').value.length===0){
            input2.value="";
            }
    });
}
clicked();

async function getData(){
	const input2 = document.getElementById('a4');
	var api=api_url+input+","+input1;
	
	var response = await fetch(api);
	
	var res = await response.json();
	
	if(res.status){
		input2.value="Wrong Co-ordinates..";
		return;
	}
   
	var newUrl = res.properties.forecast;
	response = await fetch(newUrl);
	res = await response.json();
	
	input2.value = res.properties.periods[0].temperature+" F";
}
