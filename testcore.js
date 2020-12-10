const UP= 1;
const DOWN= -1;
const IDLE=0;

function call(floors,direction){ 
    this.floors= floors;
    this.direction= direction;     
}
function button(level){ 
  this.level= level;
    
}
listCall=[
    call(1,DOWN),
    call(5,UP),
    call(0,UP),
    call(1,DOWN),
    call(10,DOWN)   
];

function retreiveCallData(listCall){
    for (let i = 0; i < listCall.length; i++) {
        console.log(listCall[i].floors);
    }
}
retreiveCallData(listCall);