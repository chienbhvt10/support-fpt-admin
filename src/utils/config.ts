const ApiServerURL = process.env.NEXT_PUBLIC_BASE_URL
    ? process.env.NEXT_PUBLIC_BASE_URL
    : "http://localhost:3000";

const ApiServerGrapqhlURL = process.env.NEXT_PUBLIC_BASE_URL_GRAPHQL
    ? process.env.NEXT_PUBLIC_BASE_URL_GRAPHQL
    : "http://localhost:8000/graphql";

const socketURL = process.env.NEXT_PUBLIC_BASE_SOCKET_URL
    ? process.env.NEXT_PUBLIC_BASE_SOCKET_URL
    : "http://localhost:8000";

const version = process.env.NEXT_PUBLIC_VERSION;

export { ApiServerURL, version, ApiServerGrapqhlURL, socketURL };
