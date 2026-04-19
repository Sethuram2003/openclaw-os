function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="logo-icon-svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#764ba2" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      {/* Neural network inspired design */}
      <circle cx="20" cy="8" r="4" fill="url(#logoGradient)" />
      <circle cx="8" cy="28" r="4" fill="url(#logoGradient)" />
      <circle cx="32" cy="28" r="4" fill="url(#logoGradient)" />
      <circle cx="20" cy="20" r="5" fill="url(#logoGradient)" />
      
      {/* Connections */}
      <line x1="20" y1="12" x2="20" y2="15" stroke="url(#logoGradient)" strokeWidth="2" />
      <line x1="12" y1="26" x2="16" y2="22" stroke="url(#logoGradient)" strokeWidth="2" />
      <line x1="28" y1="26" x2="24" y2="22" stroke="url(#logoGradient)" strokeWidth="2" />
      
      {/* Outer ring */}
      <circle cx="20" cy="20" r="18" stroke="url(#logoGradient)" strokeWidth="2" fill="none" opacity="0.3" />
    </svg>
  )
}

export default Logo
