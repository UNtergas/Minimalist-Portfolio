import Link from "next/link";

export default function NotFound() {
    return (
        <div className="page__not-found">
            <h1>404 - Page Not Found</h1>
            <p> The requested resource could not be found</p>
            <Link href="/"> Go back to the homepage</Link>
        </div>
    )
}