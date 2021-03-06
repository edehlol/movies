import Head from 'next/head';
import { Carousel, Categories } from '../components/Carousel/Carousel';
import { Heading } from '../components/Heading';
import { Layout } from '../components/Layout';
import SearchBar from '../components/SearchBar';
import useSWR from 'swr';
import { fetcher } from '../services/SWRFetcher';
import { Container } from '../components/Container';

const popularCategories: Categories = [
  { name: 'Streaming', api: 'discover?category=tv&monetization=flatrate' },
  { name: 'On TV', api: 'tv?category=popular&page=1' },
  { name: 'In Theatre', api: 'movies?category=now_playing&page=1' },
  { name: 'For Rent', api: 'discover?category=movie&monetization=rent' },
];
const freeCategories: Categories = [
  { name: 'Movies', api: 'discover?category=movie&monetization=free' },
  { name: 'TV', api: 'discover?category=tv&monetization=free' },
];
const trailerCategories: Categories = [
  {
    name: 'Streaming',
    api: 'videos',
  },
  { name: 'TV', api: 'discover?category=tv&monetization=free' },
];
const trendingCategories: Categories = [
  { name: 'Today', api: 'trending?category=day' },
  { name: 'This Week', api: 'trending?category=week' },
];

const Hero = () => {
  const { data, error } = useSWR('/api/randomBackground', fetcher);

  return (
    <div className="bg-gradient-to-b from-gray-900 h-80 lg:h-96 mb-8">
      <div
        className="w-full h-full relative bg-center bg-no-repeat bg-cover bg-opacity-70 overflow-hidden"
        style={{ backgroundImage: data && `url(${data.background})` }}
      ></div>
      <div className="text-white flex flex-col gap-y-4 md:gap-y-8 lg:gap-y-12  container py-4 md:py-8 max-w-screen-md relative  -top-80 lg:-top-96 z-20">
        <Heading size={Heading.size.EXTRA_LARGE}>Welcome.</Heading>
        <Heading size={Heading.size.LARGE}>
          Millions of movies, TV
          <br /> shows and people to discover. Explore now.
        </Heading>
        <SearchBar
          formStyle="flex justify-between bg-white rounded-3xl mt-4"
          inputStyle="w-full text-black px-4 rounded-3xl outline-none"
          placeholder="Search..."
          button
          buttonStyle="bg-green-500  font-semibold py-3 px-6  rounded-3xl"
        />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>HELLO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Container>
        <Carousel title="What's Popular" categories={popularCategories} />
        <Carousel title="Free to Watch" categories={freeCategories} />
        <Carousel title="Trending" categories={trendingCategories} />
        {/* Trailers API endpoint not available yet */}
        {/* <Carousel title="Latest Trailers" categories={trailerCategories} background videos /> */}
      </Container>
      {/* <MoviesGrid data={data} api="movies" /> */}
    </Layout>
  );
};

export default Home;
