gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDGameOverObjects1= [];
gdjs.Game_32OverCode.GDGameOverObjects2= [];
gdjs.Game_32OverCode.GDGameOverObjects3= [];
gdjs.Game_32OverCode.GDRetryObjects1= [];
gdjs.Game_32OverCode.GDRetryObjects2= [];
gdjs.Game_32OverCode.GDRetryObjects3= [];
gdjs.Game_32OverCode.GDHomeObjects1= [];
gdjs.Game_32OverCode.GDHomeObjects2= [];
gdjs.Game_32OverCode.GDHomeObjects3= [];
gdjs.Game_32OverCode.GDScoreonGameOverObjects1= [];
gdjs.Game_32OverCode.GDScoreonGameOverObjects2= [];
gdjs.Game_32OverCode.GDScoreonGameOverObjects3= [];

gdjs.Game_32OverCode.conditionTrue_0 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_0 = {val:false};


gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDRetryObjects1Objects = Hashtable.newFrom({"Retry": gdjs.Game_32OverCode.GDRetryObjects1});gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDRetryObjects1Objects = Hashtable.newFrom({"Retry": gdjs.Game_32OverCode.GDRetryObjects1});gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Game_32OverCode.GDRetryObjects1, gdjs.Game_32OverCode.GDRetryObjects2);

{for(var i = 0, len = gdjs.Game_32OverCode.GDRetryObjects2.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDRetryObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


};gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDHomeObjects1Objects = Hashtable.newFrom({"Home": gdjs.Game_32OverCode.GDHomeObjects1});gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDHomeObjects1Objects = Hashtable.newFrom({"Home": gdjs.Game_32OverCode.GDHomeObjects1});gdjs.Game_32OverCode.eventsList1 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Game_32OverCode.GDHomeObjects1, gdjs.Game_32OverCode.GDHomeObjects2);

{for(var i = 0, len = gdjs.Game_32OverCode.GDHomeObjects2.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDHomeObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};gdjs.Game_32OverCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.Game_32OverCode.GDRetryObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDRetryObjects1Objects, runtimeScene, true, true);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDRetryObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDRetryObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDRetryObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.Game_32OverCode.GDRetryObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDRetryObjects1Objects, runtimeScene, true, false);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDRetryObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDRetryObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDRetryObjects1[i].setAnimation(0);
}
}
{ //Subevents
gdjs.Game_32OverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.Game_32OverCode.GDHomeObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDHomeObjects1Objects, runtimeScene, true, true);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDHomeObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDHomeObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDHomeObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.Game_32OverCode.GDHomeObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDHomeObjects1Objects, runtimeScene, true, false);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDHomeObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDHomeObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDHomeObjects1[i].setAnimation(0);
}
}
{ //Subevents
gdjs.Game_32OverCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ScoreonGameOver"), gdjs.Game_32OverCode.GDScoreonGameOverObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "show-music.mp3", false, 100, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "background-peppy-music.mp3", true, 100, 1);
}{for(var i = 0, len = gdjs.Game_32OverCode.GDScoreonGameOverObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDScoreonGameOverObjects1[i].setString(gdjs.Game_32OverCode.GDScoreonGameOverObjects1[i].getString() + (" " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0))));
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(gdjs.VariablesContainer.badVariable) < 0;
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.storage.writeNumberInJSONFile("HighScore", "Shapes", gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDGameOverObjects1.length = 0;
gdjs.Game_32OverCode.GDGameOverObjects2.length = 0;
gdjs.Game_32OverCode.GDGameOverObjects3.length = 0;
gdjs.Game_32OverCode.GDRetryObjects1.length = 0;
gdjs.Game_32OverCode.GDRetryObjects2.length = 0;
gdjs.Game_32OverCode.GDRetryObjects3.length = 0;
gdjs.Game_32OverCode.GDHomeObjects1.length = 0;
gdjs.Game_32OverCode.GDHomeObjects2.length = 0;
gdjs.Game_32OverCode.GDHomeObjects3.length = 0;
gdjs.Game_32OverCode.GDScoreonGameOverObjects1.length = 0;
gdjs.Game_32OverCode.GDScoreonGameOverObjects2.length = 0;
gdjs.Game_32OverCode.GDScoreonGameOverObjects3.length = 0;

gdjs.Game_32OverCode.eventsList2(runtimeScene);
return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
