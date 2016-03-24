
public var chosenCharacter : GameObject;
public var gameIcon : GameObject;
public var playerCounter : GameObject;

public var character1Selected = false;
public var character2Selected = false;
public var character3Selected = false;
public var character4Selected = false;
public var character5Selected = false;
public var character6Selected = false;
public var character7Selected = false;
public var character8Selected = false;
public var character9Selected = false;
public var character10Selected = false;
public var character11Selected = false;
public var character12Selected = false;
public var character13Selected = false;
public var character14Selected = false;
public var character15Selected = false;
public var character16Selected = false;
public var character17Selected = false;
public var character18Selected = false;

public var character1Graphic : GameObject;
public var character2Graphic : GameObject;
public var character3Graphic : GameObject;
public var character4Graphic : GameObject;
public var character5Graphic : GameObject;
public var character6Graphic : GameObject;
public var character7Graphic : GameObject;
public var character8Graphic : GameObject;
public var character9Graphic : GameObject;
public var character10Graphic : GameObject;
public var character11Graphic : GameObject;
public var character12Graphic : GameObject;
public var character13Graphic : GameObject;
public var character14Graphic : GameObject;
public var character15Graphic : GameObject;
public var character16Graphic : GameObject;
public var character17Graphic : GameObject;
public var character18Graphic : GameObject;

private var soundBank : GameObject;
private var soundSwitch = false;

function Start(){
    soundBank = GameObject.Find("Sounds");
    chosenCharacter = GameObject.Find("ChosenCharacter");
    gameIcon = GameObject.Find("CharacterFace");
    playerCounter = GameObject.Find("PlayerCounter");
    character1Graphic = GameObject.Find("Character01/CharacterShade");
    character2Graphic = GameObject.Find("Character02/CharacterShade");
    character3Graphic = GameObject.Find("Character03/CharacterShade");
    character4Graphic = GameObject.Find("Character04/CharacterShade");
    character5Graphic = GameObject.Find("Character05/CharacterShade");
    character6Graphic = GameObject.Find("Character06/CharacterShade");
    character7Graphic = GameObject.Find("Character07/CharacterShade");
    character8Graphic = GameObject.Find("Character08/CharacterShade");
    character9Graphic = GameObject.Find("Character09/CharacterShade");
    character10Graphic = GameObject.Find("Character10/CharacterShade");
    character11Graphic = GameObject.Find("Character11/CharacterShade");
    character12Graphic = GameObject.Find("Character12/CharacterShade");
    character13Graphic = GameObject.Find("Character13/CharacterShade");
    character14Graphic = GameObject.Find("Character14/CharacterShade");
    character15Graphic = GameObject.Find("Character15/CharacterShade");
    character16Graphic = GameObject.Find("Character16/CharacterShade");
    character17Graphic = GameObject.Find("Character17/CharacterShade");
    character18Graphic = GameObject.Find("Character18/CharacterShade");
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
        AllOff();
        yield WaitForSeconds(0.01);
        if (name == "Character01"){
            character1Selected = true;
            character1Graphic.GetComponent(UI.Image).enabled = false;
            chosenCharacter.GetComponent(CharacterIcon).character1Select = true;
            gameIcon.GetComponent(CharacterIcon).character1Select = true;
            playerCounter.GetComponent(CharacterIcon).character1Select = true;
        }
        if (name == "Character02"){
            character2Selected = true;
            character2Graphic.GetComponent(UI.Image).enabled = false;
            chosenCharacter.GetComponent(CharacterIcon).character2Select = true;
            gameIcon.GetComponent(CharacterIcon).character2Select = true;
            playerCounter.GetComponent(CharacterIcon).character2Select = true;
        }
        if (name == "Character03"){
            character3Selected = true;
            character3Graphic.GetComponent(UI.Image).enabled = false;
            chosenCharacter.GetComponent(CharacterIcon).character3Select = true;
            gameIcon.GetComponent(CharacterIcon).character3Select = true;
            playerCounter.GetComponent(CharacterIcon).character3Select = true;
        }
        if (name == "Character04"){
            character4Selected = true;
            character4Graphic.GetComponent(UI.Image).enabled = false;
            chosenCharacter.GetComponent(CharacterIcon).character4Select = true;
            gameIcon.GetComponent(CharacterIcon).character4Select = true;
            playerCounter.GetComponent(CharacterIcon).character4Select = true;
        }
        if (name == "Character05"){
            character5Selected = true;
            character5Graphic.GetComponent(UI.Image).enabled = false;
            chosenCharacter.GetComponent(CharacterIcon).character5Select = true;
            gameIcon.GetComponent(CharacterIcon).character5Select = true;
            playerCounter.GetComponent(CharacterIcon).character5Select = true;
        }
        if (name == "Character06"){
            character6Selected = true;
            character6Graphic.GetComponent(UI.Image).enabled = false;
            chosenCharacter.GetComponent(CharacterIcon).character6Select = true;
            gameIcon.GetComponent(CharacterIcon).character6Select = true;
            playerCounter.GetComponent(CharacterIcon).character6Select = true;
        }
        if (name == "Character07"){
            character7Selected = true;
            character7Graphic.GetComponent(UI.Image).enabled = false;
            chosenCharacter.GetComponent(CharacterIcon).character7Select = true;
            gameIcon.GetComponent(CharacterIcon).character7Select = true;
            playerCounter.GetComponent(CharacterIcon).character7Select = true;
        }
        if (name == "Character08"){
            character8Selected = true;
            character8Graphic.GetComponent(UI.Image).enabled = false;
            chosenCharacter.GetComponent(CharacterIcon).character8Select = true;
            gameIcon.GetComponent(CharacterIcon).character8Select = true;
            playerCounter.GetComponent(CharacterIcon).character8Select = true;
        }
        if (name == "Character09"){
            character9Selected = true;
            character9Graphic.GetComponent(UI.Image).enabled = false;
            chosenCharacter.GetComponent(CharacterIcon).character9Select = true;
            gameIcon.GetComponent(CharacterIcon).character9Select = true;
            playerCounter.GetComponent(CharacterIcon).character9Select = true;
        }
        if (name == "Character10"){
            character10Selected = true;
            character10Graphic.GetComponent(UI.Image).enabled = false;
            chosenCharacter.GetComponent(CharacterIcon).character10Select = true;
            gameIcon.GetComponent(CharacterIcon).character10Select = true;
            playerCounter.GetComponent(CharacterIcon).character10Select = true;
        }
        if (name == "Character11"){
            character11Selected = true;
            character11Graphic.GetComponent(UI.Image).enabled = false;
            chosenCharacter.GetComponent(CharacterIcon).character11Select = true;
            gameIcon.GetComponent(CharacterIcon).character11Select = true;
            playerCounter.GetComponent(CharacterIcon).character11Select = true;
        }
        if (name == "Character12"){
            character12Selected = true;
            character12Graphic.GetComponent(UI.Image).enabled = false;
            chosenCharacter.GetComponent(CharacterIcon).character12Select = true;
            gameIcon.GetComponent(CharacterIcon).character12Select = true;
            playerCounter.GetComponent(CharacterIcon).character12Select = true;
        }
        if (name == "Character13"){
            character13Selected = true;
            character13Graphic.GetComponent(UI.Image).enabled = false;
            chosenCharacter.GetComponent(CharacterIcon).character13Select = true;
            gameIcon.GetComponent(CharacterIcon).character13Select = true;
            playerCounter.GetComponent(CharacterIcon).character13Select = true;
        }
        if (name == "Character14"){
            character14Selected = true;
            character14Graphic.GetComponent(UI.Image).enabled = false;
            chosenCharacter.GetComponent(CharacterIcon).character14Select = true;
            gameIcon.GetComponent(CharacterIcon).character14Select = true;
            playerCounter.GetComponent(CharacterIcon).character14Select = true;
        }
        if (name == "Character15"){
            character15Selected = true;
            character15Graphic.GetComponent(UI.Image).enabled = false;
            chosenCharacter.GetComponent(CharacterIcon).character15Select = true;
            gameIcon.GetComponent(CharacterIcon).character15Select = true;
            playerCounter.GetComponent(CharacterIcon).character15Select = true;
        }
        if (name == "Character16"){
            character16Selected = true;
            character16Graphic.GetComponent(UI.Image).enabled = false;
            chosenCharacter.GetComponent(CharacterIcon).character16Select = true;
            gameIcon.GetComponent(CharacterIcon).character16Select = true;
            playerCounter.GetComponent(CharacterIcon).character16Select = true;
        }
        if (name == "Character17"){
            character17Selected = true;
            character17Graphic.GetComponent(UI.Image).enabled = false;
            chosenCharacter.GetComponent(CharacterIcon).character17Select = true;
            gameIcon.GetComponent(CharacterIcon).character17Select = true;
            playerCounter.GetComponent(CharacterIcon).character17Select = true;
        }
        if (name == "Character18"){
            character18Selected = true;
            character18Graphic.GetComponent(UI.Image).enabled = false;
            chosenCharacter.GetComponent(CharacterIcon).character18Select = true;
            gameIcon.GetComponent(CharacterIcon).character18Select = true;
            playerCounter.GetComponent(CharacterIcon).character18Select = true;
        }
        chosenCharacter.GetComponent(CharacterIcon).Change();
        gameIcon.GetComponent(CharacterIcon).Change();
        playerCounter.GetComponent(CharacterIcon).Change();
        PlaySound();
    }
}

function AllOff(){
character1Selected = false;
character2Selected = false;
character3Selected = false;
character4Selected = false;
character5Selected = false;
character6Selected = false;
character7Selected = false;
character8Selected = false;
character9Selected = false;
character10Selected = false;
character11Selected = false;
character12Selected = false;
character13Selected = false;
character14Selected = false;
character15Selected = false;
character16Selected = false;
character17Selected = false;
character18Selected = false;

character1Graphic.GetComponent(UI.Image).enabled = true;
character2Graphic.GetComponent(UI.Image).enabled = true;
character3Graphic.GetComponent(UI.Image).enabled = true;
character4Graphic.GetComponent(UI.Image).enabled = true;
character5Graphic.GetComponent(UI.Image).enabled = true;
character6Graphic.GetComponent(UI.Image).enabled = true;
character7Graphic.GetComponent(UI.Image).enabled = true;
character8Graphic.GetComponent(UI.Image).enabled = true;
character9Graphic.GetComponent(UI.Image).enabled = true;
character10Graphic.GetComponent(UI.Image).enabled = true;
character11Graphic.GetComponent(UI.Image).enabled = true;
character12Graphic.GetComponent(UI.Image).enabled = true;
character13Graphic.GetComponent(UI.Image).enabled = true;
character14Graphic.GetComponent(UI.Image).enabled = true;
character15Graphic.GetComponent(UI.Image).enabled = true;
character16Graphic.GetComponent(UI.Image).enabled = true;
character17Graphic.GetComponent(UI.Image).enabled = true;
character18Graphic.GetComponent(UI.Image).enabled = true;

playerCounter.GetComponent(CharacterIcon).character1Select = false;
playerCounter.GetComponent(CharacterIcon).character2Select = false;
playerCounter.GetComponent(CharacterIcon).character3Select = false;
playerCounter.GetComponent(CharacterIcon).character4Select = false;
playerCounter.GetComponent(CharacterIcon).character5Select = false;
playerCounter.GetComponent(CharacterIcon).character6Select = false;
playerCounter.GetComponent(CharacterIcon).character7Select = false;
playerCounter.GetComponent(CharacterIcon).character8Select = false;
playerCounter.GetComponent(CharacterIcon).character9Select = false;
playerCounter.GetComponent(CharacterIcon).character10Select = false;
playerCounter.GetComponent(CharacterIcon).character11Select = false;
playerCounter.GetComponent(CharacterIcon).character12Select = false;
playerCounter.GetComponent(CharacterIcon).character13Select = false;
playerCounter.GetComponent(CharacterIcon).character14Select = false;
playerCounter.GetComponent(CharacterIcon).character15Select = false;
playerCounter.GetComponent(CharacterIcon).character16Select = false;
playerCounter.GetComponent(CharacterIcon).character17Select = false;
playerCounter.GetComponent(CharacterIcon).character18Select = false;

chosenCharacter.GetComponent(CharacterIcon).character1Select = false;
gameIcon.GetComponent(CharacterIcon).character1Select = false;
chosenCharacter.GetComponent(CharacterIcon).character2Select = false;
gameIcon.GetComponent(CharacterIcon).character2Select = false;
chosenCharacter.GetComponent(CharacterIcon).character3Select = false;
gameIcon.GetComponent(CharacterIcon).character3Select = false;
chosenCharacter.GetComponent(CharacterIcon).character4Select = false;
gameIcon.GetComponent(CharacterIcon).character4Select = false;
chosenCharacter.GetComponent(CharacterIcon).character5Select = false;
gameIcon.GetComponent(CharacterIcon).character5Select = false;
chosenCharacter.GetComponent(CharacterIcon).character6Select = false;
gameIcon.GetComponent(CharacterIcon).character6Select = false;
chosenCharacter.GetComponent(CharacterIcon).character7Select = false;
gameIcon.GetComponent(CharacterIcon).character7Select = false;
chosenCharacter.GetComponent(CharacterIcon).character8Select = false;
gameIcon.GetComponent(CharacterIcon).character8Select = false;
chosenCharacter.GetComponent(CharacterIcon).character9Select = false;
gameIcon.GetComponent(CharacterIcon).character9Select = false;
chosenCharacter.GetComponent(CharacterIcon).character10Select = false;
gameIcon.GetComponent(CharacterIcon).character10Select = false;
chosenCharacter.GetComponent(CharacterIcon).character11Select = false;
gameIcon.GetComponent(CharacterIcon).character11Select = false;
chosenCharacter.GetComponent(CharacterIcon).character12Select = false;
gameIcon.GetComponent(CharacterIcon).character12Select = false;
chosenCharacter.GetComponent(CharacterIcon).character13Select = false;
gameIcon.GetComponent(CharacterIcon).character13Select = false;
chosenCharacter.GetComponent(CharacterIcon).character14Select = false;
gameIcon.GetComponent(CharacterIcon).character14Select = false;
chosenCharacter.GetComponent(CharacterIcon).character15Select = false;
gameIcon.GetComponent(CharacterIcon).character15Select = false;
chosenCharacter.GetComponent(CharacterIcon).character16Select = false;
gameIcon.GetComponent(CharacterIcon).character16Select = false;
chosenCharacter.GetComponent(CharacterIcon).character17Select = false;
gameIcon.GetComponent(CharacterIcon).character17Select = false;
chosenCharacter.GetComponent(CharacterIcon).character18Select = false;
gameIcon.GetComponent(CharacterIcon).character18Select = false;
}



