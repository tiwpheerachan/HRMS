"use client";

import { useCallback, useEffect, useState } from "react";

export function useGeolocation() {
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(() => {
    if (!navigator.geolocation) { setError("Geolocation not supported"); return; }
    navigator.geolocation.getCurrentPosition(
      (pos) => { setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude }); setError(null); },
      (err) => setError(err.message),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 5000 }
    );
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  return { coords, error, refresh };
}
