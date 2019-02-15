import { BaseSchema } from './base.schema';

export class StringSchema extends BaseSchema<string> {
	protected location: string;
	protected metaData: any;
	protected schema: string[];
	constructor(protected fieldName: string) {
		super();
	}
	/**
	 * @type Filter
	 */
	alphanum(): StringSchema {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Filter
	 */
	regex(): StringSchema {
		// check for regex
		return this;
	}
	/**
	 * @type Modifier, Filter
	 * @description Lowercase value or filter lowercase value
	 */
	lowercase(convert: boolean = true): StringSchema {
		// TO DO
		return this;
	}
	/**
	 * @type Modifier, Filter
	 * @description Upercase value or filter upercase value
	 */
	uppercase(convert: boolean = true): StringSchema {
		// TO DO
		return this;
	}
	/**
	 * @type Modifier, Filter
	 * @description Trim value or filter trimmed value 
	 */
	trim(convert: boolean = true): StringSchema {
		// trim value or check if value trim
		return this;
	}
	/**
	 * @type Modifier, Filter
	 */
	trimEnd(convert: boolean = true): StringSchema {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Modifier, Filter
	 */
	trimStart(convert: boolean = true): StringSchema {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Filter
	 */
	replace(): StringSchema {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Filter
	 */
	truncate(): StringSchema {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Filter
	 */
	email(): StringSchema {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Filter
	 */
	isoDate(): StringSchema {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Filter
	 */
	jwt(): StringSchema {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Filter
	 */
	uri(): StringSchema {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Filter
	 */
	dataUri(): StringSchema {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Filter
	 */
	ip(): StringSchema {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Filter
	 */
	creditCard(): StringSchema {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Filter
	 */
	hostname(): StringSchema {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Modifier
	 */
	normalize(): StringSchema {
		// check for alphanum value
		return this;
	}
	/**
	 * @type Modifier
	 */
	split(): StringSchema {
		// check for alphanum value
		return this;
	}
}
