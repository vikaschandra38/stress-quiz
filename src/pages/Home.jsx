import { Outlet } from "react-router";
import Card from "../components/Card";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen font-archivo">
      <Header />
      <main className="flex-1 h-full w-full md:max-w-3xl mx-auto flex flex-col items-center md:justify-center p-2 md:p-4">
        <Card>
          <Outlet />
        </Card>
      </main>
    </div>
  );
};

export default Home;
