gdjs.Level1Code = {};
gdjs.Level1Code.forEachCount0_2 = 0;

gdjs.Level1Code.forEachCount1_2 = 0;

gdjs.Level1Code.forEachCount2_2 = 0;

gdjs.Level1Code.forEachCount3_2 = 0;

gdjs.Level1Code.forEachCount4_2 = 0;

gdjs.Level1Code.forEachCount5_2 = 0;

gdjs.Level1Code.forEachIndex2 = 0;

gdjs.Level1Code.forEachObjects2 = [];

gdjs.Level1Code.forEachTemporary2 = null;

gdjs.Level1Code.forEachTotalCount2 = 0;

gdjs.Level1Code.GDSprite0Objects1= [];
gdjs.Level1Code.GDSprite0Objects2= [];
gdjs.Level1Code.GDSprite0Objects3= [];
gdjs.Level1Code.GDSprite0Objects4= [];
gdjs.Level1Code.GDShape1Objects1= [];
gdjs.Level1Code.GDShape1Objects2= [];
gdjs.Level1Code.GDShape1Objects3= [];
gdjs.Level1Code.GDShape1Objects4= [];
gdjs.Level1Code.GDShape2Objects1= [];
gdjs.Level1Code.GDShape2Objects2= [];
gdjs.Level1Code.GDShape2Objects3= [];
gdjs.Level1Code.GDShape2Objects4= [];
gdjs.Level1Code.GDShape3Objects1= [];
gdjs.Level1Code.GDShape3Objects2= [];
gdjs.Level1Code.GDShape3Objects3= [];
gdjs.Level1Code.GDShape3Objects4= [];
gdjs.Level1Code.GDShape4Objects1= [];
gdjs.Level1Code.GDShape4Objects2= [];
gdjs.Level1Code.GDShape4Objects3= [];
gdjs.Level1Code.GDShape4Objects4= [];
gdjs.Level1Code.GDShape5Objects1= [];
gdjs.Level1Code.GDShape5Objects2= [];
gdjs.Level1Code.GDShape5Objects3= [];
gdjs.Level1Code.GDShape5Objects4= [];
gdjs.Level1Code.GDHeartObjects1= [];
gdjs.Level1Code.GDHeartObjects2= [];
gdjs.Level1Code.GDHeartObjects3= [];
gdjs.Level1Code.GDHeartObjects4= [];
gdjs.Level1Code.GDScoreObjects1= [];
gdjs.Level1Code.GDScoreObjects2= [];
gdjs.Level1Code.GDScoreObjects3= [];
gdjs.Level1Code.GDScoreObjects4= [];
gdjs.Level1Code.GDSprite1Objects1= [];
gdjs.Level1Code.GDSprite1Objects2= [];
gdjs.Level1Code.GDSprite1Objects3= [];
gdjs.Level1Code.GDSprite1Objects4= [];
gdjs.Level1Code.GDObstacleObjects1= [];
gdjs.Level1Code.GDObstacleObjects2= [];
gdjs.Level1Code.GDObstacleObjects3= [];
gdjs.Level1Code.GDObstacleObjects4= [];
gdjs.Level1Code.GDLifeObjects1= [];
gdjs.Level1Code.GDLifeObjects2= [];
gdjs.Level1Code.GDLifeObjects3= [];
gdjs.Level1Code.GDLifeObjects4= [];
gdjs.Level1Code.GDShape5ExplosionObjects1= [];
gdjs.Level1Code.GDShape5ExplosionObjects2= [];
gdjs.Level1Code.GDShape5ExplosionObjects3= [];
gdjs.Level1Code.GDShape5ExplosionObjects4= [];
gdjs.Level1Code.GDShape4ExplosionObjects1= [];
gdjs.Level1Code.GDShape4ExplosionObjects2= [];
gdjs.Level1Code.GDShape4ExplosionObjects3= [];
gdjs.Level1Code.GDShape4ExplosionObjects4= [];
gdjs.Level1Code.GDShape3ExplosionObjects1= [];
gdjs.Level1Code.GDShape3ExplosionObjects2= [];
gdjs.Level1Code.GDShape3ExplosionObjects3= [];
gdjs.Level1Code.GDShape3ExplosionObjects4= [];
gdjs.Level1Code.GDShape2ExplosionObjects1= [];
gdjs.Level1Code.GDShape2ExplosionObjects2= [];
gdjs.Level1Code.GDShape2ExplosionObjects3= [];
gdjs.Level1Code.GDShape2ExplosionObjects4= [];
gdjs.Level1Code.GDShape1ExplosionObjects1= [];
gdjs.Level1Code.GDShape1ExplosionObjects2= [];
gdjs.Level1Code.GDShape1ExplosionObjects3= [];
gdjs.Level1Code.GDShape1ExplosionObjects4= [];
gdjs.Level1Code.GDblackMaskObjects1= [];
gdjs.Level1Code.GDblackMaskObjects2= [];
gdjs.Level1Code.GDblackMaskObjects3= [];
gdjs.Level1Code.GDblackMaskObjects4= [];
gdjs.Level1Code.GDTutorialObjects1= [];
gdjs.Level1Code.GDTutorialObjects2= [];
gdjs.Level1Code.GDTutorialObjects3= [];
gdjs.Level1Code.GDTutorialObjects4= [];
gdjs.Level1Code.GDhelpIconObjects1= [];
gdjs.Level1Code.GDhelpIconObjects2= [];
gdjs.Level1Code.GDhelpIconObjects3= [];
gdjs.Level1Code.GDhelpIconObjects4= [];
gdjs.Level1Code.GDpauseBtnObjects1= [];
gdjs.Level1Code.GDpauseBtnObjects2= [];
gdjs.Level1Code.GDpauseBtnObjects3= [];
gdjs.Level1Code.GDpauseBtnObjects4= [];
gdjs.Level1Code.GDplayBtnObjects1= [];
gdjs.Level1Code.GDplayBtnObjects2= [];
gdjs.Level1Code.GDplayBtnObjects3= [];
gdjs.Level1Code.GDplayBtnObjects4= [];
gdjs.Level1Code.GDhomeBtnObjects1= [];
gdjs.Level1Code.GDhomeBtnObjects2= [];
gdjs.Level1Code.GDhomeBtnObjects3= [];
gdjs.Level1Code.GDhomeBtnObjects4= [];

gdjs.Level1Code.conditionTrue_0 = {val:false};
gdjs.Level1Code.condition0IsTrue_0 = {val:false};
gdjs.Level1Code.condition1IsTrue_0 = {val:false};
gdjs.Level1Code.condition2IsTrue_0 = {val:false};


gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDhelpIconObjects1Objects = Hashtable.newFrom({"helpIcon": gdjs.Level1Code.GDhelpIconObjects1});gdjs.Level1Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Sprite0"), gdjs.Level1Code.GDSprite0Objects2);
gdjs.copyArray(runtimeScene.getObjects("Sprite1"), gdjs.Level1Code.GDSprite1Objects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDSprite0Objects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDSprite0Objects2[i].getX() > gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) + 5 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDSprite0Objects2[k] = gdjs.Level1Code.GDSprite0Objects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDSprite0Objects2.length = k;for(var i = 0, k = 0, l = gdjs.Level1Code.GDSprite1Objects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDSprite1Objects2[i].getX() > gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) + 5 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDSprite1Objects2[k] = gdjs.Level1Code.GDSprite1Objects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDSprite1Objects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDSprite0Objects2 */
/* Reuse gdjs.Level1Code.GDSprite1Objects2 */
{for(var i = 0, len = gdjs.Level1Code.GDSprite0Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite0Objects2[i].flipX(true);
}
for(var i = 0, len = gdjs.Level1Code.GDSprite1Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite1Objects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Level1Code.GDSprite0Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite0Objects2[i].setAnimation(0);
}
for(var i = 0, len = gdjs.Level1Code.GDSprite1Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite1Objects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDSprite0Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite0Objects2[i].addForce(-(450), 0, 0);
}
for(var i = 0, len = gdjs.Level1Code.GDSprite1Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite1Objects2[i].addForce(-(450), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sprite0"), gdjs.Level1Code.GDSprite0Objects1);
gdjs.copyArray(runtimeScene.getObjects("Sprite1"), gdjs.Level1Code.GDSprite1Objects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDSprite0Objects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDSprite0Objects1[i].getX() < gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) - 5 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDSprite0Objects1[k] = gdjs.Level1Code.GDSprite0Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDSprite0Objects1.length = k;for(var i = 0, k = 0, l = gdjs.Level1Code.GDSprite1Objects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDSprite1Objects1[i].getX() < gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) - 5 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDSprite1Objects1[k] = gdjs.Level1Code.GDSprite1Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDSprite1Objects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDSprite0Objects1 */
/* Reuse gdjs.Level1Code.GDSprite1Objects1 */
{for(var i = 0, len = gdjs.Level1Code.GDSprite0Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite0Objects1[i].flipX(false);
}
for(var i = 0, len = gdjs.Level1Code.GDSprite1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite1Objects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDSprite0Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite0Objects1[i].setAnimation(0);
}
for(var i = 0, len = gdjs.Level1Code.GDSprite1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite1Objects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDSprite0Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite0Objects1[i].addForce(450, 0, 0);
}
for(var i = 0, len = gdjs.Level1Code.GDSprite1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite1Objects1[i].addForce(450, 0, 0);
}
}}

}


};gdjs.Level1Code.eventsList1 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.25, "Animation");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sprite0"), gdjs.Level1Code.GDSprite0Objects1);
gdjs.copyArray(runtimeScene.getObjects("Sprite1"), gdjs.Level1Code.GDSprite1Objects1);
{for(var i = 0, len = gdjs.Level1Code.GDSprite0Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite0Objects1[i].setAnimation(2);
}
for(var i = 0, len = gdjs.Level1Code.GDSprite1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite1Objects1[i].setAnimation(2);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Animation");
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape1Objects1ObjectsGDgdjs_46Level1Code_46GDShape2Objects1ObjectsGDgdjs_46Level1Code_46GDShape3Objects1ObjectsGDgdjs_46Level1Code_46GDShape4Objects1ObjectsGDgdjs_46Level1Code_46GDHeartObjects1ObjectsGDgdjs_46Level1Code_46GDShape5Objects1Objects = Hashtable.newFrom({"Shape1": gdjs.Level1Code.GDShape1Objects1, "Shape2": gdjs.Level1Code.GDShape2Objects1, "Shape3": gdjs.Level1Code.GDShape3Objects1, "Shape4": gdjs.Level1Code.GDShape4Objects1, "Heart": gdjs.Level1Code.GDHeartObjects1, "Shape5": gdjs.Level1Code.GDShape5Objects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape1Objects2ObjectsGDgdjs_46Level1Code_46GDShape2Objects2ObjectsGDgdjs_46Level1Code_46GDShape3Objects2ObjectsGDgdjs_46Level1Code_46GDShape4Objects2ObjectsGDgdjs_46Level1Code_46GDHeartObjects2ObjectsGDgdjs_46Level1Code_46GDShape5Objects2Objects = Hashtable.newFrom({"Shape1": gdjs.Level1Code.GDShape1Objects2, "Shape2": gdjs.Level1Code.GDShape2Objects2, "Shape3": gdjs.Level1Code.GDShape3Objects2, "Shape4": gdjs.Level1Code.GDShape4Objects2, "Heart": gdjs.Level1Code.GDHeartObjects2, "Shape5": gdjs.Level1Code.GDShape5Objects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDSprite0Objects2ObjectsGDgdjs_46Level1Code_46GDSprite1Objects2Objects = Hashtable.newFrom({"Sprite0": gdjs.Level1Code.GDSprite0Objects2, "Sprite1": gdjs.Level1Code.GDSprite1Objects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape1Objects3Objects = Hashtable.newFrom({"Shape1": gdjs.Level1Code.GDShape1Objects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape1ExplosionObjects3Objects = Hashtable.newFrom({"Shape1Explosion": gdjs.Level1Code.GDShape1ExplosionObjects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape2Objects3Objects = Hashtable.newFrom({"Shape2": gdjs.Level1Code.GDShape2Objects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape2ExplosionObjects3Objects = Hashtable.newFrom({"Shape2Explosion": gdjs.Level1Code.GDShape2ExplosionObjects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape3Objects3Objects = Hashtable.newFrom({"Shape3": gdjs.Level1Code.GDShape3Objects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape3ExplosionObjects3Objects = Hashtable.newFrom({"Shape3Explosion": gdjs.Level1Code.GDShape3ExplosionObjects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape4Objects3Objects = Hashtable.newFrom({"Shape4": gdjs.Level1Code.GDShape4Objects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape4ExplosionObjects3Objects = Hashtable.newFrom({"Shape4Explosion": gdjs.Level1Code.GDShape4ExplosionObjects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape5Objects3Objects = Hashtable.newFrom({"Shape5": gdjs.Level1Code.GDShape5Objects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape5ExplosionObjects3Objects = Hashtable.newFrom({"Shape5Explosion": gdjs.Level1Code.GDShape5ExplosionObjects3});gdjs.Level1Code.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.Level1Code.GDShape1Objects2, gdjs.Level1Code.GDShape1Objects3);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape1Objects3Objects) != 0;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDShape1Objects3 */
gdjs.Level1Code.GDShape1ExplosionObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape1ExplosionObjects3Objects, (( gdjs.Level1Code.GDShape1Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape1Objects3[0].getPointX("Center")), (( gdjs.Level1Code.GDShape1Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape1Objects3[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.Level1Code.GDShape1ExplosionObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1ExplosionObjects3[i].setParticleSize1((( gdjs.Level1Code.GDShape1Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape1Objects3[0].getWidth()));
}
}}

}


{

gdjs.copyArray(gdjs.Level1Code.GDShape2Objects2, gdjs.Level1Code.GDShape2Objects3);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape2Objects3Objects) != 0;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDShape2Objects3 */
gdjs.Level1Code.GDShape2ExplosionObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape2ExplosionObjects3Objects, (( gdjs.Level1Code.GDShape2Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape2Objects3[0].getPointX("Center")), (( gdjs.Level1Code.GDShape2Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape2Objects3[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.Level1Code.GDShape2ExplosionObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2ExplosionObjects3[i].setParticleSize1((( gdjs.Level1Code.GDShape2Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape2Objects3[0].getWidth()));
}
}}

}


{

gdjs.copyArray(gdjs.Level1Code.GDShape3Objects2, gdjs.Level1Code.GDShape3Objects3);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape3Objects3Objects) != 0;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDShape3Objects3 */
gdjs.Level1Code.GDShape3ExplosionObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape3ExplosionObjects3Objects, (( gdjs.Level1Code.GDShape3Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape3Objects3[0].getPointX("Center")), (( gdjs.Level1Code.GDShape3Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape3Objects3[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.Level1Code.GDShape3ExplosionObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3ExplosionObjects3[i].setParticleSize1((( gdjs.Level1Code.GDShape3Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape3Objects3[0].getWidth()));
}
}}

}


{

gdjs.copyArray(gdjs.Level1Code.GDShape4Objects2, gdjs.Level1Code.GDShape4Objects3);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape4Objects3Objects) != 0;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDShape4Objects3 */
gdjs.Level1Code.GDShape4ExplosionObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape4ExplosionObjects3Objects, (( gdjs.Level1Code.GDShape4Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape4Objects3[0].getPointX("Center")), (( gdjs.Level1Code.GDShape4Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape4Objects3[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.Level1Code.GDShape4ExplosionObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4ExplosionObjects3[i].setParticleSize1((( gdjs.Level1Code.GDShape4Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape4Objects3[0].getWidth()));
}
}}

}


{

gdjs.copyArray(gdjs.Level1Code.GDShape5Objects2, gdjs.Level1Code.GDShape5Objects3);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape5Objects3Objects) != 0;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDShape5Objects3 */
gdjs.Level1Code.GDShape5ExplosionObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape5ExplosionObjects3Objects, (( gdjs.Level1Code.GDShape5Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape5Objects3[0].getPointX("Center")), (( gdjs.Level1Code.GDShape5Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape5Objects3[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.Level1Code.GDShape5ExplosionObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape5ExplosionObjects3[i].setParticleSize1((( gdjs.Level1Code.GDShape5Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape5Objects3[0].getWidth()));
}
}}

}


{



}


{


{
gdjs.copyArray(gdjs.Level1Code.GDHeartObjects2, gdjs.Level1Code.GDHeartObjects3);

gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Level1Code.GDScoreObjects3);
gdjs.copyArray(gdjs.Level1Code.GDShape1Objects2, gdjs.Level1Code.GDShape1Objects3);

gdjs.copyArray(gdjs.Level1Code.GDShape2Objects2, gdjs.Level1Code.GDShape2Objects3);

gdjs.copyArray(gdjs.Level1Code.GDShape3Objects2, gdjs.Level1Code.GDShape3Objects3);

gdjs.copyArray(gdjs.Level1Code.GDShape4Objects2, gdjs.Level1Code.GDShape4Objects3);

gdjs.copyArray(gdjs.Level1Code.GDShape5Objects2, gdjs.Level1Code.GDShape5Objects3);

{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDHeartObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDHeartObjects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape5Objects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape5Objects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}{for(var i = 0, len = gdjs.Level1Code.GDScoreObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDScoreObjects3[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDObstacleObjects2Objects = Hashtable.newFrom({"Obstacle": gdjs.Level1Code.GDObstacleObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDSprite0Objects2ObjectsGDgdjs_46Level1Code_46GDSprite1Objects2Objects = Hashtable.newFrom({"Sprite0": gdjs.Level1Code.GDSprite0Objects2, "Sprite1": gdjs.Level1Code.GDSprite1Objects2});gdjs.Level1Code.eventsList3 = function(runtimeScene) {

};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.Level1Code.GDObstacleObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDSprite0Objects1ObjectsGDgdjs_46Level1Code_46GDSprite1Objects1Objects = Hashtable.newFrom({"Sprite0": gdjs.Level1Code.GDSprite0Objects1, "Sprite1": gdjs.Level1Code.GDSprite1Objects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDpauseBtnObjects1Objects = Hashtable.newFrom({"pauseBtn": gdjs.Level1Code.GDpauseBtnObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDpauseBtnObjects1Objects = Hashtable.newFrom({"pauseBtn": gdjs.Level1Code.GDpauseBtnObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDpauseBtnObjects1Objects = Hashtable.newFrom({"pauseBtn": gdjs.Level1Code.GDpauseBtnObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDhomeBtnObjects1Objects = Hashtable.newFrom({"homeBtn": gdjs.Level1Code.GDhomeBtnObjects1});gdjs.Level1Code.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("helpIcon"), gdjs.Level1Code.GDhelpIconObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDhelpIconObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.Level1Code.GDTutorialObjects1);
gdjs.copyArray(runtimeScene.getObjects("blackMask"), gdjs.Level1Code.GDblackMaskObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDblackMaskObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDblackMaskObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDTutorialObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTutorialObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.Level1Code.GDTutorialObjects1);
gdjs.copyArray(runtimeScene.getObjects("blackMask"), gdjs.Level1Code.GDblackMaskObjects1);
gdjs.copyArray(runtimeScene.getObjects("homeBtn"), gdjs.Level1Code.GDhomeBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("playBtn"), gdjs.Level1Code.GDplayBtnObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDblackMaskObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDblackMaskObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDTutorialObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTutorialObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}{for(var i = 0, len = gdjs.Level1Code.GDhomeBtnObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDhomeBtnObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDplayBtnObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDplayBtnObjects1[i].hide();
}
}}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sprite0"), gdjs.Level1Code.GDSprite0Objects1);
gdjs.copyArray(runtimeScene.getObjects("Sprite1"), gdjs.Level1Code.GDSprite1Objects1);
{for(var i = 0, len = gdjs.Level1Code.GDSprite0Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite0Objects1[i].flipX(true);
}
for(var i = 0, len = gdjs.Level1Code.GDSprite1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite1Objects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Level1Code.GDSprite0Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite0Objects1[i].setAnimation(0);
}
for(var i = 0, len = gdjs.Level1Code.GDSprite1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite1Objects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDSprite0Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite0Objects1[i].addForce(-(450), 0, 0);
}
for(var i = 0, len = gdjs.Level1Code.GDSprite1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite1Objects1[i].addForce(-(450), 0, 0);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Sprite0"), gdjs.Level1Code.GDSprite0Objects1);
gdjs.copyArray(runtimeScene.getObjects("Sprite1"), gdjs.Level1Code.GDSprite1Objects1);
{for(var i = 0, len = gdjs.Level1Code.GDSprite0Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite0Objects1[i].flipX(false);
}
for(var i = 0, len = gdjs.Level1Code.GDSprite1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite1Objects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDSprite0Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite0Objects1[i].setAnimation(0);
}
for(var i = 0, len = gdjs.Level1Code.GDSprite1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite1Objects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDSprite0Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite0Objects1[i].addForce(450, 0, 0);
}
for(var i = 0, len = gdjs.Level1Code.GDSprite1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite1Objects1[i].addForce(450, 0, 0);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.3, "ShapeCreation");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDHeartObjects1.length = 0;

gdjs.Level1Code.GDShape1Objects1.length = 0;

gdjs.Level1Code.GDShape2Objects1.length = 0;

gdjs.Level1Code.GDShape3Objects1.length = 0;

gdjs.Level1Code.GDShape4Objects1.length = 0;

gdjs.Level1Code.GDShape5Objects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape1Objects1ObjectsGDgdjs_46Level1Code_46GDShape2Objects1ObjectsGDgdjs_46Level1Code_46GDShape3Objects1ObjectsGDgdjs_46Level1Code_46GDShape4Objects1ObjectsGDgdjs_46Level1Code_46GDHeartObjects1ObjectsGDgdjs_46Level1Code_46GDShape5Objects1Objects, "Shape" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 5)), gdjs.randomInRange(80, 640 - 80), -(100), "");
}{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.Level1Code.GDHeartObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDHeartObjects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.Level1Code.GDShape5Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape5Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
}{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects1[i].setScale(gdjs.randomInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects1[i].setScale(gdjs.randomInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects1[i].setScale(gdjs.randomInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects1[i].setScale(gdjs.randomInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.Level1Code.GDHeartObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDHeartObjects1[i].setScale(gdjs.randomInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.Level1Code.GDShape5Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape5Objects1[i].setScale(gdjs.randomInRange(0.8, 1.6));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShapeCreation");
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Heart"), gdjs.Level1Code.GDHeartObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shape1"), gdjs.Level1Code.GDShape1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape2"), gdjs.Level1Code.GDShape2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape3"), gdjs.Level1Code.GDShape3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape4"), gdjs.Level1Code.GDShape4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape5"), gdjs.Level1Code.GDShape5Objects1);
{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects1[i].addPolarForce(90, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 0);
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects1[i].addPolarForce(90, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 0);
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects1[i].addPolarForce(90, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 0);
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects1[i].addPolarForce(90, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 0);
}
for(var i = 0, len = gdjs.Level1Code.GDHeartObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDHeartObjects1[i].addPolarForce(90, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 0);
}
for(var i = 0, len = gdjs.Level1Code.GDShape5Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape5Objects1[i].addPolarForce(90, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDHeartObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDHeartObjects1[i].rotate(90, runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape5Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape5Objects1[i].rotate(90, runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Heart"), gdjs.Level1Code.GDHeartObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shape1"), gdjs.Level1Code.GDShape1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape2"), gdjs.Level1Code.GDShape2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape3"), gdjs.Level1Code.GDShape3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape4"), gdjs.Level1Code.GDShape4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape5"), gdjs.Level1Code.GDShape5Objects1);

gdjs.Level1Code.forEachTotalCount2 = 0;
gdjs.Level1Code.forEachObjects2.length = 0;
gdjs.Level1Code.forEachCount0_2 = gdjs.Level1Code.GDShape1Objects1.length;
gdjs.Level1Code.forEachTotalCount2 += gdjs.Level1Code.forEachCount0_2;
gdjs.Level1Code.forEachObjects2.push.apply(gdjs.Level1Code.forEachObjects2,gdjs.Level1Code.GDShape1Objects1);
gdjs.Level1Code.forEachCount1_2 = gdjs.Level1Code.GDShape2Objects1.length;
gdjs.Level1Code.forEachTotalCount2 += gdjs.Level1Code.forEachCount1_2;
gdjs.Level1Code.forEachObjects2.push.apply(gdjs.Level1Code.forEachObjects2,gdjs.Level1Code.GDShape2Objects1);
gdjs.Level1Code.forEachCount2_2 = gdjs.Level1Code.GDShape3Objects1.length;
gdjs.Level1Code.forEachTotalCount2 += gdjs.Level1Code.forEachCount2_2;
gdjs.Level1Code.forEachObjects2.push.apply(gdjs.Level1Code.forEachObjects2,gdjs.Level1Code.GDShape3Objects1);
gdjs.Level1Code.forEachCount3_2 = gdjs.Level1Code.GDShape4Objects1.length;
gdjs.Level1Code.forEachTotalCount2 += gdjs.Level1Code.forEachCount3_2;
gdjs.Level1Code.forEachObjects2.push.apply(gdjs.Level1Code.forEachObjects2,gdjs.Level1Code.GDShape4Objects1);
gdjs.Level1Code.forEachCount4_2 = gdjs.Level1Code.GDHeartObjects1.length;
gdjs.Level1Code.forEachTotalCount2 += gdjs.Level1Code.forEachCount4_2;
gdjs.Level1Code.forEachObjects2.push.apply(gdjs.Level1Code.forEachObjects2,gdjs.Level1Code.GDHeartObjects1);
gdjs.Level1Code.forEachCount5_2 = gdjs.Level1Code.GDShape5Objects1.length;
gdjs.Level1Code.forEachTotalCount2 += gdjs.Level1Code.forEachCount5_2;
gdjs.Level1Code.forEachObjects2.push.apply(gdjs.Level1Code.forEachObjects2,gdjs.Level1Code.GDShape5Objects1);
for(gdjs.Level1Code.forEachIndex2 = 0;gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachTotalCount2;++gdjs.Level1Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Sprite0"), gdjs.Level1Code.GDSprite0Objects2);
gdjs.copyArray(runtimeScene.getObjects("Sprite1"), gdjs.Level1Code.GDSprite1Objects2);
gdjs.Level1Code.GDHeartObjects2.length = 0;

gdjs.Level1Code.GDShape1Objects2.length = 0;

gdjs.Level1Code.GDShape2Objects2.length = 0;

gdjs.Level1Code.GDShape3Objects2.length = 0;

gdjs.Level1Code.GDShape4Objects2.length = 0;

gdjs.Level1Code.GDShape5Objects2.length = 0;


if (gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachCount0_2) {
    gdjs.Level1Code.GDShape1Objects2.push(gdjs.Level1Code.forEachObjects2[gdjs.Level1Code.forEachIndex2]);
}
else if (gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachCount0_2+gdjs.Level1Code.forEachCount1_2) {
    gdjs.Level1Code.GDShape2Objects2.push(gdjs.Level1Code.forEachObjects2[gdjs.Level1Code.forEachIndex2]);
}
else if (gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachCount0_2+gdjs.Level1Code.forEachCount1_2+gdjs.Level1Code.forEachCount2_2) {
    gdjs.Level1Code.GDShape3Objects2.push(gdjs.Level1Code.forEachObjects2[gdjs.Level1Code.forEachIndex2]);
}
else if (gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachCount0_2+gdjs.Level1Code.forEachCount1_2+gdjs.Level1Code.forEachCount2_2+gdjs.Level1Code.forEachCount3_2) {
    gdjs.Level1Code.GDShape4Objects2.push(gdjs.Level1Code.forEachObjects2[gdjs.Level1Code.forEachIndex2]);
}
else if (gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachCount0_2+gdjs.Level1Code.forEachCount1_2+gdjs.Level1Code.forEachCount2_2+gdjs.Level1Code.forEachCount3_2+gdjs.Level1Code.forEachCount4_2) {
    gdjs.Level1Code.GDHeartObjects2.push(gdjs.Level1Code.forEachObjects2[gdjs.Level1Code.forEachIndex2]);
}
else if (gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachCount0_2+gdjs.Level1Code.forEachCount1_2+gdjs.Level1Code.forEachCount2_2+gdjs.Level1Code.forEachCount3_2+gdjs.Level1Code.forEachCount4_2+gdjs.Level1Code.forEachCount5_2) {
    gdjs.Level1Code.GDShape5Objects2.push(gdjs.Level1Code.forEachObjects2[gdjs.Level1Code.forEachIndex2]);
}
gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape1Objects2ObjectsGDgdjs_46Level1Code_46GDShape2Objects2ObjectsGDgdjs_46Level1Code_46GDShape3Objects2ObjectsGDgdjs_46Level1Code_46GDShape4Objects2ObjectsGDgdjs_46Level1Code_46GDHeartObjects2ObjectsGDgdjs_46Level1Code_46GDShape5Objects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDSprite0Objects2ObjectsGDgdjs_46Level1Code_46GDSprite1Objects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "chomp.wav", false, 100, 1);
}
{ //Subevents: 
gdjs.Level1Code.eventsList2(runtimeScene);} //Subevents end.
}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Level1Code.GDObstacleObjects1);

for(gdjs.Level1Code.forEachIndex2 = 0;gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.GDObstacleObjects1.length;++gdjs.Level1Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Sprite0"), gdjs.Level1Code.GDSprite0Objects2);
gdjs.copyArray(runtimeScene.getObjects("Sprite1"), gdjs.Level1Code.GDSprite1Objects2);
gdjs.Level1Code.GDObstacleObjects2.length = 0;


gdjs.Level1Code.forEachTemporary2 = gdjs.Level1Code.GDObstacleObjects1[gdjs.Level1Code.forEachIndex2];
gdjs.Level1Code.GDObstacleObjects2.push(gdjs.Level1Code.forEachTemporary2);
gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDObstacleObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDSprite0Objects2ObjectsGDgdjs_46Level1Code_46GDSprite1Objects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level1Code.GDObstacleObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDObstacleObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDSprite0Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite0Objects2[i].setAnimation(3);
}
for(var i = 0, len = gdjs.Level1Code.GDSprite1Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite1Objects2[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.Level1Code.GDSprite0Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite0Objects2[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.Level1Code.GDSprite1Objects2.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite1Objects2[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Animation");
}}
}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "ObstacleCreation");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDObstacleObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDObstacleObjects1Objects, gdjs.randomInRange(80, 640 - 80), -(100), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ObstacleCreation");
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Level1Code.GDObstacleObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDObstacleObjects1[i].addPolarForce(90, 1.5 * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDObstacleObjects1[i].setZOrder(4);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Sprite0"), gdjs.Level1Code.GDSprite0Objects1);
gdjs.copyArray(runtimeScene.getObjects("Sprite1"), gdjs.Level1Code.GDSprite1Objects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDSprite0Objects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDSprite0Objects1[i].getBehavior("Health").IsJustDamaged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDSprite0Objects1[k] = gdjs.Level1Code.GDSprite0Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDSprite0Objects1.length = k;for(var i = 0, k = 0, l = gdjs.Level1Code.GDSprite1Objects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDSprite1Objects1[i].getBehavior("Health").IsJustDamaged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDSprite1Objects1[k] = gdjs.Level1Code.GDSprite1Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDSprite1Objects1.length = k;}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDSprite0Objects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDSprite0Objects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDSprite0Objects1[k] = gdjs.Level1Code.GDSprite0Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDSprite0Objects1.length = k;for(var i = 0, k = 0, l = gdjs.Level1Code.GDSprite1Objects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDSprite1Objects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.Level1Code.condition1IsTrue_0.val = true;
        gdjs.Level1Code.GDSprite1Objects1[k] = gdjs.Level1Code.GDSprite1Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDSprite1Objects1.length = k;}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Life"), gdjs.Level1Code.GDLifeObjects1);
/* Reuse gdjs.Level1Code.GDSprite0Objects1 */
/* Reuse gdjs.Level1Code.GDSprite1Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "explosion.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.Level1Code.GDSprite0Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite0Objects1[i].getBehavior("Flash").Flash(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.Level1Code.GDSprite1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite1Objects1[i].getBehavior("Flash").Flash(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level1Code.GDLifeObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDLifeObjects1[i].setAnimation((( gdjs.Level1Code.GDSprite1Objects1.length === 0 ) ? (( gdjs.Level1Code.GDSprite0Objects1.length === 0 ) ? 0 :gdjs.Level1Code.GDSprite0Objects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) :gdjs.Level1Code.GDSprite1Objects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Sprite0"), gdjs.Level1Code.GDSprite0Objects1);
gdjs.copyArray(runtimeScene.getObjects("Sprite1"), gdjs.Level1Code.GDSprite1Objects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDSprite0Objects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDSprite0Objects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDSprite0Objects1[k] = gdjs.Level1Code.GDSprite0Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDSprite0Objects1.length = k;for(var i = 0, k = 0, l = gdjs.Level1Code.GDSprite1Objects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDSprite1Objects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDSprite1Objects1[k] = gdjs.Level1Code.GDSprite1Objects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDSprite1Objects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Heart"), gdjs.Level1Code.GDHeartObjects1);
gdjs.copyArray(runtimeScene.getObjects("Obstacle"), gdjs.Level1Code.GDObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shape1"), gdjs.Level1Code.GDShape1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape2"), gdjs.Level1Code.GDShape2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape3"), gdjs.Level1Code.GDShape3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape4"), gdjs.Level1Code.GDShape4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape5"), gdjs.Level1Code.GDShape5Objects1);
/* Reuse gdjs.Level1Code.GDSprite0Objects1 */
/* Reuse gdjs.Level1Code.GDSprite1Objects1 */
{for(var i = 0, len = gdjs.Level1Code.GDSprite0Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite0Objects1[i].getBehavior("Flash").Stop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.Level1Code.GDSprite1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite1Objects1[i].getBehavior("Flash").Stop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level1Code.GDSprite0Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite0Objects1[i].setAnimationName("SpriteDead");
}
for(var i = 0, len = gdjs.Level1Code.GDSprite1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite1Objects1[i].setAnimationName("SpriteDead");
}
}{for(var i = 0, len = gdjs.Level1Code.GDSprite0Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite0Objects1[i].addForce(0, 400, 0);
}
for(var i = 0, len = gdjs.Level1Code.GDSprite1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite1Objects1[i].addForce(0, 400, 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDHeartObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDHeartObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape5Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape5Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDObstacleObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDObstacleObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.Level1Code.GDTutorialObjects1);
gdjs.copyArray(runtimeScene.getObjects("blackMask"), gdjs.Level1Code.GDblackMaskObjects1);
gdjs.copyArray(runtimeScene.getObjects("homeBtn"), gdjs.Level1Code.GDhomeBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("playBtn"), gdjs.Level1Code.GDplayBtnObjects1);
gdjs.Level1Code.GDSprite0Objects1.length = 0;

gdjs.Level1Code.GDSprite1Objects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDSprite0Objects1ObjectsGDgdjs_46Level1Code_46GDSprite1Objects1Objects, "Sprite" + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), 233, 588, "");
}{for(var i = 0, len = gdjs.Level1Code.GDSprite0Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite0Objects1[i].setWidth(119);
}
for(var i = 0, len = gdjs.Level1Code.GDSprite1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite1Objects1[i].setWidth(119);
}
}{for(var i = 0, len = gdjs.Level1Code.GDSprite0Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite0Objects1[i].setHeight(159);
}
for(var i = 0, len = gdjs.Level1Code.GDSprite1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite1Objects1[i].setHeight(159);
}
}{for(var i = 0, len = gdjs.Level1Code.GDSprite0Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite0Objects1[i].setAnimation(2);
}
for(var i = 0, len = gdjs.Level1Code.GDSprite1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite1Objects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.Level1Code.GDblackMaskObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDblackMaskObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDTutorialObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTutorialObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDplayBtnObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDplayBtnObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDhomeBtnObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDhomeBtnObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "explosion.wav", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "chomp.wav", false, 0, 1);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "background-peppy-music.mp3", true, 100, 1);
}{for(var i = 0, len = gdjs.Level1Code.GDSprite0Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite0Objects1[i].getBehavior("Health").SetHealth(3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.Level1Code.GDSprite1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSprite1Objects1[i].getBehavior("Health").SetHealth(3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{



}


{


{
{runtimeScene.getVariables().getFromIndex(0).add(20 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("pauseBtn"), gdjs.Level1Code.GDpauseBtnObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDpauseBtnObjects1Objects, runtimeScene, true, true);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDpauseBtnObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDpauseBtnObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDpauseBtnObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("pauseBtn"), gdjs.Level1Code.GDpauseBtnObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDpauseBtnObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDpauseBtnObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDpauseBtnObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDpauseBtnObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("pauseBtn"), gdjs.Level1Code.GDpauseBtnObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDpauseBtnObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("blackMask"), gdjs.Level1Code.GDblackMaskObjects1);
gdjs.copyArray(runtimeScene.getObjects("homeBtn"), gdjs.Level1Code.GDhomeBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("playBtn"), gdjs.Level1Code.GDplayBtnObjects1);
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{for(var i = 0, len = gdjs.Level1Code.GDblackMaskObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDblackMaskObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDplayBtnObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDplayBtnObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDhomeBtnObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDhomeBtnObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("homeBtn"), gdjs.Level1Code.GDhomeBtnObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDhomeBtnObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", true);
}}

}


};

gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDSprite0Objects1.length = 0;
gdjs.Level1Code.GDSprite0Objects2.length = 0;
gdjs.Level1Code.GDSprite0Objects3.length = 0;
gdjs.Level1Code.GDSprite0Objects4.length = 0;
gdjs.Level1Code.GDShape1Objects1.length = 0;
gdjs.Level1Code.GDShape1Objects2.length = 0;
gdjs.Level1Code.GDShape1Objects3.length = 0;
gdjs.Level1Code.GDShape1Objects4.length = 0;
gdjs.Level1Code.GDShape2Objects1.length = 0;
gdjs.Level1Code.GDShape2Objects2.length = 0;
gdjs.Level1Code.GDShape2Objects3.length = 0;
gdjs.Level1Code.GDShape2Objects4.length = 0;
gdjs.Level1Code.GDShape3Objects1.length = 0;
gdjs.Level1Code.GDShape3Objects2.length = 0;
gdjs.Level1Code.GDShape3Objects3.length = 0;
gdjs.Level1Code.GDShape3Objects4.length = 0;
gdjs.Level1Code.GDShape4Objects1.length = 0;
gdjs.Level1Code.GDShape4Objects2.length = 0;
gdjs.Level1Code.GDShape4Objects3.length = 0;
gdjs.Level1Code.GDShape4Objects4.length = 0;
gdjs.Level1Code.GDShape5Objects1.length = 0;
gdjs.Level1Code.GDShape5Objects2.length = 0;
gdjs.Level1Code.GDShape5Objects3.length = 0;
gdjs.Level1Code.GDShape5Objects4.length = 0;
gdjs.Level1Code.GDHeartObjects1.length = 0;
gdjs.Level1Code.GDHeartObjects2.length = 0;
gdjs.Level1Code.GDHeartObjects3.length = 0;
gdjs.Level1Code.GDHeartObjects4.length = 0;
gdjs.Level1Code.GDScoreObjects1.length = 0;
gdjs.Level1Code.GDScoreObjects2.length = 0;
gdjs.Level1Code.GDScoreObjects3.length = 0;
gdjs.Level1Code.GDScoreObjects4.length = 0;
gdjs.Level1Code.GDSprite1Objects1.length = 0;
gdjs.Level1Code.GDSprite1Objects2.length = 0;
gdjs.Level1Code.GDSprite1Objects3.length = 0;
gdjs.Level1Code.GDSprite1Objects4.length = 0;
gdjs.Level1Code.GDObstacleObjects1.length = 0;
gdjs.Level1Code.GDObstacleObjects2.length = 0;
gdjs.Level1Code.GDObstacleObjects3.length = 0;
gdjs.Level1Code.GDObstacleObjects4.length = 0;
gdjs.Level1Code.GDLifeObjects1.length = 0;
gdjs.Level1Code.GDLifeObjects2.length = 0;
gdjs.Level1Code.GDLifeObjects3.length = 0;
gdjs.Level1Code.GDLifeObjects4.length = 0;
gdjs.Level1Code.GDShape5ExplosionObjects1.length = 0;
gdjs.Level1Code.GDShape5ExplosionObjects2.length = 0;
gdjs.Level1Code.GDShape5ExplosionObjects3.length = 0;
gdjs.Level1Code.GDShape5ExplosionObjects4.length = 0;
gdjs.Level1Code.GDShape4ExplosionObjects1.length = 0;
gdjs.Level1Code.GDShape4ExplosionObjects2.length = 0;
gdjs.Level1Code.GDShape4ExplosionObjects3.length = 0;
gdjs.Level1Code.GDShape4ExplosionObjects4.length = 0;
gdjs.Level1Code.GDShape3ExplosionObjects1.length = 0;
gdjs.Level1Code.GDShape3ExplosionObjects2.length = 0;
gdjs.Level1Code.GDShape3ExplosionObjects3.length = 0;
gdjs.Level1Code.GDShape3ExplosionObjects4.length = 0;
gdjs.Level1Code.GDShape2ExplosionObjects1.length = 0;
gdjs.Level1Code.GDShape2ExplosionObjects2.length = 0;
gdjs.Level1Code.GDShape2ExplosionObjects3.length = 0;
gdjs.Level1Code.GDShape2ExplosionObjects4.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects1.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects2.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects3.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects4.length = 0;
gdjs.Level1Code.GDblackMaskObjects1.length = 0;
gdjs.Level1Code.GDblackMaskObjects2.length = 0;
gdjs.Level1Code.GDblackMaskObjects3.length = 0;
gdjs.Level1Code.GDblackMaskObjects4.length = 0;
gdjs.Level1Code.GDTutorialObjects1.length = 0;
gdjs.Level1Code.GDTutorialObjects2.length = 0;
gdjs.Level1Code.GDTutorialObjects3.length = 0;
gdjs.Level1Code.GDTutorialObjects4.length = 0;
gdjs.Level1Code.GDhelpIconObjects1.length = 0;
gdjs.Level1Code.GDhelpIconObjects2.length = 0;
gdjs.Level1Code.GDhelpIconObjects3.length = 0;
gdjs.Level1Code.GDhelpIconObjects4.length = 0;
gdjs.Level1Code.GDpauseBtnObjects1.length = 0;
gdjs.Level1Code.GDpauseBtnObjects2.length = 0;
gdjs.Level1Code.GDpauseBtnObjects3.length = 0;
gdjs.Level1Code.GDpauseBtnObjects4.length = 0;
gdjs.Level1Code.GDplayBtnObjects1.length = 0;
gdjs.Level1Code.GDplayBtnObjects2.length = 0;
gdjs.Level1Code.GDplayBtnObjects3.length = 0;
gdjs.Level1Code.GDplayBtnObjects4.length = 0;
gdjs.Level1Code.GDhomeBtnObjects1.length = 0;
gdjs.Level1Code.GDhomeBtnObjects2.length = 0;
gdjs.Level1Code.GDhomeBtnObjects3.length = 0;
gdjs.Level1Code.GDhomeBtnObjects4.length = 0;

gdjs.Level1Code.eventsList4(runtimeScene);
return;

}

gdjs['Level1Code'] = gdjs.Level1Code;
