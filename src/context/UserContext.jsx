"use client";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext"; // Assuming you're using a custom useAuth hook

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { user } = useAuth(); // From Firebase authentication
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const response = await axios.post("/api/users/fetchUserData", {
            email: user.email,
          });
          setUserData(response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false); // Ensure loading is false when no user
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <UserContext.Provider value={{ userData, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
