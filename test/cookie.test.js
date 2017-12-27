describe('Cookie API:', function () {
    describe('#getCookie()', function () {
        before(function () {
            pytools.setCookie('test', 'getTestValue')
        })
        it(`pytools.getCookie('test', 'getTestValue') should return true`, function () {
            assert(pytools.getCookie('test') === 'getTestValue')
        })
        after(function () {
            pytools.removeCookie('test')
        })
    })

    describe('#removeCookie()', function () {
        before(function () {
            pytools.setCookie('test', 'removeTestValue')
        })
        it(`pytools.removeCookie('test') should return false`, function () {
            pytools.removeCookie('test')
            assert.notEqual(pytools.getCookie('test') === 'removeTestValue')
        })
    })

    describe('#setCookie()', function () {
        it(`pytools.getCookie('test', 'setCookie') should return true`, function () {
            pytools.setCookie('test', 'setCookie')
            assert(pytools.getCookie('test') === 'setCookie')
        })
        after(function () {
            pytools.removeCookie('test')
        })
    })
})