const UP= 1;const DOWN= -1;const IDLE=0;
/**
 * define fonction up and down 
 */
function goUp(){
  console.log("elevator up");
}

function goDown() {
  console.log("elevator down");
}
/**
 * fonction simulant l'appuis sur un button
 * @param {*} floors 
 * @param {*} direction 
 */
function call(floors,direction){ 
    this.floors= floors;
    this.direction= direction;     
}

/**
 * fonction simulant les call dans l'ascenseur
 * le cas ou plusieur button est appuyer n'est pas simuler
 * @param {*} lvElevator 
 * @param {*} test 
 */
function inElevator(lvElevator,test){
  if(lvElevator>test){
    while(lvElevator!=test){
      goDown();
      lvElevator--;
    }
  }
  if(lvElevator<test){
    while(lvElevator!=test){
      goUp();
      lvElevator++;
    }
  }
}
/**
 * fonction
 * param {*} listCall 
 */
function RunCoreAsc(listCall){
  const insideCall1= 5;
  const insideCall2= 6;
  const initAsc = new call(0,IDLE);
  if (Array.isArray(listCall) && listCall.length==0) {
    console.log("waiting..."); 
    setTimeout(function() { RunCoreAsc(); }, 5000);  
      
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
        inElevator(initAsc.floors,insideCall2);
      }
      if(listCall[i].floors<initAsc.floors){
          console.log("going to level.....");        
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

/**
 * liste de call predefinie
 */
listCall=[
  new call(1,DOWN),
  new call(5,UP),
  new call(0,UP),
  new call(1,DOWN),
  new call(10,DOWN) 
];

RunCoreAsc(listCall);