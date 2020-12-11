const UP= 1;const DOWN= -1;const IDLE=0;

function goUp(){
  console.log("elevator up");
}

function goDown(param) {
  console.log("elevator up");
}

function call(floors,direction){ 
    this.floors= floors;
    this.direction= direction;     
}
function button(level){ 
  this.level= level;
    
}
listCall=[
    new call(1,DOWN),
    new call(5,UP),
    new call(0,UP),
    new call(1,DOWN),
    new call(10,DOWN)   
];

function inElevator(lvElevator,test){




}
function idleCoreAsc(listCall){
  const insideCall1= 5;
  const insideCall2= 6;
  const initAsc = new call(0,IDLE);
  if (listCall==null && listCall.length==0) {
      setTimeout(function() { idleCoreAsc(); }, 5000);  
      console.log("waiting..."); 
  }else{
    console.log("Calls receive!");
    for (let i = 0; i < listCall.length; i++) {
      if(listCall[i].floors>initAsc.floors){
        console.log("going to level.....");
        while(initAsc.floors!=listCall[i].floors){
          goUp();
          initAsc.floors++;
        }
        console.log("Done!\nPickup client.....");
        inElevator(initAsc.floors,insideCall1);
      }else if(listCall[i].floors<initAsc.floors){
        while(listCall[i].floors!=initAsc.floors){
          goDown();
            initAsc.floors--;
          }
        console.log("Done!\nPickup client.....")
        inElevator(initAsc.floors,insideCall1);
      } 
    }       
  }  
}
idleCoreAsc(listCall);