import { initSatellite } from "@junobuild/core";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Placeholder } from "./pages/Placeholder";
import { parseHash } from "./lang";

function App() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));

  useEffect(() => {
    const onHash = () => {
      setRoute(parseHash(window.location.hash));
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    (async () =>
      await initSatellite({
        workers: { auth: true },
      }))();
  }, []);

  const { lang, page } = route;

  return (
    <div className="min-h-[100dvh] bg-white text-black">
      <Header lang={lang} page={page} />
      <main>
        {page === "" ? (
          <Home lang={lang} />
        ) : (
          <Placeholder lang={lang} page={page} />
        )}
      </main>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
