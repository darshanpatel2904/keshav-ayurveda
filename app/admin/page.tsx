import fs from "fs";
import path from "path";

const dataFile = path.join(process.cwd(), "data", "analytics.json");

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

export default function AdminPage() {
  const data: Analytics = JSON.parse(fs.readFileSync(dataFile, "utf-8"));

  return (
    <div style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>Website Analytics</h1>

      <section>
        <h2>Stats</h2>
        <p>
          <strong>Total Visits:</strong> {data.visits}
        </p>
        <p>
          <strong>Buy Button Clicks:</strong> {data.buyClicks}
        </p>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Contact Form Submissions</h2>

        {data.contacts.length === 0 && <p>No submissions yet</p>}

        {data.contacts.map((c, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #ddd",
              padding: 12,
              marginBottom: 12,
              borderRadius: 6,
            }}
          >
            <p>
              <strong>Name:</strong> {c.name}
            </p>
            <p>
              <strong>Email:</strong> {c.email}
            </p>
            <p>
              <strong>Message:</strong> {c.message}
            </p>
            <p style={{ fontSize: 12, color: "#666" }}>
              {new Date(c.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
