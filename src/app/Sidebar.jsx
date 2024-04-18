"use client";

import service from "@/service/client";
import React from "react";

export default function Sidebar() {
  const [fetchCount, setFetchCount] = React.useState(0);
  const [list, setList] = React.useState(null);

  React.useEffect(() => {
    service.getQueryList().then((res) => {
      if (!res.success) alert(res.message);

      setList(() => res.data);
    });
  }, [fetchCount]);

  if (!list) return null;

  return <div>Sidebar</div>;
}
