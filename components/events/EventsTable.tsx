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
  import events from '@/data/events';
  import { Event } from '@/types/events';
  
  interface EventsTableProps {
    limit?: number;
    title?: string;
  }
  
  const EventsTable = ({ limit, title }: EventsTableProps) => {
    // Sort posts in dec order based on date
    const sortedEvents: Event[] = [...events].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  
    // Filter posts to limit
    const filteredEvents = limit ? sortedEvents.slice(0, limit) : sortedEvents;
  
    return (
      <div className='mt-10'>
        <h3 className='text-2xl mb-4 font-semibold flex justify-between items-center'>
          {title ? title : 'Events'}
          <Link href="/events/create">
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs mr-14 '>
              Create Event
            </button>
          </Link>
        </h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead className='hidden md:table-cell'>Location</TableHead>
              <TableHead className='hidden md:table-cell text-right'>
                Date
              </TableHead>
              <TableHead>View</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEvents.map((event) => (
              <TableRow key={event.id}>
                <TableCell>{event.title}</TableCell>
                <TableCell className='hidden md:table-cell'>
                  {event.address}
                </TableCell>
                <TableCell className='text-right hidden md:table-cell'>
                  {event.date}
                </TableCell>
                <TableCell>
                  <Link href={`/events/edit/${event.id}`}>
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
  
  export default EventsTable;