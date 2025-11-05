"use client";

import config from "../../../../tina/config";

export default function AdminRoute() {
  return (
    <div>
      <iframe
        src="/admin/index.html"
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
        }}
      />
    </div>
  );
}
