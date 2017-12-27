describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual pytools.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.deepEqual(person, pytools.deepClone(person))
        });

        it(`person === pytools.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.notEqual(person, pytools.deepClone(person))
        });
    });

    describe('#isEmptyObject()', function () {
        it(`pytools.isEmptyObject({}) should return true`, function () {
            assert(pytools.deepClone({}))
        });

        it(`pytools.isEmptyObject({ one: 1 }) should return false`, function () {
            assert.notEqual(pytools.isEmptyObject({
                one: 1
            }))
        });

        it(`pytools.isEmptyObject([]) should return false`, function () {
            assert.notEqual(pytools.isEmptyObject([]))
        });
    });
})