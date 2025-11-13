"use client";

import { useEffect, useState } from "react";
import ActivityCalendar, { type Activity } from "react-activity-calendar";

export default function GithubCalendar() {
  const [data, setData] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github/contributions")
      .then((r) => r.json())
      .then((j) => setData(j.data ?? []))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Yükleniyor...</div>;

  return (
    <div className="w-full overflow-x-auto rounded-2xl p-4 border">
      <ActivityCalendar
        data={data}
        labels={{
          totalCount: "{{count}} contributions in the last year",
          legend: { less: "Less", more: "More" },
        }}
        theme={{
          light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
          dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
        }}
        blockSize={12}
        blockMargin={4}
        fontSize={12}
      />
    </div>
  );
}

