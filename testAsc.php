<?php
    define("UP",1);
    define("DOWN",-1);
    define("IDLE",0);
    $initAsc=[0,"IDLE"];
    class call{ 
        public $floors;
        public $direction;     
    }

    $listCall=[
        new call(1,"DOWN"),
        new call(5,"UP"),
        new call(0,"UP"),
        new call(1,"DOWN"),
        new call(10,"DOWN")   
    ];
    var_dump($listCall);
    // function coreAsc($initAsc,$listCall){
    //     if($listCall==NULL) return $initAsc;
    //     foreach($listCall){
    //         if($initAsc[0]<)
    //     }
    // }

