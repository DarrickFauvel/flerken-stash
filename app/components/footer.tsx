import getFullYear from "@/lib/helpers/getFullYear";

export default function Footer() {
  return (
    <footer className="row-start-3 w-full flex gap-6">
      &copy; {getFullYear()} Darrick Fauvel
    </footer>
  );
}
