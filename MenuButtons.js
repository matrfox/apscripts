var self : TextMesh;

var rollOver : Color;
var textColor : Color;
var gameCam : GameObject;


function OnMouseOver(){
self.color = rollOver;
if (Input.GetMouseButtonDown(0)){
if (name=="Quit"){
//Application.Quit();
}
else if (name=="Play"){
//Application.LoadLevel("Game");
}
else if (name=="Resume"){
gameCam.transform.localPosition.y = (0);
//set back esc key function
}
else if (name=="QuitToMenu"){
//Application.LoadLevel("Menu");
}

}
}

function OnMouseExit(){
self.color = textColor;
}