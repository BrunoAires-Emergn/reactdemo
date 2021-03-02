import Head from 'next/head';
import CountryCard from '../components/CountryCard';
import styles from '../styles/Home.module.css';

export default function Home({ countries }) {
  return (
    <div className={styles.container}>
      <h1>Countries</h1>
      {countries.map((country) => (
        <CountryCard country={country} key={country.alpha2Code} />
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://restcountries.eu/rest/v2/all`);

  const countries = await res.json();
  return {
    props: {
      countries
    }
  };
};
