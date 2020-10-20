
function swapImage(){
	var image = document.getElementById("imageToSwap");
	var dropd = document.getElementById("dlist");
	image.src = dropd.value;	
};
var Area;
function Circular(D){
	if(D==undefined){
		alert:"Please Enter Diameter";
	}
Area=3.14*D*D;
}