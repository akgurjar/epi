
interface FlagOptions {
	data?: any;
}

export class Flag {
	constructor(
		readonly name: string,
		readonly options: FlagOptions = null,
	) {}
}
