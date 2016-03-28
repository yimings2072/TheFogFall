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
        this.bottle = this.node.getChildByName("bottle");
        cc.log(this.bottle);
        this.bottle.on(cc.Node.EventType.TOUCH_START, function(event){
            this.bottle.setScale(0,0);
            this.bottle.active = false;
        });
        
    },

    backToScene2: function() {
        cc.director.loadScene('scene2');
    },
    
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
