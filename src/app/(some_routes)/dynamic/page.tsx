
// import { useState } from 'react'
import styles from '../../page.module.css'

interface CatResponse {
  text: string
}

async function getRandomCatFact(): Promise<CatResponse> {
  const response = await fetch("https://cat-fact.herokuapp.com/facts/random",
    { 
      cache: "no-store"
    }
    // or alternatively: { next: { revalidate: 10 } }
  );
  return response.json();
}


export default async function SsrPage() {
  const catFact = await getRandomCatFact();
  
  return (
    <main className={styles.main}>
      <div className={styles.centerStuff}>
        <h2>Dynamic render</h2>
        <br/>
        <p> Random cat fact from the internet... </p>
        <p> {catFact.text} </p>
      </div>
    </main>
  )
}
