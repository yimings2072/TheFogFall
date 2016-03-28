cc.Class({
    extends: cc.Component,

    properties: {
        id: 0,
        bg: cc.SpriteFrame,
        item: cc.SpriteFrame,
        itemName: cc.Label
    },
    
    init: function(data) {
        cc.log(data);
        cc.log('id= ' + data.id + ' sf= ' + data.SpriteFrame + ' name= ' + data.itemName);
        this.id = data.id,
        this.item.SpriteFrame = data.SpriteFrame,
        this.itemName = data.itemName
    }

});
