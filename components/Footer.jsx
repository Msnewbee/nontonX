export default function Footer() {
    return (
        <footer className="footer p-4">
            <div className="container mx-auto text-center">
                <p>&copy; 2025 NontonX. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://twitter.com/nontonx" className="hover:accent">Twitter</a>
                    <a href="https://facebook.com/nontonx" className="hover:accent">Facebook</a>
                    <a href="https://instagram.com/nontonx" className="hover:accent">Instagram</a>
                </div>
                <div className="mt-2">
                    <a href="/help" className="hover:accent">Help</a>
                </div>
            </div>
        </footer>
    );
}
