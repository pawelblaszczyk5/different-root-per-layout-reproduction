import { createFileRoute } from "@tanstack/react-router";

const RouteComponent = () => <div>Hello "/_home/"!</div>;

export const Route = createFileRoute("/_home/")({ component: RouteComponent });
