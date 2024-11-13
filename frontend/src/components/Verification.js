import React from 'react';

function Verification() {
  // URL do autoryzacji bota Discord (przykładowy link OAuth)
  const discordOAuthUrl = "https://discord.com/oauth2/authorize?client_id=1284809429241299006&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Foauth2%2Fcallback&scope=identify";

  return (
    <div>
      <button
        onClick={() => window.location.href = discordOAuthUrl}
        style={{
          padding: '10px 20px',
          backgroundColor: '#7289DA',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Zaloguj się przez Discord
      </button>
    </div>
  );
}

export default Verification;
