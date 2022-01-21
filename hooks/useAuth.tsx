import { useEffect, useState } from "react";
import { UserProps } from "shared/const";
import { authService, dbService } from "../firebase/fBase";

const Auth = () => {
  const [userObj, setUserObj] = useState<UserProps>();
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        dbService.doc(`userInfo/${user.uid}`).onSnapshot((snapshot) => {
          setUserObj({
            uid: user.uid,
            uName: user.displayName,
          });
        });
      } else {
        setUserObj(null);
      }
    });
  }, []);
  return userObj;
};

export default Auth;
