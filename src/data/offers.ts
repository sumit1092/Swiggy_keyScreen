import type { Offer } from "@/types/offer";

export const offers: Offer[] = [
  {
    id: "prebook-50",
    title: "Flat 50% off",
    description: "Save more when you reserve your table before visiting.",
    code: "DINE50",
    discountLabel: "Pre-booking offer",
  },
  {
    id: "bank-10",
    title: "Up to 10% bank offer",
    description: "Extra savings on selected credit and debit cards.",
    code: "BANK10",
    discountLabel: "Bank offer",
  },
  {
    id: "dessert",
    title: "Free dessert",
    description: "Complimentary chef dessert on orders above Rs. 999.",
    code: "SWEET",
    discountLabel: "Limited time",
  },
];
