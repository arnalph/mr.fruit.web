gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDButtonStartObjects1= [];
gdjs.MainMenuCode.GDButtonStartObjects2= [];
gdjs.MainMenuCode.GDButtonStartObjects3= [];
gdjs.MainMenuCode.GDLogoObjects1= [];
gdjs.MainMenuCode.GDLogoObjects2= [];
gdjs.MainMenuCode.GDLogoObjects3= [];
gdjs.MainMenuCode.GDsettingsBtnObjects1= [];
gdjs.MainMenuCode.GDsettingsBtnObjects2= [];
gdjs.MainMenuCode.GDsettingsBtnObjects3= [];
gdjs.MainMenuCode.GDshopBtnObjects1= [];
gdjs.MainMenuCode.GDshopBtnObjects2= [];
gdjs.MainMenuCode.GDshopBtnObjects3= [];
gdjs.MainMenuCode.GDblackMaskObjects1= [];
gdjs.MainMenuCode.GDblackMaskObjects2= [];
gdjs.MainMenuCode.GDblackMaskObjects3= [];
gdjs.MainMenuCode.GDsprite0Objects1= [];
gdjs.MainMenuCode.GDsprite0Objects2= [];
gdjs.MainMenuCode.GDsprite0Objects3= [];
gdjs.MainMenuCode.GDsprite1Objects1= [];
gdjs.MainMenuCode.GDsprite1Objects2= [];
gdjs.MainMenuCode.GDsprite1Objects3= [];
gdjs.MainMenuCode.GDtickObjects1= [];
gdjs.MainMenuCode.GDtickObjects2= [];
gdjs.MainMenuCode.GDtickObjects3= [];
gdjs.MainMenuCode.GDcloseObjects1= [];
gdjs.MainMenuCode.GDcloseObjects2= [];
gdjs.MainMenuCode.GDcloseObjects3= [];
gdjs.MainMenuCode.GDcharSelectTitleObjects1= [];
gdjs.MainMenuCode.GDcharSelectTitleObjects2= [];
gdjs.MainMenuCode.GDcharSelectTitleObjects3= [];
gdjs.MainMenuCode.GDNewCharsComingObjects1= [];
gdjs.MainMenuCode.GDNewCharsComingObjects2= [];
gdjs.MainMenuCode.GDNewCharsComingObjects3= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition2IsTrue_0 = {val:false};


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


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDshopBtnObjects1Objects = Hashtable.newFrom({"shopBtn": gdjs.MainMenuCode.GDshopBtnObjects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDshopBtnObjects1Objects = Hashtable.newFrom({"shopBtn": gdjs.MainMenuCode.GDshopBtnObjects1});gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.MainMenuCode.GDshopBtnObjects1, gdjs.MainMenuCode.GDshopBtnObjects2);

{for(var i = 0, len = gdjs.MainMenuCode.GDshopBtnObjects2.length ;i < len;++i) {
    gdjs.MainMenuCode.GDshopBtnObjects2[i].setAnimation(2);
}
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewCharsComing"), gdjs.MainMenuCode.GDNewCharsComingObjects1);
gdjs.copyArray(runtimeScene.getObjects("blackMask"), gdjs.MainMenuCode.GDblackMaskObjects1);
gdjs.copyArray(runtimeScene.getObjects("charSelectTitle"), gdjs.MainMenuCode.GDcharSelectTitleObjects1);
gdjs.copyArray(runtimeScene.getObjects("close"), gdjs.MainMenuCode.GDcloseObjects1);
gdjs.copyArray(runtimeScene.getObjects("sprite0"), gdjs.MainMenuCode.GDsprite0Objects1);
gdjs.copyArray(runtimeScene.getObjects("sprite1"), gdjs.MainMenuCode.GDsprite1Objects1);
gdjs.copyArray(runtimeScene.getObjects("tick"), gdjs.MainMenuCode.GDtickObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDsprite0Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDsprite0Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDsprite1Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDsprite1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDtickObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDtickObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDblackMaskObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDblackMaskObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDcloseObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDcloseObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDcharSelectTitleObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDcharSelectTitleObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDNewCharsComingObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDNewCharsComingObjects1[i].hide(false);
}
}}

}


};gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDsprite0Objects1Objects = Hashtable.newFrom({"sprite0": gdjs.MainMenuCode.GDsprite0Objects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDsprite1Objects1Objects = Hashtable.newFrom({"sprite1": gdjs.MainMenuCode.GDsprite1Objects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDcloseObjects1Objects = Hashtable.newFrom({"close": gdjs.MainMenuCode.GDcloseObjects1});gdjs.MainMenuCode.eventsList3 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("NewCharsComing"), gdjs.MainMenuCode.GDNewCharsComingObjects1);
gdjs.copyArray(runtimeScene.getObjects("blackMask"), gdjs.MainMenuCode.GDblackMaskObjects1);
gdjs.copyArray(runtimeScene.getObjects("charSelectTitle"), gdjs.MainMenuCode.GDcharSelectTitleObjects1);
gdjs.copyArray(runtimeScene.getObjects("close"), gdjs.MainMenuCode.GDcloseObjects1);
gdjs.copyArray(runtimeScene.getObjects("settingsBtn"), gdjs.MainMenuCode.GDsettingsBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("sprite0"), gdjs.MainMenuCode.GDsprite0Objects1);
gdjs.copyArray(runtimeScene.getObjects("sprite1"), gdjs.MainMenuCode.GDsprite1Objects1);
gdjs.copyArray(runtimeScene.getObjects("tick"), gdjs.MainMenuCode.GDtickObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDblackMaskObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDblackMaskObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDsprite0Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDsprite0Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDsprite1Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDsprite1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDsettingsBtnObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDsettingsBtnObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDtickObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDtickObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDcloseObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDcloseObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDcharSelectTitleObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDcharSelectTitleObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDNewCharsComingObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDNewCharsComingObjects1[i].hide();
}
}{gdjs.evtTools.storage.readNumberFromJSONFile("HighScore", "Shapes", runtimeScene, runtimeScene.getVariables().getFromIndex(0));
}{gdjs.evtTools.sound.playSound(runtimeScene, "background-peppy-music.mp3", true, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
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

gdjs.copyArray(runtimeScene.getObjects("shopBtn"), gdjs.MainMenuCode.GDshopBtnObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDshopBtnObjects1Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDshopBtnObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDshopBtnObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDshopBtnObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("shopBtn"), gdjs.MainMenuCode.GDshopBtnObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDshopBtnObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDshopBtnObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDshopBtnObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDshopBtnObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("sprite0"), gdjs.MainMenuCode.GDsprite0Objects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDsprite0Objects1Objects, runtimeScene, true, false);
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MainMenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("tick"), gdjs.MainMenuCode.GDtickObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDtickObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDtickObjects1[i].setX(112);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("sprite1"), gdjs.MainMenuCode.GDsprite1Objects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDsprite1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MainMenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("tick"), gdjs.MainMenuCode.GDtickObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDtickObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDtickObjects1[i].setX(484);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("close"), gdjs.MainMenuCode.GDcloseObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
gdjs.MainMenuCode.condition1IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDcloseObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MainMenuCode.condition0IsTrue_0.val ) {
{
gdjs.MainMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MainMenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewCharsComing"), gdjs.MainMenuCode.GDNewCharsComingObjects1);
gdjs.copyArray(runtimeScene.getObjects("blackMask"), gdjs.MainMenuCode.GDblackMaskObjects1);
gdjs.copyArray(runtimeScene.getObjects("charSelectTitle"), gdjs.MainMenuCode.GDcharSelectTitleObjects1);
/* Reuse gdjs.MainMenuCode.GDcloseObjects1 */
gdjs.copyArray(runtimeScene.getObjects("sprite0"), gdjs.MainMenuCode.GDsprite0Objects1);
gdjs.copyArray(runtimeScene.getObjects("sprite1"), gdjs.MainMenuCode.GDsprite1Objects1);
gdjs.copyArray(runtimeScene.getObjects("tick"), gdjs.MainMenuCode.GDtickObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDsprite1Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDsprite1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDsprite0Objects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDsprite0Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDblackMaskObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDblackMaskObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDcloseObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDcloseObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDtickObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDtickObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDcharSelectTitleObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDcharSelectTitleObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDNewCharsComingObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDNewCharsComingObjects1[i].hide();
}
}}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDButtonStartObjects1.length = 0;
gdjs.MainMenuCode.GDButtonStartObjects2.length = 0;
gdjs.MainMenuCode.GDButtonStartObjects3.length = 0;
gdjs.MainMenuCode.GDLogoObjects1.length = 0;
gdjs.MainMenuCode.GDLogoObjects2.length = 0;
gdjs.MainMenuCode.GDLogoObjects3.length = 0;
gdjs.MainMenuCode.GDsettingsBtnObjects1.length = 0;
gdjs.MainMenuCode.GDsettingsBtnObjects2.length = 0;
gdjs.MainMenuCode.GDsettingsBtnObjects3.length = 0;
gdjs.MainMenuCode.GDshopBtnObjects1.length = 0;
gdjs.MainMenuCode.GDshopBtnObjects2.length = 0;
gdjs.MainMenuCode.GDshopBtnObjects3.length = 0;
gdjs.MainMenuCode.GDblackMaskObjects1.length = 0;
gdjs.MainMenuCode.GDblackMaskObjects2.length = 0;
gdjs.MainMenuCode.GDblackMaskObjects3.length = 0;
gdjs.MainMenuCode.GDsprite0Objects1.length = 0;
gdjs.MainMenuCode.GDsprite0Objects2.length = 0;
gdjs.MainMenuCode.GDsprite0Objects3.length = 0;
gdjs.MainMenuCode.GDsprite1Objects1.length = 0;
gdjs.MainMenuCode.GDsprite1Objects2.length = 0;
gdjs.MainMenuCode.GDsprite1Objects3.length = 0;
gdjs.MainMenuCode.GDtickObjects1.length = 0;
gdjs.MainMenuCode.GDtickObjects2.length = 0;
gdjs.MainMenuCode.GDtickObjects3.length = 0;
gdjs.MainMenuCode.GDcloseObjects1.length = 0;
gdjs.MainMenuCode.GDcloseObjects2.length = 0;
gdjs.MainMenuCode.GDcloseObjects3.length = 0;
gdjs.MainMenuCode.GDcharSelectTitleObjects1.length = 0;
gdjs.MainMenuCode.GDcharSelectTitleObjects2.length = 0;
gdjs.MainMenuCode.GDcharSelectTitleObjects3.length = 0;
gdjs.MainMenuCode.GDNewCharsComingObjects1.length = 0;
gdjs.MainMenuCode.GDNewCharsComingObjects2.length = 0;
gdjs.MainMenuCode.GDNewCharsComingObjects3.length = 0;

gdjs.MainMenuCode.eventsList3(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
