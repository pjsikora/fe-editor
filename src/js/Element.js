class Element {
    constructor(config) {
        this.elements = [];
        this.elHTML;
        this.selector = '';
        this.$addElement;
        this.$removeElement;
        this.$editElement;


        // this.elementPrefix = config.prefix ? config.prefix : '000';


    }


    // Thanks Krasimir http://krasimirtsonev.com/blog/article/Javascript-template-engine-in-just-20-line

    // var template = '<p>Hello, my name is <%this.name%>. I\'m <%this.profile.age%> years old.</p>';
    // console.log(TemplateEngine(template, {
    //     name: "Krasimir Tsonev",
    //     profile: { age: 29 }
    // }));
    // parseTemplate(html, options) {
    //   var re = /<%([^%>]+)?%>/g, reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, code = 'var r=[];\n', cursor = 0, match;
    //   var add = function(line, js) {
    //       js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
    //           (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
    //       return add;
    //   }
    //   while(match = re.exec(html)) {
    //       add(html.slice(cursor, match.index))(match[1], true);
    //       cursor = match.index + match[0].length;
    //   }
    //   add(html.substr(cursor, html.length - cursor));
    //   code += 'return r.join("");';
    //   return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
    // }


    createFromTpl(html, options) {
      var re = /<%([^%>]+)?%>/g, reExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, code = 'var r=[];\n', cursor = 0, match;
      var add = function(line, js) {
          js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
              (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
          return add;
      }
      while(match = re.exec(html)) {
          add(html.slice(cursor, match.index))(match[1], true);
          cursor = match.index + match[0].length;
      }
      add(html.substr(cursor, html.length - cursor));
      code += 'return r.join("");';
      return new Function(code.replace(/[\r\t\n]/g, '')).apply(options);
    }

    bindEvents() {
        this.$addElement.addEventListener();
        this.$removeElement.addEventListener();
        this.$editElement.addEventListener();
    }

    prepareElement() {

    }
}
