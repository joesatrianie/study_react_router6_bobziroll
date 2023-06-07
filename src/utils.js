export async function requireAuth() {
  const isLoggedIn = true;

  if (!isLoggedIn) {
    window.location.href = "/login?message=You must log in first.";
  }
  return null;
}
