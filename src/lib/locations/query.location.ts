import { BaseLocation } from './base.location';

export class QueryLocation extends BaseLocation {
	constructor(...fieldNames: string[]) {
		super('query', fieldNames);
	}
}
