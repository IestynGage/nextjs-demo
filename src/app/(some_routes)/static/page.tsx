
// import { useState } from 'react'
import styles from '../../page.module.css'
import { Metadata } from 'next'

interface CatResponse {
  text: string
}

export const metadata: Metadata = {
  title: 'Sever side generation',
}

async function getRandomCatFact(): Promise<CatResponse> {
  const response = await fetch("https://cat-fact.herokuapp.com/facts/random");
  return response.json();
}

export default async function SsrPage() {
  const catFact = await getRandomCatFact();
  console.log(catFact)
  
  return (
    <main className={styles.main}>
      <div className={styles.centerStuff}>
        <h2>Static render</h2>
        <br/>
        <p> Random cat fact from the internet... </p>
        <p> {catFact.text} </p>
      </div>
    </main>
  )
}
