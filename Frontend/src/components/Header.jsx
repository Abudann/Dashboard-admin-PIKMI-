import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <h1>Dashboard Admin</h1>
            <div className="profile">
                <span>Welcome, Admin!</span>
                <img src="https://via.placeholder.com/40" alt="Admin Profile" />
            </div>
        </header>
    );
}
