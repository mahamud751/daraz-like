
import Navbar from "./Navbar";
import QuickView from "./QuickView";

export default function Layout({ children }) {
    return (
        <>
            <div className="page-wrapper">
                <Navbar />
                <main className="main">{children}</main>


            </div>
            <QuickView />
        </>
    )
}