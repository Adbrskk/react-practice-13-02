import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://dog.ceo/api/breeds/image/random";

export default function DogGallery() {
  const [dogs, setDogs] = useState([]);              
  const [isLoading, setIsLoading] = useState(false); 
  const [isAdding, setIsAdding] = useState(false);  
  const [isRefreshing, setIsRefreshing] = useState(false); 
  const [error, setError] = useState("");
  const [newDog, setNewDog] = useState("");
}