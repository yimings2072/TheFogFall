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
    scene9ToScene10: function() {
        cc.director.loadScene('scene10');
    },
    scene9ToScene8: function() {
        cc.director.loadScene('scene8');
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
