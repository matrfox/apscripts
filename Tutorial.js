
var docQuestions : GameObject;

var speechBubble : GameObject;
var bubbleText : TextMesh;
var closeButton : GameObject;

var mat1 : Material;
var mat2 : Material;

var casMat : Material;
var emptyMat : Material;

var readingTime = 5;

var bonusCard1 : GameObject;

var docClick : GameObject;

function StopTutorial(){
StopCoroutine("StartTutorial");

closeButton.GetComponent.<Renderer>().enabled = false;
speechBubble.GetComponent.<Renderer>().enabled = false;
bubbleText.GetComponent.<Renderer>().enabled = false;
docClick.GetComponent(InventoryClick).mouseToggle = false;
docQuestions.GetComponent(DocumentQuestion).FadeOutGrey();
docQuestions.GetComponent(DocumentQuestion).enable();
}


function StartTutorial(){

docClick.GetComponent(InventoryClick).mouseToggle = true;

//grey card in
//disable actions
docQuestions.GetComponent(DocumentQuestion).FadeInGrey();
docQuestions.GetComponent(DocumentQuestion).disable();
speechBubble.transform.localPosition = Vector3(-120,14,50);

//5 seconds (or a click?) to view through speech bubbles explaining the board

//This tutorial will give you an explanation of the game. 
speechBubble.GetComponent.<Renderer>().enabled = true;
bubbleText.GetComponent.<Renderer>().enabled = true;

bubbleText.text = "This tutorial will give you \nan explanation of the game.";

//The aim of the game is to collect all of the needed documents for each stage until you have enrolled at Ravensbourne. 
yield WaitForSeconds(readingTime + 1);
bubbleText.text = "The aim of the game is to collect \nall of the needed documents for each stage\n until you have enrolled at Ravensbourne.";

//This is you. you can move to areas by clicking on them. A dice will roll. 
yield WaitForSeconds(readingTime+1);
speechBubble.transform.localPosition = Vector3(-116.6,14.5,55);
//reverse bubble texture
speechBubble.GetComponent.<Renderer>().material = mat2;
bubbleText.text = "This is you. you can move to\n areas by clicking on them. \nA dice will roll.";

//If this dice roll is below your move score, you will be given a situation to deal with. 
yield WaitForSeconds(readingTime);
speechBubble.GetComponent.<Renderer>().material = mat1;
speechBubble.transform.localPosition = Vector3(-138.46,13.94,49.36);
bubbleText.text = "If this dice roll is below your\n move score, you will be given a situation\n to deal with.";

//once on an area you can click it again to attempt to find a document there. 
yield WaitForSeconds(readingTime);
speechBubble.GetComponent.<Renderer>().material = mat2;
speechBubble.transform.localPosition = Vector3(-116.6,14.5,55);
bubbleText.text = "Once on an area you can click\nit again to attempt to find\n a document there.";

//Collect all of the documents listed here.
yield WaitForSeconds(readingTime);
speechBubble.GetComponent.<Renderer>().material = mat1;
speechBubble.transform.localPosition = Vector3(-111.7,13.89,48.87);
bubbleText.text = "Collect all of the documents\n listed here.";

//You will accrue bonuses along your journey. 
yield WaitForSeconds(readingTime-1);
speechBubble.GetComponent.<Renderer>().material = mat2;
speechBubble.transform.localPosition = Vector3(-98.05,16.37,72.27);
//pop up a bonus card
bonusCard1.GetComponent.<Animation>().Play("BonusOpen1");
bubbleText.text = "You will accrue bonuses along\n your journey.";

//To use a double move bonus just click it once to activate it. 
yield WaitForSeconds(readingTime-1);
bonusCard1.GetComponent.<Animation>().Play("BonusClose1");
bubbleText.text = "To use a double move bonus just \nclick it once to activate it.";

//The collected documents are stored here. Click one to review the description and question. 
yield WaitForSeconds(readingTime);
speechBubble.GetComponent.<Renderer>().material = mat1;
speechBubble.transform.localPosition = Vector3(-143,16.19,70.6);
bubbleText.text = "The collected documents are stored\n here. Click one to review\n the description and question.";

//Hovering over the 'i' symbol will reveal more information about that document. Click the document again to close it. 
yield WaitForSeconds(readingTime +1);
//bring up a document
docClick.GetComponent.<Renderer>().material = casMat;
docClick.GetComponent(InventoryClick).ForceUpTutorial();
speechBubble.transform.localPosition = Vector3(-127.1,13.1,41.3);
bubbleText.text = "Hovering over the 'i' symbol will \nreveal more information about \nthat document. Click the document again\nto close it.";

//Press escape to reach the pause menu.
yield WaitForSeconds(readingTime+1);
docClick.GetComponent.<Renderer>().material = emptyMat;
docClick.GetComponent(InventoryClick).ScaleBackHover();
speechBubble.transform.localPosition = Vector3(-120,14,50);
bubbleText.text = "Press escape to reach the pause menu.";

//See if you can complete with as few turns as possible!
yield WaitForSeconds(readingTime-1);
bubbleText.text = "See if you can complete with as \nfew turns as possible!";
yield WaitForSeconds(readingTime);
docClick.GetComponent(InventoryClick).mouseToggle = false;
closeButton.GetComponent.<Renderer>().enabled = false;
speechBubble.GetComponent.<Renderer>().enabled = false;
bubbleText.GetComponent.<Renderer>().enabled = false;
docQuestions.GetComponent(DocumentQuestion).FadeOutGrey();
docQuestions.GetComponent(DocumentQuestion).enable();


}