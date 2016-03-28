cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {

    },

    scene4ToScene5: function() {
        cc.director.loadScene('scene5');
    },
    
    scene4ToScene6: function() {
        cc.director.loadScene('scene6');
    },
    scene4ToScene18: function() {
        cc.director.loadScene('scene18');
    },
    scene4ToScene1: function() {
        cc.director.loadScene('scene1');
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
