var fadeAmount = 0.1;

function FadeIn(){
if (GetComponent.<Renderer>().material.color.a < fadeAmount){
GetComponent.<Renderer>().material.color.a = GetComponent.<Renderer>().material.color.a + 0.02;
yield WaitForSeconds(0.01);
repeat();
}}

function repeat(){
FadeIn();
}

function repeat2(){
FadeOut();
}

function FadeOut(){
if (GetComponent.<Renderer>().material.color.a > 0){
GetComponent.<Renderer>().material.color.a = GetComponent.<Renderer>().material.color.a - 0.02;
yield WaitForSeconds(0.01);
repeat2();
}}