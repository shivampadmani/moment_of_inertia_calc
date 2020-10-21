
function swapImage(){
	var image = document.getElementById("imageToSwap");
	var dropd = document.getElementById("dlist");
	image.src = dropd.value;	
};


function TBeam(TFw,TFt,Wt,Wh){
	var Area, Cx, Cy;
	if(TFw==undefined||TFt==undefined||Wt==undefined||Wh==undefined){
		alert:"Please Enter a Valid input";
	}
Area=(TFt*TFw)+(Wh*Wt);
Cx=0;
Cy=((TFt*(TFt*TFw)/2)+(Wh*(Wh*Wt)/2))/Area;
}
function HCircular(d,D){
	var Area, Cx, Cy;
	if(D==undefined||d==undefined){
		alert:"Please Enter a Valid input";
	}
Area=3.14*((D*D)-(d*d));
Cx=0;
Cy=0;
}
function IBeam(TFw,TFt,Wt,Wh,BFt,BFw){
	var Area, Cx, Cy;
	if(TFw==undefined||TFt==undefined||Wt==undefined||Wh==undefined||BFt==undefined||BFw==undefined){
		alert:"Please Enter a Valid input";
	}
Area=(TFt*TFw)+(Wh*Wt)+(BFt*BFw);
Cx=0;
Cy=((TFt*(TFt*TFw)/2)+(Wh*(Wh*Wt)/2)+(BFt*(BFt*BFw)/2))/Area;
}
function HRectangle(h,h1,b,b1){
	var Area, Cx, Cy;
	if(h==undefined||h1==undefined||b==undefined||b1==undefined){
		alert:"Please Enter a Valid input";
	}
Area=(h*b)-(h1*b1);
Cx=b/2;
Cy=h/2;
}
function Circular(D){
	var Area, Cx, Cy;
	if(D==undefined){
		alert:"Please Enter a Valid input";
	}
Area=3.14*D*D;
Cx=0;
Cy=0;
}
function Triangular(h,b){
	var Area, Cx, Cy;
	if(h==undefined||b==undefined){
		alert:"Please Enter a Valid input";
	}
Area=(h*b)/2;
}
function Rectangular(h,b){
	var Area, Cx, Cy;
	if(h==undefined||b==undefined){
		alert:"Please Enter a Valid input";
	}
Area=(h*b);
Cx=b/2;
Cy=h/2;
}

function CSection(TFw,TFt,Wt,h,BFt,BFw){
	var Area, Cx, Cy;
	if(TFw==undefined||TFt==undefined||Wt==undefined||h==undefined||BFt==undefined||BFw==undefined){
			alert:"Please Enter a Valid input";
		}
	Area=(TFt*TFw)+(h*Wt)+(BFt*BFw);
	Cx=((TFw*(TFt*TFw)/2)+(Wt*(h*Wt)/2)+(BFw*(BFt*BFw)/2))/Area;
	Cy=((TFt*(TFt*TFw)/2)+(h*(h*Wt)/2)+(BFt*(BFt*BFw)/2))/Area;
	}
	
	function LSection(LFh,LFt,BFt,BFw){
		var Area, Cx, Cy;
		if(Lfh==undefined||LFt==undefined||BFt==undefined||BFw==undefined){
			alert:"Please Enter a Valid input";
		}
	Area=(LFt*LFh)+(BFt*BFw);
	Cx=((LFt*(LFt*LFh)/2)+(BFw*(BFt*BFw)/2))/Area;
	Cy=((LFh*(LFt*LFh)/2)+(BFt*(BFt*BFw)/2))/Area;	
}