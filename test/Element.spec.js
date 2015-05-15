/* jslint node: true */
/* global describe, it, expect */

"use strict";


(function() {
  describe("Element", function () {
    var element = new Element();

    it(" Succesfully created object", function () {
      expect(typeof(element)).toBe("object");
    });


    it("Templating system", function() {
      var html = element.createFromTpl("<p><% this.content %></p>",{content: 'content'});
      expect(html).toBe("<p>content</p>");

      var html = element.createFromTpl("<p><% this.content %><% this.content %></p>",{content: 'content'});
      expect(html).toBe("<p>contentcontent</p>");
    });
  });
})();
