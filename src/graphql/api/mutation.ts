import Jwt from 'jsonwebtoken';
import ApiKeyModel from '../../models/ApiKeyModel';
import { ApiKeyUserInterface } from './interfaces';
const users = [{ id: 1, user: 'user', password: 'password' }];
export async function generateApiKey(_: any, args: ApiKeyUserInterface) {
    const user = users.find((user) => user.user === args.user);
    if (!user || user.password !== args.password)
        throw new Error('invalid fields');
    const accessToken = Jwt.sign({ id: user.id }, process.env.PRIVATE_KEY, {
        expiresIn: '3d',
    });
    ApiKeyModel.create({ key: accessToken });
    return {
        token: accessToken,
    };
}
