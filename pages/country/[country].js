import CountryDetails from '../../components/CountryDetails';

const Country = ({ countryData }) => {
  return <CountryDetails country={countryData} />;
};

export async function getStaticPaths() {
  const res = await fetch(`https://restcountries.eu/rest/v2/all`);
  const countries = await res.json();
  const paths = await countries.map((country) => ({
    params: { country: country.alpha3Code }
  }));
  return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${context.params.country}`
  );
  const countryData = await res.json();

  const countryBorders = countryData.borders.join(';');
  //   try {
  const neighbors = await fetch(
    `https://restcountries.eu/rest/v2/alpha?codes=${countryBorders}`
  );
  countryData.neighbors = await neighbors.json();
  //   } catch (error) {
  //     console.error(error);
  //   }

  return {
    props: {
      countryData: countryData
    }
  };
};

export default Country;
