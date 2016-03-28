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
    scene7ToScene8: function() {
        cc.director.loadScene('scene8');
    },
    scene7ToScene21: function() {
        cc.director.loadScene('scene21');
    },
    scene7ToScene22: function() {
        cc.director.loadScene('scene22');
    },
    scene7ToScene1: function() {
        cc.director.loadScene('scene1');
    },
    scene7ToNum: function() {
        cc.director.loadScene('scene7ToNum');
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
