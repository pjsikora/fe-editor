/* jslint node: true */
/* global describe, it, expect */

"use strict";


(function() {
  describe("MainCtrl", function () {
    it("Returns HTML", function () {
      var mc = new MainCtrl();
      expect(mc.getHTML).toBe("");
    });
  });
})();
