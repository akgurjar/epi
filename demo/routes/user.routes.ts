import { Resource } from '../../src';
import { Request, Response } from 'express';
import { UserSchema } from '../schema';

const resource = new Resource('user', new UserSchema());

resource.onCreate(function(req: Request, res: Response) {
    console.log(req.url);
    res.json({
        message: 'User Created.',
        result: null
    });
});

export default resource;
