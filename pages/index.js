import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main_container}>
        <div className={styles.card}>
          <img src="illustration-hero.svg" alt="hero_image"></img>

          <div className={styles.card_1st_container}>
            <h2>Order Summary</h2>
            <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
          </div>

          <div className={styles.card_2nd_container}>
            <div className={styles.card_2nd_container_child}>

              <img src="icon-music.svg" alt="hero_image"></img>
              <div className={styles.card_2nd_container_text}>
                <h5>Annual Plan</h5>
                <p>$59.99/year</p>
              </div>
              <a>Change</a>
            </div>
          </div>

          <div className={styles.card_3rd_container}>
            <button>Proceed to Payment</button>
            <a href="/">Cancel</a>
          </div>
        </div>
      </div>
    </div>
  )
}
