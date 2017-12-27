describe('Class API:', function () {
    describe('#addClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_addClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_addClass')
        })
        it(`pytools.addClass($ele, 'test') should return true`, function () {
            pytools.addClass($ele, 'test')
            assert(pytools.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#hasClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_hasClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_hasClass')
            pytools.addClass($ele, 'test')
        })
        it(`pytools.hasClass($ele, 'test') should return true`, function () {
            assert(pytools.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#removeClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_removeClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_removeClass')
            pytools.addClass($ele, 'test')
        })
        it(`pytools.removeClass($ele, 'test') should return false`, function () {
            pytools.removeClass($ele, 'test')
            assert.notEqual(pytools.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });
});