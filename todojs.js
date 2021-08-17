let i=0;
let values=[];
let complete=[]
function get_value(){
	let list_value=document.getElementById('list').value;
	if(list_value!==""){ 
	
	values.push(list_value);
let el=document.createElement("ul");
	el.innerHTML="<li>"+list_value+"</li";
document.getElementById("saved").appendChild(el);
document.getElementById('list').value=" ";
	}
	else{
		alert("textarea is empty");
	}


}

function remove(){
	complete[i]=values.shift();
	let c=document.getElementById("saved").children;
	let el=document.createElement("h2");
	c[1].remove();

	let t;
	t=document.createElement("ul");
	t.innerHTML="<li class='co'>"+complete[i]+"</li";
	document.getElementById("complete").appendChild(t);
	i++;	

}


