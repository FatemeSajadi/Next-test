import Navbar from "./Navbar"

const Layout = ({ children }) =>{
    return (
        <div>
            <Navbar/>
            <div className="px-6 py-6">{children}</div>
        </div>
    )
}
export default Layout;