import React from "react";
export default function Footer() {
  return (
    <footer className="py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 gap-2">
        <span>© {new Date().getFullYear()}, Md Mahedi Hassan</span>
      </div>
    </footer>
  );
}
