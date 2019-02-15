import { BodyLocation } from '../schema/index';

export function body(field: string) {
	return new BodyLocation(field);
}
