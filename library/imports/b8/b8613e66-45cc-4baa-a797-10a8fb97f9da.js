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
    scene22ToBroke: function scene22ToBroke() {
        cc.director.loadScene('scene22ToBroke');
    },
    scene22ToWindow: function scene22ToWindow() {
        cc.director.loadScene('scene22ToWindow');
    },
    scene22ToScene23: function scene22ToScene23() {
        cc.director.loadScene('scene23');
    },
    scene22ToScene7: function scene22ToScene7() {
        cc.director.loadScene('scene7');
    }
});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },