import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://dog.ceo/api/breeds/image/random";

export default function DogGallery() {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      try {
        const r1 = await axios.get(API);
        const r2 = await axios.get(API);
        const r3 = await axios.get(API);

        setDogs([r1.data.message, r2.data.message, r3.data.message]);
      } catch (e) {
        console.log("Ошибка загрузки", e);
      }
      setIsLoading(false);
    };

    load();
  }, []);