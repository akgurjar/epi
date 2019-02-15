import { BaseLocation } from './base.location';

export class ParamLocation extends BaseLocation {
	constructor(fieldName: string) {
		super('param', fieldName);
	}
}
