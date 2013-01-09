
domready(function(){

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

    afterjs({
      manual_run: true,
      no_jquery: true,
      force: true,
      callback: function() {
        module(':after');
        var unsupported = true; //$.browser.msie && parseFloat($.browser.version) < 8;
        test('check span added after (depending on browser)', 1, function() {
          var $el = $('#after');
          ok(unsupported || ($el.find('.pseudo-after').length === 1), 'span was ' + (unsupported ? 'added' : 'not added'));
        });
      }
    });



});
