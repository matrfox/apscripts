
public var mouseToggle = false;

public var outClick = false;

private var soundBank : GameObject;


//var infoBubble : GameObject;

public var docQuestion : GameObject;

var xPos = 0;
var yPos = 0;
var zPos = 0;

function Start(){
    soundBank = GameObject.Find("Sounds");
	docQuestion = GameObject.Find("Card_QuestionDoc");
}

function Update(){
	if (outClick == true){
		if (Input.GetMouseButtonDown(0)){
			outClick = false;
			mouseToggle = false;
			ScaleBackHover();
			//reset disable
			docQuestion.GetComponent(DocumentQuestion).FadeOutGrey();
			docQuestion.GetComponent(DocumentQuestion).enable();

		}
	}
}

function OnMouseOver(){
if (docQuestion.GetComponent(DocumentQuestion).docProcessing == false){
	//CLICK
	if (Input.GetMouseButtonDown(0) && mouseToggle == false){
		mouseToggle = true;
		transform.localPosition = Vector3(xPos, yPos, zPos);
		//animate to larger scale
		ScaleUp();
		//send disable out
		docQuestion.GetComponent(DocumentQuestion).FadeInGrey();
		docQuestion.GetComponent(DocumentQuestion).disable();
		yield WaitForSeconds (0.1);
		outClick = true;
	}

	else if (Input.GetMouseButtonDown(0) && mouseToggle == true){
		outClick = false;
		mouseToggle = false;
		ScaleBackHover();
		//reset disable
		docQuestion.GetComponent(DocumentQuestion).FadeOutGrey();
		docQuestion.GetComponent(DocumentQuestion).enable();

	}

	//HOVER
	if (mouseToggle == false){
		ScaleUpHover();
		}
	}
}


//EXIT
function OnMouseExit(){
	//set scale back
	if (mouseToggle == false){
		ScaleBackHover();
}}

function ForceUpTutorial(){
transform.localPosition = Vector3(xPos, yPos, zPos);
ScaleUp();
}

//SCALERS
function ScaleUp(){
    transform.localScale = Vector3(3.238751,3.238751,3.238751);
    soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).inventoryClick;
    soundBank.GetComponent(AudioSource).Play();
}

function ScaleUpHover(){
    transform.localScale = Vector3(1.127203,1.127203,1.127203);
}

function ScaleBackHover(){
	if (mouseToggle == false){
		transform.localScale = Vector3(1,1,1);
		transform.localPosition = Vector3(0,0,0);
}}