import { useEffect, useState } from "react";
import { WebLayout } from "./components/WebLayout";
import { MobileScreens } from "./components/MobileScreens";

export const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const detect = () => {
      const ua = window.navigator.userAgent || "";
      const isRealMobile = /Android|iPhone|iPad|iPod/i.test(ua);
      const isNarrow = window.innerWidth <= 768;
      setIsMobile(isRealMobile || isNarrow);
    };

    detect();
    window.addEventListener("resize", detect);
    return () => window.removeEventListener("resize", detect);
  }, []);

  return (
    <div className={`app-root ${isMobile ? "app-root-mobile" : "app-root-desktop"}`}>
      <main className="app-main">
        {isMobile ? (
          <section className="panel panel-single">
            <MobileScreens />
          </section>
        ) : (
          <section className="panel panel-single">
            <WebLayout />
          </section>
        )}
      </main>
    </div>
  );
};

