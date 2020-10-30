/*function TBeam(TFw,TFt,Wt,Wh){
	var Area, Cx, Cy,Ixx,Iyy;
	if(TFw==undefined||TFt==undefined||Wt==undefined||Wh==undefined){
		alert:"Please Enter a Valid input";
	}
Area=(TFt*TFw)+(Wh*Wt);
Cx=TFw/2;
Cy=((TFt*(TFt*TFw)/2)+(Wh*(Wh*Wt)/2))/Area;
Ixx= (Wt*Wh*(Cy-Wh/2)^2) + (Wt*Wh^3)/12 + TFw*TFt*(Wh + TFt - Cy)2 + TFt^3*TFw/12;
Iyy=(Wh*Wt^3+TFw^3*TFt)/12;
}
function HCircular(d,D){
	var Area, Cx, Cy,Ixx,Iyy;
	if(D==undefined||d==undefined){
		alert:"Please Enter a Valid input";
	}
Area=3.14*((D*D)-(d*d));
Cx=0;
Cy=0;
	Ixx=3.14*(D^4-d^4);
	Iyy=Ixx;
}
function IBeam(TFw,TFt,Wt,Wh,BFt,BFw){
	var Area, Cx, Cy,Ixx,Iyy;
	if(TFw==undefined||TFt==undefined||Wt==undefined||Wh==undefined||BFt==undefined||BFw==undefined){
		alert:"Please Enter a Valid input";
	}
Area=(TFt*TFw)+(Wh*Wt)+(BFt*BFw);
Cx=0;
Cy=((TFt*(TFt*TFw)/2)+(Wh*(Wh*Wt)/2)+(BFt*(BFt*BFw)/2))/Area;
Ixx=(Wt*Wh^3)/12+BFt^3*BFw/12+TFt^3*TFw/12-(Wh^3*(TFw/2-Wt/2))/6;
Iyy=(TFw^3*TFt+Wt^3*Wh+BFw^3*BFt)/12;
}
function HRectangle(h,h1,b,b1){
	var Area, Cx, Cy,Ixx,Iyy;
	if(h==undefined||h1==undefined||b==undefined||b1==undefined){
		alert:"Please Enter a Valid input";
	}
Area=(h*b)-(h1*b1);
Cx=b/2;
Cy=h/2;
Ixx=(b*h^3/12)+(b1*h1^3/12);
Iyy=(b^3*h/12)+(b1^3*h1/12);
}*/
function Circular(){
	var D=document.getElementById("D").value;
	var Area, Cx, Cy,Ixx,Iyy;
	if(D==undefined){
		alert:"Please Enter a Valid input";
	}
Area=3.14*D*D/4;
Cx=0;
Cy=0;
Ixx=(3.14/64)*D*D*D*D;
Iyy=Ixx;
document.getElementById("area").innerHTML=Area +"  m^2";
document.getElementById("cog-x").innerHTML=Cx + "  m";
document.getElementById("cog-y").innerHTML=Cy + "  m";
document.getElementById("moi-xx").innerHTML=Ixx + "  m^4";
document.getElementById("moi-yy").innerHTML=Iyy +	"  m^4";
}
/*function Triangular(h,b){
	var Area, Cx, Cy,Ixx,Iyy;
	if(h==undefined||b==undefined){
		alert:"Please Enter a Valid input";
	}
Area=(h*b)/2;
Cx=b/2;
Cy=h/3;
Ixx=(b*h^3)/36;
Iyy=(h*b^3)/48;
}
function Rectangular(h,b){
	var Area, Cx, Cy,Ixx,Iyy;
	if(h==undefined||b==undefined){
		alert:"Please Enter a Valid input";
	}
Area=(h*b);
Cx=b/2;
Cy=h/2;
Ixx=b*h^3/12;
Iyy=h*b^3/12;
}

function CSection(TFw,TFt,Wt,h,BFt,BFw){
	var Area, Cx, Cy,Ixx,Iyy;
	if(TFw==undefined||TFt==undefined||Wt==undefined||h==undefined||BFt==undefined||BFw==undefined){
			alert:"Please Enter a Valid input";
		}
	Area=(TFt*TFw)+(h*Wt)+(BFt*BFw);
	Cx=((TFw*(TFt*TFw)/2)+(Wt*(h*Wt)/2)+(BFw*(BFt*BFw)/2))/Area;
	Cy=((TFt*(TFt*TFw)/2)+(h*(h*Wt)/2)+(BFt*(BFt*BFw)/2))/Area;
	Ixx=
	Iyy=
	}
	
	function LSection(LFh,LFt,BFt,BFw){
		var Area, Cx, Cy,Ixx,Iyy;
		if(Lfh==undefined||LFt==undefined||BFt==undefined||BFw==undefined){
			alert:"Please Enter a Valid input";
		}
	Area=(LFt*LFh)+(BFt*BFw);
	Cx=((LFt*(LFt*LFh)/2)+(BFw*(BFt*BFw)/2))/Area;
	Cy=((LFh*(LFt*LFh)/2)+(BFt*(BFt*BFw)/2))/Area;	
	Ixx=
	Iyy=
}*/