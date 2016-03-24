public var toggle1Selected = false;
public var toggle2Selected = false;
public var toggle3Selected = false;
public var toggle4Selected = false;
public var toggle5Selected = false;
public var toggle6Selected = false;

public var toggle1Graphic : GameObject;
public var toggle2Graphic : GameObject;
public var toggle3Graphic : GameObject;
public var toggle4Graphic : GameObject;
public var toggle5Graphic : GameObject;
public var toggle6Graphic : GameObject;

public var startButton : GameObject;

public var usedToggle = false;

private var soundBank : GameObject;
private var soundSwitch = false;

function Start(){
    soundBank = GameObject.Find("Sounds");
    startButton = GameObject.Find("StartButton");
    toggle1Graphic = GameObject.Find("MA_Toggle/SelectedGraphic");
    toggle2Graphic = GameObject.Find("MSc_Toggle/SelectedGraphic");
    toggle3Graphic = GameObject.Find("MDes_Toggle/SelectedGraphic");
    toggle4Graphic = GameObject.Find("BA_Toggle/SelectedGraphic");
    toggle5Graphic = GameObject.Find("BSc_Toggle/SelectedGraphic");
    toggle6Graphic = GameObject.Find("FE_Toggle/SelectedGraphic");
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
        if (name == "MA_Toggle") toggle1Selected = true; 
        if (name == "MSc_Toggle") toggle2Selected = true; 
        if (name == "MDes_Toggle") toggle3Selected = true; 
        if (name == "BA_Toggle") toggle4Selected = true; 
        if (name == "BSc_Toggle") toggle5Selected = true; 
        if (name == "FE_Toggle") toggle6Selected = true; 
        NewSelection();
        PlaySound();
    }
    //change colour?
}

function NewSelection(){
if (toggle1Selected == true){ AllOff();   toggle1Graphic.GetComponent(UI.Image).enabled = true; startButton.GetComponent(StartButton).toggle1Selected = true;}
if (toggle2Selected == true){ AllOff();  toggle2Graphic.GetComponent(UI.Image).enabled = true; startButton.GetComponent(StartButton).toggle2Selected = true;}
if (toggle3Selected == true){ AllOff();   toggle3Graphic.GetComponent(UI.Image).enabled = true; startButton.GetComponent(StartButton).toggle3Selected = true;}
if (toggle4Selected == true){ AllOff();   toggle4Graphic.GetComponent(UI.Image).enabled = true; startButton.GetComponent(StartButton).toggle4Selected = true;}
if (toggle5Selected == true){ AllOff();   toggle5Graphic.GetComponent(UI.Image).enabled = true; startButton.GetComponent(StartButton).toggle5Selected = true;}
if (toggle6Selected == true){ AllOff();   toggle6Graphic.GetComponent(UI.Image).enabled = true; startButton.GetComponent(StartButton).toggle6Selected = true;}

}

function AllOff(){
toggle1Selected = false;
toggle2Selected = false;
toggle3Selected = false;
toggle4Selected = false;
toggle5Selected = false;
toggle6Selected = false;
startButton.GetComponent(StartButton).toggle1Selected = false;
startButton.GetComponent(StartButton).toggle2Selected = false;
startButton.GetComponent(StartButton).toggle3Selected = false;
startButton.GetComponent(StartButton).toggle4Selected = false;
startButton.GetComponent(StartButton).toggle5Selected = false;
startButton.GetComponent(StartButton).toggle6Selected = false;
toggle1Graphic.GetComponent(UI.Image).enabled = false;
toggle2Graphic.GetComponent(UI.Image).enabled = false;
toggle3Graphic.GetComponent(UI.Image).enabled = false;
toggle4Graphic.GetComponent(UI.Image).enabled = false;
toggle5Graphic.GetComponent(UI.Image).enabled = false;
toggle6Graphic.GetComponent(UI.Image).enabled = false;



}