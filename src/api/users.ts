import { db } from "@/api/firebase";
import type { Sneaker } from "@/data/sneakers";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export async function getUser(username: string): Promise<Sneaker[] | null> {
    const snap = await getDoc(doc(db, "users", username));
    return snap.exists() ? (snap.data().menu as Sneaker[]) : null;
}

export async function createUser(username: string, menu: Sneaker[]) {
    await setDoc(doc(db, "users", username), { username, menu });
}

export async function updateUserMenu(username: string, menu: Sneaker[]) {
    await updateDoc(doc(db, "users", username), { menu });
}