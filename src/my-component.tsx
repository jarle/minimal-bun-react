export function Component(props: { path: string }) {
  return (
    <body>
      <h1 className="hover:underline">{`Hello from ${props.path}`}</h1>
    </body>
  );
}