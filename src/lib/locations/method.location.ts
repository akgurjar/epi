/**
 * @name MethodLocation
 */

import { BaseLocation } from './base.location';
import { BodyLocation } from './body.location';
import { QueryLocation } from './query.location';
import { ParamLocation } from './param.location';
import { HeaderLocation } from './header.location';
import { CookieLocation } from './cookie.location';

export class MethodLocation extends BaseLocation {
	constructor(...methods: string[]) {
		super(null, []);
		this._schema.methods.splice(0, 0, ...methods);
	}
	/**
	 * @param fieldNames All field names
	 */
	body(...fieldNames: string[]): BodyLocation {
		return new BodyLocation(...fieldNames);
	}
	/**
	 * @param fieldNames All field names
	 */
	query(...fieldNames: string[]): QueryLocation {
		return new QueryLocation(...fieldNames);
	}
	/**
	 * @param fieldNames All field names
	 */
	param(...fieldNames: string[]): ParamLocation {
		return new ParamLocation(...fieldNames);
	}
	/**
	 * @param fieldNames All field names
	 */
	header(...fieldNames: string[]): HeaderLocation {
		return new HeaderLocation(...fieldNames);
	}
	/**
	 * @param fieldNames All field names
	 */
	cookie(...fieldNames: string[]): CookieLocation {
		return new CookieLocation(...fieldNames);
	}
}
