import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CharacterPanel from './components/CharacterPanel/CharacterPanel'

export default function Home() {
  return (
    <>
      <div>Hello world</div>
      <CharacterPanel />
    </>
    
  )
}
