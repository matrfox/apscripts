
var MoveText : TextMesh;
var DocText : TextMesh;
var counter : GameObject;
var turnCounter : GameObject;
var docQuestion : GameObject;

var playerInventory : GameObject;

var submit : GameObject;
var helpText : TextMesh;

var charStats : GameObject;

//var bonusController : GameObject;

 var docQuantity = 0;

 private var soundBank : GameObject;
 private var soundSwitch = false;

 function Start(){
     soundBank = GameObject.Find("Sounds");
 }


//Assigning amount of available docs for each area
function SetStartStage (){
	if (submit.GetComponent(SubmitDocument).stage == 1){
		if (name == "Bank"){
		//fee pay/finance/persbank
		docQuantity = 0;
		}
		if (name == "Web"){
		//no real docs - needed for submit. 
		docQuantity = 1;
		}
		if (name == "Online"){
		//reference/statement/confirm/offer
		docQuantity = 2;
		}
		if (name == "IELTS"){
		//ielts
		docQuantity = 1;
			if (charStats.GetComponent(CharacterStats).englishSpeaking == true){
				docQuantity = 0;
			}
		}
		if (name == "Post"){
		//passcopy/passphoto/CAS
		docQuantity = 1;
		}
		if (name == "School"){
		//copy qual/qual/portfolio
		docQuantity = 2;
			if (charStats.GetComponent(CharacterStats).courseType == 3 || charStats.GetComponent(CharacterStats).courseType == 6){
				docQuantity = 1;
			}
		}
		if (name == "Travel"){
		//accom/flight
		docQuantity = 0;
		}
		if (name == "Visa"){
		//passport/visa
		docQuantity = 0;
		}
		//starting the player icon at Home 
		if (name == "Home"){
		//birth/statement/cv/interview
		counter.transform.position.y = transform.position.y;
		counter.transform.position.x = transform.position.x;
		docQuantity = 2;
		if (charStats.GetComponent(CharacterStats).courseType == 4 || charStats.GetComponent(CharacterStats).courseType == 5 || charStats.GetComponent(CharacterStats).courseType == 6){
				docQuantity = 1;
			}
		}
	}
}


function ResetDocQuantity(){

	if (submit.GetComponent(SubmitDocument).stage == 2){
	docQuantity = 0;
	}
	
	if (submit.GetComponent(SubmitDocument).stage == 3){
	
	docQuantity = 0;
		if (name == "Home"){
			docQuantity = 1;
		}
	}
	
	if (submit.GetComponent(SubmitDocument).stage == 4){
	
	docQuantity = 0;
	}
	
	if (submit.GetComponent(SubmitDocument).stage == 5){
	
	docQuantity = 0;
		if (name == "Online"){
			docQuantity = 1;
		}
	}
	
	if (submit.GetComponent(SubmitDocument).stage == 6){
	
	docQuantity = 0;
		if (name == "Bank"){
			docQuantity = 1;
		}
	}
	
	if (submit.GetComponent(SubmitDocument).stage == 7){
	
	docQuantity = 0;
	}
	
	if (submit.GetComponent(SubmitDocument).stage == 8){
	
	docQuantity = 0;
		if (name == "Bank"){
			if (charStats.GetComponent(CharacterStats).financeDependency == true){
				docQuantity = 3;
			}
			else 
			{
				docQuantity = 1;
			}
		}
		if (name == "IELTS"){
			if (charStats.GetComponent(CharacterStats).englishSpeaking == false){
				docQuantity = 1;
			}
			else docQuantity = 0;
		}
		if (name == "Home"){
			if (charStats.GetComponent(CharacterStats).financeDependency == true){
				docQuantity = 2;
			}
			else 
			{
				docQuantity = 1;
			}
		}
		if (name == "Post"){
			docQuantity = 2;
		}
		if (name == "Visa"){
			docQuantity = 1;
		}
		if (name == "Online"){
		    docQuantity = 1;
		}
	}
	
	if (submit.GetComponent(SubmitDocument).stage == 9){
	
	docQuantity = 0;
	}
	
	if (submit.GetComponent(SubmitDocument).stage == 10){
	
	docQuantity = 0;
		if (name == "Travel"){
			docQuantity = 2;
		}
	}
	
	if (submit.GetComponent(SubmitDocument).stage == 11){
	
	docQuantity = 0;
		if (name == "Visa"){
			docQuantity = 1;
		}
		if (name == "School"){
			docQuantity = 1;
		}
		if (name == "Post"){
		    docQuantity = 1;
		}
	}
	
    //DEPRICATED
    /*
	if (submit.GetComponent(SubmitDocument).stage == 20){
			if (name == "Bank"){
			docQuantity = 3;
			}
			if (name == "Web"){
			docQuantity = 1;
			}
			if (name == "Online"){
			docQuantity = 1;
			}
			if (name == "IELTS"){
			docQuantity = 1;
			}
			if (name == "Post"){
			docQuantity = 1;
			}
			if (name == "School"){
			docQuantity = 1;
			}
			if (name == "Travel"){
			docQuantity = 2;
			}
			if (name == "Visa"){
			docQuantity = 1;
			}
			//starting the player icon at Home at the start
			if (name == "Home"){
			counter.transform.position.y = transform.position.y;
			counter.transform.position.x = transform.position.x;
			docQuantity = 1;
			}
	}*/

}

//on mouse over either move highlighted, or documents. Clicking will start the get document. 
function OnMouseOver(){
//check whether already accessing a document
	if (docQuestion.GetComponent(DocumentQuestion).docProcessing == false){
		//documents
		if (counter.transform.position.y == transform.position.y &&
		counter.transform.position.x == transform.position.x){
		//add conditional if document exists in this area.
			if (docQuantity != 0){
				if (name != "Web"){
				DocText.GetComponent.<Renderer>().enabled = true;}
				//submit stage 1 text check
				//THIS IS WHERE THE CHECKS GO FOR STAGES FOR NEW RULE SET
					if (name == "Web" && MoveText.GetComponent.<Renderer>().enabled == false && 
					submit.GetComponent(SubmitDocument).stage == 1 &&
					playerInventory.GetComponent(PlayerInvent).haveCopyQual == true &&
					playerInventory.GetComponent(PlayerInvent).havePassCopy == true &&
					playerInventory.GetComponent(PlayerInvent).haveDetail == true &&
					 playerInventory.GetComponent(PlayerInvent).haveStatement == true)
					 {
					 //check charStats for Course type and English
							 //NON ENGLISH
					    if (charStats.GetComponent(CharacterStats).englishSpeaking == false){
					        if (playerInventory.GetComponent(PlayerInvent).haveIelts == true){
					            //print("Has IELTS..");
					            /*1 = MA
                                  2 = MSc
                                  3 = MDes
                                  4 = BA 
                                  5 = BSc
                                  6 = FE*/
					            if ((charStats.GetComponent(CharacterStats).courseType == 1 || charStats.GetComponent(CharacterStats).courseType == 2) &&
                                playerInventory.GetComponent(PlayerInvent).haveReference == true &&
                                playerInventory.GetComponent(PlayerInvent).haveCv == true &&
                                playerInventory.GetComponent(PlayerInvent).havePortfolio == true){
					                DocText.text = "Submit";
					                DocText.GetComponent.<Renderer>().enabled = true;
					            }
							 
					            if (charStats.GetComponent(CharacterStats).courseType == 3 &&
                                playerInventory.GetComponent(PlayerInvent).haveReference == true &&
                                playerInventory.GetComponent(PlayerInvent).haveCv == true){
					                DocText.text = "Submit";
					                DocText.GetComponent.<Renderer>().enabled = true;
					            }
							 
					            if ((charStats.GetComponent(CharacterStats).courseType == 4 || charStats.GetComponent(CharacterStats).courseType == 5) &&
                                playerInventory.GetComponent(PlayerInvent).haveReference == true &&
                                playerInventory.GetComponent(PlayerInvent).havePortfolio == true){
					                DocText.text = "Submit";
					                DocText.GetComponent.<Renderer>().enabled = true;
					            }
							 
							 
					            if (charStats.GetComponent(CharacterStats).courseType == 6 &&
                                playerInventory.GetComponent(PlayerInvent).haveReference == true){
					                DocText.text = "Submit";
					                DocText.GetComponent.<Renderer>().enabled = true;
					            }
					        }}
							 //ENGLSH
					    if (charStats.GetComponent(CharacterStats).englishSpeaking == true){
							 /*1 = MA
							   2 = MSc
							   3 = MDes
							   4 = BA 
							   5 = BSc
							   6 = FE*/
							 if ((charStats.GetComponent(CharacterStats).courseType == 1 || charStats.GetComponent(CharacterStats).courseType == 2) &&
							 playerInventory.GetComponent(PlayerInvent).haveReference == true &&
							 playerInventory.GetComponent(PlayerInvent).haveCv == true &&
							 playerInventory.GetComponent(PlayerInvent).havePortfolio == true){
							  DocText.text = "Submit";
					 DocText.GetComponent.<Renderer>().enabled = true;
							 }
							 
							 if (charStats.GetComponent(CharacterStats).courseType == 3 &&
							 playerInventory.GetComponent(PlayerInvent).haveReference == true &&
							 playerInventory.GetComponent(PlayerInvent).haveCv == true){
							  DocText.text = "Submit";
					 DocText.GetComponent.<Renderer>().enabled = true;
							 }
							 
							 if ((charStats.GetComponent(CharacterStats).courseType == 4 || charStats.GetComponent(CharacterStats).courseType == 5) &&
							 playerInventory.GetComponent(PlayerInvent).haveReference == true &&
							 playerInventory.GetComponent(PlayerInvent).havePortfolio == true){
							  DocText.text = "Submit";
					 DocText.GetComponent.<Renderer>().enabled = true;
							 }
							 
							 
							 if (charStats.GetComponent(CharacterStats).courseType == 6 &&
							 playerInventory.GetComponent(PlayerInvent).haveReference == true){
							 DocText.text = "Submit";
					 DocText.GetComponent.<Renderer>().enabled = true;
							 }
							 }}
					 
					 
					
					 
					 
					 /*playerInventory.GetComponent(PlayerInvent).haveReference == true &&
					 playerInventory.GetComponent(PlayerInvent).haveCv == true &&
					playerInventory.GetComponent(PlayerInvent).havePortfolio == true  &&
					 playerInventory.GetComponent(PlayerInvent).haveIelts == true &&*/
					 
				 //submit stage 2 goes here etc
				 	else if (name == "Web" && MoveText.GetComponent.<Renderer>().enabled == false && submit.GetComponent(SubmitDocument).stage == 2){
				 	DocText.text = "Submit";
					 DocText.GetComponent.<Renderer>().enabled = true;
				 	}
				 	
				 	else if (name == "Web" && MoveText.GetComponent.<Renderer>().enabled == false && submit.GetComponent(SubmitDocument).stage == 3 &&
				 	playerInventory.GetComponent(PlayerInvent).haveInterview == true){
				 	DocText.text = "Submit";
					 DocText.GetComponent.<Renderer>().enabled = true;
				 	}
				 	
				 	else if (name == "Web" && MoveText.GetComponent.<Renderer>().enabled == false && submit.GetComponent(SubmitDocument).stage == 4){
				 	DocText.text = "Submit";
					 DocText.GetComponent.<Renderer>().enabled = true;
				 	}
				 	
				 	else if (name == "Web" && MoveText.GetComponent.<Renderer>().enabled == false && submit.GetComponent(SubmitDocument).stage == 5 &&
				 	playerInventory.GetComponent(PlayerInvent).haveConfirm == true){
				 	DocText.text = "Submit";
					 DocText.GetComponent.<Renderer>().enabled = true;
				 	}
				 	
				 	else if (name == "Web" && MoveText.GetComponent.<Renderer>().enabled == false && submit.GetComponent(SubmitDocument).stage == 6 &&
				 	playerInventory.GetComponent(PlayerInvent).haveFee == true){
				 	DocText.text = "Submit";
					 DocText.GetComponent.<Renderer>().enabled = true;
				 	}
				 	
				 	else if (name == "Web" && MoveText.GetComponent.<Renderer>().enabled == false && submit.GetComponent(SubmitDocument).stage == 7){
				 	DocText.text = "Submit";
					 DocText.GetComponent.<Renderer>().enabled = true;
				 	}
				 	
				 	else if (name == "Web" && MoveText.GetComponent.<Renderer>().enabled == false && submit.GetComponent(SubmitDocument).stage == 8 &&
							 playerInventory.GetComponent(PlayerInvent).havePassport == true &&
							 playerInventory.GetComponent(PlayerInvent).havePassPhoto == true && playerInventory.GetComponent(PlayerInvent).haveVisaApl == true &&
							 playerInventory.GetComponent(PlayerInvent).haveCas == true && playerInventory.GetComponent(PlayerInvent).haveTb == true){
							 
				 	    if (charStats.GetComponent(CharacterStats).englishSpeaking == false){
				 	        if (playerInventory.GetComponent(PlayerInvent).haveIelts == true){
				 	            if (charStats.GetComponent(CharacterStats).financeDependency == true && playerInventory.GetComponent(PlayerInvent).haveFinance == true 
                                    && playerInventory.GetComponent(PlayerInvent).haveOtherBank == true){
                                    //could print in here?
				 	                DocText.text = "Submit";
				 	                DocText.GetComponent.<Renderer>().enabled = true;
				 	            }
				 	            if (charStats.GetComponent(CharacterStats).financeDependency == false && playerInventory.GetComponent(PlayerInvent).havePersBank == true){
				 	                DocText.text = "Submit";
				 	                DocText.GetComponent.<Renderer>().enabled = true;
				 	            }
				 	        }
				 	    }
				 	        if (charStats.GetComponent(CharacterStats).englishSpeaking == true){
				 	            if (charStats.GetComponent(CharacterStats).financeDependency == true && playerInventory.GetComponent(PlayerInvent).haveFinance == true
                                     && playerInventory.GetComponent(PlayerInvent).haveOtherBank == true){
				 	                DocText.text = "Submit";
				 	                DocText.GetComponent.<Renderer>().enabled = true;
				 	            }
				 	            if (charStats.GetComponent(CharacterStats).financeDependency == false && playerInventory.GetComponent(PlayerInvent).havePersBank == true){
				 	                DocText.text = "Submit";
				 	                DocText.GetComponent.<Renderer>().enabled = true;
				 	            }
				 	        }
				 	    }
				 	
				 	
				 	else if (name == "Web" && MoveText.GetComponent.<Renderer>().enabled == false && submit.GetComponent(SubmitDocument).stage == 9){
				 	    DocText.text = "Submit";
				 	    DocText.GetComponent.<Renderer>().enabled = true;
				 	}
				 	
				 	else if (name == "Web" && MoveText.GetComponent.<Renderer>().enabled == false && submit.GetComponent(SubmitDocument).stage == 10 &&
				 	playerInventory.GetComponent(PlayerInvent).haveAccom == true &&
				 	playerInventory.GetComponent(PlayerInvent).haveFlight == true){
				 	    DocText.text = "Submit";
				 	    DocText.GetComponent.<Renderer>().enabled = true;
				 	}
				 	
				 	else if (name == "Web" && MoveText.GetComponent.<Renderer>().enabled == false && submit.GetComponent(SubmitDocument).stage == 11 &&
				 	playerInventory.GetComponent(PlayerInvent).haveVisa == true &&
				 	playerInventory.GetComponent(PlayerInvent).haveQuals == true && playerInventory.GetComponent(PlayerInvent).havePolice == true){
				 	    DocText.text = "Submit";
				 	    DocText.GetComponent.<Renderer>().enabled = true;
				 	}
				 	
				 	else if (name == "Web" && MoveText.GetComponent.<Renderer>().enabled == false && submit.GetComponent(SubmitDocument).stage == 12){
				 	    DocText.text = "Submit";
				 	    DocText.GetComponent.<Renderer>().enabled = true;
				 	}
				 	
				 
				 	//on pressing on the card..
					if (Input.GetMouseButtonDown(0) && DocText.GetComponent.<Renderer>().enabled == true && docQuantity > 0){
					    PlaySound();
					//--------BANK---------
						if (name == "Bank"){
							if (playerInventory.GetComponent(PlayerInvent).haveFinance == false && playerInventory.GetComponent(PlayerInvent).financeCollected == false){
							docQuantity =docQuantity-1;
							playerInventory.GetComponent(PlayerInvent).haveFinance = true;
							docQuestion.GetComponent(DocumentQuestion).docFinance();
							DocText.GetComponent.<Renderer>().enabled = false;
							docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}

							else if (playerInventory.GetComponent(PlayerInvent).haveFee == false && playerInventory.GetComponent(PlayerInvent).feeCollected == false){
							docQuantity =docQuantity-1;
							playerInventory.GetComponent(PlayerInvent).haveFee = true;
							docQuestion.GetComponent(DocumentQuestion).docFeePay();
							DocText.GetComponent.<Renderer>().enabled = false;
							docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}

							else if (playerInventory.GetComponent(PlayerInvent).haveOtherBank == false && playerInventory.GetComponent(PlayerInvent).otherBankCollected == false){
							    docQuantity =docQuantity-1;
							    playerInventory.GetComponent(PlayerInvent).haveOtherBank = true;
							    docQuestion.GetComponent(DocumentQuestion).docOtherBank();
							    DocText.GetComponent.<Renderer>().enabled = false;
							    docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}

							else if (playerInventory.GetComponent(PlayerInvent).havePersBank == false && playerInventory.GetComponent(PlayerInvent).persBankCollected == false){
							docQuantity =docQuantity-1;
							playerInventory.GetComponent(PlayerInvent).havePersBank = true;
							docQuestion.GetComponent(DocumentQuestion).docPersBank();
							DocText.GetComponent.<Renderer>().enabled = false;
							docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}
						}

					//----HOME---

						if (name == "Home"){
							if (playerInventory.GetComponent(PlayerInvent).haveStatement == false && playerInventory.GetComponent(PlayerInvent).statementCollected == false){
							docQuantity =docQuantity-1;
							playerInventory.GetComponent(PlayerInvent).haveStatement = true;
							docQuestion.GetComponent(DocumentQuestion).docStatement();
							DocText.GetComponent.<Renderer>().enabled = false;
							
							
							docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}
				//NEW RULES
							else if (playerInventory.GetComponent(PlayerInvent).haveCv == false && playerInventory.GetComponent(PlayerInvent).cvCollected == false){
							docQuantity =docQuantity-1;
							playerInventory.GetComponent(PlayerInvent).haveCv = true;
							docQuestion.GetComponent(DocumentQuestion).docCv();
							DocText.GetComponent.<Renderer>().enabled = false;
							docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}
				//NEW RULES
							else if (playerInventory.GetComponent(PlayerInvent).haveBirth == false && playerInventory.GetComponent(PlayerInvent).birthCollected == false){
							docQuantity =docQuantity-1;
							playerInventory.GetComponent(PlayerInvent).haveBirth = true;
							docQuestion.GetComponent(DocumentQuestion).docBirth();
							DocText.GetComponent.<Renderer>().enabled = false;
							docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}
							else if (playerInventory.GetComponent(PlayerInvent).haveTb == false && playerInventory.GetComponent(PlayerInvent).tbCollected == false){
							    docQuantity =docQuantity-1;
							    playerInventory.GetComponent(PlayerInvent).haveTb = true;
							    docQuestion.GetComponent(DocumentQuestion).docTb();
							    DocText.GetComponent.<Renderer>().enabled = false;
							    docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}
							else if (playerInventory.GetComponent(PlayerInvent).haveInterview == false && playerInventory.GetComponent(PlayerInvent).interviewCollected == false){
							docQuantity =docQuantity-1;
							playerInventory.GetComponent(PlayerInvent).haveInterview = true;
							docQuestion.GetComponent(DocumentQuestion).docInterview();
							DocText.GetComponent.<Renderer>().enabled = false;
							docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}
						}

					//----IELTS---

						if (name == "IELTS"){
							if (playerInventory.GetComponent(PlayerInvent).haveIelts == false && playerInventory.GetComponent(PlayerInvent).ieltsCollected == false){
							docQuantity =docQuantity-1;
							playerInventory.GetComponent(PlayerInvent).haveIelts = true;
							docQuestion.GetComponent(DocumentQuestion).docIelts();
							DocText.GetComponent.<Renderer>().enabled = false;
							docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}
						}

						//----ONLINE---

						if (name == "Online"){
							if (playerInventory.GetComponent(PlayerInvent).haveDetail == false && playerInventory.GetComponent(PlayerInvent).detailCollected == false){
							docQuantity =docQuantity-1;
							playerInventory.GetComponent(PlayerInvent).haveDetail = true;
							docQuestion.GetComponent(DocumentQuestion).docDetail();
							DocText.GetComponent.<Renderer>().enabled = false;
							docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}
				//NEW RULES - NEEDS 2?
							else if (playerInventory.GetComponent(PlayerInvent).haveReference == false && playerInventory.GetComponent(PlayerInvent).referenceCollected == false){
							docQuantity =docQuantity-1;
							playerInventory.GetComponent(PlayerInvent).haveReference = true;
							docQuestion.GetComponent(DocumentQuestion).docReference();
							DocText.GetComponent.<Renderer>().enabled = false;
							docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}
							else if (playerInventory.GetComponent(PlayerInvent).haveConfirm == false && playerInventory.GetComponent(PlayerInvent).confirmCollected == false){
							docQuantity =docQuantity-1;
							playerInventory.GetComponent(PlayerInvent).haveConfirm = true;
							docQuestion.GetComponent(DocumentQuestion).docConfirm();
							DocText.GetComponent.<Renderer>().enabled = false;
							docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}
							else if (playerInventory.GetComponent(PlayerInvent).haveVisaApl == false && playerInventory.GetComponent(PlayerInvent).visaAplCollected == false){
							    docQuantity =docQuantity-1;
							    playerInventory.GetComponent(PlayerInvent).haveVisaApl = true;
							    docQuestion.GetComponent(DocumentQuestion).docVisaApl();
							    DocText.GetComponent.<Renderer>().enabled = false;
							    docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}
							else if (playerInventory.GetComponent(PlayerInvent).haveOffer == false && playerInventory.GetComponent(PlayerInvent).offerCollected == false){
							docQuantity =docQuantity-1;
							playerInventory.GetComponent(PlayerInvent).haveOffer = true;
							docQuestion.GetComponent(DocumentQuestion).docOffer();
							DocText.GetComponent.<Renderer>().enabled = false;
							docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}
						}

					//----POST---

						if (name == "Post"){
							
							if (playerInventory.GetComponent(PlayerInvent).havePolice == false && playerInventory.GetComponent(PlayerInvent).policeCollected == false){
							docQuantity =docQuantity-1;
							playerInventory.GetComponent(PlayerInvent).havePolice = true;
							docQuestion.GetComponent(DocumentQuestion).docPolice();
							DocText.GetComponent(Renderer).enabled = false;
							docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}
							if(playerInventory.GetComponent(PlayerInvent).havePassPhoto == false && playerInventory.GetComponent(PlayerInvent).passPhotoCollected == false){
							docQuantity =docQuantity-1;
							playerInventory.GetComponent(PlayerInvent).havePassPhoto = true;
							docQuestion.GetComponent(DocumentQuestion).docPassPhoto();
							DocText.GetComponent.<Renderer>().enabled = false;
							docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}
							else if (playerInventory.GetComponent(PlayerInvent).havePassCopy == false && playerInventory.GetComponent(PlayerInvent).passCopyCollected == false){
							docQuantity =docQuantity-1;
							playerInventory.GetComponent(PlayerInvent).havePassCopy = true;
							docQuestion.GetComponent(DocumentQuestion).docPassCopy();
							DocText.GetComponent.<Renderer>().enabled = false;
							docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}
							else if (playerInventory.GetComponent(PlayerInvent).haveCas == false && playerInventory.GetComponent(PlayerInvent).casCollected == false){
							docQuantity =docQuantity-1;
							playerInventory.GetComponent(PlayerInvent).haveCas = true;
							docQuestion.GetComponent(DocumentQuestion).docCas();
							DocText.GetComponent.<Renderer>().enabled = false;
							docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}
						}

					//----SCHOOL---

						if (name == "School"){
							if (playerInventory.GetComponent(PlayerInvent).haveQuals == false && playerInventory.GetComponent(PlayerInvent).qualsCollected == false){
							docQuantity =docQuantity-1;
							playerInventory.GetComponent(PlayerInvent).haveQuals = true;
							docQuestion.GetComponent(DocumentQuestion).docQuals();
							DocText.GetComponent.<Renderer>().enabled = false;
							docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}
				//NEW RULES
							else if (playerInventory.GetComponent(PlayerInvent).havePortfolio == false && playerInventory.GetComponent(PlayerInvent).portfolioCollected == false){
							docQuantity =docQuantity-1;
							playerInventory.GetComponent(PlayerInvent).havePortfolio = true;
							docQuestion.GetComponent(DocumentQuestion).docPortfolio();
							DocText.GetComponent.<Renderer>().enabled = false;
							docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}
							else if (playerInventory.GetComponent(PlayerInvent).haveCopyQual == false && playerInventory.GetComponent(PlayerInvent).copyQualCollected == false){
							docQuantity =docQuantity-1;
							playerInventory.GetComponent(PlayerInvent).haveCopyQual = true;
							docQuestion.GetComponent(DocumentQuestion).docCopyQual();
							DocText.GetComponent.<Renderer>().enabled = false;
							docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}
						}


					//----TRAVEL---

						if (name == "Travel"){
							if (playerInventory.GetComponent(PlayerInvent).haveFlight == false && playerInventory.GetComponent(PlayerInvent).flightCollected == false){
							docQuantity =docQuantity-1;
							playerInventory.GetComponent(PlayerInvent).haveFlight = true;
							docQuestion.GetComponent(DocumentQuestion).docFlight();
							DocText.GetComponent.<Renderer>().enabled = false;
							docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}
							else if (playerInventory.GetComponent(PlayerInvent).haveAccom == false && playerInventory.GetComponent(PlayerInvent).accomCollected == false){
							docQuantity =docQuantity-1;
							playerInventory.GetComponent(PlayerInvent).haveAccom = true;
							docQuestion.GetComponent(DocumentQuestion).docAccom();
							DocText.GetComponent.<Renderer>().enabled = false;
							docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}
						}

					//----VISA---

						if (name == "Visa"){
							/*if (playerInventory.GetComponent(PlayerInvent).haveBpr == false && playerInventory.GetComponent(PlayerInvent).bprCollected == false){
							docQuantity =docQuantity-1;
							playerInventory.GetComponent(PlayerInvent).haveBpr = true;
							docQuestion.GetComponent(DocumentQuestion).docBpr();
							DocText.renderer.enabled = false;
							
							
							docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}*/
							if (playerInventory.GetComponent(PlayerInvent).havePassport == false && playerInventory.GetComponent(PlayerInvent).passportCollected == false){
							docQuantity =docQuantity-1;
							playerInventory.GetComponent(PlayerInvent).havePassport = true;
							docQuestion.GetComponent(DocumentQuestion).docPassport();
							DocText.GetComponent.<Renderer>().enabled = false;
							docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}
							else if (playerInventory.GetComponent(PlayerInvent).haveVisa == false && playerInventory.GetComponent(PlayerInvent).visaCollected == false){
							docQuantity =docQuantity-1;
							playerInventory.GetComponent(PlayerInvent).haveVisa = true;
							docQuestion.GetComponent(DocumentQuestion).docVisa();
							DocText.GetComponent.<Renderer>().enabled = false;
							docQuestion.GetComponent(DocumentQuestion).docPickUp();
							}
						}
						
					//---WEB----

						if (name=="Web"){
						//check for stage 1
				//NEW RULES - NEED TO CHECK/EDIT THIS
							if (submit.GetComponent(SubmitDocument).stage == 1 &&
							 playerInventory.GetComponent(PlayerInvent).haveCopyQual == true &&
							 playerInventory.GetComponent(PlayerInvent).havePassCopy == true &&
							 playerInventory.GetComponent(PlayerInvent).haveDetail == true &&
							 playerInventory.GetComponent(PlayerInvent).haveStatement == true){
							 
							 //check charStats for Course type and English
							 //NON ENGLISH
							    if (charStats.GetComponent(CharacterStats).englishSpeaking == false){
							        if (playerInventory.GetComponent(PlayerInvent).haveIelts == true){
							            /*1 = MA
                                          2 = MSc
                                          3 = MDes
                                          4 = BA 
                                          5 = BSc
                                          6 = FE*/
							            if (charStats.GetComponent(CharacterStats).courseType == 1 || charStats.GetComponent(CharacterStats).courseType == 2){
							                if (playerInventory.GetComponent(PlayerInvent).haveReference == true &&
                                            playerInventory.GetComponent(PlayerInvent).haveCv == true &&
                                            playerInventory.GetComponent(PlayerInvent).havePortfolio == true){
							                    HelpTextOff();
							                    DocText.text = "Submit";
							                    print("clicked submit 1");
							                    submit.GetComponent(SubmitDocument).Submit();
							                }
							            }
							 
							            if (charStats.GetComponent(CharacterStats).courseType == 3 &&
                                        playerInventory.GetComponent(PlayerInvent).haveReference == true &&
                                        playerInventory.GetComponent(PlayerInvent).haveCv == true){
							                HelpTextOff();
							                DocText.text = "Submit";
							                print("clicked submit 1");
							                submit.GetComponent(SubmitDocument).Submit();
							            }
							 
							            if (charStats.GetComponent(CharacterStats).courseType == 4 || charStats.GetComponent(CharacterStats).courseType == 5){
							                if (playerInventory.GetComponent(PlayerInvent).haveReference == true &&
                                            playerInventory.GetComponent(PlayerInvent).havePortfolio == true){
							                    HelpTextOff();
							                    DocText.text = "Submit";
							                    print("clicked submit 1");
							                    submit.GetComponent(SubmitDocument).Submit();
							                }
							            }
							 
							            if (charStats.GetComponent(CharacterStats).courseType == 6 &&
                                        playerInventory.GetComponent(PlayerInvent).haveReference == true){
							                HelpTextOff();
							                DocText.text = "Submit";
							                print("clicked submit 1");
							                submit.GetComponent(SubmitDocument).Submit();
							            }
							        }}
							 //ENGLSH
							  if (charStats.GetComponent(CharacterStats).englishSpeaking == true){
							 /*1 = MA
							   2 = MSc
							   3 = MDes
							   4 = BA 
							   5 = BSc
							   6 = FE*/
							 if (charStats.GetComponent(CharacterStats).courseType == 1 || charStats.GetComponent(CharacterStats).courseType == 2){
							 if (playerInventory.GetComponent(PlayerInvent).haveReference == true &&
							 playerInventory.GetComponent(PlayerInvent).haveCv == true &&
							 playerInventory.GetComponent(PlayerInvent).havePortfolio == true){
							 HelpTextOff();
							 DocText.text = "Submit";
							 print("clicked submit 1");
							 submit.GetComponent(SubmitDocument).Submit();
							 }
							 }
							 
							 if (charStats.GetComponent(CharacterStats).courseType == 3 &&
							 playerInventory.GetComponent(PlayerInvent).haveReference == true &&
							 playerInventory.GetComponent(PlayerInvent).haveCv == true){
							 HelpTextOff();
							 DocText.text = "Submit";
							 print("clicked submit 1");
							 submit.GetComponent(SubmitDocument).Submit();
							 }
							 
							 if (charStats.GetComponent(CharacterStats).courseType == 4 || charStats.GetComponent(CharacterStats).courseType == 5){
							 if (playerInventory.GetComponent(PlayerInvent).haveReference == true &&
							 playerInventory.GetComponent(PlayerInvent).havePortfolio == true){
							 HelpTextOff();
							 DocText.text = "Submit";
							 print("clicked submit 1");
							 submit.GetComponent(SubmitDocument).Submit();
							 }
							 }							 
							 
							 if (charStats.GetComponent(CharacterStats).courseType == 6 &&
							 playerInventory.GetComponent(PlayerInvent).haveReference == true){
							 HelpTextOff();
							 DocText.text = "Submit";
							 print("clicked submit 1");
							 submit.GetComponent(SubmitDocument).Submit();
							 }
							 }}
							 
							 //stage 2
							else if (submit.GetComponent(SubmitDocument).stage == 2){
							 HelpTextOff();
							 
							 print("clicked submit 2");
							 submit.GetComponent(SubmitDocument).Submit();
							 }
							 //stage 3
							else if (submit.GetComponent(SubmitDocument).stage == 3 &&
							 playerInventory.GetComponent(PlayerInvent).haveInterview == true){
							 HelpTextOff();
							 
							 print("clicked submit 3");
							 submit.GetComponent(SubmitDocument).Submit();
							}
							//stage 4
							else if (submit.GetComponent(SubmitDocument).stage == 4){
							 HelpTextOff();
							
							 print("clicked submit 4");
							 submit.GetComponent(SubmitDocument).Submit();
							}
							//stage 5
							else if (submit.GetComponent(SubmitDocument).stage == 5 &&
							playerInventory.GetComponent(PlayerInvent).haveConfirm==true){
							 HelpTextOff();
							 
							 print("clicked submit 5");
							 submit.GetComponent(SubmitDocument).Submit();
							}
							//stage 6
							else if (submit.GetComponent(SubmitDocument).stage == 6 &&
							 playerInventory.GetComponent(PlayerInvent).haveFee == true){
							 HelpTextOff();
							 
							 print("clicked submit 6");
							 submit.GetComponent(SubmitDocument).Submit();
							}
							//stage 7
							else if (submit.GetComponent(SubmitDocument).stage == 7){
							 HelpTextOff();
							 
							 print("clicked submit 7");
							 submit.GetComponent(SubmitDocument).Submit();
							}
							//stage 8 - VISA
							else if (submit.GetComponent(SubmitDocument).stage == 8 &&
							 playerInventory.GetComponent(PlayerInvent).havePassport == true &&
							 playerInventory.GetComponent(PlayerInvent).havePassPhoto == true && playerInventory.GetComponent(PlayerInvent).haveVisaApl == true &&
							 playerInventory.GetComponent(PlayerInvent).haveCas == true && playerInventory.GetComponent(PlayerInvent).haveTb == true){
							 
							 if (charStats.GetComponent(CharacterStats).englishSpeaking == false &&
							 playerInventory.GetComponent(PlayerInvent).haveIelts == true){
							     if (charStats.GetComponent(CharacterStats).financeDependency == true && playerInventory.GetComponent(PlayerInvent).haveFinance == true &&
                                     playerInventory.GetComponent(PlayerInvent).haveOtherBank == true){
							 	HelpTextOff();
								 print("clicked submit 8");
								 submit.GetComponent(SubmitDocument).Submit();
							 	}
							 	if (charStats.GetComponent(CharacterStats).financeDependency == false && playerInventory.GetComponent(PlayerInvent).havePersBank == true){
							 	HelpTextOff();
								 print("clicked submit 8");
								 submit.GetComponent(SubmitDocument).Submit();
							 	}
							 }
							 
							  if (charStats.GetComponent(CharacterStats).englishSpeaking == true){
							      if (charStats.GetComponent(CharacterStats).financeDependency == true && playerInventory.GetComponent(PlayerInvent).haveFinance ==true &&
                                       playerInventory.GetComponent(PlayerInvent).haveOtherBank == true){
							 	HelpTextOff();
								 print("clicked submit 8");
								 submit.GetComponent(SubmitDocument).Submit();
							 	}
							 	if (charStats.GetComponent(CharacterStats).financeDependency == false && playerInventory.GetComponent(PlayerInvent).havePersBank == true){
							 	HelpTextOff();
								 print("clicked submit 8");
								 submit.GetComponent(SubmitDocument).Submit();
							 	}
							 }
							}
							//stage 9
							else if (submit.GetComponent(SubmitDocument).stage == 9){
							 HelpTextOff();
							 print("clicked submit 9");
							 submit.GetComponent(SubmitDocument).Submit();
							}
							//stage 10
							else if (submit.GetComponent(SubmitDocument).stage == 10 &&
							 playerInventory.GetComponent(PlayerInvent).haveAccom == true &&
							 playerInventory.GetComponent(PlayerInvent).haveFlight == true){
							 HelpTextOff();
							 print("clicked submit 10");
							 submit.GetComponent(SubmitDocument).Submit();
							}
							//stage 11 -GAME END
							else if (submit.GetComponent(SubmitDocument).stage == 11 &&
							 playerInventory.GetComponent(PlayerInvent).haveVisa == true &&
							 playerInventory.GetComponent(PlayerInvent).haveQuals == true && playerInventory.GetComponent(PlayerInvent).havePolice == true){
							 HelpTextOff();
							 print("clicked submit 11");
							 submit.GetComponent(SubmitDocument).Submit();
							}
							
						}
					} 
				}
			}
					//moving
		else {
		MoveText.text = "Move";
		MoveText.GetComponent.<Renderer>().enabled = true;
			if (Input.GetMouseButtonDown(0)){
			MoveText.GetComponent.<Renderer>().enabled = false;
			DocText.GetComponent.<Renderer>().enabled = false;
			counter.transform.position.y = transform.position.y;
			counter.transform.position.x = transform.position.x;
			PlaySound();
			
			}
		}
	}
}

function HelpTextOff(){
helpText.GetComponent.<Renderer>().enabled = false;
var helpChild1 = GameObject.Find("SubmitText/Arrow1");
	helpChild1.GetComponent.<Renderer>().enabled = false;
var helpChild2 = GameObject.Find("SubmitText/Arrow2");
	helpChild2.GetComponent.<Renderer>().enabled = false;
}

function PlaySound(){
    if (soundSwitch == false){
        soundSwitch = true;
        soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).characterMove;
        soundBank.GetComponent(AudioSource).Play();
        yield WaitForSeconds(0.25);
        soundSwitch = false;
    }
}

function OnMouseExit(){
	MoveText.GetComponent.<Renderer>().enabled = false;
	DocText.GetComponent.<Renderer>().enabled = false;
}

function MoveToArea(){
	counter.transform.position.y = transform.position.y;
	counter.transform.position.x = transform.position.x;
}