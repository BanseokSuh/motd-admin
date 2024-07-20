import { db, storage } from '../../firebase';
import { collection, getDocs, doc, getDoc, setDoc, where, query } from "firebase/firestore/lite";

export const getMotdList = async () => {
    let docs: any = [];

    try {
        // docs = await getDocs(collection(db, 'notices'));
        const noticesRef = collection(db, 'notices');
        const q = query(noticesRef, where("isDeleted", "==", false));

        docs = await getDocs(q);
    } catch (error) {
        console.error("Failed to get document:", error);
    }

    return docs;
};

export const getMotd = async (id: string) => {
    const data = await getDoc(doc(collection(db, 'notices'), id));

    return data;
};

export const modifyMotd = async (id: string, content: any) => {
    await setDoc(doc(collection(db, 'notices'), id), content);
};

export const addMotd = async (content: any) => {
    const contents = { ...content, isDeleted: false };
    await setDoc(doc(collection(db, 'notices')), contents);
};

export const deleteMotd = async (id: string) => {
    await setDoc(doc(collection(db, 'notices'), id), { isDeleted: true });
};