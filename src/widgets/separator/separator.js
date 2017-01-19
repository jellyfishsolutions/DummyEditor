dummyEditor.addWidget({
  template: {
    type: "separator",
    color: "ddd",
    size: "2px"
  },
  name: "separator.name",
  dependencies: [],
  saveSettings: function(item) {
    item.style = "";
    for(var key in item.generics.data){
      if(key!="background-color" && key!= "height") {
        item.style += key+": "+ item.generics.data[key]+";";
      }
    }
  },
  generateCode: function(item) {
    var css = ".separator-"+item.id+" {\nborder-color: "+item.generics.data["background-color"]+";\nborder-top-width: "+item.generics.data["height"]+";"+item.style+"\n}\n";
    return {
      html: '<hr class="'+item.customClassesPrintable+' separator-'+item.id+'">',
      css: css
    };
  }
});
