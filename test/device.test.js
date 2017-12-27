describe('Device API:', function () {
    describe('#getExplore()', function () {
        it(`pytools.getExplore() should return "Chrome"`, function () {
            console.log(`Explore:${pytools.getExplore()}`)
            assert(/^Chrome:/.test(pytools.getExplore()))
        });
    });

    describe('#getOS()', function () {
        it(`pytools.getOS() should return "windows"`, function () {
            console.log(`OS:${pytools.getOS()}`)
            assert(pytools.getOS() === 'windows' || pytools.getOS() === 'MacOSX' || pytools.getOS() === 'linux')
        });
    });

});
