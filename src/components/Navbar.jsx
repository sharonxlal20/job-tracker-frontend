import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">job tracker</div>
      <div className="navbar-right">
        <span className="navbar-user">{user?.name}</span>
        <button className="navbar-logout" onClick={handleLogout}>Log out</button>
      </div>
    </nav>
  );
}

export default Navbar;