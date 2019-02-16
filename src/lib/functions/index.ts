import {
	BodyLocation,
	QueryLocation,
	ParamLocation,
	HeaderLocation,
	CookieLocation,
	MethodLocation,
} from '../locations/index';

export function body(field: string) {
	return new BodyLocation(field);
}
export function query(field: string) {
	return new QueryLocation(field);
}
export function param(field: string) {
	return new ParamLocation(field);
}
export function header(field: string) {
	return new HeaderLocation(field);
}
export function cookie(field: string) {
	return new CookieLocation(field);
}
export function method(field: string) {
	return new MethodLocation(field);
}
