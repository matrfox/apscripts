
var scrolly : GameObject;
var mover : GameObject;
var max = -14;
var min = -128;

function FixedUpdate(){
mover.transform.localPosition.y = (scrolly.GetComponent(UI.Scrollbar).value*(max - min)+min);
}