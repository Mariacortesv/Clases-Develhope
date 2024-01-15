import React from "react";
import { useCurrentLocation } from "./useCurrentLocation";

export function CurrentLocation() {
  const { location, getCurrentLocation, loading, error } = useCurrentLocation();

  const handleGetLocation = () => {
   getCurrentLocation();
  };

  return (
    <div>
      <button onClick={handleGetLocation} disabled={loading}>
        Get Current Location
      </button>

      {location && (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

