import { BaseLocation } from './base.location';

export class ParamLocation extends BaseLocation {
	constructor(...fieldNames: string[]) {
		super('param', fieldNames);
	}
}
