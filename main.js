const mod = {

	OLSKMomentPerceptionDay (inputData) {
		if (!(inputData instanceof Date) || Number.isNaN(inputData.getTime())) {
			throw new Error('OLSKErrorInputNotValid');
		}

		return (new Date(inputData.valueOf() - (inputData.getTimezoneOffset() / 60 + 4) * 1000 * 60 * 60)).toJSON().slice(0, 10);
	},

};

Object.assign(exports, mod);
