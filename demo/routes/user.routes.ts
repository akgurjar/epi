import { Resource } from '../../src';
import { UserSchema } from '../schema';
import { controller } from '../controllers';

const user = new Resource('user', new UserSchema());

user.onCreate(controller.create);

user.onList(controller.list);

user.onUpdate(controller.update);

export default user;
