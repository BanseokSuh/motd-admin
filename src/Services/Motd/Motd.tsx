import { db, storage, ref, uploadBytes, getDownloadURL } from '../../firebase';
import { collection, getDocs, doc, getDoc, setDoc, where, query } from "firebase/firestore/lite";

export const getMotdList = async () => {
    let docs: any = [];

    try {
        // docs = await getDocs(collection(db, 'notices'));
        const noticesRef = collection(db, 'notices');
        const q = query(noticesRef, where("active", "==", true));

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
    const contents = { ...content, active: true };
    await setDoc(doc(collection(db, 'notices')), contents);
};

export const deleteMotd = async (id: string) => {
    await setDoc(doc(collection(db, 'notices'), id), { active: false });
};

export const uploadImageAndGetUrl = async (file: File) => {
    const fileRef = ref(storage, `notice_images/${file.name}`);

    await uploadBytes(fileRef, file);

    return await getDownloadURL(fileRef);
};