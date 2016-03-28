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
    onLoad: function onLoad() {
        var move = cc.moveBy(3, -2500);
        this.node.runAction(move);
    },
    CameraToScene11: function CameraToScene11() {
        cc.director.loadScene('scene11');
    }
});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },