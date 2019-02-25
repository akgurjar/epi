import { ResourceSchema, define, input } from '../../src';

export class UserSchema extends ResourceSchema {
    constructor() {
        super();
    }
    @define()
    @input()
    displayName: string = 'Default User';
}

