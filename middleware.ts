import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      console.log("Middleware Check - Token:", token); // Debugging
      return !!token; // Only allow access if token exists
    },
  },
  pages: {
    signIn: "/api/auth/signin", // Redirect unauthenticated users to login page
  },
});

export const config = {
  matcher: ["/issues/new", "/issues/:path*/edit"],
};
