import { AnyType } from '../types/any.type';
import { StringType } from '../types/string.type';
import { NumberType } from '../types/number.type';

export class BaseLocation {
	constructor(
		private _location: string,
		private _fieldName: string,
	) {}
	any(): AnyType {
		return new AnyType(this._location, this._fieldName);
	}
	string(): StringType {
		return new StringType(this._location, this._fieldName);
	}
	number(): NumberType {
		return new NumberType(this._location, this._fieldName);
	}
}
