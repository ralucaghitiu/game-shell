import { Header } from '../components/common/header';
import { Footer } from '../components/common/footer';

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="shadow py-4">
        <Header></Header>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="border border-top py-4">
        <Footer></Footer>
      </footer>
    </div>
  );
};
