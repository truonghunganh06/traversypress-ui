import DashboardCard from '@/components/dashboard/DashboardCard';
import AnalyticsChart from '@/components/dashboard/AnalyticsChart';
import {Gamepad2, Newspaper, Users, CalendarFoldIcon } from 'lucide-react';
import GamesTable from '@/components/games/GamesTable';

export default function Home() {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between gap-5 mb-5'>
        <DashboardCard
          title='Events'
          count={0}
          icon={<CalendarFoldIcon className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Games'
          count={6}
          icon={<Gamepad2 className='text-slate-500' size={72} />}
        />
        <DashboardCard
          title='Users'
          count={0}
          icon={<Users className='text-slate-500' size={72} />}
        />
      </div>
      <AnalyticsChart />
      <GamesTable title='Latest Games' limit={5} />
    </>
  );
}
