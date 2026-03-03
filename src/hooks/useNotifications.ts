"use client";

import { useEffect, useState } from "react";

export function useNotifications() {
  const [items, setItems] = useState<any[]>([]);
  const [count, setCount] = useState(0);
  useEffect(() => setCount(items.length), [items]);
  return { items, count, setItems };
}
