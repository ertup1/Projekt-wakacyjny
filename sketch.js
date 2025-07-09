function setup()
		{
		createCanvas(1520,1520);
		x=0;
		y=0;
		z=0;
		a=-180;
		}

function draw()
		{
		background(255);
		fill(0,0,0);
		ellipse(151+x,243+z,4);
		ellipse(166+x,243+z,4)
		rect(150+x,243+z,1,15);
		rect(165+x,243+z,1,15);
		fill(255,234,28);
		ellipse(160+x,280+z,50,60);
		fill(0,0,0);
		ellipse(160+x,280+z,50,5);
		ellipse(160+x,290+z,44,5);
		ellipse(160+x,300+z,37,5);
		fill(255,255,255);
		ellipse(155+x,265+z,14,7);
		ellipse(175+x,265+z,14,7);
		fill(0,0,0);
		ellipse(157+x,265+z-z/200,6,2);
		ellipse(177+x,265+z-z/200,6,2);
		x=(x+2+5*sin(y))%(1575-320);
		y=y+0.1;
		z=80*cos(a);
		a=a+0.05;
		if (x>=1200)
		{
			x=0;
			y=0;
			z=0;
			a=-180;
		}
		}