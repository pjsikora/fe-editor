/* jslint node: true */
/* global describe, it, expect */

"use strict";


(function() {
  describe("Page", function () {
    it("Returns HTML", function () {
      var page = new Page();
      page.setHTMLStructure = "HTML"
      expect(mc.getHTMLStructure).toBe("HTML");
    });

    
  });
})();
