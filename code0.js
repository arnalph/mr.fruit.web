gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDGameTitleObjects1= [];
gdjs.MainMenuCode.GDGameTitleObjects2= [];
gdjs.MainMenuCode.GDGameTitleObjects3= [];
gdjs.MainMenuCode.GDButtonStartObjects1= [];
gdjs.MainMenuCode.GDButtonStartObjects2= [];
gdjs.MainMenuCode.GDButtonStartObjects3= [];
gdjs.MainMenuCode.GDLogoObjects1= [];
gdjs.MainMenuCode.GDLogoObjects2= [];
gdjs.MainMenuCode.GDLogoObjects3= [];
gdjs.MainMenuCode.GDhighScoreTextObjects1= [];
gdjs.MainMenuCode.GDhighScoreTextObjects2= [];
gdjs.MainMenuCode.GDhighScoreTextObjects3= [];
gdjs.MainMenuCode.GDsettingsBtnObjects1= [];
gdjs.MainMenuCode.GDsettingsBtnObjects2= [];
gdjs.MainMenuCode.GDsettingsBtnObjects3= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};


gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects = Hashtable.newFrom({"ButtonStart": gdjs.MainMenuCode.GDButtonStartObjects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects = Hashtable.newFrom({"ButtonStart": gdjs.MainMenuCode.GDButtonStartObjects1});gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.MainMenuCode.GDButtonStartObjects1, gdjs.MainMenuCode.GDButtonStartObjects2);

{for(var i = 0, len = gdjs.MainMenuCode.GDButtonStartObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonStartObjects2[i].setAnimationName("StartPressed");
}
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDsettingsBtnObjects1Objects = Hashtable.newFrom({"settingsBtn": gdjs.MainMenuCode.GDsettingsBtnObjects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDsettingsBtnObjects1Objects = Hashtable.newFrom({"settingsBtn": gdjs.MainMenuCode.GDsettingsBtnObjects1});gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.MainMenuCode.GDsettingsBtnObjects1, gdjs.MainMenuCode.GDsettingsBtnObjects2);

{for(var i = 0, len = gdjs.MainMenuCode.GDsettingsBtnObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDsettingsBtnObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
}

}


};gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonStart"), gdjs.MainMenuCode.GDButtonStartObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDButtonStartObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDButtonStartObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonStartObjects1[i].setAnimationName("StartNormal");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonStart"), gdjs.MainMenuCode.GDButtonStartObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDButtonStartObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDButtonStartObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDButtonStartObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDButtonStartObjects1[i].setAnimationName("StartHover");
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("highScoreText"), gdjs.MainMenuCode.GDhighScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("settingsBtn"), gdjs.MainMenuCode.GDsettingsBtnObjects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("HighScore", "Shapes", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}{for(var i = 0, len = gdjs.MainMenuCode.GDhighScoreTextObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDhighScoreTextObjects1[i].setString(gdjs.MainMenuCode.GDhighScoreTextObjects1[i].getString() + (" " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0))));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "background-peppy-music.mp3", true, 100, 1);
}{for(var i = 0, len = gdjs.MainMenuCode.GDsettingsBtnObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDsettingsBtnObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("settingsBtn"), gdjs.MainMenuCode.GDsettingsBtnObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDsettingsBtnObjects1Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDsettingsBtnObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDsettingsBtnObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDsettingsBtnObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("settingsBtn"), gdjs.MainMenuCode.GDsettingsBtnObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDsettingsBtnObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDsettingsBtnObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDsettingsBtnObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDsettingsBtnObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("highScoreText"), gdjs.MainMenuCode.GDhighScoreTextObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDhighScoreTextObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDhighScoreTextObjects1[i].hide();
}
}}

}


{


{
}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDGameTitleObjects1.length = 0;
gdjs.MainMenuCode.GDGameTitleObjects2.length = 0;
gdjs.MainMenuCode.GDGameTitleObjects3.length = 0;
gdjs.MainMenuCode.GDButtonStartObjects1.length = 0;
gdjs.MainMenuCode.GDButtonStartObjects2.length = 0;
gdjs.MainMenuCode.GDButtonStartObjects3.length = 0;
gdjs.MainMenuCode.GDLogoObjects1.length = 0;
gdjs.MainMenuCode.GDLogoObjects2.length = 0;
gdjs.MainMenuCode.GDLogoObjects3.length = 0;
gdjs.MainMenuCode.GDhighScoreTextObjects1.length = 0;
gdjs.MainMenuCode.GDhighScoreTextObjects2.length = 0;
gdjs.MainMenuCode.GDhighScoreTextObjects3.length = 0;
gdjs.MainMenuCode.GDsettingsBtnObjects1.length = 0;
gdjs.MainMenuCode.GDsettingsBtnObjects2.length = 0;
gdjs.MainMenuCode.GDsettingsBtnObjects3.length = 0;

gdjs.MainMenuCode.eventsList2(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
