dummyEditor.addWidget({
    template: {
        type: "container",
        info: false,
        isContainer: true,
        element: 'div',
        columns: [[]]
    },
    name: "container.name",
    saveSettings: function(item) {
        item.style = "";
        if (item.imgbackground) {
            item.style += "background-image: url(\""+item.imgbackground+"\"); ";
        }
        item.style += item.genericStyleString;
    },
    generateCode: function(item) {
        var out = {
            html: '',
            css: ''
        };
        out.css += ".dummy-container-"+item.id+" {\n";
        if (item.imgbackground) {
            out.css += "background-image: url(\""+item.imgbackground+"\"); ";
        }
        out.css+= item.genericStyleString;
        out.css += "}\n";
        out.html += '<'+item.element;
        if (item.custom_id) out.html += ' id="'+item.custom_id+'"';
        out.html +=' class="'+item.customClassesPrintable+' dummy-container-'+item.id+'">\n';
        for (var i = 0; i<item.columns[0].length; i++) {
            var f =  dummyEditor.getWidget(item.columns[0][i].type).generateCode;
            var r = f(item.columns[0][i]);
            out.html += r.html+"\n";
            out.css += r.css+"\n";
        }
        out.html += '</'+item.element+'>\n';
        return out;
    }
});
