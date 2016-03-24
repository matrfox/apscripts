var counterValue = 0;

private var countSwitch = false;

//function Start(){
//transform.position.x = -10;}

function FixedUpdate (){

	if (counterValue < 10){
	GetComponent(TextMesh).text = "0" + (counterValue.ToString());
	}
	else {
	GetComponent(TextMesh).text = (counterValue.ToString());
	}
	/*if (counterValue > 99 && countSwitch==false){
	countSwitch = true;
	AddShunt();
	}*/
}

/*function AddShunt(){

if (counterValue > 99 && countSwitch==false){
	countSwitch=true;
	transform.position.x += 0.5;
	}
}*/

function Bounce(){
	/*if (counterValue > 99){
	GetComponent.<Animation>().Play("Bounce2");
	}
	else {*/
	GetComponent.<Animation>().Play("Bounce1");
	//}
}

function PlusScore (){
	yield WaitForSeconds(0.2);
	counterValue++;
}

function MinusScore(){
	//yield WaitForSeconds(0.2);
	if (counterValue == 0){ return;}
	else {
	counterValue--;
}
}