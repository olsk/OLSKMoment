const mod = {

	OLSKMomentStringOffset () {
		const item = (new Date()).getTimezoneOffset() / 60;
		return (item < 0 ? '+' : '-') + String(Math.abs(item)).padStart(2, '0')
	},

	OLSKMomentPerceptionDay (inputData) {
		if (!(inputData instanceof Date) || Number.isNaN(inputData.getTime())) {
			throw new Error('OLSKErrorInputNotValid');
		}

		return (new Date(inputData.valueOf() - (inputData.getTimezoneOffset() / 60 + 4) * 1000 * 60 * 60)).toJSON().slice(0, 10);
	},

	OLSKMomentPerceptionDate (inputData) {
		return new Date(mod.OLSKMomentPerceptionDay(inputData) + `T04:00:00${ mod.OLSKMomentStringOffset() }:00`);
	},

};

Object.assign(exports, mod);
