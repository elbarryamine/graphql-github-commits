import Jwt from 'jsonwebtoken';
import ApiKeyModel from '../../models/ApiKeyModel';

export async function generateApiKey() {
    const accessToken = Jwt.sign({}, process.env.PRIVATE_KEY, {
        expiresIn: '3d',
    });
    ApiKeyModel.create({ key: accessToken });
    return {
        token: accessToken,
    };
}
