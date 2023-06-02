export async function requireAuth() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    window.location.href = "/login?message=You must log in first.";
  }
  return null;
}
