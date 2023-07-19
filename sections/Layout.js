import Header from "./Header";

const Layout = ({ children}) => {
  return (
    <>

      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-black">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6">
          {children}
        </main>

      </div>
    </>
  );
};

export default Layout;