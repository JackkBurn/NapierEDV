//variables 
let overr = false;
let lockedr = false;
let overg = false;
let lockedg = false;
let overb = false;
let lockedb = false;
let overSub = false;
let xoffr;
let xoffg;
let xoffb;
let redButton;
let greenButton;
let blueButton;

//API

let url;
let colorValue;
let urlArray;
let separator = '';

//storing rgbs
let red,green,blue;
let redUnf, greenUnf, blueUnf;
let bg;
let average;
let hexvaluergb;
let splithex;


//forshowcase
let submitted = false;
let info;
let normalFont;
let titleFont;
var fade;
var fadeAmount = 1;
let vh = window.innerHeight * 0.01;
let vw = window.innerWidth * 0.01;
console.log('vh is')
console.log(vh)
console.log('vw is')
console.log(vw)

//sliders

let slider_width2 = vh*5;
let slider_height2 = vh*2.9;
let posx1, posy1;
let posx2, posy2;
let posx3, posy3;


//ratio for conversion
let halfWidth;
let ratio;
let hexBG;
let myColor;
//var key = config.SECRET_API_KEY;

document.documentElement.style.setProperty('--vh', `${vh}px`);

//images and fonts

function preload(){
  
titleFont = loadFont('data/TitilliumWeb-Bold.ttf');
normalFont = loadFont('data/TitilliumWeb-Regular.ttf');
info = loadImage('data/info.png');

}

function setup() {
  
  imageMode(CENTER);
  let cnv = createCanvas(windowWidth,windowHeight);
  cnv.class('noselect');
  strokeWeight(3);
  rectMode(CENTER);
  textFont(titleFont, 32);
  
  halfWidth = width/2;
  ratio = halfWidth/200;
  fade = 0;

  posx1 = width/2;
  posy1 = height/10*4.4;
  line (posx1, posy1, posx1+100, posy1);
  
  posx2 = width/2;
  posy2 = height/10*5.5;
  line (posx2, posy2, posx2+100, posy2);
  
  posx3 = width/2;
  posy3 = height/10*6.6;
  line (posx3, posy3, posx3+100, posy3);
}

function draw() {    
  //dotenv

  let fontMaxArray = [vw, vh];
  let fontMax = min(vw, vh);
  if (submitted == false){
  background(red,green,blue);
  fill(255,255,255,80);
  noStroke();
  triangle(0, vh*33, 0, -height, width/5*4.3, 0);

  // --------- Information Button --------------------------------------------------------------------------------------------------------------------------
  textAlign(RIGHT, TOP);
  textFont(titleFont);
  fill(10,10,10)
  image(info, width-width/15, height/15*14.5, 50,50);
  tint(255,120);



  // --------- Information Button --------------------------------------------------------------------------------------------------------------------------
  

  
  textAlign(RIGHT, TOP);
  textFont(titleFont);
  textSize(22);
  fill(255,255,255,80);
  rect(width/2, height/10*5.35, width/5*3+120,height/5*2, 15);
  stroke(3);
  strokeWeight(2);
  
  
  // red value undetermined - enabled -----------------------------------------------------------------------------------------------------

  redButton = posx1;
  line (width/4, posy1, width/4*3, posy1); 
      
      if (dist(mouseX, mouseY, posx1, posy1) < slider_height2) {
        fill(200); // fill of button upon hover
        overr = true;
      }
      
      else { // fill of button standard
        fill(255);
        overr = false;
      }

              if (posx1 < width/4+2) { //these next two if statements stop the button sliding off the bar
              posx1 = width/4+2;
              }
              
              if (posx1 > width/4*3-2) {
              posx1 = width/4*3-2;
              }
              

  rect(posx1, posy1, slider_width2, slider_height2, 4); //drawing the slider "button"
  

 // green value undetermined - enabled -----------------------------------------------------------------------------------------------------
 
  greenButton = posx2;
  line (width/4, posy2, width/4*3, posy2); 
      
      if (dist(mouseX, mouseY, posx2, posy2) < slider_height2) {
        fill(200); // fill of button upon hover
        overg = true;
      }
      
      else { // fill of button standard
        fill(255);
        overg = false;
      }

              if (posx2 < width/4+2) { //these next two if statements stop the button sliding off the bar
              posx2 = width/4+2;
              }
              
              if (posx2 > width/4*3-2) {
              posx2 = width/4*3-2;
              }
              

  rect(posx2, posy2, slider_width2, slider_height2, 4); //drawing the slider "button"

 
 // blue value undetermined - enabled -----------------------------------------------------------------------------------------------------
  blueButton = posx3;
  line (width/4, posy3, width/4*3, posy3); 
      
      if (dist(mouseX, mouseY, posx3, posy3) < slider_height2) {
        fill(200); // fill of button upon hover
        overb = true;
      }
      
      else { // fill of button standard
        fill(255);
        overb = false;
      }

              if (posx3 < width/4+2) { //these next two if statements stop the button sliding off the bar
              posx3 = width/4+2;
              }
              
              if (posx3 > width/4*3-2) {
              posx3 = width/4*3-2;
              }
              

  rect(posx3, posy3, slider_width2, slider_height2, 4); //drawing the slider "button"
  
 // button -----------------------------------------------------------------------------------------------------
  
  
  if (dist(mouseX, mouseY, width/2,height/10*8.5) < 30) { 
        fill(200); // fill of button upon hover
        overSub = true;
        
      }
      
      else { // fill of button standard
        fill(255);
        overSub = false;
      }

  
  
  noStroke();
  fill(10,10,10,120)
  rect(width/2,height/10*8.5, 100,60,15);
  textAlign(CENTER, CENTER);
  textSize(26);
  fill(255);
  text("Send", width/2,height/10*8.39);
  

 // standard Draw -----------------------------------------------------------------------------------------------------
 

 // image(smile, width/2 + 240, height/2 - 60, 80, 80);      //images inserted here
  
 fill(10,10,10);
  textSize(22);
  textAlign(RIGHT, CENTER);
  text("Undermined", width/5*2, height/10*3.8);
  text("Fatigued", width/5*2, height/10*4.9);
  text("Anxious", width/5*2, height/10*6);

  textSize(22);
  textAlign(LEFT, CENTER);
  text("Enabled", width/5*3, height/10*3.8);
  text("Invigorated", width/5*3, height/10*4.9);
  text("Tranquil", width/5*3, height/10*6);

  textAlign(CENTER, CENTER);
  
  //COLOR CALCULATIONS BY SCREEN WIDTH 

  //RED
  redUnf = 127
  if (posx1 >= halfWidth){
    red = redUnf+((posx1-halfWidth)/ratio);
  }
  else{
    red = redUnf-((halfWidth-posx1)/ratio);
  }

  //GREEN
  greenUnf = 127
  if (posx2 >= halfWidth){
    green = greenUnf+((posx2-halfWidth)/ratio);
  }
  else{
    green = greenUnf-((halfWidth-posx2)/ratio);
  }
  //BLUE
    blueUnf = 127
      if (posx3 >= halfWidth){
        blue = blueUnf+((posx3-halfWidth)/ratio);
      }
      else{
        blue = blueUnf-((halfWidth-posx3)/ratio);
      }

  //END CALCS
  bg = color(red,green,blue);
  average = ((red+green+blue) / 3);

  var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
  

//if on mobile
  if (isMobile == true) {
    if (dist(mouseX, mouseY, width/15*14.5, height/15*14.4) < 80) {
      textAlign(CENTER, CENTER);
      fill(240,240,240, fade);
      image(info, width-width/15, height/15*14.5, 50,50);
      tint(255,120);
      rect(width/2, height/10*5.35, width/5*3+120,height/5*2, 15);
      circle(width/5*3+120, height/5*1.75, 70);
      fill(10, 10, 10, fade)
      textFont(titleFont);
      textSize(fontMax*6);
      text("x", width/5*3+120, height/5*1.7);
      textSize(fontMax*3.4);
      text("What is Napier EDV?", width/2, height/5*1.85);
      text("How does it work?", width/2, height/5*2.55);
      text("Still curious? Feel free to email: ", width/2, height/5*3.25)
      textFont(normalFont);
      textSize(fontMax*3);
      text("Napier's Emotional Data Visualiser takes the emotions", width/2, height/5*2.05);
      text("of students on campus and visualises the collective", width/2, height/5*2.2);
      text("mood through an glowing orb in Merchiston's reception.", width/2, height/5*2.35);
      text("Rate how you're feeling by sliding the respective scales", width/2, height/5*2.75);
      text("Once you're content with your choices, submit your feelings",  width/2, height/5*2.9);
      text("by pressing 'Send'",  width/2, height/5*3.05);
      text("l.shore@napier.ac.uk",  width/2, height/5*3.45);
      textAlign(CENTER, CENTER);
      if (fade<255) fadeAmount=7; 
      fade += fadeAmount; 
      }
      else { fade = 0;}
  }

  //desktop
  else {
    if (dist(mouseX, mouseY, width/15*14.5, height/15*14.4) < 80) {
      textSize(fontMax*3);
      textAlign(CENTER, CENTER);
      fill(240,240,240, fade);
      image(info, width-width/15, height/15*14.5, 50,50);
      tint(255,120);
      rect(width/2, height/10*5.35, width/5*3+120,height/5*2, 15);
      fill(10, 10, 10, fade)
      textFont(titleFont);
      text("What is Napier EDV?", width/2, height/5*1.85);
      text("How does it work?", width/2, height/5*2.55);
      text("Still curious? Feel free to email: ", width/2, height/5*3.25)
      textFont(normalFont);
      textSize(fontMax*2.1);
      text("Napier's Emotional Data Visualiser takes the emotions of students on campus and ", width/2, height/5*2.1);
      text("visualises the collective mood through an glowing orb in Merchiston's reception.", width/2, height/5*2.3);
      text("Rate how you're feeling by sliding the respective scales", width/2, height/5*2.8);
      text("Once you're content with your choices, submit your feelings by pressing 'Send'",  width/2, height/5*3);
      text("l.shore@napier.ac.uk",  width/2, height/5*3.45);
      textAlign(CENTER, CENTER);
      if (fade<255) fadeAmount=7; 
      fade += fadeAmount; 
      }
      else { fade = 0;}
    
  }

  //submitted
  }
  
  else {

  //Submitted = true, so change state, change background to solid chosen colour and convert RGB to HEX.
  bg = color(red,green,blue);
  hexvaluergb = bg.toString('#rrggbb');
  background(red,green,blue);

  //Draw Triangle for new Stage

  fill(255,255,255,80);
  noStroke();
  triangle(0, vh*33, 0, -height, width/5*4.3, 0);
  fill(0);

  
  //Draw Text For new Stage

  fill(0,0,0,255);
  textSize(28);
  textFont(titleFont);
  textAlign(CENTER, CENTER);
    
  //motivational messages based on average

  if(average > 128){
  textFont(titleFont);
  text(hexvaluergb,width/2,height/2);
  text("So you're feeling like",width/2,height/2-40);
  text("today? You got this.",width/2,height/2+40);
  textAlign(CENTER,CENTER);
  textFont(normalFont);
  textSize(vw*2.6);
  text("Visit Merchiston's reception to view your contribution!", width/10*5, height/10*9.3);
  }
  else{
    fill(250,250,250);
    textFont(titleFont);
    text(hexvaluergb,width/2,height/2);
     text("So you're feeling like",width/2,height/2-40);
     text("today? Sorry to hear that.",width/2,height/2+40); 
     text("Let's get through today.",width/2,height/2+80);
     textAlign(CENTER,CENTER);
     textSize(vw*2.6);
     text("Visit Merchiston's reception to view your contribution!", width/10*5, height/10*9.3);

     }
  }
}

function touchStarted() { // Locks Slider to the mouse X position on press of Slider

  if (overSub) {
  submitted = true;
  bg = color(red,green,blue);
  hexvaluergb = bg.toString('#rrggbb');
  splithex = split(hexvaluergb, '#')
  colorValue = splithex[1];
  //urlArray = [config.SECRET_API_KEY, colorValue];  
  var urlAPl = 'https://api.thingspeak.com/update.json?api_key=FA0QBQX8PYLXN8UF&field1=';
  urlArray = [urlAPl, colorValue];  
  url = join(urlArray, separator);
  httpDo(url,{method:'POST'});
  console.log(url);
  overSub = false;
  }
}

function touchMoved(){
  if (overr){
    cursor('pointer');
    posx1 = mouseX;
  }
  if (overg){
    cursor('pointer');
    posx2 = mouseX;
  }
  if (overb){
    cursor('pointer');
    posx3 = mouseX;
  }
  return false;
}