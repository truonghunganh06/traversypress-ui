import GamesTable from '@/components/games/GamesTable';
import BackButton from '@/components/BackButton';
import GamesPagination from '@/components/games/GamesPagination';

const GamesPage = () => {
  return (
    <>
      <BackButton text='Go Back' link='/' />
      <GamesTable />
      <GamesPagination />
    </>
  );
};

export default GamesPage;
