import EventsTable from '@/components/events/EventsTable';
import BackButton from '@/components/BackButton';
import EventPagination from '@/components/events/EventsPagination';

const EventsPage = () => {
  return (
    <>
      <BackButton text='Go Back' link='/' />
      <EventsTable />
      <EventPagination />
    </>
  );
};

export default EventsPage;
