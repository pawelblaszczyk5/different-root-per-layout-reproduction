import { createFileRoute } from "@tanstack/react-router";

const RouteComponent = () => <div>Hello "/_home/login"!</div>;

export const Route = createFileRoute("/_home/login")({ component: RouteComponent });
