import { cn } from "@/lib/utils";
import { Link } from "@/router";
import { HTMLAttributes } from "react";

export function NavBar({ className, ...props }: HTMLAttributes<HTMLElement>) {
    return (
        <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
            <Link to="/portfolio" className="text-sm font-bold text-muted-foreground transition-colors hover:text-primary">
                Home
            </Link>
            <Link to="/portfolio/about" className="text-sm font-bold text-muted-foreground transition-colors hover:text-primary">
                About
            </Link>
            <Link to="/portfolio/projects" className="text-sm font-bold text-muted-foreground transition-colors hover:text-primary">
                Projects
            </Link>
            <Link to="/portfolio/contacts" className="text-sm font-bold text-muted-foreground transition-colors hover:text-primary">
                Contacts
            </Link>
        </nav>
    )
}