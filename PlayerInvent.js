//changed by the AreaClick.js to allow the document
public var haveAccom = false;
public var haveBirth = false;
public var havePersBank = false;
public var haveCas = false;
public var haveConfirm = false;
public var haveCopyQual = false;
public var haveCv = false;
public var haveDetail = false;
public var haveFee = false;
public var haveFinance = false;
public var haveFlight = false;
public var haveIelts = false;
public var haveInterview = false;
public var haveOffer = false;
public var havePassCopy = false;
public var havePassPhoto = false;
public var havePassport = false;
public var havePortfolio = false;
public var havePolice = false;
public var haveOtherBank = false;
public var haveQuals = false;
public var haveReference = false;
public var haveStatement = false;
public var haveTb = false;
public var haveVisa = false;
public var haveCasApp = false;
public var haveVisaApl = false;


//To make sure the next document is ordered
var Doc1 : GameObject;
var Doc2 : GameObject;
var Doc3 : GameObject;
var Doc4 : GameObject;
var Doc5 : GameObject;
var Doc6 : GameObject;
var Doc7 : GameObject;
var Doc8 : GameObject;
var Doc9 : GameObject;
var Doc10 : GameObject;
var Doc11 : GameObject;
var Doc12 : GameObject;
var Doc13 : GameObject;
var Doc14 : GameObject;
var Doc15 : GameObject;
var Doc16 : GameObject;
var Doc17 : GameObject;
var Doc18 : GameObject;
var Doc19 : GameObject;
var Doc20 : GameObject;

//document materials
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
var visaAplMat : Material;
var casAppMat : Material;
//empty doc material
var emptyMat : Material;
//the next document to be changed in the player inventory
public var nextDoc : GameObject;
//whether we have already processed the document
public var accomCollected = false;
public var birthCollected = false;
public var persBankCollected = false;
public var casCollected = false;
public var confirmCollected = false;
public var copyQualCollected = false;
public var cvCollected = false;
public var detailCollected = false;
public var feeCollected = false;
public var financeCollected = false;
public var flightCollected = false;
public var ieltsCollected = false;
public var interviewCollected = false;
public var offerCollected = false;
public var passCopyCollected = false;
public var passPhotoCollected = false;
public var passportCollected = false;
public var portfolioCollected = false;
public var policeCollected = false;
public var otherBankCollected = false;
public var qualsCollected = false;
public var referenceCollected = false;
public var statementCollected = false;
public var tbCollected = false;
public var visaCollected = false;
public var casAppCollected = false;
public var visaAplCollected = false;

var tick1 : GameObject;
var tick2 : GameObject;
var tick3 : GameObject;
var tick4 : GameObject;
var tick5 : GameObject;
var tick6 : GameObject;
var tick7 : GameObject;
var tick8 : GameObject;
var tick9 : GameObject;

var submit : GameObject;

var helpText : TextMesh;

var docQuestion : GameObject;

var area1 : GameObject;
var area2 : GameObject;
var area3 : GameObject;
var area4 : GameObject;
var area5 : GameObject;
var area6 : GameObject;
var area7 : GameObject;
var area8 : GameObject;
var areaSubmit : GameObject;


var charStats : GameObject;

private var soundBank : GameObject;
private var soundSwitch = false;

function Start(){
    soundBank = GameObject.Find("Sounds");
}

function StartAreaQuantity(){
	area1.GetComponent(AreaClick).SetStartStage();
	area2.GetComponent(AreaClick).SetStartStage();
	area3.GetComponent(AreaClick).SetStartStage();
	area4.GetComponent(AreaClick).SetStartStage();
	area5.GetComponent(AreaClick).SetStartStage();
	area6.GetComponent(AreaClick).SetStartStage();
	area7.GetComponent(AreaClick).SetStartStage();
	area8.GetComponent(AreaClick).SetStartStage();
	areaSubmit.GetComponent(AreaClick).SetStartStage();

}

function ResetInventory(){

		 Doc1.GetComponent.<Renderer>().material = emptyMat;
		 Doc2.GetComponent.<Renderer>().material = emptyMat;
		 Doc3.GetComponent.<Renderer>().material = emptyMat;
		 Doc4.GetComponent.<Renderer>().material = emptyMat;
		 Doc5.GetComponent.<Renderer>().material = emptyMat;
		 Doc6.GetComponent.<Renderer>().material = emptyMat;
		 Doc7.GetComponent.<Renderer>().material = emptyMat;
		 Doc8.GetComponent.<Renderer>().material = emptyMat;
		 Doc9.GetComponent.<Renderer>().material = emptyMat;
		 Doc10.GetComponent.<Renderer>().material = emptyMat;
		 Doc11.GetComponent.<Renderer>().material = emptyMat;
		 Doc12.GetComponent.<Renderer>().material = emptyMat;
		 Doc13.GetComponent.<Renderer>().material = emptyMat;
		 Doc14.GetComponent.<Renderer>().material = emptyMat;
		 Doc15.GetComponent.<Renderer>().material = emptyMat;
		 Doc16.GetComponent.<Renderer>().material = emptyMat;
		 Doc17.GetComponent.<Renderer>().material = emptyMat;
		 Doc18.GetComponent.<Renderer>().material = emptyMat;
		 Doc19.GetComponent.<Renderer>().material = emptyMat;
		 Doc20.GetComponent.<Renderer>().material = emptyMat;
		 }
		 
function ClearTicks(){
		 //reset the ticks
		 tick1.GetComponent(MeshRenderer).enabled = false;
		 tick2.GetComponent(MeshRenderer).enabled = false;
		 tick3.GetComponent(MeshRenderer).enabled = false;
		 tick4.GetComponent(MeshRenderer).enabled = false;
		 tick5.GetComponent(MeshRenderer).enabled = false;
		 tick6.GetComponent(MeshRenderer).enabled = false;
		 tick7.GetComponent(MeshRenderer).enabled = false;
		 tick8.GetComponent(MeshRenderer).enabled = false;
		 
}

function PlaySound(){
    if (soundSwitch == false){
        soundSwitch = true;
        soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).inventoryAdd;
        soundBank.GetComponent(AudioSource).Play();
        yield WaitForSeconds(1);
        soundSwitch = false;
    }
}

function CheckCharStats(){
	//ONLY NEEDED ON CERTAIN STAGES
		 
		 //if english speaking 
		 if (charStats.GetComponent(CharacterStats).englishSpeaking == true){
		 //remove eng lang
		 docQuestion.GetComponent(DocumentQuestion).docIelts();
		 haveIelts = true;
		 ieltsCollected = true;
		 print("IELTS REMOVED");
		 }
		 
		 if (charStats.GetComponent(CharacterStats).financeDependency == false){
		 //remove birth and remove finance
		 docQuestion.GetComponent(DocumentQuestion).docBirth();
		 docQuestion.GetComponent(DocumentQuestion).docFinance();
		 docQuestion.GetComponent(DocumentQuestion).docOtherBank();
		 haveBirth = true;
		 birthCollected = true;
		 haveFinance = true;
		 financeCollected = true;
		 haveOtherBank = true;
		 otherBankCollected = true;
		 print("BIRTH & FINANCES REMOVED");
		 }
		 
		  if (charStats.GetComponent(CharacterStats).financeDependency == true){
		 //remove personal bank
		 docQuestion.GetComponent(DocumentQuestion).docPersBank();
		 havePersBank = true;
		 persBankCollected = true;
		 print("PERS BANK REMOVED");
		 }
		 
		 if (charStats.GetComponent(CharacterStats).courseType == 3 || charStats.GetComponent(CharacterStats).courseType == 6){
		 //remove portfolio for MDes and FE
		 docQuestion.GetComponent(DocumentQuestion).docPortfolio();
		 havePortfolio = true;
		 portfolioCollected = true;
		 print("PORTFOLIO REMOVED");
		 }
		 
		 if (charStats.GetComponent(CharacterStats).courseType == 5 || charStats.GetComponent(CharacterStats).courseType == 6 || charStats.GetComponent(CharacterStats).courseType == 4){
		 //remove CV for BA, BSC, FE
		 docQuestion.GetComponent(DocumentQuestion).docCv();
		 haveCv = true;
		 cvCollected = true;
		 print("CV REMOVED");
		 }
	}

//THIS IS WHERE TO CHANGE THE START STATES FOR STAGES BASED ON NEW RULE SETS
function checkStage (){
	//ready the conditions for each stage.
	if (submit.GetComponent(SubmitDocument).stage==1){
		print("starting stage 1");
		areaSubmit.GetComponent(AreaClick).DocText.GetComponent(MeshRenderer).enabled = false;
		//Switch these on to avoid 'picking them' as they are not visible. 
		//What should not be available, has already been collected. 
	
	
		haveAccom = true;
		haveBirth = true;
		havePersBank = true;
		haveCas = true;
		haveConfirm = true;
		//haveCopyQual = true;
		//haveCv = true;
		//haveDetail = true;
		haveFee = true;
		haveFinance = true;
		haveFlight = true;
		//haveIelts = true;
		haveInterview = true;
		haveOffer = true;
		//havePassCopy = true;
		havePassPhoto = true;
		havePassport = true;
	    //havePortfolio = true;
		havePolice = true;
		haveOtherBank = true;
		haveQuals = true;
		//haveReference = true;
	    //haveStatement = true;
		haveTb = true;
		haveVisa = true;
		haveVisaApl = true;
		haveCasApp = true;
		
	//----------------------------------
		accomCollected = true;
		birthCollected = true;
		persBankCollected = true;
		casCollected = true;
		confirmCollected = true;
		//copyQualCollected = true;
		//cvCollected = true;
		//detailCollected = true;
		feeCollected = true;
		financeCollected = true;
		flightCollected = true;
		//ieltsCollected = true;
		interviewCollected = true;
		offerCollected = true;
		//passCopyCollected = true;
		passPhotoCollected = true;
		passportCollected = true;
	    //portfolioCollected = true;
		policeCollected = true;
		otherBankCollected = true;
		qualsCollected = true;
		//referenceCollected = true;
	    //statementCollected = true;
		tbCollected = true;
		visaCollected = true;
		visaAplCollected = true;
		casAppCollected = true;
		
	//--------------------------------------
		 docQuestion.GetComponent(DocumentQuestion).docAccom();
		 docQuestion.GetComponent(DocumentQuestion).docBirth();
		 docQuestion.GetComponent(DocumentQuestion).docPersBank();
		 docQuestion.GetComponent(DocumentQuestion).docCas();
		 docQuestion.GetComponent(DocumentQuestion).docConfirm();
		// docQuestion.GetComponent(DocumentQuestion).docCopyQual();
		// docQuestion.GetComponent(DocumentQuestion).docCv();
		// docQuestion.GetComponent(DocumentQuestion).docDetail();
		 docQuestion.GetComponent(DocumentQuestion).docFeePay();
		 docQuestion.GetComponent(DocumentQuestion).docFinance();
		 docQuestion.GetComponent(DocumentQuestion).docFlight();
		// docQuestion.GetComponent(DocumentQuestion).docIelts();
		 docQuestion.GetComponent(DocumentQuestion).docInterview();
		 docQuestion.GetComponent(DocumentQuestion).docOffer();
		// docQuestion.GetComponent(DocumentQuestion).docPassCopy();
		 docQuestion.GetComponent(DocumentQuestion).docPassPhoto();
		 docQuestion.GetComponent(DocumentQuestion).docPassport();
	    // docQuestion.GetComponent(DocumentQuestion).docPortfolio();
		 docQuestion.GetComponent(DocumentQuestion).docPolice();
		 docQuestion.GetComponent(DocumentQuestion).docOtherBank();
		 docQuestion.GetComponent(DocumentQuestion).docQuals();
		// docQuestion.GetComponent(DocumentQuestion).docReference();
	    // docQuestion.GetComponent(DocumentQuestion).docStatement();
	     docQuestion.GetComponent(DocumentQuestion).docTb();
	     docQuestion.GetComponent(DocumentQuestion).docVisa(); 
	     docQuestion.GetComponent(DocumentQuestion).docVisaApl(); 
		 
		 //STARTING RULES
		 //Only removes based on character stats
		 CheckCharStats();
	}
	//STAGE 2
	else if (submit.GetComponent(SubmitDocument).stage == 2){
	print ("Stage 2");
	areaSubmit.GetComponent(AreaClick).DocText.GetComponent(Renderer).enabled = false;
	docQuestion.GetComponent(DocumentQuestion).ReturnDocs();
	
		docQuestion.GetComponent(DocumentQuestion).docAccom();
		docQuestion.GetComponent(DocumentQuestion).docBirth();
		docQuestion.GetComponent(DocumentQuestion).docPersBank();
		docQuestion.GetComponent(DocumentQuestion).docCas();
		docQuestion.GetComponent(DocumentQuestion).docConfirm();
		docQuestion.GetComponent(DocumentQuestion).docCopyQual();
		docQuestion.GetComponent(DocumentQuestion).docCv();
		docQuestion.GetComponent(DocumentQuestion).docDetail();
		docQuestion.GetComponent(DocumentQuestion).docFeePay();
		docQuestion.GetComponent(DocumentQuestion).docFinance();
		docQuestion.GetComponent(DocumentQuestion).docFlight();
		docQuestion.GetComponent(DocumentQuestion).docIelts();
		docQuestion.GetComponent(DocumentQuestion).docInterview();
		docQuestion.GetComponent(DocumentQuestion).docOffer();
		docQuestion.GetComponent(DocumentQuestion).docPassCopy();
		docQuestion.GetComponent(DocumentQuestion).docPassPhoto();
		docQuestion.GetComponent(DocumentQuestion).docPassport();
		docQuestion.GetComponent(DocumentQuestion).docPortfolio();
		docQuestion.GetComponent(DocumentQuestion).docPolice();
		docQuestion.GetComponent(DocumentQuestion).docOtherBank();
		docQuestion.GetComponent(DocumentQuestion).docQuals();
		docQuestion.GetComponent(DocumentQuestion).docReference();
		docQuestion.GetComponent(DocumentQuestion).docStatement();
		docQuestion.GetComponent(DocumentQuestion).docTb();
		docQuestion.GetComponent(DocumentQuestion).docVisa(); 
		docQuestion.GetComponent(DocumentQuestion).docVisaApl(); 
		 
		 //RESET INVENTORY
		 ResetInventory();
		 
		//CARDS THAT ARE UNAVAILABLE = TRUE 
		 
		haveAccom = true;
		haveBirth = true;
		havePersBank = true;
		haveCas = true;
		haveConfirm = true;
		haveCopyQual = true;
		haveCv = true;
		haveDetail = true;
		haveFee = true;
		haveFinance = true;
		haveFlight = true;
		haveIelts = true;
		haveInterview = true;
		haveOffer = true;
		havePassCopy = true;
		havePassPhoto = true;
		havePassport = true;
		havePortfolio = true;
		havePolice = true;
		haveOtherBank = true;
		haveQuals = true;
		haveReference = true;
		haveStatement = true;
		haveTb = true;
		haveVisa = true;
		haveVisaApl = true;
		haveCasApp = true;
		 
		
		accomCollected = true;
		birthCollected = true;
		persBankCollected = true;
		casCollected = true;
		confirmCollected = true;
		copyQualCollected = true;
		cvCollected = true;
		detailCollected = true;
		feeCollected = true;
		financeCollected = true;
		flightCollected = true;
		ieltsCollected = true;
		interviewCollected = true;
		offerCollected = true;
		passCopyCollected = true;
		passPhotoCollected = true;
		passportCollected = true;
		portfolioCollected = true;
		policeCollected = true;
		otherBankCollected = true;
		qualsCollected = true;
		referenceCollected = true;
		statementCollected = true;
		tbCollected = true;
		visaCollected = true;
		visaAplCollected = true;
		casAppCollected = true;
		
		
		 //RESET DOCUMENT PICKUP QUANTITY IN AREAS
		 area1.GetComponent(AreaClick).ResetDocQuantity();
		 area2.GetComponent(AreaClick).ResetDocQuantity();
		 area3.GetComponent(AreaClick).ResetDocQuantity();
		 area4.GetComponent(AreaClick).ResetDocQuantity();
		 area5.GetComponent(AreaClick).ResetDocQuantity();
		 area6.GetComponent(AreaClick).ResetDocQuantity();
		 area7.GetComponent(AreaClick).ResetDocQuantity();
		 area8.GetComponent(AreaClick).ResetDocQuantity();
		 
		 
		 docQuestion.GetComponent(DocumentQuestion).docAckno();
		 docQuestion.GetComponent(DocumentQuestion).docPickUp();
		 
	
	}
	
	
	else if (submit.GetComponent(SubmitDocument).stage == 3){
	print ("Stage 3");
	areaSubmit.GetComponent(AreaClick).DocText.GetComponent(Renderer).enabled = false;
	docQuestion.GetComponent(DocumentQuestion).ReturnDocs();
	
		// CARDS THAT ARE AVAILABLE = FALSE HERE
		haveInterview = false;
		interviewCollected = false;
		
		 
		//MAKES INVISIBLE CARDS THAT ARE UNAVAILABLE (THESE MUST MATCH SECTION ABOVE) 
		 
		docQuestion.GetComponent(DocumentQuestion).docAccom();
		docQuestion.GetComponent(DocumentQuestion).docBirth();
		docQuestion.GetComponent(DocumentQuestion).docPersBank();
		docQuestion.GetComponent(DocumentQuestion).docCas();
		docQuestion.GetComponent(DocumentQuestion).docConfirm();
		docQuestion.GetComponent(DocumentQuestion).docCopyQual();
		docQuestion.GetComponent(DocumentQuestion).docCv();
		docQuestion.GetComponent(DocumentQuestion).docDetail();
		docQuestion.GetComponent(DocumentQuestion).docFeePay();
		docQuestion.GetComponent(DocumentQuestion).docFinance();
		docQuestion.GetComponent(DocumentQuestion).docFlight();
		docQuestion.GetComponent(DocumentQuestion).docIelts();
		//docQuestion.GetComponent(DocumentQuestion).docInterview();
		docQuestion.GetComponent(DocumentQuestion).docOffer();
		docQuestion.GetComponent(DocumentQuestion).docPassCopy();
		docQuestion.GetComponent(DocumentQuestion).docPassPhoto();
		docQuestion.GetComponent(DocumentQuestion).docPassport();
		docQuestion.GetComponent(DocumentQuestion).docPortfolio();
		docQuestion.GetComponent(DocumentQuestion).docPolice();
		docQuestion.GetComponent(DocumentQuestion).docOtherBank();
		docQuestion.GetComponent(DocumentQuestion).docQuals();
		docQuestion.GetComponent(DocumentQuestion).docReference();
		docQuestion.GetComponent(DocumentQuestion).docStatement();
		docQuestion.GetComponent(DocumentQuestion).docTb();
		docQuestion.GetComponent(DocumentQuestion).docVisa(); 
		docQuestion.GetComponent(DocumentQuestion).docVisaApl(); 
		 
		 //RESET INVENTORY
		 ResetInventory();
		 
		//CARDS THAT ARE UNAVAILABLE = TRUE 
		 
		haveAccom = true;
		haveBirth = true;
		havePersBank = true;
		haveCas = true;
		haveConfirm = true;
		haveCopyQual = true;
		haveCv = true;
		haveDetail = true;
		haveFee = true;
		haveFinance = true;
		haveFlight = true;
		haveIelts = true;
		//haveInterview = true;
		haveOffer = true;
		havePassCopy = true;
		havePassPhoto = true;
		havePassport = true;
		havePortfolio = true;
		havePolice = true;
		haveOtherBank = true;
		haveQuals = true;
		haveReference = true;
		haveStatement = true;
		haveTb = true;
		haveVisa = true;
		haveVisaApl = true;
		haveCasApp = true;
		
		
		accomCollected = true;
		birthCollected = true;
		persBankCollected = true;
		casCollected = true;
		confirmCollected = true;
		copyQualCollected = true;
		cvCollected = true;
		detailCollected = true;
		feeCollected = true;
		financeCollected = true;
		flightCollected = true;
		ieltsCollected = true;
		//interviewCollected = true;
		offerCollected = true;
		passCopyCollected = true;
		passPhotoCollected = true;
		passportCollected = true;
		portfolioCollected = true;
		policeCollected = true;
		otherBankCollected = true;
		qualsCollected = true;
		referenceCollected = true;
		statementCollected = true;
		tbCollected = true;
		visaCollected = true;
		visaAplCollected = true;
		casAppCollected = true;
		
		
		 //RESET DOCUMENT PICKUP QUANTITY IN AREAS
		 area1.GetComponent(AreaClick).ResetDocQuantity();
		 area2.GetComponent(AreaClick).ResetDocQuantity();
		 area3.GetComponent(AreaClick).ResetDocQuantity();
		 area4.GetComponent(AreaClick).ResetDocQuantity();
		 area5.GetComponent(AreaClick).ResetDocQuantity();
		 area6.GetComponent(AreaClick).ResetDocQuantity();
		 area7.GetComponent(AreaClick).ResetDocQuantity();
		 area8.GetComponent(AreaClick).ResetDocQuantity();
		 
		
	}
	
	else if (submit.GetComponent(SubmitDocument).stage == 4){
	print ("Stage 4");
	areaSubmit.GetComponent(AreaClick).DocText.GetComponent(Renderer).enabled = false;
	docQuestion.GetComponent(DocumentQuestion).ReturnDocs();
		 
		docQuestion.GetComponent(DocumentQuestion).docAccom();
		docQuestion.GetComponent(DocumentQuestion).docBirth();
		docQuestion.GetComponent(DocumentQuestion).docPersBank();
		docQuestion.GetComponent(DocumentQuestion).docCas();
		docQuestion.GetComponent(DocumentQuestion).docConfirm();
		docQuestion.GetComponent(DocumentQuestion).docCopyQual();
		docQuestion.GetComponent(DocumentQuestion).docCv();
		docQuestion.GetComponent(DocumentQuestion).docDetail();
		docQuestion.GetComponent(DocumentQuestion).docFeePay();
		docQuestion.GetComponent(DocumentQuestion).docFinance();
		docQuestion.GetComponent(DocumentQuestion).docFlight();
		docQuestion.GetComponent(DocumentQuestion).docIelts();
		docQuestion.GetComponent(DocumentQuestion).docInterview();
		docQuestion.GetComponent(DocumentQuestion).docOffer();
		docQuestion.GetComponent(DocumentQuestion).docPassCopy();
		docQuestion.GetComponent(DocumentQuestion).docPassPhoto();
		docQuestion.GetComponent(DocumentQuestion).docPassport();
		docQuestion.GetComponent(DocumentQuestion).docPortfolio();
		docQuestion.GetComponent(DocumentQuestion).docPolice();
		docQuestion.GetComponent(DocumentQuestion).docOtherBank();
		docQuestion.GetComponent(DocumentQuestion).docQuals();
		docQuestion.GetComponent(DocumentQuestion).docReference();
		docQuestion.GetComponent(DocumentQuestion).docStatement();
		docQuestion.GetComponent(DocumentQuestion).docTb();
		docQuestion.GetComponent(DocumentQuestion).docVisa(); 
		docQuestion.GetComponent(DocumentQuestion).docVisaApl(); 
		 
		 //RESET INVENTORY
		 ResetInventory();
		 
		 //RESET DOCUMENT PICKUP QUANTITY IN AREAS
		 area1.GetComponent(AreaClick).ResetDocQuantity();
		 area2.GetComponent(AreaClick).ResetDocQuantity();
		 area3.GetComponent(AreaClick).ResetDocQuantity();
		 area4.GetComponent(AreaClick).ResetDocQuantity();
		 area5.GetComponent(AreaClick).ResetDocQuantity();
		 area6.GetComponent(AreaClick).ResetDocQuantity();
		 area7.GetComponent(AreaClick).ResetDocQuantity();
		 area8.GetComponent(AreaClick).ResetDocQuantity();
		 
		  docQuestion.GetComponent(DocumentQuestion).docOffResp();
		 docQuestion.GetComponent(DocumentQuestion).docPickUp();
		 
	}
	
	else if (submit.GetComponent(SubmitDocument).stage == 5){
	print ("Stage 5");
	areaSubmit.GetComponent(AreaClick).DocText.GetComponent(Renderer).enabled = false;
	docQuestion.GetComponent(DocumentQuestion).ReturnDocs();
	
		// CARDS THAT ARE AVAILABLE = FALSE HERE
	
		haveConfirm = false;
		confirmCollected = false;
		 
		//MAKES INVISIBLE CARDS THAT ARE UNAVAILABLE (THESE MUST MATCH SECTION ABOVE) 
		 
		docQuestion.GetComponent(DocumentQuestion).docAccom();
		docQuestion.GetComponent(DocumentQuestion).docBirth();
		docQuestion.GetComponent(DocumentQuestion).docPersBank();
		docQuestion.GetComponent(DocumentQuestion).docCas();
		//docQuestion.GetComponent(DocumentQuestion).docConfirm();
		docQuestion.GetComponent(DocumentQuestion).docCopyQual();
		docQuestion.GetComponent(DocumentQuestion).docCv();
		docQuestion.GetComponent(DocumentQuestion).docDetail();
		docQuestion.GetComponent(DocumentQuestion).docFeePay();
		docQuestion.GetComponent(DocumentQuestion).docFinance();
		docQuestion.GetComponent(DocumentQuestion).docFlight();
		docQuestion.GetComponent(DocumentQuestion).docIelts();
		docQuestion.GetComponent(DocumentQuestion).docInterview();
		docQuestion.GetComponent(DocumentQuestion).docOffer();
		docQuestion.GetComponent(DocumentQuestion).docPassCopy();
		docQuestion.GetComponent(DocumentQuestion).docPassPhoto();
		docQuestion.GetComponent(DocumentQuestion).docPassport();
		docQuestion.GetComponent(DocumentQuestion).docPortfolio();
		docQuestion.GetComponent(DocumentQuestion).docPolice();
		docQuestion.GetComponent(DocumentQuestion).docOtherBank();
		docQuestion.GetComponent(DocumentQuestion).docQuals();
		docQuestion.GetComponent(DocumentQuestion).docReference();
		docQuestion.GetComponent(DocumentQuestion).docStatement();
		docQuestion.GetComponent(DocumentQuestion).docTb();
		docQuestion.GetComponent(DocumentQuestion).docVisa(); 
		docQuestion.GetComponent(DocumentQuestion).docVisaApl(); 
		 
		 //RESET INVENTORY
		 ResetInventory();
		 
		//CARDS THAT ARE UNAVAILABLE = TRUE 
		 
		
		
		 //RESET DOCUMENT PICKUP QUANTITY IN AREAS
		 area1.GetComponent(AreaClick).ResetDocQuantity();
		 area2.GetComponent(AreaClick).ResetDocQuantity();
		 area3.GetComponent(AreaClick).ResetDocQuantity();
		 area4.GetComponent(AreaClick).ResetDocQuantity();
		 area5.GetComponent(AreaClick).ResetDocQuantity();
		 area6.GetComponent(AreaClick).ResetDocQuantity();
		 area7.GetComponent(AreaClick).ResetDocQuantity();
		 area8.GetComponent(AreaClick).ResetDocQuantity();
		 
		
	}
	
	else if (submit.GetComponent(SubmitDocument).stage == 6){
	print ("Stage 6");
	areaSubmit.GetComponent(AreaClick).DocText.GetComponent(Renderer).enabled = false;
	docQuestion.GetComponent(DocumentQuestion).ReturnDocs();
	
		// CARDS THAT ARE AVAILABLE = FALSE HERE
	
		
		haveFee = false;
		haveCasApp = false;
		
		feeCollected = false;
		casAppCollected = false;
		
		//MAKES INVISIBLE CARDS THAT ARE UNAVAILABLE (THESE MUST MATCH SECTION ABOVE) 
		 
		docQuestion.GetComponent(DocumentQuestion).docAccom();
		docQuestion.GetComponent(DocumentQuestion).docBirth();
		docQuestion.GetComponent(DocumentQuestion).docPersBank();
		docQuestion.GetComponent(DocumentQuestion).docCas();
		docQuestion.GetComponent(DocumentQuestion).docConfirm();
		docQuestion.GetComponent(DocumentQuestion).docCopyQual();
		docQuestion.GetComponent(DocumentQuestion).docCv();
		docQuestion.GetComponent(DocumentQuestion).docDetail();
		//docQuestion.GetComponent(DocumentQuestion).docFeePay();
		docQuestion.GetComponent(DocumentQuestion).docFinance();
		docQuestion.GetComponent(DocumentQuestion).docFlight();
		docQuestion.GetComponent(DocumentQuestion).docIelts();
		docQuestion.GetComponent(DocumentQuestion).docInterview();
		docQuestion.GetComponent(DocumentQuestion).docOffer();
		docQuestion.GetComponent(DocumentQuestion).docPassCopy();
		docQuestion.GetComponent(DocumentQuestion).docPassPhoto();
		docQuestion.GetComponent(DocumentQuestion).docPassport();
		docQuestion.GetComponent(DocumentQuestion).docPortfolio();
		docQuestion.GetComponent(DocumentQuestion).docPolice();
		docQuestion.GetComponent(DocumentQuestion).docOtherBank();
		docQuestion.GetComponent(DocumentQuestion).docQuals();
		docQuestion.GetComponent(DocumentQuestion).docReference();
		docQuestion.GetComponent(DocumentQuestion).docStatement();
		docQuestion.GetComponent(DocumentQuestion).docTb();
		docQuestion.GetComponent(DocumentQuestion).docVisa(); 
		docQuestion.GetComponent(DocumentQuestion).docVisaApl(); 
		 
		 //RESET INVENTORY
		 ResetInventory();
		 
		
		 //RESET DOCUMENT PICKUP QUANTITY IN AREAS
		 area1.GetComponent(AreaClick).ResetDocQuantity();
		 area2.GetComponent(AreaClick).ResetDocQuantity();
		 area3.GetComponent(AreaClick).ResetDocQuantity();
		 area4.GetComponent(AreaClick).ResetDocQuantity();
		 area5.GetComponent(AreaClick).ResetDocQuantity();
		 area6.GetComponent(AreaClick).ResetDocQuantity();
		 area7.GetComponent(AreaClick).ResetDocQuantity();
		 area8.GetComponent(AreaClick).ResetDocQuantity();
		 
		 docQuestion.GetComponent(DocumentQuestion).docCasApp();
		 docQuestion.GetComponent(DocumentQuestion).docPickUp();
		 haveCasApp = true;
		 
		
	}
	
	else if (submit.GetComponent(SubmitDocument).stage == 7){
	print ("Stage 7");
	areaSubmit.GetComponent(AreaClick).DocText.GetComponent(Renderer).enabled = false;
	docQuestion.GetComponent(DocumentQuestion).ReturnDocs();
	
		docQuestion.GetComponent(DocumentQuestion).docAccom();
		docQuestion.GetComponent(DocumentQuestion).docBirth();
		docQuestion.GetComponent(DocumentQuestion).docPersBank();
		docQuestion.GetComponent(DocumentQuestion).docCas();
		docQuestion.GetComponent(DocumentQuestion).docConfirm();
		docQuestion.GetComponent(DocumentQuestion).docCopyQual();
		docQuestion.GetComponent(DocumentQuestion).docCv();
		docQuestion.GetComponent(DocumentQuestion).docDetail();
		docQuestion.GetComponent(DocumentQuestion).docFeePay();
		docQuestion.GetComponent(DocumentQuestion).docFinance();
		docQuestion.GetComponent(DocumentQuestion).docFlight();
		docQuestion.GetComponent(DocumentQuestion).docIelts();
		docQuestion.GetComponent(DocumentQuestion).docInterview();
		docQuestion.GetComponent(DocumentQuestion).docOffer();
		docQuestion.GetComponent(DocumentQuestion).docPassCopy();
		docQuestion.GetComponent(DocumentQuestion).docPassPhoto();
		docQuestion.GetComponent(DocumentQuestion).docPassport();
		docQuestion.GetComponent(DocumentQuestion).docPortfolio();
		docQuestion.GetComponent(DocumentQuestion).docPolice();
		docQuestion.GetComponent(DocumentQuestion).docOtherBank();
		docQuestion.GetComponent(DocumentQuestion).docQuals();
		docQuestion.GetComponent(DocumentQuestion).docReference();
		docQuestion.GetComponent(DocumentQuestion).docStatement();
		docQuestion.GetComponent(DocumentQuestion).docTb();
		docQuestion.GetComponent(DocumentQuestion).docVisa(); 
		docQuestion.GetComponent(DocumentQuestion).docVisaApl(); 
		 
		 //RESET INVENTORY
		 ResetInventory();
		 
		 //RESET DOCUMENT PICKUP QUANTITY IN AREAS
		 area1.GetComponent(AreaClick).ResetDocQuantity();
		 area2.GetComponent(AreaClick).ResetDocQuantity();
		 area3.GetComponent(AreaClick).ResetDocQuantity();
		 area4.GetComponent(AreaClick).ResetDocQuantity();
		 area5.GetComponent(AreaClick).ResetDocQuantity();
		 area6.GetComponent(AreaClick).ResetDocQuantity();
		 area7.GetComponent(AreaClick).ResetDocQuantity();
		 area8.GetComponent(AreaClick).ResetDocQuantity();
		 
		  docQuestion.GetComponent(DocumentQuestion).docCas();
		 docQuestion.GetComponent(DocumentQuestion).docPickUp();
		 
		
	}
	
	else if (submit.GetComponent(SubmitDocument).stage == 8){
	print ("Stage 8");
	areaSubmit.GetComponent(AreaClick).DocText.GetComponent(Renderer).enabled = false;
	docQuestion.GetComponent(DocumentQuestion).ReturnDocs();
	
		// CARDS THAT ARE AVAILABLE = FALSE HERE
	
		
		haveBirth = false;
		havePersBank = false;
		haveCas = false;
		haveFinance = false;
		havePassPhoto = false;
		havePassport = false;
		haveVisaApl = false;
		haveTb = false;
		haveOtherBank = false;
		haveIelts = false;
		
		birthCollected = false;
		persBankCollected = false;
		casCollected = false;
		financeCollected = false;
		passPhotoCollected = false;
		passportCollected = false;
		visaAplCollected = false;
		tbCollected = false;
		otherBankCollected = false;
		ieltsCollected = false;
		 
		//MAKES INVISIBLE CARDS THAT ARE UNAVAILABLE (THESE MUST MATCH SECTION ABOVE) 
		 
		docQuestion.GetComponent(DocumentQuestion).docAccom();
		//docQuestion.GetComponent(DocumentQuestion).docBirth();
		//docQuestion.GetComponent(DocumentQuestion).docPersBank();
		//docQuestion.GetComponent(DocumentQuestion).docCas();
		docQuestion.GetComponent(DocumentQuestion).docConfirm();
		docQuestion.GetComponent(DocumentQuestion).docCopyQual();
		docQuestion.GetComponent(DocumentQuestion).docCv();
		docQuestion.GetComponent(DocumentQuestion).docDetail();
		docQuestion.GetComponent(DocumentQuestion).docFeePay();
		//docQuestion.GetComponent(DocumentQuestion).docFinance();
		docQuestion.GetComponent(DocumentQuestion).docFlight();
		//docQuestion.GetComponent(DocumentQuestion).docIelts();
		docQuestion.GetComponent(DocumentQuestion).docInterview();
		docQuestion.GetComponent(DocumentQuestion).docOffer();
		docQuestion.GetComponent(DocumentQuestion).docPassCopy();
		//docQuestion.GetComponent(DocumentQuestion).docPassPhoto();
		//docQuestion.GetComponent(DocumentQuestion).docPassport();
		docQuestion.GetComponent(DocumentQuestion).docPortfolio();
		docQuestion.GetComponent(DocumentQuestion).docPolice();
		//docQuestion.GetComponent(DocumentQuestion).docOtherBank();
		docQuestion.GetComponent(DocumentQuestion).docQuals();
		docQuestion.GetComponent(DocumentQuestion).docReference();
		docQuestion.GetComponent(DocumentQuestion).docStatement();
		//docQuestion.GetComponent(DocumentQuestion).docTb();
		docQuestion.GetComponent(DocumentQuestion).docVisa(); 
		//docQuestion.GetComponent(DocumentQuestion).docVisaApl(); 
		 
		 //RESET INVENTORY
		 ResetInventory();
		 
		//CARDS THAT ARE UNAVAILABLE = TRUE 
		 
		haveAccom = true;
		
		haveConfirm = true;
		haveCopyQual = true;
		haveCv = true;
		haveDetail = true;
		haveFee = true;
		haveFlight = true;
		//haveIelts = true;
		haveInterview = true;
		haveOffer = true;
		havePassCopy = true;
		havePortfolio = true;
		havePolice = true;
		haveQuals = true;
		haveReference = true;
		haveStatement = true;
		haveVisa = true;
		haveCasApp = true;
		
		
		accomCollected = true;
		confirmCollected = true;
		copyQualCollected = true;
		cvCollected = true;
		detailCollected = true;
		feeCollected = true;
		flightCollected = true;
		//ieltsCollected = true;
		interviewCollected = true;
		offerCollected = true;
		passCopyCollected = true;
		policeCollected = true;
		portfolioCollected = true;
		qualsCollected = true;
		referenceCollected = true;
		statementCollected = true;
		visaCollected = true;
		casAppCollected = true;
		
		
		 //RESET DOCUMENT PICKUP QUANTITY IN AREAS
		 area1.GetComponent(AreaClick).ResetDocQuantity();
		 area2.GetComponent(AreaClick).ResetDocQuantity();
		 area3.GetComponent(AreaClick).ResetDocQuantity();
		 area4.GetComponent(AreaClick).ResetDocQuantity();
		 area5.GetComponent(AreaClick).ResetDocQuantity();
		 area6.GetComponent(AreaClick).ResetDocQuantity();
		 area7.GetComponent(AreaClick).ResetDocQuantity();
		 area8.GetComponent(AreaClick).ResetDocQuantity();
		 
		 CheckCharStats();
		
	}
	
	else if (submit.GetComponent(SubmitDocument).stage == 9){
	print ("Stage 9");
	areaSubmit.GetComponent(AreaClick).DocText.GetComponent(Renderer).enabled = false;
	docQuestion.GetComponent(DocumentQuestion).ReturnDocs();
	
		docQuestion.GetComponent(DocumentQuestion).docAccom();
		docQuestion.GetComponent(DocumentQuestion).docBirth();
		docQuestion.GetComponent(DocumentQuestion).docPersBank();
		docQuestion.GetComponent(DocumentQuestion).docCas();
		docQuestion.GetComponent(DocumentQuestion).docConfirm();
		docQuestion.GetComponent(DocumentQuestion).docCopyQual();
		docQuestion.GetComponent(DocumentQuestion).docCv();
		docQuestion.GetComponent(DocumentQuestion).docDetail();
		docQuestion.GetComponent(DocumentQuestion).docFeePay();
		docQuestion.GetComponent(DocumentQuestion).docFinance();
		docQuestion.GetComponent(DocumentQuestion).docFlight();
		docQuestion.GetComponent(DocumentQuestion).docIelts();
		docQuestion.GetComponent(DocumentQuestion).docInterview();
		docQuestion.GetComponent(DocumentQuestion).docOffer();
		docQuestion.GetComponent(DocumentQuestion).docPassCopy();
		docQuestion.GetComponent(DocumentQuestion).docPassPhoto();
		docQuestion.GetComponent(DocumentQuestion).docPassport();
		docQuestion.GetComponent(DocumentQuestion).docPortfolio();
		docQuestion.GetComponent(DocumentQuestion).docPolice();
		docQuestion.GetComponent(DocumentQuestion).docOtherBank();
		docQuestion.GetComponent(DocumentQuestion).docQuals();
		docQuestion.GetComponent(DocumentQuestion).docReference();
		docQuestion.GetComponent(DocumentQuestion).docStatement();
		docQuestion.GetComponent(DocumentQuestion).docTb();
		docQuestion.GetComponent(DocumentQuestion).docVisa(); 
		docQuestion.GetComponent(DocumentQuestion).docVisaApl(); 
		 
		 //RESET INVENTORY
		 ResetInventory();
		 
		 //RESET DOCUMENT PICKUP QUANTITY IN AREAS
		 area1.GetComponent(AreaClick).ResetDocQuantity();
		 area2.GetComponent(AreaClick).ResetDocQuantity();
		 area3.GetComponent(AreaClick).ResetDocQuantity();
		 area4.GetComponent(AreaClick).ResetDocQuantity();
		 area5.GetComponent(AreaClick).ResetDocQuantity();
		 area6.GetComponent(AreaClick).ResetDocQuantity();
		 area7.GetComponent(AreaClick).ResetDocQuantity();
		 area8.GetComponent(AreaClick).ResetDocQuantity();
		 
		  docQuestion.GetComponent(DocumentQuestion).docVisaAppro();
		 docQuestion.GetComponent(DocumentQuestion).docPickUp();
		 
		
	}
	
	else if (submit.GetComponent(SubmitDocument).stage == 10){
	print ("Stage 10");
	areaSubmit.GetComponent(AreaClick).DocText.GetComponent(Renderer).enabled = false;
	docQuestion.GetComponent(DocumentQuestion).ReturnDocs();
	
		// CARDS THAT ARE AVAILABLE = FALSE HERE
	
		haveAccom = false;
		
		haveFlight = false;
		
		accomCollected = false;
		
		flightCollected = false;
		
		 
		//MAKES INVISIBLE CARDS THAT ARE UNAVAILABLE (THESE MUST MATCH SECTION ABOVE) 
		 
		//docQuestion.GetComponent(DocumentQuestion).docAccom();
		docQuestion.GetComponent(DocumentQuestion).docBirth();
		docQuestion.GetComponent(DocumentQuestion).docPersBank();
		docQuestion.GetComponent(DocumentQuestion).docCas();
		docQuestion.GetComponent(DocumentQuestion).docConfirm();
		docQuestion.GetComponent(DocumentQuestion).docCopyQual();
		docQuestion.GetComponent(DocumentQuestion).docCv();
		docQuestion.GetComponent(DocumentQuestion).docDetail();
		docQuestion.GetComponent(DocumentQuestion).docFeePay();
		docQuestion.GetComponent(DocumentQuestion).docFinance();
		//docQuestion.GetComponent(DocumentQuestion).docFlight();
		docQuestion.GetComponent(DocumentQuestion).docIelts();
		docQuestion.GetComponent(DocumentQuestion).docInterview();
		docQuestion.GetComponent(DocumentQuestion).docOffer();
		docQuestion.GetComponent(DocumentQuestion).docPassCopy();
		docQuestion.GetComponent(DocumentQuestion).docPassPhoto();
		docQuestion.GetComponent(DocumentQuestion).docPassport();
		docQuestion.GetComponent(DocumentQuestion).docPortfolio();
		docQuestion.GetComponent(DocumentQuestion).docPolice();
		docQuestion.GetComponent(DocumentQuestion).docOtherBank();
		docQuestion.GetComponent(DocumentQuestion).docQuals();
		docQuestion.GetComponent(DocumentQuestion).docReference();
		docQuestion.GetComponent(DocumentQuestion).docStatement();
		docQuestion.GetComponent(DocumentQuestion).docTb();
		docQuestion.GetComponent(DocumentQuestion).docVisa(); 
		docQuestion.GetComponent(DocumentQuestion).docVisaApl(); 
		 
		 //RESET INVENTORY
		 ResetInventory();
		 
		//CARDS THAT ARE UNAVAILABLE = TRUE 
		 
		//haveAccom = true;
		haveBirth = true;
		havePersBank = true;
		haveCas = true;
		haveConfirm = true;
		haveCopyQual = true;
		haveCv = true;
		haveDetail = true;
		haveFee = true;
		haveFinance = true;
		//haveFlight = true;
		haveIelts = true;
		haveInterview = true;
		haveOffer = true;
		havePassCopy = true;
		havePassPhoto = true;
		havePassport = true;
		havePortfolio = true;
		havePolice = true;
		haveOtherBank = true;
		haveQuals = true;
		haveReference = true;
		haveStatement = true;
		haveTb = true;
		haveVisa = true;
		haveVisaApl = true;
		haveCasApp = true;
		
		
		//accomCollected = true;
		birthCollected = true;
		persBankCollected = true;
		casCollected = true;
		confirmCollected = true;
		copyQualCollected = true;
		cvCollected = true;
		detailCollected = true;
		feeCollected = true;
		financeCollected = true;
		//flightCollected = true;
		ieltsCollected = true;
		interviewCollected = true;
		offerCollected = true;
		passCopyCollected = true;
		passPhotoCollected = true;
		passportCollected = true;
		portfolioCollected = true;
		policeCollected = true;
		otherBankCollected = true;
		qualsCollected = true;
		referenceCollected = true;
		statementCollected = true;
		tbCollected = true;
		visaCollected = true;
		visaAplCollected = true;
		casAppCollected = true;
		
		
		 //RESET DOCUMENT PICKUP QUANTITY IN AREAS
		 area1.GetComponent(AreaClick).ResetDocQuantity();
		 area2.GetComponent(AreaClick).ResetDocQuantity();
		 area3.GetComponent(AreaClick).ResetDocQuantity();
		 area4.GetComponent(AreaClick).ResetDocQuantity();
		 area5.GetComponent(AreaClick).ResetDocQuantity();
		 area6.GetComponent(AreaClick).ResetDocQuantity();
		 area7.GetComponent(AreaClick).ResetDocQuantity();
		 area8.GetComponent(AreaClick).ResetDocQuantity();
		 
		
	}
	
	else if (submit.GetComponent(SubmitDocument).stage == 11){
	print ("Stage 11");
	areaSubmit.GetComponent(AreaClick).DocText.GetComponent(Renderer).enabled = false;
	docQuestion.GetComponent(DocumentQuestion).ReturnDocs();
	
		// CARDS THAT ARE AVAILABLE = FALSE HERE
	
		
		haveQuals = false;
		haveVisa = false;
		havePolice = false;
		
		policeCollected = false;
		qualsCollected = false;
		visaCollected = false;
		 
		//MAKES INVISIBLE CARDS THAT ARE UNAVAILABLE (THESE MUST MATCH SECTION ABOVE) 
		 
		docQuestion.GetComponent(DocumentQuestion).docAccom();
		docQuestion.GetComponent(DocumentQuestion).docBirth();
		docQuestion.GetComponent(DocumentQuestion).docPersBank();
		docQuestion.GetComponent(DocumentQuestion).docCas();
		docQuestion.GetComponent(DocumentQuestion).docConfirm();
		docQuestion.GetComponent(DocumentQuestion).docCopyQual();
		docQuestion.GetComponent(DocumentQuestion).docCv();
		docQuestion.GetComponent(DocumentQuestion).docDetail();
		docQuestion.GetComponent(DocumentQuestion).docFeePay();
		docQuestion.GetComponent(DocumentQuestion).docFinance();
		docQuestion.GetComponent(DocumentQuestion).docFlight();
		docQuestion.GetComponent(DocumentQuestion).docIelts();
		docQuestion.GetComponent(DocumentQuestion).docInterview();
		docQuestion.GetComponent(DocumentQuestion).docOffer();
		docQuestion.GetComponent(DocumentQuestion).docPassCopy();
		docQuestion.GetComponent(DocumentQuestion).docPassPhoto();
		docQuestion.GetComponent(DocumentQuestion).docPassport();
		docQuestion.GetComponent(DocumentQuestion).docPortfolio();
	    //docQuestion.GetComponent(DocumentQuestion).docPolice();
		docQuestion.GetComponent(DocumentQuestion).docOtherBank();
		//docQuestion.GetComponent(DocumentQuestion).docQuals();
		docQuestion.GetComponent(DocumentQuestion).docReference();
		docQuestion.GetComponent(DocumentQuestion).docStatement();
		docQuestion.GetComponent(DocumentQuestion).docTb();
	    //docQuestion.GetComponent(DocumentQuestion).docVisa(); 
		docQuestion.GetComponent(DocumentQuestion).docVisaApl(); 
		 
		 //RESET INVENTORY
		 ResetInventory();
		 
		//CARDS THAT ARE UNAVAILABLE = TRUE 
		 
		haveAccom = true;
		haveBirth = true;
		havePersBank = true;
		haveCas = true;
		haveConfirm = true;
		haveCopyQual = true;
		haveCv = true;
		haveDetail = true;
		haveFee = true;
		haveFinance = true;
		haveFlight = true;
		haveIelts = true;
		haveInterview = true;
		haveOffer = true;
		havePassCopy = true;
		havePassPhoto = true;
		havePassport = true;
		havePortfolio = true;
	    //havePolice = true;
		haveOtherBank = true;
		//haveQuals = true;
		haveReference = true;
		haveStatement = true;
		haveTb = true;
	    //haveVisa = true;
		haveVisaApl = true;
		haveCasApp = true;
		
		
		accomCollected = true;
		birthCollected = true;
		persBankCollected = true;
		casCollected = true;
		confirmCollected = true;
		copyQualCollected = true;
		cvCollected = true;
		detailCollected = true;
		feeCollected = true;
		financeCollected = true;
		flightCollected = true;
		ieltsCollected = true;
		interviewCollected = true;
		offerCollected = true;
		passCopyCollected = true;
		passPhotoCollected = true;
		passportCollected = true;
		portfolioCollected = true;
	    //policeCollected = true;
		otherBankCollected = true;
		//qualsCollected = true;
		referenceCollected = true;
		statementCollected = true;
		tbCollected = true;
	    //visaCollected = true;
		visaAplCollected = true;
		casAppCollected = true;
		
		
		 //RESET DOCUMENT PICKUP QUANTITY IN AREAS
		 area1.GetComponent(AreaClick).ResetDocQuantity();
		 area2.GetComponent(AreaClick).ResetDocQuantity();
		 area3.GetComponent(AreaClick).ResetDocQuantity();
		 area4.GetComponent(AreaClick).ResetDocQuantity();
		 area5.GetComponent(AreaClick).ResetDocQuantity();
		 area6.GetComponent(AreaClick).ResetDocQuantity();
		 area7.GetComponent(AreaClick).ResetDocQuantity();
		 area8.GetComponent(AreaClick).ResetDocQuantity();
		 
		
	}
	}
	
		 


//orders which player inventory card gets replaced/changed
function GetDoc(){
	if (Doc1.GetComponent.<Renderer>().sharedMaterial == emptyMat)nextDoc = Doc1;
	else if (Doc2.GetComponent.<Renderer>().sharedMaterial == emptyMat) nextDoc = Doc2;
	else if (Doc3.GetComponent.<Renderer>().sharedMaterial == emptyMat) nextDoc = Doc3;
	else if (Doc4.GetComponent.<Renderer>().sharedMaterial == emptyMat) nextDoc = Doc4;
	else if (Doc5.GetComponent.<Renderer>().sharedMaterial == emptyMat) nextDoc = Doc5;
	else if (Doc6.GetComponent.<Renderer>().sharedMaterial == emptyMat) nextDoc = Doc6;
	else if (Doc7.GetComponent.<Renderer>().sharedMaterial == emptyMat) nextDoc = Doc7;
	else if (Doc8.GetComponent.<Renderer>().sharedMaterial == emptyMat) nextDoc = Doc8;
	else if (Doc9.GetComponent.<Renderer>().sharedMaterial == emptyMat) nextDoc = Doc9;
	else if (Doc10.GetComponent.<Renderer>().sharedMaterial == emptyMat) nextDoc = Doc10;
	else if (Doc11.GetComponent.<Renderer>().sharedMaterial == emptyMat) nextDoc = Doc11;
	else if (Doc12.GetComponent.<Renderer>().sharedMaterial == emptyMat) nextDoc = Doc12;
	else if (Doc13.GetComponent.<Renderer>().sharedMaterial == emptyMat) nextDoc = Doc13;
	else if (Doc14.GetComponent.<Renderer>().sharedMaterial == emptyMat) nextDoc = Doc14;
	else if (Doc15.GetComponent.<Renderer>().sharedMaterial == emptyMat) nextDoc = Doc15;
	else if (Doc16.GetComponent.<Renderer>().sharedMaterial == emptyMat) nextDoc = Doc16;
	else if (Doc17.GetComponent.<Renderer>().sharedMaterial == emptyMat) nextDoc = Doc17;
	else if (Doc18.GetComponent.<Renderer>().sharedMaterial == emptyMat) nextDoc = Doc18;
	else if (Doc19.GetComponent.<Renderer>().sharedMaterial == emptyMat) nextDoc = Doc19;
	else if (Doc20.GetComponent.<Renderer>().sharedMaterial == emptyMat) nextDoc = Doc20;
Assign();
}

//checks and assigns the new material
function Assign(){
    print("Assigning");
    var helpChild1 = GameObject.Find("SubmitText/Arrow1");
    var helpChild2 = GameObject.Find("SubmitText/Arrow2");

    //SPECIAL
    if (haveCasApp==true && casAppCollected == false){
        print("CasApp"); 
        casAppCollected = true;
        yield WaitForSeconds(1);PlaySound();
        nextDoc.GetComponent.<Renderer>().material = casAppMat;
        yield WaitForSeconds(0.25);
         soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();   
        tick2.GetComponent(MeshRenderer).enabled = true;
    }	

    if (haveAccom==true && accomCollected == false){
        print("Accommadation"); 
        accomCollected = true;
        yield WaitForSeconds(1);PlaySound();
	
        nextDoc.GetComponent.<Renderer>().material = accomMat;
        yield WaitForSeconds(0.25);
         soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
        tick2.GetComponent(MeshRenderer).enabled = true;
    }	
    if (haveBirth==true && birthCollected == false){
        print("Birth"); 
        birthCollected = true;
        yield WaitForSeconds(1);PlaySound();
	
        nextDoc.GetComponent.<Renderer>().material = birthMat;
        yield WaitForSeconds(0.25);
         soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
        tick7.GetComponent(MeshRenderer).enabled = true;
    }
    if (havePersBank==true && persBankCollected == false){
        print("Pers Bank"); 
        persBankCollected = true;
        yield WaitForSeconds(1);PlaySound();
	
        nextDoc.GetComponent.<Renderer>().material = persBankMat;
        yield WaitForSeconds(0.25);
         soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
        tick6.GetComponent(MeshRenderer).enabled = true;
    }
    if (haveCas==true && casCollected == false){
        print("CAS"); 
        casCollected = true;
        yield WaitForSeconds(1);PlaySound();
	
        nextDoc.GetComponent.<Renderer>().material = casMat;
        yield WaitForSeconds(0.25);
         soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
        tick3.GetComponent(MeshRenderer).enabled = true;
    }
    if (haveConfirm==true && confirmCollected == false){
        print("Confirm"); 
        confirmCollected = true;
        yield WaitForSeconds(1);PlaySound();
	
        nextDoc.GetComponent.<Renderer>().material = confirmMat;
        yield WaitForSeconds(0.25);
         soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
        tick1.GetComponent(MeshRenderer).enabled = true;
    }
    if (haveCopyQual==true && copyQualCollected == false){
        print("Copy Quals"); 
        copyQualCollected = true;
        yield WaitForSeconds(1);PlaySound(); 
	
        nextDoc.GetComponent.<Renderer>().material = copyQualMat;
        yield WaitForSeconds(0.25);
         soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
        tick1.GetComponent(MeshRenderer).enabled = true;
    }
    if (haveCv==true && cvCollected == false){
        print("CV"); 
        cvCollected = true;
        yield WaitForSeconds(1);PlaySound(); 
	
        nextDoc.GetComponent.<Renderer>().material = cvMat;
        if (charStats.GetComponent(CharacterStats).englishSpeaking == true){
            if (charStats.GetComponent(CharacterStats).courseType == 1 || charStats.GetComponent(CharacterStats).courseType == 2 || charStats.GetComponent(CharacterStats).courseType == 3){
                yield WaitForSeconds(0.25);
                 soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
                tick6.GetComponent(MeshRenderer).enabled = true;
            }
        }
        else {
            if (charStats.GetComponent(CharacterStats).courseType == 3){
                yield WaitForSeconds(0.25);
                 soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
                tick7.GetComponent(MeshRenderer).enabled = true;
            }
            else {
                yield WaitForSeconds(0.25);
                 soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
                tick8.GetComponent(MeshRenderer).enabled = true;
            }
        }
    }
    if (haveDetail==true && detailCollected == false){
        print("Detail"); 
        detailCollected = true;
        yield WaitForSeconds(1);PlaySound();
	
        nextDoc.GetComponent.<Renderer>().material = detailMat;
        yield WaitForSeconds(0.25);
         soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
        tick3.GetComponent(MeshRenderer).enabled = true;
    }
    if (haveFee==true && feeCollected == false){
        print("fee"); 
        feeCollected = true;
        yield WaitForSeconds(1);PlaySound();
	
        nextDoc.GetComponent.<Renderer>().material = feeMat;
        yield WaitForSeconds(0.25);
         soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
        tick1.GetComponent(MeshRenderer).enabled = true;
    }
    if (haveFinance==true && financeCollected == false){
        print("finance"); 
        financeCollected = true;
        yield WaitForSeconds(1);PlaySound();
	
        nextDoc.GetComponent.<Renderer>().material = financeMat;
        yield WaitForSeconds(0.25);
         soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
        tick6.GetComponent(MeshRenderer).enabled = true;
    }
    if (haveFlight==true && flightCollected == false){
        print("flight"); 
        flightCollected = true;
        yield WaitForSeconds(1);PlaySound();
	
        nextDoc.GetComponent.<Renderer>().material = flightMat;
        yield WaitForSeconds(0.25);
         soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
        tick3.GetComponent(MeshRenderer).enabled = true;
    }
    if (haveIelts==true && ieltsCollected == false){
        print("IELTS"); 
        ieltsCollected = true;
        yield WaitForSeconds(1);PlaySound();
	
        nextDoc.GetComponent.<Renderer>().material = ieltsMat;
		
        if (submit.GetComponent(SubmitDocument).stage == 1){
            yield WaitForSeconds(0.25);
             soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
            tick6.GetComponent(MeshRenderer).enabled = true;
        }
        if (submit.GetComponent(SubmitDocument).stage == 8){
            if (charStats.GetComponent(CharacterStats).financeDependency == true){
                yield WaitForSeconds(0.25);
                 soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
                tick8.GetComponent(MeshRenderer).enabled = true;
            }
            else {
                yield WaitForSeconds(0.25);
                 soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
                tick7.GetComponent(MeshRenderer).enabled = true;
            }
        }
    }
    if (haveInterview==true && interviewCollected == false){
        print("Interview"); 
        interviewCollected = true;
        yield WaitForSeconds(1);PlaySound();
	
        nextDoc.GetComponent.<Renderer>().material = interviewMat;
        yield WaitForSeconds(0.25);
         soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
        tick1.GetComponent(MeshRenderer).enabled = true;
    }
    /*if (haveMarriage==true && marriageCollected == false){
	print("Marriage"); 
	yield WaitForSeconds(1);
	marriageCollected = true;
	nextDoc.renderer.material = marriageMat;
	}*/
    if (haveOffer==true && offerCollected == false){
        print("Offer"); 
        offerCollected = true;
        yield WaitForSeconds(1);PlaySound();
	
        nextDoc.GetComponent.<Renderer>().material = offerMat;
    }
    if (haveOtherBank==true && otherBankCollected == false){
        print("Other Bank"); 
        otherBankCollected = true;
        yield WaitForSeconds(1);PlaySound();
	  
        nextDoc.GetComponent.<Renderer>().material = otherBankMat;
        yield WaitForSeconds(0.25);
         soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
        tick9.GetComponent(MeshRenderer).enabled = true;
    }
    if (havePassCopy==true && passCopyCollected == false){
        print("Pass Copy"); 
        passCopyCollected = true;
        yield WaitForSeconds(1);PlaySound();
	
        nextDoc.GetComponent.<Renderer>().material = passCopyMat;
        yield WaitForSeconds(0.25);
         soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
        tick2.GetComponent(MeshRenderer).enabled = true;
    }
    if (havePassPhoto==true && passPhotoCollected == false){
        print("Pass Photo"); 
        passPhotoCollected = true;
        yield WaitForSeconds(1);PlaySound();
	
        nextDoc.GetComponent.<Renderer>().material = passPhotoMat;
        yield WaitForSeconds(0.25);
         soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
        tick2.GetComponent(MeshRenderer).enabled = true;
    }
    if (havePassport==true && passportCollected == false){
        print("Passport"); 
        passportCollected = true;
        yield WaitForSeconds(1);PlaySound();
	
        nextDoc.GetComponent.<Renderer>().material = passportMat;
        yield WaitForSeconds(0.25);
         soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
        tick1.GetComponent(MeshRenderer).enabled = true;
    }
    if (havePolice==true && policeCollected == false){
        print("Police"); 
        policeCollected = true;
        yield WaitForSeconds(1);PlaySound();
	
        nextDoc.GetComponent.<Renderer>().material = policeMat;
        yield WaitForSeconds(0.25);
         soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();   
        tick4.GetComponent(MeshRenderer).enabled = true;
    }
    if (havePortfolio==true && portfolioCollected == false){
        print("Portfolio"); 
        portfolioCollected = true;
        yield WaitForSeconds(1);PlaySound();
	
        nextDoc.GetComponent.<Renderer>().material = portfolioMat;
        if (charStats.GetComponent(CharacterStats).englishSpeaking == true){
            if (charStats.GetComponent(CharacterStats).courseType == 1 || charStats.GetComponent(CharacterStats).courseType == 2){
                yield WaitForSeconds(0.25);
                 soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
                tick7.GetComponent(MeshRenderer).enabled = true;
            }
            else {
                yield WaitForSeconds(0.25);
                 soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
                tick6.GetComponent(MeshRenderer).enabled = true;
            }
        }
        else {
            yield WaitForSeconds(0.25);
             soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
            tick7.GetComponent(MeshRenderer).enabled = true;
        }
    }
    if (haveQuals==true && qualsCollected == false){
        print("Quals"); 
        qualsCollected = true;
        yield WaitForSeconds(1);PlaySound();
        nextDoc.GetComponent.<Renderer>().material = qualsMat;
        yield WaitForSeconds(0.25);
         soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
        tick3.GetComponent(MeshRenderer).enabled = true;
    }
    if (haveReference==true && referenceCollected == false){
        print("Reference"); 
        
        referenceCollected = true;
        yield WaitForSeconds(1);PlaySound();
        nextDoc.GetComponent.<Renderer>().material = referenceMat;
        yield WaitForSeconds(0.25);
         soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
        tick5.GetComponent(MeshRenderer).enabled = true;
    }
    if (haveStatement==true && statementCollected == false){
        print("Statement"); 
        statementCollected = true;
        yield WaitForSeconds(1);PlaySound();
	
        nextDoc.GetComponent.<Renderer>().material = statementMat;
        yield WaitForSeconds(0.25);
         soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
        tick4.GetComponent(MeshRenderer).enabled = true;
    }
    if (haveTb==true && tbCollected == false){
        print("TB!"); 
        tbCollected = true;
        yield WaitForSeconds(1);PlaySound();
	    
        nextDoc.GetComponent.<Renderer>().material = tbMat;
        yield WaitForSeconds(0.25);
         soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();   
        tick4.GetComponent(MeshRenderer).enabled = true;
    }
    if (haveVisa==true && visaCollected == false){
        print("Visa"); 
        visaCollected = true;
        casAppCollected = true;
        yield WaitForSeconds(1);PlaySound();
        nextDoc.GetComponent.<Renderer>().material = visaMat;
        yield WaitForSeconds(0.25);
         soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();  
        tick2.GetComponent(MeshRenderer).enabled = true;
    }
    if (haveVisaApl==true && visaAplCollected == false){
        print("Visa Application"); 
        visaAplCollected = true;
        yield WaitForSeconds(1);PlaySound();
        visaAplCollected = true;
        nextDoc.GetComponent.<Renderer>().material = visaAplMat;
        yield WaitForSeconds(0.25);
         soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).boxTick; soundBank.GetComponent(AudioSource).Play();   
        tick5.GetComponent(MeshRenderer).enabled = true;
    }
    //check for stages and highlight 'can submit'
    //STAGE 1
    if (submit.GetComponent(SubmitDocument).stage == 1 &&
	haveCopyQual == true &&
	havePassCopy == true &&
	haveDetail == true &&
	haveStatement == true){
        //check on character stats
        if (charStats.GetComponent(CharacterStats).englishSpeaking == true){
            //ENGLISH
            if ((charStats.GetComponent(CharacterStats).courseType == 1 || charStats.GetComponent(CharacterStats).courseType == 2) && haveCv == true &&
            haveReference == true &&
            havePortfolio == true){
                //highlights text 'can submit'
                helpText.text = "Submit Here!";
                helpText.GetComponent.<Renderer>().enabled = true;
	
                helpChild1.GetComponent.<Renderer>().enabled = true;
	
                helpChild2.GetComponent.<Renderer>().enabled = true;
            }
            else if (charStats.GetComponent(CharacterStats).courseType == 3 && haveCv == true &&
            haveReference == true){
                //highlights text 'can submit'
                helpText.text = "Submit Here!";
                helpText.GetComponent.<Renderer>().enabled = true;
	
                helpChild1.GetComponent.<Renderer>().enabled = true;
	
                helpChild2.GetComponent.<Renderer>().enabled = true;
            }
            else if ((charStats.GetComponent(CharacterStats).courseType == 4 || charStats.GetComponent(CharacterStats).courseType == 5) &&
            haveReference == true &&
            havePortfolio == true){
                //highlights text 'can submit'
                helpText.text = "Submit Here!";
                helpText.GetComponent.<Renderer>().enabled = true;
	
                helpChild1.GetComponent.<Renderer>().enabled = true;
	
                helpChild2.GetComponent.<Renderer>().enabled = true;
            }
            else if (charStats.GetComponent(CharacterStats).courseType == 6 && 
            haveReference == true){
                //highlights text 'can submit'
                helpText.text = "Submit Here!";
                helpText.GetComponent.<Renderer>().enabled = true;
	
                helpChild1.GetComponent.<Renderer>().enabled = true;
	
                helpChild2.GetComponent.<Renderer>().enabled = true;
            }
        }
	
        else if (charStats.GetComponent(CharacterStats).englishSpeaking == false){
            // NON ENGLISH
            if ((charStats.GetComponent(CharacterStats).courseType == 1 || charStats.GetComponent(CharacterStats).courseType == 2) && haveCv == true &&
            haveReference == true &&
            havePortfolio == true &&
            haveIelts == true){
                //highlights text 'can submit'
                helpText.text = "Submit Here!";
                print("Test1");
                helpText.GetComponent.<Renderer>().enabled = true;
	
                helpChild1.GetComponent.<Renderer>().enabled = true;
	
                helpChild2.GetComponent.<Renderer>().enabled = true;
            }
            else if (charStats.GetComponent(CharacterStats).courseType == 3 && haveCv == true &&
            haveReference == true &&
            haveIelts == true){
                //highlights text 'can submit'
                helpText.text = "Submit Here!";
                print("Test2");
                helpText.GetComponent.<Renderer>().enabled = true;
	
                helpChild1.GetComponent.<Renderer>().enabled = true;
	
                helpChild2.GetComponent.<Renderer>().enabled = true;
            }
            else if ((charStats.GetComponent(CharacterStats).courseType == 4 || charStats.GetComponent(CharacterStats).courseType == 5) &&
            haveReference == true &&
            havePortfolio == true &&
            haveIelts == true){
                //highlights text 'can submit'
                helpText.text = "Submit Here!";
                print("Test3");
                helpText.GetComponent.<Renderer>().enabled = true;
	
                helpChild1.GetComponent.<Renderer>().enabled = true;
	
                helpChild2.GetComponent.<Renderer>().enabled = true;
            }
            else if (charStats.GetComponent(CharacterStats).courseType == 6 && 
            haveReference == true &&
            haveIelts == true){
                //highlights text 'can submit'
                helpText.text = "Submit Here!";
                print("Test4");
                helpText.GetComponent.<Renderer>().enabled = true;
	
                helpChild1.GetComponent.<Renderer>().enabled = true;
	
                helpChild2.GetComponent.<Renderer>().enabled = true;
            }
        }
    }
    //STAGE 2
    if (submit.GetComponent(SubmitDocument).stage == 2){
        //highlights text 'can submit'
        helpText.text = "Submit Here!";
        helpText.GetComponent.<Renderer>().enabled = true;
	
        helpChild1.GetComponent.<Renderer>().enabled = true;
	
        helpChild2.GetComponent.<Renderer>().enabled = true;
    }
    //STAGE 3
    if (submit.GetComponent(SubmitDocument).stage == 3 && haveInterview == true){
        //highlights text 'can submit'
        helpText.text = "Submit Here!";
        helpText.GetComponent.<Renderer>().enabled = true;
	
        helpChild1.GetComponent.<Renderer>().enabled = true;
	
        helpChild2.GetComponent.<Renderer>().enabled = true;
    }
    //STAGE 4
    if (submit.GetComponent(SubmitDocument).stage == 4){
        //highlights text 'can submit'
        helpText.text = "Submit Here!";
        helpText.GetComponent.<Renderer>().enabled = true;
	
        helpChild1.GetComponent.<Renderer>().enabled = true;
	
        helpChild2.GetComponent.<Renderer>().enabled = true;
    }
    //STAGE 5
    if (submit.GetComponent(SubmitDocument).stage == 5 && haveConfirm == true){
        //highlights text 'can submit'
        helpText.text = "Submit Here!";
        helpText.GetComponent.<Renderer>().enabled = true;
	
        helpChild1.GetComponent.<Renderer>().enabled = true;
	
        helpChild2.GetComponent.<Renderer>().enabled = true;
    }
    //STAGE 6
    if (submit.GetComponent(SubmitDocument).stage == 6 && haveFee == true){
        //highlights text 'can submit'
        helpText.text = "Submit Here!";
        helpText.GetComponent.<Renderer>().enabled = true;
	
        helpChild1.GetComponent.<Renderer>().enabled = true;
	
        helpChild2.GetComponent.<Renderer>().enabled = true;
    }
    //STAGE 7
    if (submit.GetComponent(SubmitDocument).stage == 7){
        //highlights text 'can submit'
        helpText.text = "Submit Here!";
        helpText.GetComponent.<Renderer>().enabled = true;
	
        helpChild1.GetComponent.<Renderer>().enabled = true;
	
        helpChild2.GetComponent.<Renderer>().enabled = true;
    }
    //STAGE 8
    if (submit.GetComponent(SubmitDocument).stage == 8 && havePassport == true && havePassPhoto == true && haveCas == true && haveTb == true && haveVisaApl == true){
        if (charStats.GetComponent(CharacterStats).englishSpeaking == true){
            //ENGLISH
            if (charStats.GetComponent(CharacterStats).financeDependency == true && haveFinance == true && haveBirth == true && haveOtherBank == true){
                helpText.text = "Submit Here!";
                helpText.GetComponent.<Renderer>().enabled = true;
                helpChild1.GetComponent.<Renderer>().enabled = true;
                helpChild2.GetComponent.<Renderer>().enabled = true;
            }
            if (charStats.GetComponent(CharacterStats).financeDependency == false && havePersBank == true){
                helpText.text = "Submit Here!";
                helpText.GetComponent.<Renderer>().enabled = true;
                helpChild1.GetComponent.<Renderer>().enabled = true;
                helpChild2.GetComponent.<Renderer>().enabled = true;
            }
        }
        if (charStats.GetComponent(CharacterStats).englishSpeaking == false){
            //NOT ENGLISH
            if (charStats.GetComponent(CharacterStats).financeDependency == true && haveFinance == true && haveIelts == true && haveBirth == true && haveOtherBank == true){
                print("through Ielts 1");
                helpText.text = "Submit Here!";
                helpText.GetComponent.<Renderer>().enabled = true;
                helpChild1.GetComponent.<Renderer>().enabled = true;
                helpChild2.GetComponent.<Renderer>().enabled = true;
            }
            if (charStats.GetComponent(CharacterStats).financeDependency == false && havePersBank == true && haveIelts == true){
                print("through Ielts 2");
                helpText.text = "Submit Here!";
                helpText.GetComponent.<Renderer>().enabled = true;
                helpChild1.GetComponent.<Renderer>().enabled = true;
                helpChild2.GetComponent.<Renderer>().enabled = true;
            }
        }
    }
	
	
    //STAGE 9	
    if (submit.GetComponent(SubmitDocument).stage == 9){
        //highlights text 'can submit'
        helpText.text = "Submit Here!";
        helpText.GetComponent.<Renderer>().enabled = true;
	
        helpChild1.GetComponent.<Renderer>().enabled = true;
	
        helpChild2.GetComponent.<Renderer>().enabled = true;
    }
    //STAGE 10
    if (submit.GetComponent(SubmitDocument).stage == 10 && haveFlight == true && haveAccom == true){
        //highlights text 'can submit'
        helpText.text = "Submit Here!";
        helpText.GetComponent.<Renderer>().enabled = true;
	
        helpChild1.GetComponent.<Renderer>().enabled = true;
	
        helpChild2.GetComponent.<Renderer>().enabled = true;
    }
    //STAGE 11
    if (submit.GetComponent(SubmitDocument).stage == 11 && haveVisa == true && haveQuals == true && havePolice == true){
        //highlights text 'can submit'
        helpText.text = "Submit Here!";
        helpText.GetComponent.<Renderer>().enabled = true;
	
        helpChild1.GetComponent.<Renderer>().enabled = true;
	
        helpChild2.GetComponent.<Renderer>().enabled = true;
    }
    if (helpText.GetComponent.<Renderer>().enabled == true){
        soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).submitReady;
        soundBank.GetComponent(AudioSource).Play();
    }
}
