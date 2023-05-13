
import { useState } from 'react';
import { useGlobalContext } from "@/contexts/provider";

const UseCreatePost = () => {

  const [isLoading, setIsLoading] = useState(false)
  const { reload, setReload } = useGlobalContext()

  const postApi = async (url: string, object: any) => {
    setIsLoading(true)
    try {
      await fetch(url, {
        method: "PUT",
        body: JSON.stringify(object),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
      setReload(!reload)
    } catch (error) {
      console.log({ erro: error })
      setReload(!reload)
      setIsLoading(false)
    }
  };

  return { postApi, isLoading };
};

export default UseCreatePost;