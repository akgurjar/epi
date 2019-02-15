/**
 * @name ObjectType
 * @type Object
 * @description ObjectType
 */

import { BaseType } from './base.type';

export class ObjectType extends BaseType<string> {
	protected _metaData: any;
	protected _schema: string[];
	constructor(
		protected _location: string,
		protected _fieldName: string,
	) {
		super();
	}
}
