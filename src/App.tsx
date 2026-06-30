import { initSatellite } from "@junobuild/core";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Program } from "./pages/Program";
import { Artists } from "./pages/Artists";
import { Events } from "./pages/Events";
import { Shop } from "./pages/Shop";
import { Mission } from "./pages/Mission";
import { Team } from "./pages/Team";
import { Cookie } from "./pages/Cookie";
import { Placeholder } from "./pages/Placeholder";
import { parseHash, type Lang } from "./lang";

function renderPage(page: string, lang: Lang) {
  switch (page) {
    case "":
      return <Home lang={lang} />;
    case "program":
      return <Program lang={lang} />;
    case "artists":
      return <Artists lang={lang} />;
    case "events":
      return <Events lang={lang} />;
    case "shop":
      return <Shop lang={lang} />;
    case "team":
      return <Team lang={lang} />;
    case "mission":
      return <Mission />;
    case "cookie-policy":
      return <Cookie lang={lang} />;
    default:
      return <Placeholder lang={lang} page={page} />;
  }
}

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
      <main>{renderPage(page, lang)}</main>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
