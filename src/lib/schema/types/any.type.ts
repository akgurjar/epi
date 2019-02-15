/**
 * @name AnyType
 * @type Any
 * @description AnyType
 */

import { BaseType } from './base.type';

export class AnyType extends BaseType<any> {
	protected _metaData: any;
	protected _schema: string[];
	constructor(
		protected _location: string,
		protected _fieldName: string,
	) {
		super();
	}
}
