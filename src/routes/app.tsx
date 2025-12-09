import { RootDocument } from "@/lib/document";
import { createFileRoute, Outlet } from "@tanstack/react-router";

const RouteComponent = () => {
  const languageRetrievedFromUserData = "en-US";

  return (
    <RootDocument lang={languageRetrievedFromUserData}>
      <Outlet />
    </RootDocument>
  );
};

export const Route = createFileRoute("/app")({ component: RouteComponent });
