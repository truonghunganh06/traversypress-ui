import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table";
import Link from "next/link";
import users from "@/data/users";
import { User } from "@/types/users";

interface GamesTableProps {
  limit?: number;
  title?: string;
}

const UsersTable = ({ limit, title }: GamesTableProps) => {
  // Sort posts in dec order based on date
  const sortedUsers: User[] = [...users].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Filter posts to limit
  const filteredUsers = limit ? sortedUsers.slice(0, limit) : sortedUsers;

  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">{title ? title : "Users"}</h3>
      <Table>
        <TableCaption>A list of recent games</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="hidden md:table-cell">Phone Number</TableHead>
            <TableHead className="hidden md:table-cell">
              Mail
            </TableHead>
            <TableHead>View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell className="hidden md:table-cell">
                {user.phone}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {user.gmail}
              </TableCell>
              <TableCell>
                <Link href={`/users/edit/${user.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                    Edit
                  </button>
                </Link>
              </TableCell>
              <TableCell>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-xs">
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

export default UsersTable;
