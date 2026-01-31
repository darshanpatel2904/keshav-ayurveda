import fs from "fs";
import path from "path";
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

const dataDir = path.join(process.cwd(), "data");
const dataFile = path.join(dataDir, "analytics.json");

type Analytics = {
  visits: number;
  buyClicks: number;
  contacts: {
    name: string;
    email: string;
    message: string;
    createdAt: string;
  }[];
};

function getData(): Analytics {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

  if (!fs.existsSync(dataFile)) {
    const init: Analytics = { visits: 0, buyClicks: 0, contacts: [] };
    fs.writeFileSync(dataFile, JSON.stringify(init, null, 2));
    return init;
  }

  return JSON.parse(fs.readFileSync(dataFile, "utf-8"));
}

export default function AdminPage() {
  const data = getData();

  return (
    <div className="min-h-screen bg-muted p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Total Visits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-semibold">{data.visits}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Buy Button Clicks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-semibold">{data.buyClicks}</p>
            </CardContent>
          </Card>
        </div>

        {/* Contacts */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Form Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            {data.contacts.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No submissions yet
              </p>
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
                  {data.contacts.map((c, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{c.name}</TableCell>
                      <TableCell>{c.email}</TableCell>
                      <TableCell className="max-w-xs truncate">
                        {c.message}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
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
