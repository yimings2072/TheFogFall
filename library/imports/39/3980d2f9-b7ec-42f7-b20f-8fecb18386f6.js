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
    scene21ToClothes: function scene21ToClothes() {
        cc.director.loadScene('scene21ToClothes');
    },
    scene21ToLock: function scene21ToLock() {
        cc.director.loadScene('scene21ToLock');
    },
    scene21ToScene7: function scene21ToScene7() {
        cc.director.loadScene('scene7');
    }
});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },