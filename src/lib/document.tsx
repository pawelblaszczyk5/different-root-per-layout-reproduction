import { HeadContent, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const RootDocument = ({
  children,
  language,
}: Readonly<{ children: ReactNode; language: string }>) => {
  return (
    <html lang={language}>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
};
