import { RootDocument } from "@/lib/document";
import {
  createRootRoute,
  Outlet,
  useLoaderData,
  useMatch,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

const AppDocument = ({ children }: { children: ReactNode }) => {
  const data = useLoaderData({ from: "/app" });

  return <RootDocument language={data.language}>{children}</RootDocument>;
};

const HomeDocument = ({ children }: { children: ReactNode }) => {
  const data = useLoaderData({ from: "/_home" });

  return <RootDocument language={data.language}>{children}</RootDocument>;
};

const RootComponent = () => {
  const isInsideOfApp = Boolean(useMatch({ shouldThrow: false, from: "/app" }));

  const Document = isInsideOfApp ? AppDocument : HomeDocument;

  return (
    <Document>
      <Outlet />
    </Document>
  );
};

export const Route = createRootRoute({ component: RootComponent });
