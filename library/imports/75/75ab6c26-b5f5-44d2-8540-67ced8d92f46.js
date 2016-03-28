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
    scene18ToScene19: function scene18ToScene19() {
        cc.director.loadScene('scene19');
    },
    scene18ToScene4: function scene18ToScene4() {
        cc.director.loadScene('scene4');
    },
    scene18ToGirl: function scene18ToGirl() {
        cc.director.loadScene('scene18ToGirl');
    }
});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },