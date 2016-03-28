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

    scene13ToScene15: function() {
        cc.director.loadScene('scene15');
    },
    scene13ToScene16: function() {
        cc.director.loadScene('scene16');
    },
    scene13ToScene17: function() {
        cc.director.loadScene('scene17');
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
