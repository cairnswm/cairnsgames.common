import { useState, useEffect, useCallback } from "react";

const useUser = () => {
  const [user, setUser] = useState();

  const fetchUser = useCallback(() => {
    // this would usually be your own backend, or localStorage
    // for example
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((result) => setUser(result.results[0]))
      .catch((error) => console.log("An error occured"));
  }, []);

  // fetch a user from a fake backend API
  useEffect(() => {
    fetchUser();
  }, []);

  return { user };
};

export default useUser;
