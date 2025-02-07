import { Button } from "@/components/ui/button";
import Image from "next/image";
import BookCover from "./BookCover";

interface Book {
  title: string;
  author: string;
  genre: string;
  rating: number;
  totalCopies: number;
  availableCopies: number;
  description: string;
  color: string;
  cover: string;
}

const BookOverview = ({
  title,
  author,
  genre,
  rating,
  totalCopies,
  availableCopies,
  description,
  color,
  cover,
}: Book) => {
  return (
    <section className="book-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1 className="text-3xl  font-semibold text-light-200">{title}</h1>
        <div className="book-info">
          <p>
            By <span className="font-semibold text-primary">{author}</span>
          </p>
          <p>
            Category:{" "}
            <span className="font-semibold text-primary">{genre}</span>
          </p>
          <div className="flex items-center gap-1 font-semibold text-light-200">
            <Image src="/icons/star.svg" alt="star" width={22} height={22} />
            <p>{rating}</p>
          </div>
        </div>
        <div className="space-y-1">
          <p>
            Total Books:{" "}
            <span className=" font-semibold text-light-200">{totalCopies}</span>
          </p>
          <p>
            Available Books:{" "}
            <span className="font-semibold text-light-200">
              {availableCopies}
            </span>
          </p>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <Button className="w-full md:w-auto">
          <Image
            src="/icons/book.svg"
            alt="book"
            width={22}
            height={22}
            className="mr-2"
          />
          <span className="font-bebas-neue text-xl">Borrow</span>
        </Button>
      </div>

      <div className=" relative flex flex-1 justify-center">
        <div className="relative">
          <BookCover
            variant="wide"
            className="z-10"
            coverColor={color}
            coverImage={cover}
          />
          <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <BookCover variant="wide" coverColor={color} coverImage={cover} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookOverview;
