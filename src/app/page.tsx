import Box from "@/components/box/box";

const Home = () => {
  return (
    <main className="mb-8">
      <div className="max-w-screen-xl mx-auto py-3">
        <h2 className="text-2xl font-bold tracking-tight">Welcome to iTasks</h2>
        <p className="text-muted-foreground">
          Simplify your task management with ease and efficiency.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <Box />
      </div>
    </main>
  );
};
export default Home;
