/*
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.replace("/auth/login"); // Redirect to login if not authenticated
      }
    }, [user, loading, router]);

    if (loading) {
      return <div>Loading...</div>; // Show a loading state until user is checked
    }

    if (user) {
      return <WrappedComponent {...props} />;
    }

    return null;
  };
};

export default withAuth;
*/
