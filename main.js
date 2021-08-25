canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

car1_width = 120;
 car1_height = 70;
  car1_image = "https://i.postimg.cc/9rqYz9HM/car1.png";
   car1_x = 10;
    car1_y = 10;

    car2_width = 120;
    car2_height = 70;
     car2_image = "https://i.postimg.cc/9rqYz9HM/car2.png";
      car2_x = 10;
       car2_y = 100;


background_image="https://i.postimg.cc/bv5d35nK/racing.jpg";



function add(){backgroundimagetag=new Image();
    backgroundimagetag.onload=uploadbackground;
backgroundimagetag.src=background_image;

car1imagetag=new Image();
    car1imagetag.onload=uploadcar1;
car1imagetag.src=car1_image;

car2imagetag=new Image();
    car2imagetag.onload=uploadcar2;
car2imagetag.src=car2_image;


}
function uploadbackground(){
    ctx.drawImage(backgroundimagetag,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1imagetag,car1_x,car1_y,car1_width,car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2imagetag,car2_x,car2_y,car2_width,car2_height);
}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){
keypressed=e.keyCode;
console.log(keypressed);
if(keypressed=="38")
{car1_up();
    console.log("up");
}

if(keypressed=="40")
{car1_down();
    console.log("down");
}
if(keypressed=="37")
{car1_left();
    console.log("left");
}
if(keypressed=="39")
{car1_right();
    console.log("right");
}

if(keypressed == '87') 
{ car2_up();
     console.log("key W");
     }
      if(keypressed == '83') 
      { car2_down(); console.log("key S");
     }
      if(keypressed == '65')
       { car2_left();
         console.log("key A");
         } if(keypressed == '68') 
         { car2_right();
             console.log("key D"); }
if(car1_x>700){document.getElementById("game_status").innerHTML="car 1 wins";}
if(car2_x>700){document.getElementById("game_status").innerHTML="car 2 wins";}

}
function car1_up() 
{ if(car1_y >=0) 
    { car1_y = car1_y - 10;
         console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
          uploadbackground(); uploadcar1(); uploadcar2();
         } }
         function car1_down()
         {
         if(car1_y <=500)
         {
         car1_y =car1_y+ 10;
         console.log("When down arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
         uploadbackground();
         uploadcar1();
         uploadcar2();
         }
         }
         function car1_left()
         {
         if(car1_x >= 0)
         {
         car1_x =car1_x - 10;
         console.log("When left arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
         uploadbackground();
         uploadcar1();
         uploadcar2();
         }
         }
         function car1_right()
         {
         if(car1_x <= 700)
         {
         car1_x =car1_x + 10;
         console.log("When right arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
         uploadbackground();
         uploadcar1();
         uploadcar2();
            }
         }
         
         function car2_up()
         {
         if(car2_y >=0)
         {
         car2_y = car2_y - 10;
         console.log("When up arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
         uploadbackground();
         uploadcar1();
         uploadcar2();
         }
         }
         function car2_down()
         {
         if(car1_y <=500)
         {
         car2_y =car2_y+ 10;
         console.log("When down arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
         uploadbackground();
         uploadcar1();
         uploadcar2();
         }
         }
         function car2_left()
         {
         if(car2_x >= 0)
         {
         car2_x =car2_x - 10;
         console.log("When left arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
         uploadbackground();
         uploadcar1();
         uploadcar2();
         }
         }
         function car2_right()
         {
         if(car2_x <= 700)
         {
         car2_x =car2_x + 10;
         console.log("When right arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
         uploadbackground();
         uploadcar1();
         uploadcar2();
            }
         }
         