"use client";

interface Props {
  search: string;
  setSearch: (v: string) => void;
}

export default function SearchBar({
  search,
  setSearch,
}: Props) {
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search username / platform / id..."
      className="
      w-full
      rounded-xl
      bg-gray-800
      border
      border-gray-700
      px-5
      py-3
      outline-none
      focus:border-cyan-400
      "
    />
  );
}
