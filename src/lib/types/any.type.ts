/**
 * @name AnyType
 * @type Any
 * @description AnyType
 */

import { EpiSchema, Flag } from '../schema/index';

export abstract class AnyType<T> {
	protected _schema: EpiSchema = new EpiSchema();
	/**
	 * @type Filter
	 * @description This allow the given argument values to be truthy for filter.
	 * @param values Argument values which are allowed to be truthy for filter.
	 */
	allow(...values: T[]): this {
		// TO DO
		this._schema.flags.push(new Flag('allow', {data: values}));
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
	/**
	 * @type MetaData
	 * @description This function will set the description metadata to given value.
	 */
	description(): this {
		// TO DO
		return this;
	}
	/**
	 * @type Filter, Modifier
	 * @description This function will accept a custom validator function.
	 */
	custom(cb: (value: T) => void): this {
		// TO DO
		return this;
	}
	/**
	 * @type Filter
	 * @description This function check equal filter to given value.
	 */
	equalTo(value: T): this {
		// TO DO
		return this;
	}
	/**
	 * @type MetaData
	 * @description This function set location metdata.
	 * @param location Location identifier.
	 */
	location(loc: string): this {
		// TO DO
		return this;
	}
	/**
	 * @type Filter
	 * @description This function validate.
	 * @param values Location identifier.
	 */
	enum(...values: T[]): this {
		// TO DO
		return this;
	}
	/**
	 * @type Filter
	 * @description bla bla bla
	 */
	validate() {
		return (req: any, res: any, next: any) => {
			next();
		};
	}
}
