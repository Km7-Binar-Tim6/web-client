import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="mt-4">
      <h1>Ini adalah dashboard utama silahkan menggunakan sidebar</h1>
    </div>
  );
}

export default Index;
