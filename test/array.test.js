describe('Array API:', function () {
    describe('#arrayEqual()', function () {
        it(`pytools.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
            assert.notEqual(pytools.arrayEqual([0, 2, 3], [1, 2, 3]))
        });
        it('pytools.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
            assert(pytools.arrayEqual([1, 2, 3], [1, 2, 3]))
        });
        let arr = [8, 2, 3, 4, 7, 8]
        it(`pytools.arrayEqual([${arr},${arr}]) should return true`, function () {
            assert(pytools.arrayEqual(arr, arr))
        });
    });
    /** 数组根据数组对象中的某个属性值进行排序的方法
     *  使用例子：newArray.sort(sortByTarget('number',false)) //表示根据number属性降序排列;若第二个参数不传递，默认表示升序排序
     *  @param attr 排序的属性 如number属性
     *  @param rev true表示升序排列，false降序排序
     *
     */
    describe('#sortByTarget()', function () {
        let arr = [{name: 1}, { name: 2 }, {name: 3}]
        it(`[{name: 3}, { name: 1 }, {name: 2}].sort(pytools.sortByTarget('name', false)) should return [{name: 1}, { name: 2 }, {name: 3}]`, function () {
          assert(arr.sort(pytools.sortByTarget('name', false)))
        });
    });
});
