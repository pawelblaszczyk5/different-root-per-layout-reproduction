import { createFileRoute, Outlet } from "@tanstack/react-router";

const RouteComponent = () => <Outlet />;

export const Route = createFileRoute("/_home")({
  component: RouteComponent,
  loader: () => {
    const languageFromStorage = "en-US";

    return {
      language: languageFromStorage,
    } as const;
  },
});
