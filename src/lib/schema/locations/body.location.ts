import { BaseLocation } from './base.location';

export class BodyLocation extends BaseLocation {
	constructor(fieldName: string) {
		super('body', fieldName);
	}
}
