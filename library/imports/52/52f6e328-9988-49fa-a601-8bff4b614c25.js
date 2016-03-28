cc.Class({
    'extends': cc.Component,

    properties: {},

    // use this for initialization
    onLoad: function onLoad() {},

    toPaperScene: function toPaperScene() {
        cc.director.loadScene('scene1TopaperScene');
    },

    toScene2: function toScene2() {
        cc.director.loadScene('scene2');
    },

    toScene3: function toScene3() {
        cc.director.loadScene('scene3');
    },

    toScene4: function toScene4() {
        cc.director.loadScene('scene4');
    },

    toScene7: function toScene7() {
        cc.director.loadScene('scene7');
    },
    toScene20: function toScene20() {
        cc.director.loadScene('scene20');
    }
});
// called every frame, uncomment this function to activate update callback
//update: function (dt) {

//},