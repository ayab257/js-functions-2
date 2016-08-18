function myFunction (){
	var x = document.getElementById("txt1").value;
	var y = document.getElementById("txt2").value;
	var z = document.getElementById("txt3").value;
	if (+x > +y && +x > +z && +y > +z) {
		document.getElementById("demo").innerHTML = document.write(x,y,z);
	}
	else if (+x > +y && +x > +z && +z > +y) {
		document.getElementById("demo").innerHTML = document.write(x,z,y);
	}
	else if (+y > +x && +y > +z && +x > +z){
		document.getElementById("demo").innerHTML = document.write(y,x,z);
	}
	else if (+y > +x && +y > +z && +z > +x){
		document.getElementById("demo").innerHTML = document.write(y,z,x);
	}
	else if (+z > +x && +z > +y && +y > +x){
		document.getElementById("demo").innerHTML = document.write(z,y,x);
	}
	else if (+z > +x && +z > +y && +x > +y){
		document.getElementById("demo").innerHTML = document.write(z,x,y);
	}
}
