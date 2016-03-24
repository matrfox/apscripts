
var startText : GameObject;
var largeFont = 32;
var smallFont = 20;

var characterCam : GameObject;
var gameCam : GameObject;

public var nameField : GameObject;
var characterName : TextMesh;

var characterStats : GameObject;

var playerInvent : GameObject;

var countryLiveToggle : GameObject;
var countryStudyToggle : GameObject;

var tutorial : GameObject;

public var toggle1Selected = false;
public var toggle2Selected = false;
public var toggle3Selected = false;
public var toggle4Selected = false;
public var toggle5Selected = false;
public var toggle6Selected = false;

public var country10Graphic : GameObject;
public var country15Graphic : GameObject; 
public var country18Graphic : GameObject;
public var country21Graphic : GameObject;
public var country24Graphic : GameObject; 
public var country40Graphic : GameObject; 
public var country64Graphic : GameObject; 
public var country90Graphic : GameObject; 
public var country97Graphic : GameObject;
public var country102Graphic : GameObject; 
public var country113Graphic : GameObject;
public var country162Graphic : GameObject; 
public var country189Graphic : GameObject; 
public var country190Graphic : GameObject;
public var country227Graphic : GameObject;
public var country237Graphic : GameObject;
public var country238Graphic : GameObject;

public var country1Graphic : GameObject; 
public var country107Graphic : GameObject; 
public var country173Graphic : GameObject; 
public var country4Graphic : GameObject; 
public var country108Graphic : GameObject; 
public var country177Graphic : GameObject; 
public var country11Graphic : GameObject; 
public var country111Graphic : GameObject;
public var country183Graphic : GameObject; 
public var country12Graphic : GameObject; 
public var country116Graphic : GameObject; 
public var country186Graphic : GameObject; 
public var country17Graphic : GameObject; 
public var country117Graphic : GameObject; 
public var country196Graphic : GameObject; 
public var country19Graphic : GameObject; 
public var country120Graphic : GameObject; 
public var country212Graphic : GameObject; 
public var country28Graphic : GameObject;
public var country122Graphic : GameObject; 
public var country218Graphic : GameObject; 
public var country32Graphic : GameObject;
public var country123Graphic : GameObject; 
public var country220Graphic : GameObject; 
public var country47Graphic : GameObject; 
public var country126Graphic : GameObject; 
public var country229Graphic : GameObject; 
public var country50Graphic : GameObject; 
public var country129Graphic : GameObject; 
public var country230Graphic : GameObject; 
public var country58Graphic : GameObject; 
public var country148Graphic : GameObject; 
public var country231Graphic : GameObject; 
public var country67Graphic : GameObject; 
public var country153Graphic : GameObject; 
public var country236Graphic : GameObject; 
public var country84Graphic : GameObject; 
public var country170Graphic : GameObject; 
public var country235Graphic : GameObject; 
public var country240Graphic : GameObject; 
public var country248Graphic : GameObject; 

public var study10Graphic : GameObject;
public var study15Graphic : GameObject; 
public var study18Graphic : GameObject;
public var study21Graphic : GameObject;
public var study24Graphic : GameObject; 
public var study40Graphic : GameObject; 
public var study64Graphic : GameObject; 
public var study90Graphic : GameObject; 
public var study97Graphic : GameObject;
public var study102Graphic : GameObject; 
public var study113Graphic : GameObject;
public var study162Graphic : GameObject; 
public var study189Graphic : GameObject; 
public var study190Graphic : GameObject;
public var study227Graphic : GameObject;
public var study237Graphic : GameObject;
public var study238Graphic : GameObject;

public var depToggle1 = false;
public var depToggle2 = false;

var documentQuestion : GameObject;

private var soundBank : GameObject;
private var soundSwitch = false;


function Start (){
    soundBank = GameObject.Find("Sounds");
    startText.GetComponent(UI.Text).fontSize = smallFont;
    startText.GetComponent(UI.Text).text = "Unfinished";
    startText.GetComponent(UI.Text).color = Vector4(0.5,0.5,0.5,255);
    nameField = GameObject.Find("NameField");
    LoadGraphics();
}

function LoadGraphics(){
yield WaitForSeconds(1);

//loading in country graphics
country10Graphic = GameObject.Find("ContentMove_Country/Toggle10/SelectedGraphic");
country15Graphic = GameObject.Find("ContentMove_Country/Toggle15/SelectedGraphic");
country18Graphic = GameObject.Find("ContentMove_Country/Toggle18/SelectedGraphic");
country21Graphic = GameObject.Find("ContentMove_Country/Toggle21/SelectedGraphic");
country24Graphic = GameObject.Find("ContentMove_Country/Toggle24/SelectedGraphic");
country40Graphic = GameObject.Find("ContentMove_Country/Toggle40/SelectedGraphic");
country64Graphic = GameObject.Find("ContentMove_Country/Toggle64/SelectedGraphic");
country90Graphic = GameObject.Find("ContentMove_Country/Toggle90/SelectedGraphic");
country97Graphic = GameObject.Find("ContentMove_Country/Toggle97/SelectedGraphic");
country102Graphic = GameObject.Find("ContentMove_Country/Toggle102/SelectedGraphic");
country113Graphic = GameObject.Find("ContentMove_Country/Toggle113/SelectedGraphic");
country162Graphic = GameObject.Find("ContentMove_Country/Toggle162/SelectedGraphic");
country189Graphic = GameObject.Find("ContentMove_Country/Toggle189/SelectedGraphic");
country190Graphic = GameObject.Find("ContentMove_Country/Toggle190/SelectedGraphic");
country227Graphic = GameObject.Find("ContentMove_Country/Toggle227/SelectedGraphic");
country237Graphic = GameObject.Find("ContentMove_Country/Toggle237/SelectedGraphic");
country238Graphic = GameObject.Find("ContentMove_Country/Toggle238/SelectedGraphic");

country1Graphic = GameObject.Find("ContentMove_Country/Toggle1/SelectedGraphic"); 
country107Graphic = GameObject.Find("ContentMove_Country/Toggle107/SelectedGraphic"); 
country173Graphic = GameObject.Find("ContentMove_Country/Toggle173/SelectedGraphic"); 
country4Graphic = GameObject.Find("ContentMove_Country/Toggle4/SelectedGraphic"); 
country108Graphic = GameObject.Find("ContentMove_Country/Toggle108/SelectedGraphic"); 
country177Graphic = GameObject.Find("ContentMove_Country/Toggle177/SelectedGraphic"); 
country11Graphic = GameObject.Find("ContentMove_Country/Toggle11/SelectedGraphic"); 
country111Graphic = GameObject.Find("ContentMove_Country/Toggle111/SelectedGraphic");
country183Graphic = GameObject.Find("ContentMove_Country/Toggle183/SelectedGraphic"); 
country12Graphic = GameObject.Find("ContentMove_Country/Toggle12/SelectedGraphic"); 
country116Graphic = GameObject.Find("ContentMove_Country/Toggle116/SelectedGraphic"); 
country186Graphic = GameObject.Find("ContentMove_Country/Toggle186/SelectedGraphic"); 
country17Graphic = GameObject.Find("ContentMove_Country/Toggle17/SelectedGraphic"); 
country117Graphic = GameObject.Find("ContentMove_Country/Toggle117/SelectedGraphic"); 
country196Graphic = GameObject.Find("ContentMove_Country/Toggle196/SelectedGraphic"); 
country19Graphic = GameObject.Find("ContentMove_Country/Toggle19/SelectedGraphic"); 
country120Graphic = GameObject.Find("ContentMove_Country/Toggle120/SelectedGraphic"); 
country212Graphic = GameObject.Find("ContentMove_Country/Toggle212/SelectedGraphic"); 
country28Graphic = GameObject.Find("ContentMove_Country/Toggle28/SelectedGraphic");
country122Graphic = GameObject.Find("ContentMove_Country/Toggle122/SelectedGraphic"); 
country218Graphic = GameObject.Find("ContentMove_Country/Toggle218/SelectedGraphic"); 
country32Graphic = GameObject.Find("ContentMove_Country/Toggle32/SelectedGraphic");
country123Graphic = GameObject.Find("ContentMove_Country/Toggle123/SelectedGraphic"); 
country220Graphic = GameObject.Find("ContentMove_Country/Toggle220/SelectedGraphic"); 
country47Graphic = GameObject.Find("ContentMove_Country/Toggle147/SelectedGraphic"); 
country126Graphic = GameObject.Find("ContentMove_Country/Toggle126/SelectedGraphic"); 
country229Graphic = GameObject.Find("ContentMove_Country/Toggle229/SelectedGraphic"); 
country50Graphic = GameObject.Find("ContentMove_Country/Toggle50/SelectedGraphic"); 
country129Graphic = GameObject.Find("ContentMove_Country/Toggle129/SelectedGraphic"); 
country230Graphic = GameObject.Find("ContentMove_Country/Toggle230/SelectedGraphic"); 
country58Graphic = GameObject.Find("ContentMove_Country/Toggle58/SelectedGraphic"); 
country148Graphic = GameObject.Find("ContentMove_Country/Toggle148/SelectedGraphic"); 
country231Graphic = GameObject.Find("ContentMove_Country/Toggle231/SelectedGraphic"); 
country67Graphic = GameObject.Find("ContentMove_Country/Toggle67/SelectedGraphic"); 
country153Graphic = GameObject.Find("ContentMove_Country/Toggle153/SelectedGraphic"); 
country236Graphic = GameObject.Find("ContentMove_Country/Toggle236/SelectedGraphic"); 
country84Graphic = GameObject.Find("ContentMove_Country/Toggle84/SelectedGraphic"); 
country170Graphic = GameObject.Find("ContentMove_Country/Toggle170/SelectedGraphic"); 
country235Graphic = GameObject.Find("ContentMove_Country/Toggle235/SelectedGraphic"); 
country240Graphic = GameObject.Find("ContentMove_Country/Toggle240/SelectedGraphic"); 
country248Graphic = GameObject.Find("ContentMove_Country/Toggle248/SelectedGraphic"); 

//loading in study graphics
study10Graphic = GameObject.Find("ContentMove_Study/Toggle10/SelectedGraphic");
study15Graphic = GameObject.Find("ContentMove_Study/Toggle15/SelectedGraphic");
study18Graphic = GameObject.Find("ContentMove_Study/Toggle18/SelectedGraphic");
study21Graphic = GameObject.Find("ContentMove_Study/Toggle21/SelectedGraphic");
study24Graphic = GameObject.Find("ContentMove_Study/Toggle24/SelectedGraphic");
study40Graphic = GameObject.Find("ContentMove_Study/Toggle40/SelectedGraphic");
study64Graphic = GameObject.Find("ContentMove_Study/Toggle64/SelectedGraphic");
study90Graphic = GameObject.Find("ContentMove_Study/Toggle90/SelectedGraphic");
study97Graphic = GameObject.Find("ContentMove_Study/Toggle97/SelectedGraphic");
study102Graphic = GameObject.Find("ContentMove_Study/Toggle102/SelectedGraphic");
study113Graphic = GameObject.Find("ContentMove_Study/Toggle113/SelectedGraphic");
study162Graphic = GameObject.Find("ContentMove_Study/Toggle162/SelectedGraphic");
study189Graphic = GameObject.Find("ContentMove_Study/Toggle189/SelectedGraphic");
study190Graphic = GameObject.Find("ContentMove_Study/Toggle190/SelectedGraphic");
study227Graphic = GameObject.Find("ContentMove_Study/Toggle227/SelectedGraphic");
study237Graphic = GameObject.Find("ContentMove_Study/Toggle237/SelectedGraphic");
study238Graphic = GameObject.Find("ContentMove_Study/Toggle238/SelectedGraphic");

}

var updateToggle = false;

function FixedUpdate(){
if (updateToggle == false){
if(countryLiveToggle.GetComponent(CountryToggle).usedToggle == true &&  countryStudyToggle.GetComponent(CountryToggle).usedToggle == true ){

if (toggle1Selected == true || toggle2Selected == true || toggle3Selected == true || toggle4Selected == true || toggle5Selected == true || toggle6Selected == true){

if (depToggle1 == true || depToggle2 == true){
//unfade text
updateToggle = true;
startText.GetComponent(UI.Text).color = Vector4(0.2,0.2,0.2,255);
startText.GetComponent(UI.Text).text = "Start";

}}}}}

function OnMouseOver(){
if (updateToggle == true){
if (Input.GetMouseButtonDown(0)){
//import name
characterName.text = nameField.GetComponent(UI.InputField).text;
soundBank.GetComponent(AudioSource).clip = soundBank.GetComponent(SoundBank).selectionPop;
soundBank.GetComponent(AudioSource).Play();
CheckResults();
characterStats.GetComponent(CharacterStats).CheckEnglish();
documentQuestion.GetComponent(SubmitDocument).SetStage();
playerInvent.GetComponent(PlayerInvent).checkStage();
playerInvent.GetComponent(PlayerInvent).StartAreaQuantity();
//Start Tutorial
//tutorial.GetComponent(Tutorial).StartTutorial();

characterCam.GetComponent(Camera).enabled = false;
gameCam.GetComponent(Camera).enabled = true;
}

startText.GetComponent(UI.Text).fontSize = largeFont;
//rollover
}
}

function OnMouseExit(){
startText.GetComponent(UI.Text).fontSize = smallFont;
}

function CheckResults(){
print("Checking Stat Start");
    //lived in country
    if (country10Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingNationality = true;}
    if (country15Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingNationality = true;}
    if (country18Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingNationality = true;}
    if (country21Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingNationality = true;}
    if (country24Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingNationality = true;}
    if (country40Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingNationality = true;}
    if (country64Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingNationality = true;}
    if (country90Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingNationality = true;}
    if (country97Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingNationality = true;}
    if (country102Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingNationality = true;}
    if (country113Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingNationality = true;}
    if (country162Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingNationality = true;}
    if (country189Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingNationality = true;}
    if (country190Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingNationality = true;}
    if (country227Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingNationality = true;}
    if (country237Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingNationality = true;}
    if (country238Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingNationality = true;}

    //studied in 

    if (study10Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingStudy = true;}
    if (study15Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingStudy = true;}
    if (study18Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingStudy = true;}
    if (study21Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingStudy = true;}
    if (study24Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingStudy = true;}
    if (study40Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingStudy = true;}
    if (study64Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingStudy = true;}
    if (study90Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingStudy = true;}
    if (study97Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingStudy = true;}
    if (study102Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingStudy = true;}
    if (study113Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingStudy = true;}
    if (study162Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingStudy = true;}
    if (study189Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingStudy = true;}
    if (study190Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingStudy = true;}
    if (study227Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingStudy = true;}
    if (study237Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingStudy = true;}
    if (study238Graphic.GetComponent(UI.Image).enabled == true) {characterStats.GetComponent(CharacterStats).englishSpeakingStudy = true;}
    //course type

    if (toggle1Selected==true) characterStats.GetComponent(CharacterStats).courseType = 1;
    if (toggle2Selected==true) characterStats.GetComponent(CharacterStats).courseType = 2;
    if (toggle3Selected==true) characterStats.GetComponent(CharacterStats).courseType = 3;
    if (toggle4Selected==true) characterStats.GetComponent(CharacterStats).courseType = 4;
    if (toggle5Selected==true) characterStats.GetComponent(CharacterStats).courseType = 5;
    if (toggle6Selected==true) characterStats.GetComponent(CharacterStats).courseType = 6;

    //dependency

    if (depToggle1==true) characterStats.GetComponent(CharacterStats).financeDependency = false;
    if (depToggle2==true) characterStats.GetComponent(CharacterStats).financeDependency = true;

    //police

    if (country1Graphic.GetComponent(UI.Image).enabled == true || country107Graphic.GetComponent(UI.Image).enabled == true || country173Graphic.GetComponent(UI.Image).enabled == true || 
        country4Graphic.GetComponent(UI.Image).enabled == true || country108Graphic.GetComponent(UI.Image).enabled == true || country177Graphic.GetComponent(UI.Image).enabled == true || 
        country11Graphic.GetComponent(UI.Image).enabled == true || country111Graphic.GetComponent(UI.Image).enabled == true || country183Graphic.GetComponent(UI.Image).enabled == true || 
        country12Graphic.GetComponent(UI.Image).enabled == true || country116Graphic.GetComponent(UI.Image).enabled == true || country186Graphic.GetComponent(UI.Image).enabled == true || 
        country17Graphic.GetComponent(UI.Image).enabled == true || country117Graphic.GetComponent(UI.Image).enabled == true || country196Graphic.GetComponent(UI.Image).enabled == true || 
        country19Graphic.GetComponent(UI.Image).enabled == true || country120Graphic.GetComponent(UI.Image).enabled == true || country212Graphic.GetComponent(UI.Image).enabled == true || 
        country28Graphic.GetComponent(UI.Image).enabled == true || country122Graphic.GetComponent(UI.Image).enabled == true || country218Graphic.GetComponent(UI.Image).enabled == true || 
        country32Graphic.GetComponent(UI.Image).enabled == true || country123Graphic.GetComponent(UI.Image).enabled == true || country220Graphic.GetComponent(UI.Image).enabled == true || 
        country47Graphic.GetComponent(UI.Image).enabled == true || country126Graphic.GetComponent(UI.Image).enabled == true || country229Graphic.GetComponent(UI.Image).enabled == true || 
        country50Graphic.GetComponent(UI.Image).enabled == true || country129Graphic.GetComponent(UI.Image).enabled == true || country230Graphic.GetComponent(UI.Image).enabled == true || 
        country58Graphic.GetComponent(UI.Image).enabled == true || country148Graphic.GetComponent(UI.Image).enabled == true || country231Graphic.GetComponent(UI.Image).enabled == true || 
        country67Graphic.GetComponent(UI.Image).enabled == true || country153Graphic.GetComponent(UI.Image).enabled == true || country236Graphic.GetComponent(UI.Image).enabled == true || 
        country84Graphic.GetComponent(UI.Image).enabled == true || country170Graphic.GetComponent(UI.Image).enabled == true || country235Graphic.GetComponent(UI.Image).enabled == true || 
        country240Graphic.GetComponent(UI.Image).enabled == true || country248Graphic.GetComponent(UI.Image).enabled == true ) 
    
    
    
    
    {characterStats.GetComponent(CharacterStats).policeNeeded = true;
    print("po-po");}

}