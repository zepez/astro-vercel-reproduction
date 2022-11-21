export const post = ({ request }:{request: Request}) => {
  return {
    body: JSON.stringify({ userAgent: request.headers.get('user-agent') }),
  };
}
