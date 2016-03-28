cc.Class({
    'extends': cc.Component,

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
    onLoad: function onLoad() {},
    scene7ToScene8: function scene7ToScene8() {
        cc.director.loadScene('scene8');
    },
    scene7ToScene21: function scene7ToScene21() {
        cc.director.loadScene('scene21');
    },
    scene7ToScene22: function scene7ToScene22() {
        cc.director.loadScene('scene22');
    },
    scene7ToScene1: function scene7ToScene1() {
        cc.director.loadScene('scene1');
    },
    scene7ToNum: function scene7ToNum() {
        cc.director.loadScene('scene7ToNum');
    }
});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },