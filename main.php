<?php

function random(){
//	return rand(1, 15);
	$input = array("SUTIVISM", "SV", "SUVITISM", "SOULVIS");
	$rand_keys = array_rand($input, 1);
	return $input[$rand_keys] . "\n";
}

$proj = random();
$tit = "ahah";



include "php/index.php";