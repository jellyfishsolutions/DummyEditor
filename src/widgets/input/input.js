dummyEditor.addWidget({
  template: {
    type: "input",
    name: "",
    inputType: "text",
    label: "Label:",
    inputId: "test",
    placeholder: "Placeholder"
  },
  name: "input.name",
  dependencies: [],
  generateCode: function(item) {
    var styleParent="", styleInput="";
    if(item.generics!=undefined) {
      for (var key in item.generics.data) {
        if(item.generics.data[key]!= undefined && item.generics.data[key]!="")
        if (key!="height") {
          styleParent += key+": "+item.generics.data[key]+";";
        }
        if(key=="text-align" || key=="height"){
          styleInput += key+": "+item.generics.data[key]+";";
        }
      }
    }
    html = '<div style="'+styleParent+'" class="form-group '+item.customClassesPrintable+'">\n';
    if (item.label) {
      html += '<label style="color:'+item.labelcolor+'" for="'+item.inputId+'">'+item.label+'</label>\n';
    }
    html += '<input style="'+styleInput+'" type="'+item.inputType+'" name="'+item.name+'" class="form-control" ';
    // html += 'style="'
    //
    // html+='"';
    html += 'id="'+item.inputId+'" placeholder="'+item.placeholder+'">\n';
    html += '</div>\n';
    console.log("input out", html);
    return {
      html: html,
      css: ''
    };
  }
});
