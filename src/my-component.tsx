export function Component(props: { path: string }) {
  return (
    <div className="flex flex-col items-center p-12 gap-7">
      <h1 className="hover:underline text-3xl font-bold">{`Hello from ${props.path}`}</h1>
      <p>This is a server rendered component</p>
    </div>
  );
}