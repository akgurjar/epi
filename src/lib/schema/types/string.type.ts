/**
 * @name StringType
 * @type Number
 * @description StringType
 */

import { BaseType } from './base.type';

export class StringType extends BaseType<string> {
	protected _metaData: any;
	protected _schema: string[];
	constructor(
		protected _location: string,
		protected _fieldName: string,
	) {
		super();
	}
	/**
	 * @type Filter
	 */
	alphanum(): this {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Filter
	 */
	regex(): this {
		// check for regex
		return this;
	}
	/**
	 * @type Modifier, Filter
	 * @description Lowercase value or filter lowercase value
	 */
	lowercase(convert: boolean = true): this {
		// TO DO
		return this;
	}
	/**
	 * @type Modifier, Filter
	 * @description Upercase value or filter upercase value
	 */
	uppercase(convert: boolean = true): this {
		// TO DO
		return this;
	}
	/**
	 * @type Modifier, Filter
	 * @description Trim value or filter trimmed value 
	 */
	trim(convert: boolean = true): this {
		// trim value or check if value trim
		return this;
	}
	/**
	 * @type Modifier, Filter
	 */
	trimEnd(convert: boolean = true): this {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Modifier, Filter
	 */
	trimStart(convert: boolean = true): this {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Filter
	 */
	replace(): this {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Filter
	 */
	truncate(): this {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Filter
	 */
	email(): this {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Filter
	 */
	isoDate(): this {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Filter
	 */
	jwt(): this {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Filter
	 */
	uri(): this {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Filter
	 */
	dataUri(): this {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Filter
	 */
	ip(): this {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Filter
	 */
	creditCard(): this {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Filter
	 */
	hostname(): this {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Modifier
	 */
	normalize(): this {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Modifier
	 */
	split(): this {
		// check for alphanum value
		return this;
	}
}
