import { BaseLocation } from './base.location';

export class QueryLocation extends BaseLocation {
	constructor(fieldName: string) {
		super('query', fieldName);
	}
}
