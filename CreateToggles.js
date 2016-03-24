
var togglePrefab : Transform;
var togglePrefab2 : Transform;
public var inc = 0;
public var moveInc = 0;

function Start () {
if (name == "ContentMove_Country"){
inc++;

var toggle = GameObject.Instantiate(togglePrefab);
toggle.transform.SetParent(GameObject.Find("ContentMove_Country").transform);
toggle.transform.position = (GameObject.Find("ContentMove_Country/ToggleNo").transform.position);
toggle.name = "Toggle"+(inc);


	while (inc < 250){
	inc++;
	moveInc = moveInc - 25;
	var toggle2 = GameObject.Instantiate(togglePrefab);
	toggle2.transform.SetParent(GameObject.Find("ContentMove_Country").transform);
	toggle2.transform.position = (GameObject.Find("ContentMove_Country/ToggleNo").transform.position);
	toggle2.transform.localPosition.y = toggle2.transform.localPosition.y + moveInc;
	toggle2.name = "Toggle"+(inc);
	}
}
else if (name == "ContentMove_Study"){
inc++;

var toggleStudy = GameObject.Instantiate(togglePrefab2);
toggleStudy.transform.SetParent(GameObject.Find("ContentMove_Study").transform);
toggleStudy.transform.position = (GameObject.Find("ContentMove_Study/ToggleNo").transform.position);
toggleStudy.name = "Toggle"+(inc);


	while (inc < 250){
	inc++;
	moveInc = moveInc - 25;
	var toggle2Study = GameObject.Instantiate(togglePrefab2);
	toggle2Study.transform.SetParent(GameObject.Find("ContentMove_Study").transform);
	toggle2Study.transform.position = (GameObject.Find("ContentMove_Study/ToggleNo").transform.position);
	toggle2Study.transform.localPosition.y = toggle2Study.transform.localPosition.y + moveInc;
	toggle2Study.name = "Toggle"+(inc);
	}
}

}

