"use client";

import { useEffect, useState } from "react";

export function useLeaveBalance() {
  const [loading, setLoading] = useState(true);
  const [balances, setBalances] = useState<any[]>([]);
  useEffect(() => { setBalances([]); setLoading(false); }, []);
  return { loading, balances };
}
