dummyEditor.addWidget({
    template: {
        type: "code-snippet",
        code: '<strong>hello</strong>',
    },
    name: "code-snippet.name",
    generateCode: function(item) {
        var t = item.code.replace(/</g, '&lt;');
        t = t.replace(/>/g, '&gt;');
        return {
            html: '<pre class="'+item.customClassesPrintable+'" style="'+item.genericStyleString+'">\n'+t+'\n</pre>\n',
            css: ''
        };
    }
});
