import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constants";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <BookOverview {...(sampleBooks[0] as Book)} />

      <BookList books={sampleBooks} />
    </main>
  );
}
