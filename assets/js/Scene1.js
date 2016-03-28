cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {

    },
    
    toPaperScene: function() {
        cc.director.loadScene('scene1TopaperScene');
    },
    
    toScene2: function() {
        cc.director.loadScene('scene2');
    },
    
    toScene3: function() {
        cc.director.loadScene('scene3');
    },
    
    toScene4: function() {
        cc.director.loadScene('scene4');
    },
    
    toScene7: function() {
        cc.director.loadScene('scene7');
    },
    toScene20: function() {
        cc.director.loadScene('scene20');
    },
    // called every frame, uncomment this function to activate update callback
    //update: function (dt) {
      
    //},
});
