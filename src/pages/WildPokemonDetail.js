import React, { useState, useEffect } from 'react';
import PokemonList from '../components/PokemonList'
import axios from 'axios'
import Pagination from '../components/Pagination'
import PokemonMoves from '../components/PokemonMoves';
import PokemonTypes from '../components/PokemonTypes';
import { Spin, Alert, Modal, Button, Form, Icon, Input, Checkbox } from 'antd'

function WildPokemonDetail({ match }) {
  const [pokemon, setPokemon] = useState([])
  const [hasCaught, setHasCaught] = useState(false)
  const [pokemonDex, setPokemonDex] = useState([])
  const [pokemonTypes, setPokemonTypes] = useState([])
  const [pokemonMoves, setPokemonMoves] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)
  const [loading2, setLoading2] = useState(false)
  // const [pokemon, setPokemon] = useState(['bulbasaur', 'charmender'])
  const [modalText, setModalText] = useState('Confirmation')
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  useEffect(() => {
    fetchItem()
    // console.log(match)
  }, [currentPageUrl])

  const fetchItem = () => {
    setLoading(true)
    // axios.get('https://pokeapi.co/api/v2/pokemon/' + match.params.id)
    let cancel
    axios.get(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`, {
      // axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
      .then(res => {
        // console.log(res);
        setLoading(false)
        setLoading2(false)
        // setNextPageUrl(res.data.next)
        // setPrevPageUrl(res.data.previous)
        setPokemon(res.data)
        setPokemonMoves(res.data.moves)
        setPokemonTypes(res.data.types)
        // setPokemon(res.data.results.map(p => p))
        // setPokemon(res.data.results.map(p => p.name))
      })
    return () => cancel()
  }

  // function goToNextPage() {
  //   setCurrentPageUrl(nextPageUrl)
  // }

  // function goToPrevPage() {
  //   setCurrentPageUrl(prevPageUrl)
  // }

  if (loading) return 'loading...'

  // console.log(pokemon.moves)
  // console.log(pokemon[1].name)
  let imgPath = 'https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/'

  const catchPokemon = (pokemon) => {
    let prob = Math.random()
    setLoading2(true)
    console.log(prob)

    setTimeout(function () {
      setLoading2(false)
      if (prob < 0.5) {
        setPokemonDex(state => {
          console.log('before', state)
          const monExists = (state.filter(p => pokemon.id == p.id).length > 0)

          if (!monExists) {
            state = [...state, pokemon]
            state.sort(function (a, b) {
              return a.id - b.id
            })
          }
          console.log('after', state)
          return state
        })
        setPokemonName()
      } else {
        alert("failed :( , try again ");
      }
    }, 1000)
  }

  const setPokemonName = () => {
    let name = prompt('you got it ^_^, \ngive your pokemon a name ', '')
    if (name) setHasCaught(true)
    console.log(name)
  }

  // const catchPokemon = (pokemon) => {

  //   setPokemonDex(state => {
  //     const monExists = (state.filter(p => pokemon.id == p.id).length > 0)
  //     console.log(monExists)

  //     if (!monExists) {
  //       state = [...state, pokemon]
  //       state.sort(function (a, b) {
  //         return a.id - b.id
  //       })
  //     }
  //     return state
  //   })
  // }
  const catchPokemonModal = () => {
    setVisible(true)
    // this.setState({
    //   visible: true,
    // });
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds')
    setConfirmLoading(true)

    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false)
  };

  return (
    <div className="app-wrapper" >
      <Spin spinning={loading2} delay={500}>
        <header>
          <h1 className="title">Wild Pokemon Detail</h1>
        </header>

        <section className="wild-pokemon">
          <img src={imgPath + match.params.id + '.png'} className="sprite"></img>
          <h3>{pokemon.name}</h3>
        </section>

        <section>
          <div>
            {
              !hasCaught && <Button type="primary" onClick={() => catchPokemon(pokemon)}>
                catch
              </Button>
            }

            <Button type="primary" onClick={() => catchPokemonModal()}>
              modal
            </Button>

            <Alert
              message="Failed"
              description="Try to catch again, until you get the pokemon ^_^ "
              type="warning"
              showIcon
            />

            <Modal
              title="Title"
              visible={visible}
              onOk={() => handleOk()}
              confirmLoading={confirmLoading}
              onCancel={() => handleCancel()}
            >
              <p>{modalText}</p>
              <Form onSubmit={() => alert('haha')} className="login-form">
                <Form.Item>
                  {/* {
                  getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })( */}
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />,
                  {/* ) */}
                  }
              </Form.Item>
              </Form>
            </Modal>
          </div>
        </section>

        <section className="detail-info">
          <h3>Types</h3>
          <PokemonTypes types={pokemonTypes} />

          <h3>Moves</h3>
          <PokemonMoves moves={pokemonMoves} />
        </section>
      </Spin>
    </div>
  );
}

export default WildPokemonDetail;
