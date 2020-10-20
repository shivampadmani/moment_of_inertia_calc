
function swapImage(){
	var image = document.getElementById("imageToSwap");
	var dropd = document.getElementById("dlist");
	image.src = dropd.value;	
};


function TBeam(Tfw,TFt,Wt,Wh){
	var Area;
	if(Tfw==undefined||TFt==undefined||Wt==undefined||Wh==undefined){
		alert:"Please Enter Diameter";
	}
Area=(TFt*Tfw)+(Wh*Wt);
}
function HCircular(d,D){
	var Area;
	if(D==undefined||d==undefined){
		alert:"Please Enter Diameter";
	}
Area=3.14*((D*D)-(d*d));
}
function IBeam(Tfw,TFt,Wt,Wh,BFt,BFw){
	var Area;
	if(Tfw==undefined||TFt==undefined||Wt==undefined||Wh==undefined||BFt==undefined||BFw==undefined){
		alert:"Please Enter Diameter";
	}
Area=(TFt*Tfw)+(Wh*Wt)+(BFt*BFw);
}
function HRectangle(h,h1,b,b1){
	var Area;
	if(h==undefined||h1==undefined||b==undefined||b1==undefined){
		alert:"Please Enter Diameter";
	}
Area=(h*b)-(h1*b1);
}
function Circular(D){
	var Area;
	if(D==undefined){
		alert:"Please Enter Diameter";
	}
Area=3.14*D*D;
}
function Triangular(h,b){
	var Area;
	if(h==undefined||b==undefined){
		alert:"Please Enter Diameter";
	}
Area=(h*b)/2;
}
function Triangular(h,b){
	var Area;
	if(h==undefined||b==undefined){
		alert:"Please Enter Diameter";
	}
Area=(h*b)/2;
}
function Rectangular(h,b){
	var Area;
	if(h==undefined||b==undefined){
		alert:"Please Enter Diameter";
	}
Area=(h*b);
}

function CSection(Tfw,TFt,Wt,h,BFt,BFw){
	var Area;
	if(Tfw==undefined||TFt==undefined||Wt==undefined||h==undefined||BFt==undefined||BFw==undefined){
			alert:"Please Enter Diameter";
		}
	Area=(TFt*Tfw)+(h*Wt)+(BFt*BFw);
	}
	
	function CSection(Lfh,LFt,BFt,BFw){
		var Area;
		if(Lfh==undefined||LFt==undefined||BFt==undefined||BFw==undefined){
			alert:"Please Enter Diameter";
		}
	Area=(LFt*Lfh)+(BFt*BFw);
	}