/* jslint node: true */
/* global describe, it, expect */

"use strict";


(function() {
  describe("Page", function () {
    it("Returns HTML", function () {
      var page = new Page();
      expect(mc.init).toBe(1);
    });
  });
})();
