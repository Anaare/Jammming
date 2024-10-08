import { useEffect, useState } from "react";

export function useSpotifyToken() {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const getSpotifyToken = async () => {
      const clientId = "4150329a47d1455e95cdff00a1991331";
      const clientSecret = "502f6e628ecf4de58f12c0f9d4b70c54";

      const params = new URLSearchParams();
      params.append("grant_type", "client_credentials");
      params.append("client_id", clientId);
      params.append("client_secret", clientSecret);

      try {
        const response = await fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params,
        });

        if (!response.ok) {
          throw new Error("Failed to get access token");
        }

        const data = await response.json();
        setAccessToken(data.access_token);
      } catch (error) {
        console.error("Error getting Spotify access token:", error);
      }
    };

    getSpotifyToken();
  }, []);

  return accessToken;
}
