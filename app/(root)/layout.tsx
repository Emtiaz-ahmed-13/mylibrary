import Header from "@/components/Header";
import Home from "./page";

const layout = () => {
  return (
    <main className="root-container">
      <div className="mx-auto max-w-7xl">
        <Header />
        <Home />
      </div>
    </main>
  );
};

export default layout;
