/**
 * @name NumberSchema
 * @type Number
 * @description NumberSchema
 */

import { BaseSchema } from './base.schema';

export class NumberSchema extends BaseSchema<number> {
	protected location: string;
	protected metaData: any;
	protected schema: string[];
	constructor(protected fieldName: string) {
		super();
	}
	integer(convert: boolean = false): NumberSchema {
		// TO DO
		return this;
	}
	float(convert: boolean = false): NumberSchema {
		// TO DO
		return this;
	}
	unsafe(): NumberSchema {
		// TO DO
		return this;
	}
	negative(): NumberSchema {
		// TO DO
		return this;
	}
	position(): NumberSchema {
		// TO DO
		return this;
	}
	precision(): NumberSchema {
		// TO DO
		return this;
	}
	min(num: number): NumberSchema {
		// TO DO
		return this;
	}
	max(num: number): NumberSchema {
		// TO DO
		return this;
	}
	port(): NumberSchema {
		// TO DO
		return this;
	}
}
