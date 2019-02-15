/**
 * @name NumberType
 * @type Number
 * @description NumberType
 */

import { BaseType } from './base.type';

export class NumberType extends BaseType<number> {
	protected _metaData: any;
	protected _schema: string[];
	constructor(
		protected _location: string,
		protected _fieldName: string,
	) {
		super();
	}
	integer(convert: boolean = false): this {
		// TO DO
		return this;
	}
	float(convert: boolean = false): this {
		// TO DO
		return this;
	}
	unsafe(): this {
		// TO DO
		return this;
	}
	negative(): this {
		// TO DO
		return this;
	}
	position(): this {
		// TO DO
		return this;
	}
	precision(): this {
		// TO DO
		return this;
	}
	min(num: number): this {
		// TO DO
		return this;
	}
	max(num: number): this {
		// TO DO
		return this;
	}
	port(): this {
		// TO DO
		return this;
	}
}
