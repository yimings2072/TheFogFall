cc.Class({
    extends: cc.Component,

    properties: {
        num: {
            default: [],
            type: cc.Node
        },
        passCheck: false,

    },

    // use this for initialization
    onLoad: function () {
        this.password = "";
    },
    onClicked0: function () {
        this.password += '0';
    },
    onClicked1: function () {
        this.password += '1';
    },
    onClicked2: function () {
        this.password += '2';
    },
    onClicked3: function () {
        this.password += '3';
    },
    onClicked4: function () {
        this.password += '4';
    },
    onClicked5: function () {
        this.password += '5';
    },
    onClicked6: function () {
        this.password += '6';
    },
    onClicked7: function () {
        this.password += '7';
    },
    onClicked8: function () {
        this.password += '8';
    },
    onClicked9: function () {
        this.password += '9';
    },
    onClicked10: function () {
        this.password += '10';
    },
    backToScene11: function() {
        cc.director.loadScene('scene11');
    },
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        cc.log(this.password);
        if(this.password === '2285'){
           this.passCheck = true;
           cc.director.loadScene('scene11');
        }
    },
});
