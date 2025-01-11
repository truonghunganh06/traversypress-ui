import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import {
  LayoutDashboard,
  Newspaper,
  CalendarFoldIcon,
  Gamepad2,
  Users,
} from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <Command className='bg-secondary rounded-none'>
      <CommandInput placeholder='Type a command or search...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Suggestions'>
          <CommandItem>
            <Newspaper className='mr-2 h-4 w-4' />
            <Link href='/'>Dashboard</Link>
          </CommandItem>
          <CommandItem>
            <CalendarFoldIcon className='mr-2 h-4 w-4' />
            <Link href='/events'>Event</Link>
          </CommandItem>
          <CommandItem>
            <Gamepad2 className='mr-2 h-4 w-4' />
            <Link href='/games'>Games</Link>
          </CommandItem>
          <CommandItem>
            <Users className='mr-2 h-4 w-4' />
            <Link href='/users'>User</Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        {/* <CommandGroup heading='Settings'>
          <CommandItem>
            <User className='mr-2 h-4 w-4' />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
        </CommandGroup> */}
      </CommandList>
    </Command>
  );
};

export default Sidebar;
