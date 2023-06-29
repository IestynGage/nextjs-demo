import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1> Example nextjs app </h1>
        <div className={styles.centerStuff} >
          <Link href="./client" > Client side rendering </Link>
          <Link href="./static" > Static render </Link>
          <Link href="./dynamic" > Dynamic render  </Link>
          <Link href="./something" > Dynamic route  </Link>
        </div>
      </div>
    </main>
  )
}
