
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

export default async function SsrPage({params}: any) {


  return (
    <main className={styles.main}>
      <div className={styles.centerStuff}>
        <h2>Dynamic route</h2>
        <br/>
        <p> {params.slug} </p>
      </div>
    </main>
  )
}
