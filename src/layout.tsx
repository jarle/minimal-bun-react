import { ReactNode } from "react";

export function Layout(props: {
  children: ReactNode
}) {
  return (
    <html>
      <link rel="stylesheet" href="public/style.css" />
      <link rel="icon" href="public/favicon.svg" />
      <head>
        <title>minimal bun+react</title>
      </head>
      <body>
        {props.children}
      </body>
    </html>
  );
}