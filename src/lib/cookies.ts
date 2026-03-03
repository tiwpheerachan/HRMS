export function setCookie(name: string, value: string, days: number) {
  const exp = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${exp}; path=/; SameSite=Lax`;
}

export function getCookie(name: string) {
  if (typeof document === "undefined") return null;
  const v = document.cookie.split("; ").find((row) => row.startsWith(name + "="));
  return v ? decodeURIComponent(v.split("=")[1] || "") : null;
}
