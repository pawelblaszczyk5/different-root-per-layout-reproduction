import { RootDocument } from "@/lib/document";
import { createFileRoute, Outlet } from "@tanstack/react-router";

const RouteComponent = () => {
  const languageRetrievedFromGlobalData = "en-US";

  return (
    <RootDocument lang={languageRetrievedFromGlobalData}>
      <Outlet />
    </RootDocument>
  );
};

export const Route = createFileRoute("/_home")({ component: RouteComponent });
