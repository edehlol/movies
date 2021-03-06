import useSWR from 'swr';
import { fetcher } from '../../services/SWRFetcher';
import { Carousel } from '../Carousel/Carousel';
import { Heading } from '../Heading';
import { HorizontalList } from '../HorizontalList/HorizontalList';

interface Props {
  id: number;
}

export const RelatedList = (props: Props) => {
  const { id } = props;
  const { data, error } = useSWR(`/api/related?id=${id}`, fetcher);
  console.log(data);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="pb-4">
      <Heading size={Heading.size.MEDIUM}>Related</Heading>
      <HorizontalList list={data} />
    </div>
  );
};
