import axios from 'axios';
import { CommitsArgsInterface, CommitInterface } from './interfaces';

export async function listCommits(_: unknown, args: CommitsArgsInterface) {
    const commitsList: Array<CommitInterface> = await axios
        .get('https://api.github.com/repos/facebook/react/commits')
        .then((data) => data.data);
    const page = args.page ? args.page : 1;
    const pageSize = args.pageSize ? args.pageSize : 10;
    return commitsList.slice((page - 1) * pageSize, pageSize * page);
}
