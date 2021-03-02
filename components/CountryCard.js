import Link from 'next/link';
import countryCardStyles from '../styles/CountryCard.module.css';

export const CountryCard = ({ country }) => {
  return (
    <>
      <div className={countryCardStyles.card}>
        <div className={countryCardStyles.cardImage}>
          <img src={country.flag}></img>
        </div>
        <div className={countryCardStyles.cardBody}>
          <h1 className={countryCardStyles.cardTitle}>{country.name}</h1>
          <p>Currency:{country.currencies[0].name}</p>
          <p>Current Date and Time:{country.timezones[0]}</p>
          <div className={countryCardStyles.cardButton}>
            <button
              className={`${countryCardStyles.button} , ${countryCardStyles.mr}`}
            >
              Show Map
            </button>
            <Link href={`/country/${country.alpha3Code}`}>
              <button className={countryCardStyles.button}>Detail</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryCard;
