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
    scene8ToScene9: function scene8ToScene9() {
        cc.director.loadScene('scene9');
    },

    scene8ToScene13: function scene8ToScene13() {
        cc.director.loadScene('scene13');
    },

    scene8ToScene7: function scene8ToScene7() {
        cc.director.loadScene('scene7');
    }
});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },