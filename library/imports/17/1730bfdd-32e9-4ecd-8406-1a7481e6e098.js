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

    scene3ToBox1: function scene3ToBox1() {
        cc.director.loadScene('scene3ToBox1');
    },

    scene3ToBox2: function scene3ToBox2() {
        cc.director.loadScene('scene3ToBox2');
    },

    scene3ToScene1: function scene3ToScene1() {
        cc.director.loadScene('scene1');
    }
});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },