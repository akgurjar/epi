import { AnySchema } from '../types/any.schema';
import { StringSchema } from '../types/string.schema';
import { NumberSchema } from '../types/number.schema';

export class BodySchema extends AnySchema {
    string(): StringSchema {
        return new StringSchema();
    }
    number(): NumberSchema {
        return new NumberSchema();
    }
}