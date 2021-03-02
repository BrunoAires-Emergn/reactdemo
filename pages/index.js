import CountryCard from '../components/CountryCard';
import styles from '../styles/Home.module.css';
import { useState } from 'react'

export default function Home({ countries }) {
  
  const [filteredResults, setResults] = useState(countries)
  const [searchQuery, setQuery] = useState('')

  function updateResults(event) {
    setQuery(event.target.value);
    const results = countries.filter(country => country.name.toLowerCase().includes(searchQuery))
    setResults(results)
  }
  return (
    <div className={styles.container}>
      <h1>Countries</h1>
      <input 
      type="text"
      placeholder="Search Countries"
      value={searchQuery}
      onChange={updateResults}
      className={styles.input}
      />
      {filteredResults.map((country) => (
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
