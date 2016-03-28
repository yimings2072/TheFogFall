cc.Class({
    extends: cc.Component,

    properties: {
        goEnd: {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function () {
        var self = this;
        self.anim = self.node.getComponent(cc.Animation);
        this.goEnd.on(cc.Node.EventType.TOUCH_END,function (event) {
            self.anim.play('end1');
        })
    },
    scene24ToScene23: function() {
        cc.director.loadScene('scene23');
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
