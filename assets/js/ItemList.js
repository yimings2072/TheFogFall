var Item = cc.Class({
    name: 'Item',
    properties: {
        id:0,
        iconSF: cc.SpriteFrame,
        itemName: ''
    }
});
cc.Class({
    extends: cc.Component,

    properties: {
        items: {
            default: [],
            type: Item
        },
        itemPrefab: cc.Prefab
    },

    // use this for initialization
    onLoad: function () {
        for(var i = 0; i< this.items.length; i++){
            cc.log('item instantiate' + this.items[i]);
            var itemthings = cc.instantiate(this.itemPrefab);
            var data = this.items[i];
            this.node.addChild(itemthings);
            itemthings.getComponent('ItemTemplates').init({
                id : data.id,
                item: data.iconSF,
                itemName: data.itemName,
            });
        }
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
