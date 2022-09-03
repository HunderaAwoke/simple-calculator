let screen = document.getElementById('screen')
let current = document.getElementById("current")
let previous = document.getElementById("previous")
let button = Array.from(document.getElementsByClassName('button'))
button.map(button =>{
	button.addEventListener('click',(e)=>{
		switch(e.target.innerText){
			case'Sqrt':
				current.innerText = Math.sqrt(current.innerText);
				break;
			case 'AC':
				current.innerText='';
				previous.innerText='';
				break;
			case'DEL':
				current.innerText = current.innerText.slice(0,-1);
				break;
			case '=':
				if(previous.innerText != ''){
					previous.innerText = eval(screen.innerText)
					current.innerText =''
				}
				else{
					if(current.innerText !=''){
					previous.innerText = eval(current.innerText)	
					}
					current.innerText ='';
				}
				break;
			case'Sqr':
				current.innerText = eval(Math.pow(current.innerText,2));
				break;
			case'ln':
				current.innerText = Math.log(current.innerText);
				break;
			case'log':
				current.innerText = Math.log10(current.innerText);
				break;
			default:
				current.innerText += e.target.innerText;
		}
	})
});