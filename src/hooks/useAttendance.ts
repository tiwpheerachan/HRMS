"use client";

import { useEffect, useState } from "react";

export function useAttendance() {
  const [loading, setLoading] = useState(true);
  const [today, setToday] = useState<any | null>(null);
  useEffect(() => { setToday(null); setLoading(false); }, []);
  return { loading, today };
}
