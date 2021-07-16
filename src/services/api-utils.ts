export type PullData = {
  title: string;
  user: { login: string };
  assignee: { login: string };
  state: string;
  html_url: string;
};

export const getPullsAPIPath = (user: string, repo: string): Promise<Response> => {
  return fetch(`https://api.github.com/repos/${user}/${repo}/pulls`);
};

export const getRowsFromPullData = (data: PullData[]): string[][] => {
  return data.map((item) => {
    const assignee = item.assignee && item.assignee.login;
    const user = item.user && item.user.login;
    return [item.title, user, item.state, assignee, item.html_url];
  });
};
