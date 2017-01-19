dummyEditor.addWidget({
    template: {
        type: "bootstrap-blockquote",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
        footer: "Someone famous"
    },
    name: "bootstrapblockquote.name",
    dependencies: [],
    generateCode: function(item) {
        return {
            html: '<blockquote style="'+item.genericStyleString+'" class="'+item.customClassesPrintable+'"><p>'+item.text+'</p><footer style="color: '+item.footercolor+';">'+item.footer+'</footer></blockquote>',
            css: ''
        };
    }
});
