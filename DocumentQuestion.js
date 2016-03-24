//Grey Card fades in when answering a question
var greyCard : GameObject;
var frontCard : GameObject;
//variable to stop everything else while processing a question
public var docProcessing = false;
public var questionWait = false;
//The back text of the question card
var correctText : GameObject;
//Document materials
var accomMat : Material;
var birthMat : Material;
var persBankMat : Material;
var casMat : Material;
var confirmMat : Material;
var copyQualMat : Material;
var cvMat : Material;
var detailMat : Material;
var feeMat : Material;
var financeMat : Material;
var flightMat : Material;
var ieltsMat : Material;
var interviewMat : Material;
//var marriageMat : Material;
var offerMat : Material;
var passCopyMat : Material;
var passPhotoMat : Material;
var passportMat : Material;
var policeMat : Material;
var portfolioMat : Material;
var otherBankMat : Material;
var qualsMat : Material;
var referenceMat : Material;
var statementMat : Material;
var tbMat : Material;
var visaMat : Material;
var acknoMat : Material;
var offRespMat : Material;
var visaApproMat : Material;
var visaAplMat : Material;
var casAppMat : Material;
//Document Cards
var accomCard : GameObject;
var birthCard : GameObject;
var persBankCard : GameObject;
var casCard : GameObject;
var confirmCard : GameObject;
var copyQualCard : GameObject;
var cvCard : GameObject;
var detailCard : GameObject;
var feeCard : GameObject;
var financeCard : GameObject;
var flightCard : GameObject;
var ieltsCard : GameObject;
var interviewCard : GameObject;
//var marriageCard : GameObject;
var offerCard : GameObject;
var passCopyCard : GameObject;
var passPhotoCard : GameObject;
var passportCard : GameObject;
var policeCard : GameObject;
var portfolioCard : GameObject;
var otherBankCard :GameObject;
var qualsCard : GameObject;
var referenceCard : GameObject;
var statementCard : GameObject;
var tbCard : GameObject;
var visaCard : GameObject;
var visaAplCard : GameObject;

var score : GameObject;

var playerInventory : GameObject;

var correctButton : GameObject;
var wrongButton1 : GameObject;
var wrongButton2 : GameObject;
var wrongButton3 : GameObject;

private var soundBank : GameObject;
private var soundSwitch = false;

function Start(){
    soundBank = GameObject.Find("Sounds");
}

function PlaySound(){
    if (soundSwitch == false){
        soundSwitch = true;
        soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).cardFlip;
        soundBank.GetComponent(AudioSource).Play();
        yield WaitForSeconds(1);
        soundSwitch = false;
    }
}

//animates the card in, disables other actions
function docPickUp(){
	correctText.GetComponent.<Renderer>().enabled = false;
	disable();
	GetComponent.<Animation>().Play("QuestionCard_FlyIn");
	//fade in grey card
	FadeInGrey();
	PlaySound();
	yield WaitForSeconds(2);
}

function answerWrong(){
	GetComponent.<Animation>().Play("QuestionCard_Shake");
	
	score.GetComponent(TurnCounter).MinusScore();
}

function answerRight(){
	GetComponent.<Animation>().Play("QuestionCard_Flip");

	//fade out grey card
	FadeOutGrey();
	
	playerInventory.GetComponent(PlayerInvent).GetDoc();
	yield WaitForSeconds (0.2);
	score.GetComponent(TurnCounter).PlusScore();
	//correctText.renderer.enabled = true;
	yield WaitForSeconds(1.5);
	enable();
	//correctText.renderer.enabled = false;
}

function FadeInGrey(){
greyCard.GetComponent(GreyFade).FadeIn();
}

function FadeOutGrey(){
greyCard.GetComponent(GreyFade).FadeOut();
}

//not allow the bonus cards to raise
function disable(){
docProcessing = true;
}
//allow access to bonus cards again
function enable(){
docProcessing = false;
}

//change material for the question card and 'kill' the renderer for the area document card
//Also would be the place to alternate the answer locations (later)
function docAccom(){
frontCard.GetComponent.<Renderer>().material = accomMat;
accomCard.GetComponent.<Renderer>().enabled = false;
correctButton.transform.localPosition = Vector3(64,1.7,-47.3);
wrongButton1.transform.localPosition = Vector3(43,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(-250,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}

function docBirth(){
frontCard.GetComponent.<Renderer>().material = birthMat;
birthCard.GetComponent.<Renderer>().enabled = false;
correctButton.transform.localPosition = Vector3(43,1.7,-47.3);
wrongButton1.transform.localPosition = Vector3(64,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(-250,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}
function docPersBank(){
frontCard.GetComponent.<Renderer>().material = persBankMat;
persBankCard.GetComponent.<Renderer>().enabled = false;
correctButton.transform.localPosition = Vector3(54,1.7,-47.3); 
wrongButton1.transform.localPosition = Vector3(43,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(-250,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}

function docCas(){ 
frontCard.GetComponent.<Renderer>().material = casMat;
casCard.GetComponent.<Renderer>().enabled = false;
correctButton.transform.localPosition = Vector3(64,1.7,-47.3); 
wrongButton1.transform.localPosition = Vector3(54,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(-250,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}

function docCasApp(){
frontCard.GetComponent.<Renderer>().material = casAppMat;
//casAppCard.GetComponent.<Renderer>().enabled = false;
correctButton.transform.localPosition = Vector3(64,1.7,-47.3); 
wrongButton1.transform.localPosition = Vector3(43,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(-250,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}

function docConfirm(){
frontCard.GetComponent.<Renderer>().material = confirmMat;
confirmCard.GetComponent.<Renderer>().enabled = false;
correctButton.transform.localPosition = Vector3(43,1.7,-47.3);
wrongButton1.transform.localPosition = Vector3(64,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(32,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}

function docCopyQual(){
frontCard.GetComponent.<Renderer>().material = copyQualMat;
copyQualCard.GetComponent.<Renderer>().enabled = false;
correctButton.transform.localPosition = Vector3(54,1.7,-47.3);
wrongButton1.transform.localPosition = Vector3(32,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(-250,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}
function docCv(){
frontCard.GetComponent.<Renderer>().material = cvMat;
cvCard.GetComponent.<Renderer>().enabled = false;
correctButton.transform.localPosition = Vector3(43,1.7,-47.3);
wrongButton1.transform.localPosition = Vector3(74,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(-250,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}

function docDetail(){
frontCard.GetComponent.<Renderer>().material = detailMat;
detailCard.GetComponent.<Renderer>().enabled = false;
correctButton.transform.localPosition = Vector3(43,1.7,-47.3);
wrongButton1.transform.localPosition = Vector3(54,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(-250,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}
function docFeePay(){
frontCard.GetComponent.<Renderer>().material = feeMat;
feeCard.GetComponent.<Renderer>().enabled = false;
correctButton.transform.localPosition = Vector3(43,1.7,-47.3);
wrongButton1.transform.localPosition = Vector3(32,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(54,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(64,1.7,-47.3);
}

function docFinance(){
frontCard.GetComponent.<Renderer>().material = financeMat;
financeCard.GetComponent.<Renderer>().enabled = false;
correctButton.transform.localPosition = Vector3(54,1.7,-47.3);
wrongButton1.transform.localPosition = Vector3(32,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(74,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}
function docFlight(){
frontCard.GetComponent.<Renderer>().material = flightMat;
flightCard.GetComponent.<Renderer>().enabled = false;
correctButton.transform.localPosition = Vector3(54,1.7,-47.3);
wrongButton1.transform.localPosition = Vector3(32,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(-250,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}

function docIelts(){
frontCard.GetComponent.<Renderer>().material = ieltsMat;
ieltsCard.GetComponent.<Renderer>().enabled = false;
correctButton.transform.localPosition = Vector3(43,1.7,-47.3);
wrongButton1.transform.localPosition = Vector3(64,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(-250,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}
function docInterview(){ 
frontCard.GetComponent.<Renderer>().material = interviewMat;
interviewCard.GetComponent.<Renderer>().enabled = false;
correctButton.transform.localPosition = Vector3(54,1.7,-47.3); 
wrongButton1.transform.localPosition = Vector3(32,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(-250,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}

/*function docMarriage(){
frontCard.renderer.material = marriageMat;
marriageCard.renderer.enabled = false;
correctButton.transform.localPosition = Vector3(0,1.7,-47.3);
wrongButton1.transform.localPosition = Vector3(0,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(-250,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}*/
function docOffer(){ 
frontCard.GetComponent.<Renderer>().material = offerMat;
offerCard.GetComponent.<Renderer>().enabled = false;
correctButton.transform.localPosition = Vector3(32,1.7,-47.3); 
wrongButton1.transform.localPosition = Vector3(64,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(-250,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}

function docPassCopy(){
frontCard.GetComponent.<Renderer>().material = passCopyMat;
passCopyCard.GetComponent.<Renderer>().enabled = false;
correctButton.transform.localPosition = Vector3(64,1.7,-47.3);
wrongButton1.transform.localPosition = Vector3(32,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(-250,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}
function docPassPhoto(){
frontCard.GetComponent.<Renderer>().material = passPhotoMat;
passPhotoCard.GetComponent.<Renderer>().enabled = false;
correctButton.transform.localPosition = Vector3(43,1.7,-47.3);
wrongButton1.transform.localPosition = Vector3(32,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(74,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}

function docPassport(){
frontCard.GetComponent.<Renderer>().material = passportMat;
passportCard.GetComponent.<Renderer>().enabled = false;
correctButton.transform.localPosition = Vector3(54,1.7,-47.3);
wrongButton1.transform.localPosition = Vector3(43,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(-250,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}
function docPolice(){
frontCard.GetComponent(Renderer).material = policeMat;
policeCard.GetComponent(Renderer).enabled = false;
correctButton.transform.localPosition = Vector3(43,1.7,-47.3);
wrongButton1.transform.localPosition = Vector3(64,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(-250,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}

function docPortfolio(){
frontCard.GetComponent.<Renderer>().material = portfolioMat;
portfolioCard.GetComponent.<Renderer>().enabled = false;
correctButton.transform.localPosition = Vector3(64,1.7,-47.3);
wrongButton1.transform.localPosition = Vector3(43,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(-250,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}

function docOtherBank(){
    frontCard.GetComponent.<Renderer>().material = otherBankMat;
    otherBankCard.GetComponent.<Renderer>().enabled = false;
    correctButton.transform.localPosition = Vector3(54,1.7,-47.3);
    wrongButton1.transform.localPosition = Vector3(43,1.7,-47.3);
    wrongButton2.transform.localPosition = Vector3(64,1.7,-47.3);
    wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}

function docQuals(){
frontCard.GetComponent.<Renderer>().material = qualsMat;
qualsCard.GetComponent.<Renderer>().enabled = false;
correctButton.transform.localPosition = Vector3(43,1.7,-47.3);
wrongButton1.transform.localPosition = Vector3(32,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(-250,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}
function docReference(){
frontCard.GetComponent.<Renderer>().material = referenceMat;
referenceCard.GetComponent.<Renderer>().enabled = false;
correctButton.transform.localPosition = Vector3(64,1.7,-47.3);
wrongButton1.transform.localPosition = Vector3(54,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(43,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(32,1.7,-47.3);
}

function docStatement(){
frontCard.GetComponent.<Renderer>().material = statementMat;
statementCard.GetComponent.<Renderer>().enabled = false;
correctButton.transform.localPosition = Vector3(54,1.7,-47.3);
wrongButton1.transform.localPosition = Vector3(43,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(-250,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}

function docTb(){
    frontCard.GetComponent.<Renderer>().material = tbMat;
    tbCard.GetComponent.<Renderer>().enabled = false;
    correctButton.transform.localPosition = Vector3(43,1.7,-47.3);
    wrongButton1.transform.localPosition = Vector3(32,1.7,-47.3);
    wrongButton2.transform.localPosition = Vector3(64,1.7,-47.3);
    wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}

function docVisa(){
frontCard.GetComponent.<Renderer>().material = visaMat;
visaCard.GetComponent.<Renderer>().enabled = false;
correctButton.transform.localPosition = Vector3(43,1.7,-47.3);
wrongButton1.transform.localPosition = Vector3(64,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(74,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}

function docAckno(){ 
frontCard.GetComponent.<Renderer>().material = acknoMat;
//acknoCard.GetComponent.<Renderer>().enabled = false;
correctButton.transform.localPosition = Vector3(43,1.7,-47.3);
wrongButton1.transform.localPosition = Vector3(54,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(64,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}


function docOffResp(){
frontCard.GetComponent.<Renderer>().material = offRespMat;
correctButton.transform.localPosition = Vector3(32,1.7,-47.3);
wrongButton1.transform.localPosition = Vector3(64,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(-250,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}

function docVisaAppro(){
frontCard.GetComponent.<Renderer>().material = visaApproMat;
correctButton.transform.localPosition = Vector3(43,1.7,-47.3);
wrongButton1.transform.localPosition = Vector3(64,1.7,-47.3);
wrongButton2.transform.localPosition = Vector3(-250,1.7,-47.3);
wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}

function docVisaApl(){
    frontCard.GetComponent.<Renderer>().material = visaAplMat;
    visaAplCard.GetComponent.<Renderer>().enabled = false;
    correctButton.transform.localPosition = Vector3(43,1.7,-47.3);
    wrongButton1.transform.localPosition = Vector3(64,1.7,-47.3);
    wrongButton2.transform.localPosition = Vector3(74,1.7,-47.3);
    wrongButton3.transform.localPosition = Vector3(-250,1.7,-47.3);
}

function ReturnDocs(){
 accomCard.GetComponent.<Renderer>().enabled = true;
 birthCard.GetComponent.<Renderer>().enabled = true;
 persBankCard.GetComponent.<Renderer>().enabled = true;
 casCard.GetComponent.<Renderer>().enabled = true;
 confirmCard.GetComponent.<Renderer>().enabled = true;
 copyQualCard.GetComponent.<Renderer>().enabled = true;
 cvCard.GetComponent.<Renderer>().enabled = true;
 detailCard.GetComponent.<Renderer>().enabled = true;
 feeCard.GetComponent.<Renderer>().enabled = true;
 financeCard.GetComponent.<Renderer>().enabled = true;
 flightCard.GetComponent.<Renderer>().enabled = true;
 ieltsCard.GetComponent.<Renderer>().enabled = true;
 interviewCard.GetComponent.<Renderer>().enabled = true;
 //marriageCard.renderer.enabled = false;
 offerCard.GetComponent.<Renderer>().enabled = true;
 passCopyCard.GetComponent.<Renderer>().enabled = true;
 passPhotoCard.GetComponent.<Renderer>().enabled = true;
 passportCard.GetComponent.<Renderer>().enabled = true;
 policeCard.GetComponent(Renderer).enabled = true;
 portfolioCard.GetComponent.<Renderer>().enabled = true;
 otherBankCard.GetComponent(Renderer).enabled = true;
 qualsCard.GetComponent.<Renderer>().enabled = true;
 referenceCard.GetComponent.<Renderer>().enabled = true;
 statementCard.GetComponent.<Renderer>().enabled = true;
 tbCard.GetComponent.<Renderer>().enabled = true;
 visaCard.GetComponent.<Renderer>().enabled = true;
 visaAplCard.GetComponent.<Renderer>().enabled = true;
}

