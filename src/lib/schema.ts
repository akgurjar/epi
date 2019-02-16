
/**
 * @name Schema
 * @description A schema which can be validated, stringify, parsed easily transferred over internet.
 */

export class EpiSchema {
	readonly methods: string[] = [];
	readonly locations: string[] = [];
	readonly fieldNames: string[] = [];
	readonly flags: string[] = [];
}
