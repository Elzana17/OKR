import React from "react";
import { authProvider } from "./Auth";

interface AuthContextType {
  jwt: any;
  signin: (username: string, password: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

export function useAuth() {
  return React.useContext(AuthContext);
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  let [jwt, setJwt] = React.useState<any>(null);

  let signin = (email: string, password: string, callback: VoidFunction) => {
    return authProvider.signin(() => {
      fetch('https://localhost:7137', {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password,
          jwt: jwt
        }),
        headers: {
          "Content-type": "application/json;"
        }
      })
        .then(response => {
          console.log("adasda")
          // console.log(response)
          response.json()
          // console.log(response.json())
        })
        .then(result => {
          console.log(result)
          // setJwt(result)
        })
      // .catch(err => {
      //   console.log(err)

      //   setJwt(jwt)
      //   console.log(jwt)
      // });

      console.log(email);
      callback();
    });
  };

  let signout = (callback: VoidFunction) => {
    return authProvider.signout(() => {
      setJwt(null);
      callback();
    });
  };

  let value = { jwt, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
