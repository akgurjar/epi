import { Request, Response } from 'express';

export const controller = {
	create(req: Request, res: Response) {
		console.info(req.url);
		res.json({
			message: 'User Created.',
			result: null,
		});
	},
	list(req: Request, res: Response) {
		console.info(req.url);
		res.json({
			message: 'User List.',
			result: {
				data: [],
				pageIndex: 0,
				pageSize: 10,
				total: 0,
			},
		});
	},
	update(req: Request, res: Response) {
		console.info(req.url);
		res.json({
			message: 'User Updated.',
			result: null,
		});
	},
};
