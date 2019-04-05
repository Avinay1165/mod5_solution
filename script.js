function task(){
var tit=document.getElementById("mess").value;
var file=document.getElementById("file").value;
var color=document.getElementById("color").value;
var s=document.getElementById("size").value;
document.getElementById("image").src=file;
document.getElementById("title").innerHTML=tit;	
document.getElementById('title').style.color=color;
document.getElementById('title').style.fontSize=s+'px';
var coffee = document.forms[0];
  var txt = "";
  var i;
  for (i = 0; i < coffee.length; i++) {
    if (coffee[i].checked) {
      txt = txt + coffee[i].value + " ";
    }
  }
console.log(txt);
if(txt==1||txt==0){
	document.getElementById("image").style.width="50%";
	document.getElementById("image").style.height="50%";
}else{
	document.getElementById("image").style.width="90%";
	document.getElementById("image").style.height="90%"
}

if(txt==0){
	document.getElementById("image").align="left";
}else if(txt==1){
	document.getElementById("image").align="right";
}
}