import Jwt from 'jsonwebtoken';
export default function GuardMiddeleWare(callback: Function) {
    return async function resolve(_: any, args: any, ctx: any) {
        try {
            const token = ctx.headers.token.split(' ')[1];
            const decoded = Jwt.verify(token, process.env.PRIVATE_KEY);
            ctx.user = decoded;
            return callback(_, args, ctx);
        } catch (err) {
            throw new Error('not authorized');
        }
    };
}
