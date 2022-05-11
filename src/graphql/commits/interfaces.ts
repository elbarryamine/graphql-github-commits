export interface GetCommitInterface {
    sha: string;
    commit: {
        committer: { name: string; email: string; date: string };
        message: string;
    };
    html_url: string;
}
export interface CommitInterface {
    sha: string;
    message: string;
    html_url: string;
    commiter: string;
    date: string;
}
export interface CommitsArgsInterface {
    page: number;
    pageSize: number;
}
