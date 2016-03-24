
var tutorial : GameObject;
function OnMouseOver(){
transform.localScale = Vector3(0.06694201,1.1141420,0.1974424);
if (Input.GetMouseButtonDown(0)){
tutorial.GetComponent(Tutorial).StopTutorial();
}
}

function OnMouseExit(){
transform.localScale = Vector3(0.06114981,1,0.1803586);
}