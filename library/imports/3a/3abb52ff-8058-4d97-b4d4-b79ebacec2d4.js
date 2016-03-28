cc.Class({
    'extends': cc.Component,

    properties: {
        num: {
            'default': [],
            type: cc.Node
        },
        passCheck: false

    },

    // use this for initialization
    onLoad: function onLoad() {
        this.password = "";
    },
    onClicked0: function onClicked0() {
        this.password += '0';
    },
    onClicked1: function onClicked1() {
        this.password += '1';
    },
    onClicked2: function onClicked2() {
        this.password += '2';
    },
    onClicked3: function onClicked3() {
        this.password += '3';
    },
    onClicked4: function onClicked4() {
        this.password += '4';
    },
    onClicked5: function onClicked5() {
        this.password += '5';
    },
    onClicked6: function onClicked6() {
        this.password += '6';
    },
    onClicked7: function onClicked7() {
        this.password += '7';
    },
    onClicked8: function onClicked8() {
        this.password += '8';
    },
    onClicked9: function onClicked9() {
        this.password += '9';
    },
    onClicked10: function onClicked10() {
        this.password += '10';
    },
    backToScene11: function backToScene11() {
        cc.director.loadScene('scene11');
    },
    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        cc.log(this.password);
        if (this.password === '2285') {
            this.passCheck = true;
            cc.director.loadScene('scene11');
        }
    }
});