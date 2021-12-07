canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Create a reference for canvas 

//Give specific height and width to the car image
greenCar_width= 75; 
greenCar_height= 100; 



background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greenCar_x=5;
greenCar_y=225;


function add() {
	background_imgTag= new Image();
	background_imgTag.onload= uploadBackground;
	background_imgTag.src=background_image;

	greenCar_imgTag= new Image();
	greenCar_imgTag.onload=uploadgreencar;
	greenCar_imgTag.src=greencar_image;

}

function uploadBackground() {
	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);


}

function uploadgreencar() {
	ctx.drawImage(greenCar_imgTag,greenCar_x,greenCar_y,greenCar_width,greenCar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (greenCar_y >=0)
    {
		greenCar_y=greenCar_y -10;
		console.log("When up arrow  is pressed,x="+greenCar_x +" |  y="+greenCar_y);
	    uploadBackground();
		uploadgreencar();

		};
}	

function down()
{
	if (greenCar_y <=500)
    {
		greenCar_y=greenCar_y +10;
		console.log("When down arrow  is pressed,x="+greenCar_x +" | y="+greenCar_y); 
		uploadBackground();
		uploadgreencar();
	
	};
}

function left()
{
	if (greenCar_x >=0)
    {
		greenCar_x=greenCar_x -10;
		console.log("When left arrow  is pressed,x="+greenCar_x +"| y="+greenCar_y);
	    uploadBackground();
		uploadgreencar();
	
	};
}

function right()
{
	if (greenCar_x <=700)
    {
		greenCar_x=greenCar_x +10;
		console.log("When right arrow  is pressed,x="+greenCar_x +" |  y="+greenCar_y);
		uploadBackground();
		uploadgreencar();
	};
}
