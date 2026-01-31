import { kv } from "@vercel/kv";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const [visits, buyClicks, contacts] = await Promise.all([
    kv.get<number>("visits"),
    kv.get<number>("buyClicks"),
    kv.lrange<any>("contacts", 0, 100),
  ]);

  return (
    <div className="min-h-screen bg-muted p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Total Visits</CardTitle>
            </CardHeader>
            <CardContent className="text-4xl font-bold">
              {visits ?? 0}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Buy Button Clicks</CardTitle>
            </CardHeader>
            <CardContent className="text-4xl font-bold">
              {buyClicks ?? 0}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Contacts</CardTitle>
          </CardHeader>
          <CardContent>
            {!contacts.length ? (
              <p className="text-muted-foreground">No submissions</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contacts.map((c, i) => (
                    <TableRow key={i}>
                      <TableCell>{c.name}</TableCell>
                      <TableCell>{c.email}</TableCell>
                      <TableCell className="max-w-xs truncate">
                        {c.message}
                      </TableCell>
                      <TableCell>
                        {new Date(c.createdAt).toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
