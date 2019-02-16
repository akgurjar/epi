/**
 * @name StringType
 * @type String
 * @description StringType
 */

import { AnyType } from './any.type';

export class StringType extends AnyType<string> {
	/**
	 * @type Filter
	 */
	alphanum(): this {
		// check for alphanum value
		this._schema.flags.push('alphanum');
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
		this._schema.flags.push('alphanum');
		return this;
	}
	/**
	 * @type Modifier, Filter
	 * @description Upercase value or filter upercase value
	 */
	uppercase(convert: boolean = true): this {
		// TO DO
		this._schema.flags.push('alphanum');
		return this;
	}
	/**
	 * @type Modifier, Filter
	 * @description Trim value or filter trimmed value 
	 */
	trim(convert: boolean = true): this {
		// trim value or check if value trim
		this._schema.flags.push('alphanum');
		return this;
	}
	/**
	 * @type Modifier, Filter
	 */
	trimEnd(convert: boolean = true): this {
		// check for alphanum value
		this._schema.flags.push('alphanum');
		return this;
	}
	/**
	 * @type Modifier, Filter
	 */
	trimStart(convert: boolean = true): this {
		// check for alphanum value
		this._schema.flags.push('alphanum');
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
		this._schema.flags.push('email');
		return this;
	}
	/**
	 * @type Filter
	 */
	isoDate(): this {
		// check for alphanum value
		this._schema.flags.push('isoDate');
		return this;
	}
	/**
	 * @type Filter
	 */
	jwt(): this {
		// check for alphanum value
		this._schema.flags.push('jwt');
		return this;
	}
	/**
	 * @type Filter
	 */
	uri(): this {
		// check for alphanum value
		this._schema.flags.push('uri');
		return this;
	}
	/**
	 * @type Filter
	 */
	dataUri(): this {
		// check for alphanum value
		this._schema.flags.push('dataUri');
		return this;
	}
	/**
	 * @type Filter
	 */
	ip(): this {
		// check for alphanum value
		this._schema.flags.push('alphanum');
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
