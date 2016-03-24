public var character1Select = false;
public var character2Select = false;
public var character3Select = false;
public var character4Select = false;
public var character5Select = false;
public var character6Select = false;
public var character7Select = false;
public var character8Select = false;
public var character9Select = false;
public var character10Select = false;
public var character11Select = false;
public var character12Select = false;
public var character13Select = false;
public var character14Select = false;
public var character15Select = false;
public var character16Select = false;
public var character17Select = false;
public var character18Select = false;

var self : GameObject;

var char1Mat : Material;
var char2Mat : Material;
var char3Mat : Material;
var char4Mat : Material;
var char5Mat : Material;
var char6Mat : Material;
var char7Mat : Material;
var char8Mat : Material;
var char9Mat : Material;
var char10Mat : Material;
var char11Mat : Material;
var char12Mat : Material;
var char13Mat : Material;
var char14Mat : Material;
var char15Mat : Material;
var char16Mat : Material;
var char17Mat : Material;
var char18Mat : Material;

function Change(){
	if (character1Select == true){
		self.GetComponent.<Renderer>().material = char1Mat;
	}
	if (character2Select == true){
		self.GetComponent.<Renderer>().material = char2Mat;
	}
	if (character3Select == true){
		self.GetComponent.<Renderer>().material = char3Mat;
	}
	if (character4Select == true){
		self.GetComponent.<Renderer>().material = char4Mat;
	}
	if (character5Select == true){
		self.GetComponent.<Renderer>().material = char5Mat;
	}
	if (character6Select == true){
		self.GetComponent.<Renderer>().material = char6Mat;
	}
	if (character7Select == true){
		self.GetComponent.<Renderer>().material = char7Mat;
	}
	if (character8Select == true){
		self.GetComponent.<Renderer>().material = char8Mat;
	}
	if (character9Select == true){
		self.GetComponent.<Renderer>().material = char9Mat;
	}
	if (character10Select == true){
		self.GetComponent.<Renderer>().material = char10Mat;
	}
	if (character11Select == true){
		self.GetComponent.<Renderer>().material = char11Mat;
	}
	if (character12Select == true){
		self.GetComponent.<Renderer>().material = char12Mat;
	}
	if (character13Select == true){
		self.GetComponent.<Renderer>().material = char13Mat;
	}
	if (character14Select == true){
		self.GetComponent.<Renderer>().material = char14Mat;
	}
	if (character15Select == true){
		self.GetComponent.<Renderer>().material = char15Mat;
	}
	if (character16Select == true){
		self.GetComponent.<Renderer>().material = char16Mat;
	}
	if (character17Select == true){
		self.GetComponent.<Renderer>().material = char17Mat;
	}
	if (character18Select == true){
		self.GetComponent.<Renderer>().material = char18Mat;
	}
}