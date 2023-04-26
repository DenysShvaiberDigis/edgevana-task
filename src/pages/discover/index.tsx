import { Sidebar } from "@/components";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-[auto_1fr]">
      <Sidebar />

      <main className="bg-light-02">Momo</main>
    </div>
  );
}
