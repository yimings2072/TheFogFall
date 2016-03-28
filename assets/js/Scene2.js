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

    scene2ToTooth: function () {
        cc.director.loadScene('scene2ToTooth');
    },
    
    scene2ToWash: function() {
        cc.director.loadScene('scene2ToWash');
    },
    scene2ToScene1: function() {
        cc.director.loadScene('scene1');
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
