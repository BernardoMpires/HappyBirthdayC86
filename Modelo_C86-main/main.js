var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(img){
        blockimgObject = img;

        blockimgObject.scaleToWidth(700)
        blockimgObject.scaleToHeight(510)
        blockimgObject.set({
            top:0,
            left:0
        });
        canvas.add(blockimgObject);
    })
	
}

function playSound(){
	x.play();
}
