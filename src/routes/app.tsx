import { createFileRoute, Outlet } from "@tanstack/react-router";

const RouteComponent = () => <Outlet />;

export const Route = createFileRoute("/app")({
  component: RouteComponent,
  loader: () => {
    const languageFromDatabase = "pl-PL";

    return {
      language: languageFromDatabase,
    } as const;
  },
});
