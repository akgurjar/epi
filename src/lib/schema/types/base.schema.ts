
export abstract class BaseSchema<T> {
	protected abstract location: string;
	protected abstract fieldName: string;
	protected abstract metaData: any;
	/**
	 * @type Filter
	 * @description This allow the given argument values to be truthy for filter.
	 * @param values Argument values which are allowed to be truthy for filter.
	 */
	allow(...values: T[]): this {
		// TO DO
		return this;
	}
	/**
	 * @type Filter
	 * @description This disallow the given argument values to be truthy for filter.
	 * @param values Argument values which are disallowed to be truthy for filter.
	 */
	disallow(...values: T[]): this {
		// TO DO
		return this;
	}
	/**
	 * @type Filter
	 * @description This function will set the required flag to true.
	 */
	required(): this {
		// TO DO
		return this;
	}
	/**
	 * @type MetaData
	 * @description This function will set the label metadata to given value.
	 */
	label(name: string): this {
		// TO DO
		return this;
	}
	/**
	 * @type MetaData
	 * @description This function will set the unit metadata to given value.
	 */
	unit(): this {
		// TO DO
		return this;
	}
	/**
	 * @type Modifier
	 * @description This function will set the default value of the field.
	 */
	default(value: T): this {
		// TO DO
		return this;
	}
	/**
	 * @type MetaData
	 * @description This function will set the example metadata to given value.
	 */
	example(value: T): this {
		// TO DO
		return this;
	}
	description(): this {
		// TO DO
		return this;
	}
	custom(cb: (value: T) => void): this {
		// TO DO
		return this;
	}
	equalTo(value: T): this {
		// TO DO
		return this;
	}
}
