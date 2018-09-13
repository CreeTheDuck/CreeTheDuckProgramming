function click1(event){
	var el = document.getElementById("div_1");
	el.innerText = "You clicked my button!";
}

document.getElementById("button_1").onclick = click1;