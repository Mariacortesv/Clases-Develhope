import { useState } from "react";

export function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = async () => {
    setLoading(true);

    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
      setError(null);
    } catch (error) {
      setError(error.message);
      setLocation(null);
    } finally {
      setLoading(false);
    }
  };

  return {
    location,
    getCurrentLocation, 
    loading,
    error,
  };
}
