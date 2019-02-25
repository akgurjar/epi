
import { schemaSymbol } from './helper';

interface Options {
	type?: 'boolean' | 'string' | 'number' | 'object' | 'array';
	required?: boolean;
}
interface InputOptions extends Options {
	operations: 'create' | 'update';
}
interface OutputOptions extends Options {
	operations: 'detail' | 'list';
}

export function define(options?: Options) {
	console.log(options);
	return (target: any, propertyKey: PropertyKey) => {
		// define schema container if not present
		const propSchema = propertySchema(target, propertyKey);
		// if () {}
		if (!target.hasOwnProperty(propertyKey)) {
			Object.defineProperty(target, propertyKey, { enumerable: true, writable: true });
			console.info('Define > ', target, propertyKey);
		}
	};
}

/**
 * @description This decorator mark a property as input when a resource is created or updated.
 * @param operations Input operations on which this property act as input.
 */
export function input(options?: InputOptions) {
	console.log(options);
	return (target: any, propertyKey: PropertyKey) => {
		// define schema container if not present
		if (!target[schemaSymbol]) {
			Object.defineProperty(target, schemaSymbol, {enumerable: false, value: {}});
		}
		if (!target.hasOwnProperty(propertyKey)) {
			Object.defineProperty(target, propertyKey, { enumerable: true, writable: true });
			console.log('Input > ', target, propertyKey);
		}
	};
}
export function output(options?: OutputOptions) {
	console.log(options);
	return (target: any, propertyKey: PropertyKey) => {
		// define schema container if not present
		if (!target[schemaSymbol]) {
			Object.defineProperty(target, schemaSymbol, {enumerable: false, value: {}});
		}
		if (!target.hasOwnProperty(propertyKey)) {
			Object.defineProperty(target, propertyKey, { enumerable: true, writable: true });
			console.log('Output > ', target, propertyKey);
		}
	};
}


function propertySchema(target: any, propertyKey: PropertyKey) {
	const schema = target[schemaSymbol] || {};
	if (!schema[propertyKey]) {
		schema[propertyKey] = {};
	}
	// Init Schema Container
	if (!target[schemaSymbol]) {
		Object.defineProperty(target, schemaSymbol, {enumerable: false, value: schema});
	}
	// 
	return schema[propertyKey];
}