const { throws, deepEqual } = require('assert');

const mod = require('./main.js');

describe('OLSKMomentStringOffset', function test_OLSKMomentStringOffset() {

	it('returns offset in current timezone', function () {
		const item = (new Date()).getTimezoneOffset() / 60;
		deepEqual(mod.OLSKMomentStringOffset(), (item < 0 ? '+' : '-') + String(Math.abs(item)).padStart(2, '0'));
	});

});

describe('OLSKMomentPerceptionDay', function test_OLSKMomentPerceptionDay() {

	it('throws if not valid', function () {
		throws(function () {
			mod.OLSKMomentPerceptionDay(new Date('alfa'));
		}, /OLSKErrorInputNotValid/);
	});

	it('returns day in current timezone', function () {
		deepEqual(mod.OLSKMomentPerceptionDay(new Date(`2020-05-02T12:00:00${ mod.OLSKMomentStringOffset() }:00`)), '2020-05-02');
	});

	it('previous day if before 4am', function () {
		const date = new Date(`2020-05-02T03:59:00${ mod.OLSKMomentStringOffset() }:00`);
		deepEqual(mod.OLSKMomentPerceptionDay(date), '2020-05-01');
	});

	it('same day if 4am', function () {
		const date = new Date(`2020-05-02T04:00:00${ mod.OLSKMomentStringOffset() }:00`);
		deepEqual(mod.OLSKMomentPerceptionDay(date), '2020-05-02');
	});

});

describe('OLSKMomentPerceptionDate', function test_OLSKMomentPerceptionDate() {

	it('throws if not valid', function () {
		throws(function () {
			mod.OLSKMomentPerceptionDate(new Date('alfa'));
		}, /OLSKErrorInputNotValid/);
	});

	it('returns date', function () {
		const item = new Date();
		deepEqual(mod.OLSKMomentPerceptionDate(item), new Date(mod.OLSKMomentPerceptionDay(item) + `T04:00:00${ mod.OLSKMomentStringOffset() }:00`));
	});

});
