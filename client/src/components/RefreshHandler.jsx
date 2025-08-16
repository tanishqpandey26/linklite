import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


function RefreshHandler({ setIsAuthenticated }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000; 

        if (decoded.exp && decoded.exp < currentTime) {
          // token expired
          console.warn('JWT expired, logging out');
          localStorage.removeItem('token');
          setIsAuthenticated(false);
          if (location.pathname !== '/login') {
            navigate('/login', { replace: true });
          }
          return;
        }

        // token valid
        setIsAuthenticated(true);

        if (
          location.pathname === '/' ||
          location.pathname === '/signup' ||
          location.pathname === '/login'
        ) {
          navigate('/dashboard', { replace: true });
        }
      } 
      
      catch (err) {
        console.error('Invalid JWT token:', err.message);
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        if (location.pathname !== '/login') {
          navigate('/login', { replace: true });
        }
      }
    } else {
      setIsAuthenticated(false);
      if (
        location.pathname !== '/login' &&
        location.pathname !== '/signup'
      ) {
        navigate('/login', { replace: true });
      }
    }
  }, [location, navigate, setIsAuthenticated]);

  return null;
}

export default RefreshHandler;
