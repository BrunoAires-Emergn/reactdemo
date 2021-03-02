import Moment from 'react-moment';
import 'moment-timezone';
import homeStyles from '../styles/Home.module.css';
import detailStyles from '../styles/CountryDetail.module.css';

import GoogleMap from './GoogleMap';
// Create new date and convert current time to UTC
const now = new Date();
const utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
const CountryDetails = ({ country }) => {
  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.main}>
        <div className={detailStyles.card}>
          <h1 className={detailStyles.cardTitle}>{country.name}</h1>
          <div className={detailStyles.cardBody}>
            <div className={detailStyles.cardImage}>
              <img src={country.flag} />
            </div>
            <div className={detailStyles.cardContent}>
              <p>Name: {country.name}</p>
              <p>Native name: {country.nativeName}</p>
              <p>Capital: {country.capital}</p>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Sub region: {country.subregion}</p>
              <p>Area: {country.area}</p>
              <p>Country code: +{country.callingCodes[0]}</p>
              <p>
                Currencies:{' '}
                {country.currencies.map((currency) => (
                  <li key={currency.toString()}>
                    {currency.name} ({currency.symbol})
                  </li>
                ))}
              </p>
              <p>
                Timezones:{' '}
                {country.timezones.map((timezone) => (
                  <li key={timezone.toString()}>
                    <b>{timezone}: </b>
                    <Moment
                      add={{
                        hours: Number(timezone.substr(4).split(':')[0]),
                        minutes: Number(timezone.substr(4).split(':')[1])
                      }}
                      format='ddd d MMM, YYYY – HH:MM a'
                    >
                      {utc}
                    </Moment>
                  </li>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div className={detailStyles.neighborCard}>
          <div className={detailStyles.neighborCardTitle}>
            <h1>Neighbour Countries</h1>
          </div>
          <div className={detailStyles.neighborCardFlags}>
            {country.neighbors.map((neighbor) => (
              <div className={detailStyles.neighborCardFlag}>
                <img src={neighbor.flag}></img>
                <p>{neighbor.name}</p>
              </div>
            ))}
          </div>
        </div>
        ;{/* {country.latlng[0]} / {country.latlng[1]} */}
        <GoogleMap center={country.latlng} countryName={country.name} />
      </div>
    </div>
  );
};

export default CountryDetails;
