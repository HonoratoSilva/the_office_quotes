import { useEffect, useState } from 'react';
import api from '../services/api';
import * as S from './styled';

export default function TheOffice() {
    const [episodes, setEpisodes] = useState([]);
    
    const getEpisodes = async () => {
      try {
        const response = await api.get(
          "quote/random"
        );
  
        const data = response.data;
  
        setEpisodes(data);
  
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
      getEpisodes();
    }, []);

    const handleClick = () => {
        getEpisodes();
    };
      
    return (
      <S.Container>
        <h1>The Office Quotes</h1>
        {episodes !== null && (
        <div>
          <p>{episodes.quote}</p>
          <p>- {episodes.character}</p>
        </div>
        )}
        <button onClick={handleClick}>Novo Quote</button>
      </S.Container>
    )
}