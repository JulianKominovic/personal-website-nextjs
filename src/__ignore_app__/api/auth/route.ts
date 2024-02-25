export const POST = async (request: Request) => {
  const body = await request.json();
  const password = body.password;
  console.log({
    password,
    body,
  });
  const response = new Response(JSON.stringify({ status: "OK" }), {
    status: 200,

    headers: {
      "Content-Type": "application/json",
    },
  });
  response.headers.set(
    "Set-Cookie",
    `auth-cookie=${password}; Path=/; HttpOnly`
  );
  return response;
};
