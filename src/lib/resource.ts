import { RequestHandler, Router, IRoute } from 'express';
import { ResourceSchema } from './schema';

export class Resource {
	readonly router: Router = Router();
	readonly path: string = `/${this.name}s`;
	readonly resourcePath: string = `/:${this.name}`;
	private readonly _route: IRoute = this.router.route(this.resourcePath);
	constructor(
		public name: string,
		public schema?: ResourceSchema,
	) {
		console.log(schema);
	}
	onCreate(...handlers: RequestHandler[]) {
		// TO DO
		this.router.post('/', ...handlers);
	}
	onList(...handlers: RequestHandler[]) {
		// TO DO
		this.router.get('/', ...handlers);
	}
	onDetail(...handlers: RequestHandler[]) {
		// TO DO
		this._route.get(...handlers);
	}
	onUpdate(...handlers: RequestHandler[]) {
		// TO DO
		this._route.patch(...handlers);
	}
	onDelete(...handlers: RequestHandler[]) {
		// TO DO
		this._route.delete(...handlers);
	}
	extend(resource: Resource) {
		this.router.use(this.resourcePath + resource.path, resource.router);
	}
}
