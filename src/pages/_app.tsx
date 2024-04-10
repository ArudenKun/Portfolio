import { Outlet } from "react-router-dom";
import { NavBar } from "@/components/nav-bar";

export default function App() {
    return (
        <section>
            <header>
                <div className="justify-center flex h-16 items-center px-4 shadow-md">
                    <NavBar className="mx-6" />
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </section>
    )
}