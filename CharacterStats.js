
//new rule sets based on character selection
 var courseType = 0;
/*
Course Types
0 = none chosen
1 = MA
2 = MSc
3 = MDes
4 = BA
5 = BSc
6 = FE
*/
 var financeDependency = false;
// True = parents etc (other) , false = self
 var englishSpeakingNationality = false;
 var englishSpeakingStudy = false;
 var englishSpeaking = false;
 var policeNeeded = false;
 var params = new System.Collections.Generic.Dictionary.<System.String, System.Object>();
 params.Add("English Speaking", 1);

function CheckEnglish(){
if (englishSpeakingNationality == true || englishSpeakingStudy == true){ englishSpeaking = true;}
}

Debug.Log(Analytics.Analytics.CustomEvent("English Speaking", params));