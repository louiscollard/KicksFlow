export type Sneaker = {
    id: number;
    imageSource: string;
    title: string;
    price: number;
    isAvailable: boolean;
    isAdvertised: boolean;
};
export const fakeMenu: Sneaker[] = [
    { id: 1, imageSource: "/images/sneaker1.png", title: "Aero Strike", price: 129.99, isAvailable: true, isAdvertised: true },
    { id: 2, imageSource: "/images/sneaker2.png", title: "Volt Runner", price: 149.56, isAvailable: true, isAdvertised: false },
    { id: 3, imageSource: "/images/sneaker3.png", title: "Court Pro", price: 109.49, isAvailable: true, isAdvertised: false },
    { id: 4, imageSource: "/images/sneaker4.png", title: "Street Classic", price: 89.5, isAvailable: true, isAdvertised: false },
    { id: 5, imageSource: "/images/sneaker5.png", title: "Cloud Glide", price: 159.99, isAvailable: true, isAdvertised: false },
    { id: 6, imageSource: "/images/sneaker6.png", title: "Trail Blazer", price: 139.95, isAvailable: true, isAdvertised: false },
    { id: 7, imageSource: "/images/sneaker7.png", title: "Retro Wave", price: 99.9, isAvailable: true, isAdvertised: false },
    { id: 8, imageSource: "/images/sneaker8.png", title: "Skate Deck", price: 74.43, isAvailable: true, isAdvertised: false },
    { id: 9, imageSource: "/images/sneaker9.png", title: "High Top Legend", price: 169.99, isAvailable: true, isAdvertised: false },
    { id: 10, imageSource: "/images/sneaker10.png", title: "Slip-On Breeze", price: 69.99, isAvailable: true, isAdvertised: false },
];