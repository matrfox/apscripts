
var docCard : GameObject;

private var soundBank : GameObject;
private var soundSwitch = false;

function Start(){
    soundBank = GameObject.Find("Sounds");
}

//simply sends answerRight to doc question script
function OnMouseOver(){
    if (Input.GetMouseButtonDown(0)){
        if (docCard.GetComponent(DocumentQuestion).questionWait == false){
            docCard.GetComponent(DocumentQuestion).questionWait = true;
            docCard.GetComponent(DocumentQuestion).answerRight();
            PlaySound();
            ResetI();
        }
    }
    GetComponent.<Renderer>().material.color.a = 1;
}

function OnMouseExit(){
    GetComponent.<Renderer>().material.color.a = 0;
}

function PlaySound(){
    if (soundSwitch == false){
        soundSwitch = true;
        soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).rightAnswer;
        soundBank.GetComponent(AudioSource).Play();
        yield WaitForSeconds(1);
        soundSwitch = false;
    }
}

function ResetI(){
    yield WaitForSeconds(1);
    docCard.GetComponent(DocumentQuestion).questionWait = false;
}