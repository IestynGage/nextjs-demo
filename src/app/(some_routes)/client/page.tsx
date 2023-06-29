"use client"

import { useState } from 'react'
import styles from '../../page.module.css'
import { outputZero } from './actions';

export default function ClientPage() {
  const [number, setNumber] = useState(0);

  return (
    <main className={styles.main}>
      <div className={styles.centerStuff}>
        <button onClick={() => setNumber(n => n + 1)}> Increase Counter</button>
        <button onClick={() => outputZero().then(n => setNumber(n))}> Reset Counter</button>
        <br/>
        Counter: {number}
      </div>
    </main>
  )
}
