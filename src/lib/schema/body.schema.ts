import { AnySchema } from './any.schema';
import { StringSchema } from './string.schema';
import { NumberSchema } from './number.schema';

export abstract class BodySchema extends AnySchema {
    string(): StringSchema {
        return new StringSchema();
    }
    number(): NumberSchema {
        return new NumberSchema();
    }
}
 