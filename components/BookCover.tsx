import type React from "react";

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
  extraSmall: "w-24 h-32",
  small: "w-32 h-48",
  medium: "w-40 h-56",
  regular: "w-48 h-64",
  wide: "w-64 h-80",
};

interface Props {
  variant?: BookCoverVariant;
  className?: string;
  coverColor: string;
  coverImage: string;
  children?: React.ReactNode;
}

const BookCover = ({
  variant = "regular",
  className = "",
  coverColor = "#012B48",
  coverImage = "https://placehol.co/400x600.png",
  children,
}: Props) => {
  return (
    <div
      className={`relative transition-all duration-300 rounded-lg overflow-hidden ${variantStyles[variant]} ${className}`}
      style={{
        backgroundColor: coverColor,
        backgroundImage: `url(${coverImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
};

export default BookCover;
