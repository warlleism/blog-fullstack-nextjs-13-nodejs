import { useState } from 'react';
import { useGlobalContext } from '@/contexts/provider';
import { PostData } from '@/interface/IPostData';

type PostApiFunction = (url: string, object: PostData) => Promise<void>;

const UseCreatePost = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { reload, setReload } = useGlobalContext();

  const postApi: PostApiFunction = async (url, object) => {
    setIsLoading(true);
    try {
      await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(object),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      setReload(!reload);
    } catch (error) {
      console.log({ error });
      setReload(!reload);
      setIsLoading(false);
    }
  };

  return { postApi, isLoading };
};

export default UseCreatePost;
