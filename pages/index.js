import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <label>
          Samuel Lajoie
      </label>
      <label>
          Name
      </label>
      <input></input>
      <label>
          Telephone
      </label>
      <input></input>
    </div>
  )
}
