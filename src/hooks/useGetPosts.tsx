import { useState, useEffect } from "react";
import { useGlobalContext } from "@/contexts/provider";


interface IData {
  id: string;
  cabecalho: string;
  titulo: string;
  data: string;
  artigo: string;
  img: string;
}

const UseGetPosts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<IData[]>([]);
  const { reload, setReload } = useGlobalContext()

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:3003/all");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [reload]);

  return { data, isLoading, setIsLoading };
};

export default UseGetPosts;
