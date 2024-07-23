import Hero from '../hero/Hero';

const Home = ({movies}) => {
  console.log("Inside Home Component")
  console.log(movies);
  return (
    <Hero movies = {movies} />
  )
}

export default Home