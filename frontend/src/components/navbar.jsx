import { useState } from 'react';

// Create a direct SVG for the user icon instead of using lucide-react
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add inline styles to ensure the navbar works regardless of Tailwind
  const styles = {
    nav: {
      backgroundColor: '090302',
      color: 'white',
      boxShadow: '0 2px 4px -1px #074501',
      width: '100%',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    flexRow: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '64px',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: 'white',
    },
    logoBox: {
      padding: '0.5rem',
      borderRadius: '0.25rem',
      marginRight: '0.5rem',
      fontWeight: 'bold',
      fontSize: '1.25rem',
    },
    companyName: {
      fontWeight: '600',
      fontSize: '1.125rem',
    },
    navLinks: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '2.5rem',
    },
    link: {
      color: '#cbd5e0',
      padding: '0.5rem 0.75rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      textDecoration: 'none',
      margin: '0 1rem',
    },
    profileLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileCircle: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#4a5568',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      border: '2px solid #4a5568',
      color: '#cbd5e0',
    },
    mobileButton: {
      display: 'none',
      padding: '0.5rem',
      borderRadius: '0.375rem',
      color: '#a0aec0',
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
    },
    mobileMenu: {
      padding: '0.5rem',
      display: 'none',
    },
    mobileLink: {
      color: '#cbd5e0',
      display: 'block',
      padding: '0.75rem',
      borderRadius: '0.375rem',
      fontSize: '1rem',
      fontWeight: '500',
      textDecoration: 'none',
      marginBottom: '0.25rem',
    },
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useState(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav style={styles.nav} className='bg-gray-900'>
      <div style={styles.container}>
        <div style={styles.flexRow}>
          {/* Left: Logo */}
          <div>
            <a href="/" style={styles.logo}>
              <div style={styles.logoBox}>LOGO</div>
              {!isMobile && <span style={styles.companyName}>Mapzy</span>}
            </a>
          </div>

          {/* Middle: Navigation Links (hidden on mobile) */}
          {!isMobile && (
            <div style={styles.navLinks}>
              <a href="/home" style={styles.link}>Home</a>
              <a href="/about" style={styles.link}>About</a>
              <a href="/signup" style={styles.link}>SignUp</a>
            </div>
          )}

          {/* Right: Profile */}
          <div>
            <a href="/profile" style={styles.profileLink}>
              <div style={styles.profileCircle}>
                <UserIcon />
              </div>
            </a>
          </div>

          {/* Mobile menu button */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                ...styles.mobileButton,
                display: 'inline-flex',
              }}
            >
              <svg
                width="24"
                height="24"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobile && isMenuOpen && (
        <div style={{
          ...styles.mobileMenu,
          display: 'block',
        }}>
          <a href="/home" style={styles.mobileLink}>Home</a>
          <a href="/about" style={styles.mobileLink}>About</a>
          <a href="/signup" style={styles.mobileLink}>SignUp</a>
        </div>
      )}
    </nav>
  );
}