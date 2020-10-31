
function TBeam() {
	var TFw = document.getElementById("TFw").value;
	var TFt = document.getElementById("TFt").value;
	var Wt = document.getElementById("Wt").value;
	var Wh = document.getElementById("Wh").value;
	var Area, Cx, Cy, Ixx, Iyy;

	if (TFw == undefined || TFt == undefined || Wt == undefined || Wh == undefined) {
		alert: "Please Enter a Valid input";
	}
	Area = (TFt * TFw) + (Wh * Wt);
	Cx = TFw / 2;
	Cy = ((TFt * (TFt * TFw) / 2) + (Wh * (Wh * Wt) / 2)) / Area;
	Ixx = (Wt * Wh * (Cy - Wh / 2) * (Cy - Wh / 2)) + (Wt * Wh * Wh * Wh) / 12 + TFw * TFt * (Wh + TFt - Cy) * 2 + (TFt * TFt * TFt) * TFw / 12;
	Iyy = (Wh * Wt ^ 3 + TFw ^ 3 * TFt) / 12;
	document.getElementById("area").innerHTML = Area + "  m^2";
	document.getElementById("cog-x").innerHTML = Cx + "  m";
	document.getElementById("cog-y").innerHTML = Cy + "  m";
	document.getElementById("moi-xx").innerHTML = Ixx + "  m^4";
	document.getElementById("moi-yy").innerHTML = Iyy + "  m^4";
}
//--------------------------------------------------------------------------------------------------------------------------------
function HCircular() {
	var D = document.getElementById("D").value;
	var d = document.getElementById("d").value;
	var Area, Cx, Cy, Ixx, Iyy;
	if (D == undefined || d == undefined) {
		alert: "Please Enter a Valid input";
	}
	Area = 3.14 * ((D * D) - (d * d));
	Cx = 0;
	Cy = 0;
	Ixx = 3.14 * ((D * D * D * D) - (d * d * d * d));
	Iyy = Ixx;
	document.getElementById("area").innerHTML = Area + "  m^2";
	document.getElementById("cog-x").innerHTML = Cx + "  m";
	document.getElementById("cog-y").innerHTML = Cy + "  m";
	document.getElementById("moi-xx").innerHTML = Ixx + "  m^4";
	document.getElementById("moi-yy").innerHTML = Iyy + "  m^4";
}
//-----------------------------------------------------------------------------------------------------------------------------------
function IBeam() {
	var TFw = document.getElementById("TFw").value;
	var TFt = document.getElementById("TFt").value;
	var Wt = document.getElementById("Wt").value;
	var Wh = document.getElementById("Wh").value;
	var BFt = document.getElementById("BFt").value;
	var BFw = document.getElementById("BFw").value;
	var Area, Cx, Cy, Ixx, Iyy;

	Area = (TFt * TFw) + (Wh * Wt) + (BFt * BFw);
	Cx = ((TFw * (TFt * TFw) / 2) + (Wt * (Wh * Wt) / 2) + (BFw * (BFt * BFw) / 2)) / Area;;
	Cy = ((TFt * (TFt * TFw) / 2) + (Wh * (Wh * Wt) / 2) + (BFt * (BFt * BFw) / 2)) / Area;
	Ixx = (Wt * Wh * Wh * Wh) / 12 + (BFt * BFt * BFt * BFw) / 12 + (TFt * TFt * TFt * TFw) / 12 - (Wh * Wh * Wh * (TFw / 2 - Wt / 2)) / 6;
	Iyy = ((TFw * TFw * TFw * TFt) + (Wt * Wt * Wt * Wh) + (BFw * BFw * BFw * BFt)) / 12;
	document.getElementById("area").innerHTML = Area + " m^2";
	document.getElementById("cog-x").innerHTML = Cx + "  m";
	document.getElementById("cog-y").innerHTML = Cy + "  m";
	document.getElementById("moi-xx").innerHTML = Ixx + "  m^4";
	document.getElementById("moi-yy").innerHTML = Iyy + "  m^4";
}
//-----------------------------------------------------------------------------------------------------------------------------------
function HRectangular() {
	var h = document.getElementById("h").value;
	var h1 = document.getElementById("h1").value;
	var b = document.getElementById("b").value;
	var b1 = document.getElementById("b1").value;
	var Area, Cx, Cy, Ixx, Iyy;
	if (h == undefined || h1 == undefined || b == undefined || b1 == undefined) {
		alert: "Please Enter a Valid input";
	}
	Area = (h * b) - (h1 * b1);
	Cx = b / 2;
	Cy = h / 2;
	Ixx = (b * Math.pow(h,3)/ 12) + (b1 * Math.pow(h1,3) / 12);
	Iyy = (Math.pow(b,3) * h / 12) + (Math.pow(b1,3) * h1 / 12);
	document.getElementById("area").innerHTML = Area + "  m^2";
	document.getElementById("cog-x").innerHTML = Cx + "  m";
	document.getElementById("cog-y").innerHTML = Cy + "  m";
	document.getElementById("moi-xx").innerHTML = Ixx + "  m^4";
	document.getElementById("moi-yy").innerHTML = Iyy + "  m^4";
}
//-------------------------------------------------------------------------------------------------------------------------------------
//This function will work on Circulat.html page only

function Circular() {
	var D = document.getElementById("D").value;
	var Area, Cx, Cy, Ixx, Iyy;
	if (D == undefined) {
		alert: "Please Enter a Valid input";
	}
	Area = 3.14 * D * D / 4;
	Cx = 0;
	Cy = 0;
	Ixx = (3.14 / 64) * Math.pow(D,4);
	Iyy = Ixx;
	document.getElementById("area").innerHTML = Area + "  m^2";
	document.getElementById("cog-x").innerHTML = Cx + "  m";
	document.getElementById("cog-y").innerHTML = Cy + "  m";
	document.getElementById("moi-xx").innerHTML = Ixx + "  m^4";
	document.getElementById("moi-yy").innerHTML = Iyy + "  m^4";
}
//--------------------------------------------------------------------------------------------------------------------------------------
function Triangular() {
	var h = document.getElementById("h").value;
	var b = document.getElementById("b").value;
	var Area, Cx, Cy, Ixx, Iyy;
	if (h == undefined || b == undefined) {
		alert: "Please Enter a Valid input";
	}
	Area = (h * b) / 2;
	Cx = b / 2;
	Cy = h / 3;
	Ixx = (b * Math.pow(h,3)) / 36;
	Iyy = (h * Math.pow(b,3)) / 48;
	document.getElementById("area").innerHTML = Area + "  m^2";
	document.getElementById("cog-x").innerHTML = Cx + "  m";
	document.getElementById("cog-y").innerHTML = Cy + "  m";
	document.getElementById("moi-xx").innerHTML = Ixx + "  m^4";
	document.getElementById("moi-yy").innerHTML = Iyy + "  m^4";
}
//--------------------------------------------------------------------------------------------------------------------------------------
function Rectangular() {
	var h = document.getElementById("h").value;
	var b = document.getElementById("b").value;
	var Area, Cx, Cy, Ixx, Iyy;
	if (h == undefined || b == undefined) {
		alert: "Please Enter a Valid input";
	}
	Area = (h * b);
	Cx = b / 2;
	Cy = h / 2;
	Ixx = (b * Math.pow(h,3) )/ 12;
	Iyy = (h * Math.pow(b,3) )/ 12;
	document.getElementById("area").innerHTML = Area + "  m^2";
	document.getElementById("cog-x").innerHTML = Cx + "  m";
	document.getElementById("cog-y").innerHTML = Cy + "  m";
	document.getElementById("moi-xx").innerHTML = Ixx + "  m^4";
	document.getElementById("moi-yy").innerHTML = Iyy + "  m^4";
}

//------------------------------------------------------------------------------------------------------------------------------------
function CSection() {
	var TFw = document.getElementById("TFw").value;
	var TFt = document.getElementById("TFt").value;
	var Wt = document.getElementById("Wt").value;
	var h = document.getElementById("h").value;
	var BFt = document.getElementById("BFt").value;
	var BFw = document.getElementById("BFw").value;
	var Area, Cx, Cy, Ixx, Iyy;
	if (TFw == undefined || TFt == undefined || Wt == undefined || h == undefined || BFt == undefined || BFw == undefined) {
		alert: "Please Enter a Valid input";
	}
	Area = (TFt * TFw) + (h * Wt) + (BFt * BFw);
	Cx = ((TFw * (TFt * TFw) / 2) + (Wt * (h * Wt) / 2) + (BFw * (BFt * BFw) / 2)) / Area;
	Cy = ((TFt * (TFt * TFw) / 2) + (h * (h * Wt) / 2) + (BFt * (BFt * BFw) / 2)) / Area;
	Ixx =((TFw*Math.pow(TFt,3)/12)+(TFw*TFt*Math.pow((Cy-(TFt/2)),2)))+((Wt*Math.pow(h,3)/12)+(Wt*h*Math.pow((Cy-(h/2)),2)))+((BFw*Math.pow(BFt,2)/12)+(BFw*BFt*Math.pow((Cy-(BFt/2)),2)));
	Iyy =((TFt*Math.pow(TFw,3)/12)+(TFt*TFw*Math.pow((Cx-(TFw/2)),2)))+((h*Math.pow(Wt,3)/12)+(Wt*h*Math.pow((Cx-(Wt/2)),2)))+((BFt*Math.pow(BFw,3)/12)+(BFw*BFt*Math.pow((Cx-(BFw/2)),2)));
	document.getElementById("area").innerHTML = Area + "  m^2";
	document.getElementById("cog-x").innerHTML = Cx + "  m";
	document.getElementById("cog-y").innerHTML = Cy + "  m";
	document.getElementById("moi-xx").innerHTML = Ixx + "  m^4";
	document.getElementById("moi-yy").innerHTML = Iyy + "  m^4";
}

//--------------------------------------------------------------------------------------------------------------------------------------
function LSection() {
	var LFh = document.getElementById("LFh").value;
	var LFt = document.getElementById("LFt").value;
	var BFt = document.getElementById("BFt").value;
	var BFw = document.getElementById("BFw").value;
	var Area, Cx, Cy, Ixx, Iyy;

	Area = (LFt * LFh) + (BFt * BFw);
	Cx = ((LFt * (LFt * LFh) / 2) + (BFw * (BFt * BFw) / 2)) / Area;
	Cy = ((LFh * (LFt * LFh) / 2) + (BFt * (BFt * BFw) / 2)) / Area;
	Ixx = ((LFt * Math.pow(LFh, 3) / 12) + (LFt * LFh * Math.pow((Cy - (LFh / 2)), 2))) + (BFw * Math.pow(BFt,3)/ 12) + (BFw * BFt * Math.pow((Cy - (BFt / 2)),2));
	Iyy = ((LFh * Math.pow(LFt, 3)/ 12) + (LFt * LFh * Math.pow((Cx - (LFt / 2)), 2))) + (BFt * Math.pow(BFw,3)/ 12) + (BFw * BFt * Math.pow((Cx - (BFw / 2)),2));
	document.getElementById("area").innerHTML = Area + "  m^2";
	document.getElementById("cog-x").innerHTML = Cx + "  m";
	document.getElementById("cog-y").innerHTML = Cy + "  m";
	document.getElementById("moi-xx").innerHTML = Ixx + "  m^4";
	document.getElementById("moi-yy").innerHTML = Iyy + "  m^4";
}