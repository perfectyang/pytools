describe('Regexp API:', function () {

    describe('#isEmail()', function () {
        it('pytools.isEmail("leiquanlive.com") should return false ', function () {
            assert.notEqual(pytools.isEmail("leiquanlive.com"))
        });
        it('pytools.isEmail("leiquan@live.com") should return true ', function () {
            assert(pytools.isEmail("leiquan@live.com"))
        });
    });

    describe('#isIdCard()', function () {
        it('pytools.isIdCard("622224188203234033") should return true ', function () {
            assert(pytools.isIdCard("622224188203234033"))
        });
        it('pytools.isIdCard("zas224188203234033") should return false', function () {
            assert(!pytools.isIdCard("leiquan@live.com"))
        });
    });

    describe('#isPhoneNum()', function () {
        it('pytools.isPhoneNum("18882324234") should return true ', function () {
            assert(pytools.isPhoneNum("18882324234"))
        });
        it('pytools.isPhoneNum("8618882324234") should return true ', function () {
            assert(pytools.isPhoneNum("8618882324234"))
        });
        it('pytools.isPhoneNum("5534553") should return false', function () {
            assert(!pytools.isPhoneNum("5534553"))
        });
    });

    describe('#isUrl()', function () {
        it('pytools.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(pytools.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('pytools.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
            assert(pytools.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
        });
        it('pytools.isUrl("www.baidu.com") should return true', function () {
            assert(pytools.isUrl("www.baidu.com"))
        });
        it('pytools.isUrl("baidu.com") should return true', function () {
            assert(pytools.isUrl("baidu.com"))
        });
        it('pytools.isUrl("http://baiducom") should return false', function () {
            assert(!pytools.isUrl("http://baiducom"))
        });
    });

});