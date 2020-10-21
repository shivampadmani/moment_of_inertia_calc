
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
Cx=(Tfw/2);
Cy=((TFt*(TFt*TFw)/2)+(Wh*(Wh*Wt)/2))/Area;
}
function HCircular(d,D){
	var Area, Cx, Cy;
	if(D==undefined||d==undefined){
		alert:"Please Enter a Valid input";
	}
Area=3.14*((D*D)-(d*d));
}
function IBeam(TFw,TFt,Wt,Wh,BFt,BFw){
	var Area, Cx, Cy;
	if(TFw==undefined||TFt==undefined||Wt==undefined||Wh==undefined||BFt==undefined||BFw==undefined){
		alert:"Please Enter a Valid input";
	}
Area=(TFt*TFw)+(Wh*Wt)+(BFt*BFw);
}
function HRectangle(h,h1,b,b1){
	var Area, Cx, Cy;
	if(h==undefined||h1==undefined||b==undefined||b1==undefined){
		alert:"Please Enter a Valid input";
	}
Area=(h*b)-(h1*b1);
}
function Circular(D){
	var Area, Cx, Cy;
	if(D==undefined){
		alert:"Please Enter a Valid input";
	}
Area=3.14*D*D;
}
function Triangular(h,b){
	var Area, Cx, Cy;
	if(h==undefined||b==undefined){
		alert:"Please Enter a Valid input";
	}
Area=(h*b)/2;
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
}

function CSection(TFw,TFt,Wt,h,BFt,BFw){
	var Area, Cx, Cy;
	if(TFw==undefined||TFt==undefined||Wt==undefined||h==undefined||BFt==undefined||BFw==undefined){
			alert:"Please Enter a Valid input";
		}
	Area=(TFt*TFw)+(h*Wt)+(BFt*BFw);
	}
	
	function CSection(LFh,LFt,BFt,BFw){
		var Area, Cx, Cy;
		if(Lfh==undefined||LFt==undefined||BFt==undefined||BFw==undefined){
			alert:"Please Enter a Valid input";
		}
	Area=(LFt*LFh)+(BFt*BFw);
	}