export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname;
  const isLoggedIn = localStorage.getItem("loggedin");
  // const isLoggedIn = false;
  if (!isLoggedIn) {
    window.location.href = `/login?message=You must log in first.& redirectTo=${pathname}`;
  }
  return null;
}
