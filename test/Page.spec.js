/* jslint node: true */
/* global describe, it, expect */

"use strict";


(function() {
  describe("Page", function () {
    var page = new Page();

    it("Succesfully created object", function () {
      expect(typeof(page)).toBe("object");
    });


    it("Setting and getting HTML", function() {
      page.setHTMLStructure('a');
      expect(page.getHTMLStructure()).toBe('a');

      page.setHTMLStructure('<p>Text</p>');
      expect(page.getHTMLStructure()).toBe('<p>Text</p>');
    });

    it("Adding HTML structure", function() {
      page.setHTMLStructure('a');
      page.addHTMLStructure('p');

      expect(page.getHTMLStructure()).toBe('ap');

      page.setHTMLStructure('<p>Text</p>');
      page.addHTMLStructure('<div></div>');

      expect(page.getHTMLStructure()).toBe('<p>Text</p><div></div>');
    });

    it("Adding HTML structure", function() {});

  });
})();
