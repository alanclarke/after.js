/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  module('after.js', {
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

    module(':after', {
      setup: function() {
        this.el = $('#after');
      }
    });

    test('check span added after (depending on browser)', 1, function() {
      // Use deepEqual & .get() when comparing jQuery objects.
      var unsupported = $.browser.ie && parseFloat($.browser.version) < 8;
      ok( ( !unsupported || this.el.find('.pseudo-after').length===1) , 'span was added or not added appropriately given the current browser');
    });

}(jQuery));
