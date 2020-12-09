<?php
    define("UP",1);
    define("DOWN",-1);
    define("IDLE",0);

    function call($floors,$direction){
        $callArray= array();
        $testfloors= $floors;
        $testdirection= $direction;
        $callArray=[$testfloors,$testdirection];
        return $callArray;
    }

