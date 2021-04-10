const mod = {

	OLSKMomentPerceptionDay (inputData) {
		if (!(inputData instanceof Date) || Number.isNaN(inputData.getTime())) {
			throw new Error('OLSKErrorInputNotValid');
		}

		return (new Date(inputData.valueOf() - (inputData.getTimezoneOffset() / 60 + 4) * 1000 * 60 * 60)).toJSON().slice(0, 10);
	},

	OLSKMomentPerceptionDate (inputData) {
		return new Date(mod.OLSKMomentPerceptionDay(inputData) + `T04:00:00-${ (inputData.getTimezoneOffset() / 60).toString().padStart(2, '0') }:00`);
	},

};

Object.assign(exports, mod);
