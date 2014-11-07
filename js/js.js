
	function acceptme(){
		l=document.getElementById("mylogin").value;
		p=document.getElementById("password").value;
		if(l.length==0||p.length==0){
			document.getElementById("wrong").innerHTML="try again!";
		}else 
			document.getElementById("wrong").innerHTML="";
		
	}