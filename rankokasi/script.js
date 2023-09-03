		
	var i;
	var message;
    var interval;
	var z=0;

function printLetterByLetter(){
    i = 0;
	message = "Loading...";
    interval = setInterval(loadingLetters, 300);
	
}

	function loadingLetters(){
        document.getElementById("loading-title-id").innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
			removeLetterByLetter();
        }
    }
	
	function removeLetterByLetter(){
	i = message.length+1;  
	message = " ";
    interval = setInterval(removingLetters, 300);
	}

	function removingLetters(){
	 var str = document.getElementById("loading-title-id").innerHTML;
	 str = str.slice(0,i);
	 document.getElementById("loading-title-id").innerHTML = str;
        i--;
        if (i < message.length){
            clearInterval(interval);
			printEnterByLetter();
        }
    }
	
	function printEnterByLetter(){
    i = 0;
	message = "Click To Enter";
	document.querySelector(".loading-title").style.width = '33vmin';
    interval = setInterval(loadingLetters, 300);
	updateCSS();
	
}

	
	function updateCSS(){
	
	document.querySelector(".menu-button").className = 'update-menu-button';
	
	
	}

	function nextCSS(){
	if(z==0){
	
	document.querySelector(".page-loader").style.visibility = 'hidden';
	document.getElementById("containers").style.maxHeight = '45vh';
	document.getElementById("containers").style.opacity = '1';
	z++;
	}
	else if(z==1){
	
	document.querySelector(".page-loader").style.visibility = 'visible';
	document.querySelector("#containers").style.maxHeight = '0vh';
	document.querySelector("#containers").style.opacity = '0';
	document.querySelector(".selector").style.backgroundColor='white';
	z=0;
	}
	}
	
	function apple(){
		
		document.querySelector(".selector").style.backgroundColor='black';
		document.querySelector("#containers").style.maxHeight = '0vh';
		document.querySelector("#containers").style.opacity = '0';
		z=0;
	}
	function banan(){
		
		document.querySelector(".selector").style.backgroundColor='yellow';
		document.querySelector("#containers").style.maxHeight = '0vh';
		document.querySelector("#containers").style.opacity = '0';
		z=0;
	}
	function doggo(){
		
		document.querySelector(".selector").style.backgroundColor='pink';
		document.querySelector("#containers").style.maxHeight = '0vh';
		document.querySelector("#containers").style.opacity = '0';
		z=0;
	}