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
    onClickedr: function () {

        this.password = "";
    },
    onClickede: function () {
        this.password += 'e';
    },
    backToScene21: function() {
        cc.director.loadScene('scene21');
    },
    update: function (dt) {
        cc.log(this.password);
        if(this.password === '7619e'){
           this.passCheck = true;
           cc.director.loadScene('scene21');
        }
    },
});
