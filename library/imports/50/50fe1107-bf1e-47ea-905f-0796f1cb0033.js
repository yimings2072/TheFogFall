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
    scene11ToScene12: function scene11ToScene12() {
        cc.director.loadScene('scene12');
    },
    scene11ToScene8: function scene11ToScene8() {
        cc.director.loadScene('scene8');
    },
    scene11ToPrint1: function scene11ToPrint1() {
        cc.director.loadScene('scene11ToPrint1');
    },
    scene11ToPrint2: function scene11ToPrint2() {
        cc.director.loadScene('scene11ToPrint2');
    },
    scene11ToPrint3: function scene11ToPrint3() {
        cc.director.loadScene('scene11ToPrint3');
    },
    scene11ToCamera: function scene11ToCamera() {
        cc.director.loadScene('scene11ToCamera');
    }
});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },