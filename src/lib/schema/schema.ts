
/**
 * @name Schema
 * @description A schema which can be validated, stringify, parsed easily transferred over internet.
 */
import { Flag } from './flag';

export class EpiSchema {
	readonly methods: string[] = [];
	readonly locations: string[] = [];
	readonly fieldNames: string[] = [];
	readonly flags: Flag[] = [];
}
