import React,{useState, useEffect} from 'react'
import './App.css';
import Axios from 'axios'
import Card from './components/Card';

function App() {

  const [game, setGame] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [dados, setDados] = useState('')


  useEffect(()=>{

      Axios.get("http://localhost:3001/getDataBD")
      .then((resp)=>{
        setDados(resp.data)
      })
      .catch((error)=>{
        console.log('Erro ao buscar dados: ',error)
      })
    
  },[])


  function handleClickButton(e){
    e.preventDefault();

    Axios.post("http://localhost:3001/register", {game,price,category})
    .then((response)=>{
      console.log('Cadastro efetuado: ',response)
      
      setGame('')
      setPrice('')
      setCategory('')
    }).catch((error)=>{
      console.log('Erro ao cadastrar: ',error)
    })
  }

  return (
    <>
      <header>
        <h1>Game Thugs</h1>    
      </header>
      <main>
        <input
          type='text'
          placeholder='Game...'
          value={game}
          onChange={(e)=> setGame(e.target.value)}
        />

        <input
          type='text'
          placeholder='Preço...'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type='text'
          placeholder='Categoria...'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button onClick={handleClickButton}>Cadastrar</button>

        {
          dados !== '' &&
          dados.map((item)=>{
            return(

              <Card key={item.id_games} data={item}/>
            )
          })
        }

      </main>

      <footer></footer>
    </>
  );
}

export default App;
