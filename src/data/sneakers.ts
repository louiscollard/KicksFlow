import sneaker1 from "@/assets/images/sneaker1.png";
import sneaker10 from "@/assets/images/sneaker10.png";
import sneaker2 from "@/assets/images/sneaker2.png";
import sneaker3 from "@/assets/images/sneaker3.png";
import sneaker4 from "@/assets/images/sneaker4.png";
import sneaker5 from "@/assets/images/sneaker5.png";
import sneaker6 from "@/assets/images/sneaker6.png";
import sneaker7 from "@/assets/images/sneaker7.png";
import sneaker8 from "@/assets/images/sneaker8.png";
import sneaker9 from "@/assets/images/sneaker9.png";

export type Sneaker = {
    id: number;
    imageSource: string;
    title: string;
    price: number;
    isAvailable: boolean;
    isAdvertised: boolean;
};

const EMPTY: Sneaker[] = [];

const SMALL: Sneaker[] = [
    { id: 1, imageSource: sneaker1, title: "Aero Strike", price: 129.99, isAvailable: true, isAdvertised: true },
    { id: 2, imageSource: sneaker2, title: "Volt Runner", price: 149.56, isAvailable: true, isAdvertised: false },
];

const MEDIUM: Sneaker[] = [
    { id: 1, imageSource: sneaker1, title: "Aero Strike", price: 129.99, isAvailable: true, isAdvertised: true },
    { id: 2, imageSource: sneaker2, title: "Volt Runner", price: 149.56, isAvailable: true, isAdvertised: false },
    { id: 3, imageSource: sneaker3, title: "Court Pro", price: 109.49, isAvailable: true, isAdvertised: false },
    { id: 4, imageSource: sneaker4, title: "Street Classic", price: 89.5, isAvailable: true, isAdvertised: false },
    { id: 5, imageSource: sneaker5, title: "Cloud Glide", price: 159.99, isAvailable: true, isAdvertised: false },
];

const LARGE: Sneaker[] = [
    { id: 1, imageSource: sneaker1, title: "Aero Strike", price: 129.99, isAvailable: true, isAdvertised: true },
    { id: 2, imageSource: sneaker2, title: "Volt Runner", price: 149.56, isAvailable: true, isAdvertised: false },
    { id: 3, imageSource: sneaker3, title: "Court Pro", price: 109.49, isAvailable: true, isAdvertised: false },
    { id: 4, imageSource: sneaker4, title: "Street Classic", price: 89.5, isAvailable: true, isAdvertised: false },
    { id: 5, imageSource: sneaker5, title: "Cloud Glide", price: 159.99, isAvailable: true, isAdvertised: false },
    { id: 6, imageSource: sneaker6, title: "Trail Blazer", price: 139.95, isAvailable: true, isAdvertised: false },
    { id: 7, imageSource: sneaker7, title: "Retro Wave", price: 99.9, isAvailable: true, isAdvertised: false },
    { id: 8, imageSource: sneaker8, title: "Skate Deck", price: 74.43, isAvailable: true, isAdvertised: false },
    { id: 9, imageSource: sneaker9, title: "High Top Legend", price: 169.99, isAvailable: true, isAdvertised: false },
    { id: 10, imageSource: sneaker10, title: "Slip-On Breeze", price: 69.99, isAvailable: true, isAdvertised: false },
];

export const sneakersData = {
    EMPTY,
    SMALL,
    MEDIUM,
    LARGE,
};