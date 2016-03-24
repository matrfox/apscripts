
public var stage = 1;

var currentStage : GameObject;
var nextStage : GameObject;

private var soundBank : GameObject;
private var soundSwitch = false;

//ENGLISH
var stage1_E_AllMat : Material;
var stage1_E_MdesMat : Material;
var stage1_E_BAMat : Material;
var stage1_E_FEMat : Material;
//NON ENGLISH
var stage1_NE_AllMat : Material;
var stage1_NE_MdesMat : Material;
var stage1_NE_BAMat : Material;
var stage1_NE_FEMat : Material;

var stage2Mat : Material;
var stage3Mat : Material;
var stage4Mat : Material;
var stage5Mat : Material;
var stage6Mat : Material;
var stage7Mat : Material;
//ENGLISH
var stage8_E_ParentMat : Material;
var stage8_E_SelfMat : Material;
//NON ENGLISH
var stage8_NE_ParentMat : Material;
var stage8_NE_SelfMat : Material;

var stage9Mat : Material;
var stage10Mat : Material;
var stage11Mat : Material;
var stage12Mat : Material;
var stage12PolMat : Material;

var playerInvent : GameObject;

var turnCounter : GameObject;

var docQuestion : GameObject;

var charStat : GameObject;

var successText : TextMesh;


var finishText : GameObject;

var gameCam : GameObject;



function Start(){
    stage = 1;
    soundBank = GameObject.Find("Sounds");
 } 
 
/*
Course Types
0 = none chosen
1 = MA
2 = MSc
3 = MDes
4 = BA
5 = BSc
6 = FE
*/ 
 
function SetStage(){
//ENGLISH
if (charStat.GetComponent(CharacterStats).englishSpeaking == true){
print("English Speaker");

if (charStat.GetComponent(CharacterStats).courseType == 1 || charStat.GetComponent(CharacterStats).courseType == 2){
//set to english all
nextStage.GetComponent.<Renderer>().material = stage1_E_AllMat;
}
if (charStat.GetComponent(CharacterStats).courseType == 3){
//set to english mdes
nextStage.GetComponent.<Renderer>().material = stage1_E_MdesMat;
}

if (charStat.GetComponent(CharacterStats).courseType == 4 || charStat.GetComponent(CharacterStats).courseType == 5){
//set to english BA
nextStage.GetComponent.<Renderer>().material = stage1_E_BAMat;
}

if (charStat.GetComponent(CharacterStats).courseType == 6){
//set to english FE
nextStage.GetComponent.<Renderer>().material = stage1_E_FEMat;
}

}
//NON ENGLISH
if (charStat.GetComponent(CharacterStats).englishSpeaking == false){
print("Non English Speaker");

if (charStat.GetComponent(CharacterStats).courseType == 1 || charStat.GetComponent(CharacterStats).courseType == 2){
//set to non english all
nextStage.GetComponent.<Renderer>().material = stage1_NE_AllMat;
}
if (charStat.GetComponent(CharacterStats).courseType == 3){
//set to non english mdes
nextStage.GetComponent.<Renderer>().material = stage1_NE_MdesMat;
}

if (charStat.GetComponent(CharacterStats).courseType == 4 || charStat.GetComponent(CharacterStats).courseType == 5){
//set to non english BA
nextStage.GetComponent.<Renderer>().material = stage1_NE_BAMat;
}

if (charStat.GetComponent(CharacterStats).courseType == 6){
//set to non english FE
nextStage.GetComponent.<Renderer>().material = stage1_NE_FEMat;
}

}
}
 
 //AREA TO CHANGE START CONDITIONS FOR STAGES BASED ON NEW RULE SETS
function Submit(){
    PlaySound();
if (stage==1){
//PLAYER START 
	 docQuestion.GetComponent(DocumentQuestion).disable();
	 	playerInvent.GetComponent(PlayerInvent).ClearTicks();
	 	 stage = 2;
		 
		 //nextStage animates and changes
		 nextStage.GetComponent.<Animation>().Play("StageNextWobble");
		 yield WaitForSeconds (0.2);
		 nextStage.GetComponent.<Renderer>().material = stage2Mat;
		 yield WaitForSeconds (0.2);
		 playerInvent.GetComponent(PlayerInvent).checkStage();
		 
		 yield WaitForSeconds(1);
		 
		 playerInvent.GetComponent(PlayerInvent).Assign();
	 }
else if (stage == 2){
print("stage 2 submission");
//ACKNOWLEDGEMENT
	 docQuestion.GetComponent(DocumentQuestion).disable();
	 	playerInvent.GetComponent(PlayerInvent).ClearTicks();
	 stage=3;
	 nextStage.GetComponent.<Animation>().Play("StageNextWobble");
	 yield WaitForSeconds (0.2);
	 nextStage.GetComponent.<Renderer>().material = stage3Mat;
	 yield WaitForSeconds (0.2);
	  playerInvent.GetComponent(PlayerInvent).checkStage();
	 yield WaitForSeconds(1);
	 docQuestion.GetComponent(DocumentQuestion).enable();	
	 playerInvent.GetComponent(PlayerInvent).Assign();
	 
	 }
else if (stage == 3){
//INTERVIEW
print("stage 3 submission");
	  docQuestion.GetComponent(DocumentQuestion).disable();
	 	playerInvent.GetComponent(PlayerInvent).ClearTicks();
		 stage = 4;
		 nextStage.GetComponent.<Animation>().Play("StageNextWobble");
		 yield WaitForSeconds (0.2);
		 nextStage.GetComponent.<Renderer>().material = stage4Mat;
		 yield WaitForSeconds (0.2);
		 playerInvent.GetComponent(PlayerInvent).checkStage();
		 yield WaitForSeconds(1);
		 //docQuestion.GetComponent(DocumentQuestion).enable();
		 playerInvent.GetComponent(PlayerInvent).Assign();
		 }
		 
	
else if (stage == 4){
//OFFER RESPONSE
	 docQuestion.GetComponent(DocumentQuestion).disable();
	 	playerInvent.GetComponent(PlayerInvent).ClearTicks();
	 stage=5;
	 nextStage.GetComponent.<Animation>().Play("StageNextWobble");
	 yield WaitForSeconds (0.2);
	 nextStage.GetComponent.<Renderer>().material = stage5Mat;
	 yield WaitForSeconds (0.2);
	 playerInvent.GetComponent(PlayerInvent).checkStage();
	 yield WaitForSeconds(1);
	 docQuestion.GetComponent(DocumentQuestion).enable();	
	 playerInvent.GetComponent(PlayerInvent).Assign();
	 } 
else if (stage == 5){
//COURSE ACCEPTANCE
	 docQuestion.GetComponent(DocumentQuestion).disable();
	 	playerInvent.GetComponent(PlayerInvent).ClearTicks();
	 stage=6;
	 nextStage.GetComponent.<Animation>().Play("StageNextWobble");
	 yield WaitForSeconds (0.2);
	 nextStage.GetComponent.<Renderer>().material = stage6Mat;
	 yield WaitForSeconds (0.2);
	 playerInvent.GetComponent(PlayerInvent).checkStage();
	 yield WaitForSeconds(1);
	 //docQuestion.GetComponent(DocumentQuestion).enable();	
	 playerInvent.GetComponent(PlayerInvent).Assign();
	 } 
else if (stage == 6){
//FEE PAYMENT
	 docQuestion.GetComponent(DocumentQuestion).disable();
	 	playerInvent.GetComponent(PlayerInvent).ClearTicks();
	 stage=7;
	 nextStage.GetComponent.<Animation>().Play("StageNextWobble");
	 yield WaitForSeconds (0.2);
	 nextStage.GetComponent.<Renderer>().material = stage7Mat;
	 yield WaitForSeconds (0.2);
	 playerInvent.GetComponent(PlayerInvent).checkStage();
	 yield WaitForSeconds(1);
	 //docQuestion.GetComponent(DocumentQuestion).enable();	
	 playerInvent.GetComponent(PlayerInvent).Assign();
	 print("assigning stage 7..");
	  } 
else if (stage == 7){
//CAS
	 docQuestion.GetComponent(DocumentQuestion).disable();
	 	playerInvent.GetComponent(PlayerInvent).ClearTicks();
	 stage=8;
	 nextStage.GetComponent.<Animation>().Play("StageNextWobble");
	 yield WaitForSeconds (0.2);
	 if (charStat.GetComponent(CharacterStats).englishSpeaking == true){
	 		if (charStat.GetComponent(CharacterStats).financeDependency == true){
	 		//ENGLISH OTHER
	 		nextStage.GetComponent.<Renderer>().material = stage8_E_ParentMat;
	 		}
	 		else {
	 		//ENGLISH SELF
	 		nextStage.GetComponent.<Renderer>().material = stage8_E_SelfMat;
	 		}
	 	}
	 	if (charStat.GetComponent(CharacterStats).englishSpeaking == false){
	 		if (charStat.GetComponent(CharacterStats).financeDependency == true){
	 		//NON ENGLISH OTHER
	 		nextStage.GetComponent.<Renderer>().material = stage8_NE_ParentMat;
	 		}
	 		else {
	 		//NON ENGLISH SELF
	 		nextStage.GetComponent.<Renderer>().material = stage8_NE_SelfMat;
	 		}
	 	}
	 yield WaitForSeconds (0.2);
	 playerInvent.GetComponent(PlayerInvent).checkStage();
	 yield WaitForSeconds(1);
	 docQuestion.GetComponent(DocumentQuestion).enable();
	 playerInvent.GetComponent(PlayerInvent).Assign();
	 } 
else if (stage == 8){
//VISA
	 docQuestion.GetComponent(DocumentQuestion).disable();
	 	playerInvent.GetComponent(PlayerInvent).ClearTicks();
	 stage=9;
	 nextStage.GetComponent.<Animation>().Play("StageNextWobble");
	 docQuestion.GetComponent(DocumentQuestion).enable();	
	 yield WaitForSeconds (0.2);
	 nextStage.GetComponent.<Renderer>().material = stage9Mat;
	 yield WaitForSeconds (0.2);
	 playerInvent.GetComponent(PlayerInvent).checkStage();
	 yield WaitForSeconds(1);
	 //docQuestion.GetComponent(DocumentQuestion).enable();	
	 playerInvent.GetComponent(PlayerInvent).Assign();
	 } 
else if (stage == 9){
//VISA APPROVAL
	 docQuestion.GetComponent(DocumentQuestion).disable();
	 	playerInvent.GetComponent(PlayerInvent).ClearTicks();
	 stage=10;
	 nextStage.GetComponent.<Animation>().Play("StageNextWobble");
	 yield WaitForSeconds (0.2);
	 nextStage.GetComponent.<Renderer>().material = stage10Mat;
	 yield WaitForSeconds (0.2);
	 playerInvent.GetComponent(PlayerInvent).checkStage();
	 yield WaitForSeconds(1);
	 docQuestion.GetComponent(DocumentQuestion).enable();
	 playerInvent.GetComponent(PlayerInvent).Assign();
	 } 
else if (stage == 10){
//FLIGHT/ACCOM
	 docQuestion.GetComponent(DocumentQuestion).disable();
	 	playerInvent.GetComponent(PlayerInvent).ClearTicks();
	 stage=11;
	 nextStage.GetComponent.<Animation>().Play("StageNextWobble");
	 yield WaitForSeconds (0.2);
	nextStage.GetComponent.<Renderer>().material = stage11Mat;
	 yield WaitForSeconds (0.2);
	 playerInvent.GetComponent(PlayerInvent).checkStage();
	 yield WaitForSeconds(1);
	 docQuestion.GetComponent(DocumentQuestion).enable();	
	 playerInvent.GetComponent(PlayerInvent).Assign();
	 } 
else if (stage == 11){
//GAME END - might want something more than just texture changes!
	 docQuestion.GetComponent(DocumentQuestion).disable();
	 	playerInvent.GetComponent(PlayerInvent).ClearTicks();
	 stage=12;
	 finishText.GetComponent(EndResult).GetResult();
	 gameCam.transform.localPosition.x = (-49.17727);
	 soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).winGame;
	 soundBank.GetComponent(AudioSource).Play();
	 
	 //yield WaitForSeconds(2);
	 //docQuestion.GetComponent(DocumentQuestion).enable();	
	 } 

 }
 //debug endgame
 var camToggle = false;
 function Update(){
     if (Input.GetKeyDown(KeyCode.Escape) && gameCam.GetComponent(Camera).enabled==true){
         if (camToggle==false){
             gameCam.transform.localPosition.y = (30.69582);
             camToggle=true;
         }
         else if (camToggle==true){
             gameCam.transform.localPosition.y = (0);
             camToggle=false;
         }
     }
 }

 function PlaySound(){
     if (soundSwitch == false){
         soundSwitch = true;
         soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).stageChange;
         soundBank.GetComponent(AudioSource).Play();
         yield WaitForSeconds(1);
         soundSwitch = false;
     }
 }