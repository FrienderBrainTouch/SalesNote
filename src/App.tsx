import { WebLayout } from "./components/WebLayout";
import { MobileScreens } from "./components/MobileScreens";

export const App = () => {
  return (
    <div className="app-root">
      <header className="app-header">
        <h1>SalesNote UI Design</h1>
        <p>기능 없는 정적 디자인 데모 (웹 + 모바일)</p>
      </header>
      <main className="app-main">
        <section className="panel">
          <h2>PC 웹 대시보드</h2>
          <WebLayout />
        </section>
        <section className="panel">
          <h2>모바일 앱 플로우</h2>
          <MobileScreens />
        </section>
      </main>
    </div>
  );
};

