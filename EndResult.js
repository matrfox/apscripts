
var turnCounterValue : GameObject;

var self : TextMesh;

var params = new System.Collections.Generic.Dictionary.<System.String, System.Object>();
params.Add("Final Score", turnCounterValue.GetComponent(TurnCounter).counterValue.ToString()); 


function GetResult(){
self.text = "Your score was " + (turnCounterValue.GetComponent(TurnCounter).counterValue.ToString()) + "!";
//yield WaitForSeconds(4);
//Application.LoadLevel("Menu");
}

Analytics.Analytics.CustomEvent("Final Score", params); 

function OnMouseOver(){
	if (Input.GetMouseButtonDown(0)){
		Application.OpenURL("https://rave.applicatalyst.com/system/application/login");
	}
	transform.localScale = Vector3(1.05,1.05,1.05);
}

function OnMouseExit(){
	transform.localScale = Vector3(1,1,1);
}