import React, { useEffect, useState } from 'react';
import axios from 'axios';

function VerificationResult() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Pobierz kod autoryzacyjny z adresu URL
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    // Funkcja do wymiany kodu na token
    function exchangeCodeForToken(code) {
      const params = new URLSearchParams();
      params.append('client_id', '1284809429241299006'); // Zamień na swoje CLIENT_ID z Discord Developer Portal
      params.append('client_secret', 'HdaMqPCrpwOdzbyENKcibinUToiSVVNj'); // Zamień na swój CLIENT_SECRET z Discord Developer Portal
      params.append('grant_type', 'authorization_code');
      params.append('code', code);
      params.append('redirect_uri', 'http://localhost:3000/oauth2/callback'); // To musi być zgodne z ustawieniami w Discord Developer Portal

      // Wysyłanie żądania POST do Discorda
      return axios.post('https://discord.com/api/oauth2/token', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
    }

    if (code) {
      // Wymiana kodu na token
      exchangeCodeForToken(code)
        .then(response => {
          const token = response.data.access_token;

          // Pobieranie danych użytkownika przy użyciu tokenu
          return axios.get('https://discord.com/api/users/@me', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        })
        .then(userResponse => {
          setUserData(userResponse.data);
        })
        .catch(error => {
          console.error('OAuth Error:', error.response ? error.response.data : error.message);
        });
    }
  }, []);

  if (!userData) {
    return <div>Trwa weryfikacja...</div>;
  }

  return (
    <div>
      <h1>Witaj, {userData.username}!</h1>
      <img src={`https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`} alt="Avatar" />
      <p>Nazwa: {userData.username}#{userData.discriminator}</p>
    </div>
  );
}

export default VerificationResult;
