describe('Keycode API:', function () {

    describe('#getKeyName()', function () {
        it(`pytools.getKeyName(13) should return "Enter"`, function () {
            assert(pytools.getKeyName(13) === 'Enter')
        });
    });

});