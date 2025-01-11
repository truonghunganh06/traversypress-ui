import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from '@/components/ui/table';
import Link from 'next/link';
import games from '@/data/games';
import { Game } from '@/types/games';

interface GamesTableProps {
  limit?: number;
  title?: string;
}

const GamesTable = ({ limit, title }: GamesTableProps) => {
  // Sort posts in dec order based on date
  const sortedGames: Game[] = [...games].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Filter posts to limit
  const filteredGames = limit ? sortedGames.slice(0, limit) : sortedGames;

  return (
    <div className='mt-10'>
      <h3 className='text-2xl mb-4 font-semibold flex justify-between items-center'>
          {title ? title : 'Games'}
          <Link href="/games/add">
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs mr-14 '>
              Add Games
            </button>
          </Link>
      </h3>
      <Table>
        <TableCaption>A list of recent games</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className='hidden md:table-cell'>Author</TableHead>
            <TableHead className='hidden md:table-cell text-right'>
              Date
            </TableHead>
            <TableHead>View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredGames.map((game) => (
            <TableRow key={game.id}>
              <TableCell>{game.title}</TableCell>
              <TableCell className='hidden md:table-cell'>
                {game.author}
              </TableCell>
              <TableCell className='text-right hidden md:table-cell'>
                {game.date}
              </TableCell>
              <TableCell>
                <Link href={`/games/edit/${game.id}`}>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs'>
                    Edit
                  </button>
                </Link>
              </TableCell>
              <TableCell>
                  <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-xs'>
                    Delete
                  </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default GamesTable;