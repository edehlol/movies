import { GetServerSideProps } from 'next';
import { Layout } from '../../components/Layout';
import { ListGrid } from '../../components/ListGrid';

interface Props {
  data: any;
}

const UpcomingMoviePage = (props: Props) => {
  const { data } = props;
  return (
    <Layout>
      Now Playing <ListGrid data={data} api={`/movies/upcoming`} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.MOVIES_API}&language=en-US&page=1`
  ).then((response) => response.json());

  return {
    props: {
      data,
    },
  };
};

export default UpcomingMoviePage;
