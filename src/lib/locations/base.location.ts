import { AnyType } from '../types/any.type';
import { StringType } from '../types/string.type';
import { NumberType } from '../types/number.type';
import { ArrayType } from '../types/array.type';
import { ObjectType } from '../types/object.type';

export class BaseLocation extends AnyType<any> {
	constructor(location: string, fieldNames: string[]) {
		super();
		// Push field names in schema
		this._schema.fieldNames.splice(0, 0, ...fieldNames);
		// set location in schema
		if (location) {
			this._schema.locations.push(location);
		}
	}
	/**
	 * @type StringType
	 * @description StringType
	 */
	string(): StringType {
		return new StringType();
	}
	/**
	 * @type NumberType
	 * @description NumberType
	 */
	number(): NumberType {
		return new NumberType();
	}
	/**
	 * @type ArrayType
	 * @description ArrayType
	 */
	array(): ArrayType {
		return new ArrayType();
	}
	/**
	 * @type ObjectType
	 * @description ObjectType
	 */
	object(): ObjectType {
		return new ObjectType();
	}
}
