public var toggle1Selected = false;
public var toggle2Selected = false;


public var toggle1Graphic : GameObject;
public var toggle2Graphic : GameObject;

public var startButton : GameObject;

public var usedToggle = false;
private var soundBank : GameObject;
private var soundSwitch = false;

function Start(){
    soundBank = GameObject.Find("Sounds");
    startButton = GameObject.Find("StartButton");
    toggle1Graphic = GameObject.Find("Self_Toggle/SelectedGraphic");
    toggle2Graphic = GameObject.Find("Other_Toggle/SelectedGraphic");

}

function PlaySound(){
    if (soundSwitch == false){
        soundSwitch = true;
        soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).selectionPop;
        soundBank.GetComponent(AudioSource).Play();
        yield WaitForSeconds(1);
        soundSwitch = false;
    }
}

function OnMouseOver(){
    if (Input.GetMouseButtonDown(0)){
        usedToggle = true;
        if (name == "Self_Toggle") toggle1Selected = true; 
        if (name == "Other_Toggle") toggle2Selected = true; 
        PlaySound();
        NewSelection();
    }
    //change colour?
}

function NewSelection(){
if (toggle1Selected == true){ AllOff();   toggle1Graphic.GetComponent(UI.Image).enabled = true; startButton.GetComponent(StartButton).depToggle1 = true;}
if (toggle2Selected == true){ AllOff();   toggle2Graphic.GetComponent(UI.Image).enabled = true; startButton.GetComponent(StartButton).depToggle2 = true;}

}

function AllOff(){
toggle1Selected = false;
toggle2Selected = false;
startButton.GetComponent(StartButton).depToggle1 = false;
startButton.GetComponent(StartButton).depToggle2 = false;
toggle1Graphic.GetComponent(UI.Image).enabled = false;
toggle2Graphic.GetComponent(UI.Image).enabled = false;




}