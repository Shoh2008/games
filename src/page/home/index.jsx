import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { HomePageStyle, GameBlock, Loader, Category, Search } from "./style";
import { memo } from 'react';
import Header from '../header';
import Cards from '../cards';

function Home() {
    const [game, setGame] = useState([]);
    const [showGame, setShowGame] = useState([]);
    const [backImg, setBackImg] = useState('');
    const [category, setCategory] = useState([]);
    const [search, setSearch] = useState("")
    const [activeCard, setActiveCard] = useState(0);
    const [selectCategory, setSelectCategory] = useState("");

    useEffect(() => {
        getAllGame();
    }, []);

    const getAllGame = () => {
        axios({
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            headers: {
                'X-RapidAPI-Key': 'a6ad1be522msh49c1bd35fce0391p169fc8jsn13f72f6ca374',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }).then((response) => {
            let number = Math.abs(parseInt(Math.random() * response.data.length) - 5);
            let result = response.data.slice(number, number + 5);
            setShowGame(result);
            setBackImg(result[0]?.thumbnail);
            let categorys = response.data.map(e => (e.genre));
            setCategory([...new Set(categorys)]);
            setGame(response.data)
        })
    }

    useMemo(() => {
        if (showGame.length !== 0) {
            setInterval(() => {
                setActiveCard(p => {
                    setBackImg(showGame[p]);
                    p = p + 1
                    if (p === 5) p = 0
                    return p
                });
            }, 5000);
        }
    }, [showGame]);

    return (
        <div>
            {
                backImg === '' ?
                    <Loader>
                        <div className="spinner"></div>
                    </Loader> :
                    <HomePageStyle>
                        <Header showGame={showGame} backImg={backImg} setActiveCard={setActiveCard} setBackImg={setBackImg} />
                        <GameBlock>
                            <Search className='line'>
                                <h2>Games In Trend</h2>
                                <input type="search" placeholder='Search' className='form-control' onKeyUp={(e) => setSearch(e.target.value)} />
                            </Search>
                            <Category className="category">
                                <button onClick={() => setSelectCategory("")}>All</button>
                                {category.map((item, index) => <button key={index} onClick={() => setSelectCategory(item === "" ? "" : item)}>
                                    {item}
                                </button>)}
                            </Category>
                            {
                                (selectCategory ? game.filter(e => e.genre === selectCategory) : game).filter((item, index) =>
                                    item.title ? item.title.toLowerCase().indexOf(search.toLowerCase()) > -1 : item
                                ).map((item, index) => <Cards item={item} key={index} />)
                            }
                        </GameBlock>
                    </HomePageStyle>
            }
        </div>
    )
}

export default memo(Home);