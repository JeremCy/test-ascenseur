const UP= 1;
const DOWN= -1;
const IDLE=0;

function call(floors,direction){ 
    this.floors= floors;
    this.direction= direction;     
}

listCall=[
    new call(1,DOWN),
    new call(5,UP),
    new call(0,UP),
    new call(1,DOWN),
    new call(10,DOWN)   
];
function upAsc(){

}
function DownAsc(){
    
}
function idleCoreAsc(listCall){
    const initAsc = new call(0,IDLE);
    if (listCall.isArray(array) && array.length) {
        setTimeout(function() { idleCoreAsc(); }, 5000);  
        console.log("waiting"); 
    }else{
        console.log("calls receive:/n");
        listCall.forEach(element => {
          if(listCall.floors>initAsc.floors){
            upAsc();
          }else{
            DownAsc();
          } 
        });
        
    }
    
}
