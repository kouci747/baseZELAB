import {useEffect, useState} from 'react';
import {useRouter} from "next/router";

const WithAuth = (WrappedComponent) => {

  return  () => {
    const router = useRouter();

    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
      //Créer en backend une route "verify-token"
      //Route renvoie si le token est toujours valide ou non 
      const token = localStorage.getItem('token');
      if (!token) {
        setIsLogged(false);
        router.push("/login");
      }
      else {
        setIsLogged(true)
      }
    }, [])   
    
    if (isLogged) {
      return <WrappedComponent/>
    }
    else {
      return false;
    }
  }
}

export default WithAuth;
