export default [
  {
    statusCode: 202,
    headers: {
      server: "nginx",
      date: "Mon, 02 Dec 2019 08:14:00 GMT",
      "content-length": "0",
      connection: "close",
      "x-message-id": "5pu_g9nMTHKZBfYQm0lNCA",
      "access-control-allow-origin": "https://sendgrid.api-docs.io",
      "access-control-allow-methods": "POST",
      "access-control-allow-headers":
        "Authorization, Content-Type, On-behalf-of, x-sg-elas-acl",
      "access-control-max-age": "600",
      "x-no-cors-reason": "https://sendgrid.com/docs/Classroom/Basics/API/cors.html"
    },
    request: {
      uri: {
        protocol: "https:",
        slashes: true,
        auth: null,
        host: "api.sendgrid.com",
        port: 443,
        hostname: "api.sendgrid.com",
        hash: null,
        search: null,
        query: null,
        pathname: "/v3/mail/send",
        path: "/v3/mail/send",
        href: "https://api.sendgrid.com/v3/mail/send"
      },
      method: "POST",
      headers: {
        Accept: "application/json",
        "User-agent": "sendgrid/6.4.0;nodejs",
        Authorization: "Bearer hello",
        "content-type": "application/json",
        "content-length": 2435
      }
    }
  },
  null
];
