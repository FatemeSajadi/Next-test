import Header from "./Header";

const Layout = ({ children}) => {
  return (
    <>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6">
          {children}
        </main>

      </div>
    </>
  );
};

export default Layout;