import styles from './page.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">OtePal!</a>
        </h1>
      </main>
    </div>
  );
};

export default Home;
