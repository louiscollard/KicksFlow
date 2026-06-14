export type Sneaker = {
    id: number;
    imageSource: string;
    title: string;
    price: number;
    isAvailable: boolean;
    isAdvertised: boolean;
};
export const fakeMenu: Sneaker[] = [
    { id: 1, imageSource: "/images/sneaker_aero_strike.webp", title: "Aero Strike", price: 129.99, isAvailable: true, isAdvertised: true },
    { id: 2, imageSource: "/images/sneaker_volt_runner.webp", title: "Volt Runner", price: 149.56, isAvailable: true, isAdvertised: false },
    { id: 3, imageSource: "/images/sneaker_cloud_glide.webp", title: "Court Pro", price: 109.49, isAvailable: true, isAdvertised: false },
    { id: 4, imageSource: "/images/sneaker_street_classic.webp", title: "Street Classic", price: 89.5, isAvailable: true, isAdvertised: false },
    { id: 5, imageSource: "/images/sneaker_cloud_glide.webp", title: "Cloud Glide", price: 159.99, isAvailable: true, isAdvertised: false },
    { id: 6, imageSource: "/images/sneaker_trail_blazer.webp", title: "Trail Blazer", price: 139.95, isAvailable: true, isAdvertised: false },
    { id: 7, imageSource: "/images/sneaker_retro_wave.webp", title: "Retro Wave", price: 99.9, isAvailable: true, isAdvertised: false },
    { id: 8, imageSource: "/images/sneaker_skate_deck.webp", title: "Skate Deck", price: 74.43, isAvailable: true, isAdvertised: false },
    { id: 9, imageSource: "/images/sneaker_high_top_legend.webp", title: "High Top Legend", price: 169.99, isAvailable: true, isAdvertised: false },
    { id: 10, imageSource: "/images/sneaker_slip_on_breeze.webp", title: "Slip-On Breeze", price: 69.99, isAvailable: true, isAdvertised: false },
];