import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase/config";
import { v4 as uuidv4 } from "uuid";

export const uploadImages = async (
  bucket: string,
  images: File | FileList | null
) => {
  let urlList: any[] = [];

  const uploadImage = async (imageFile: File) => {
    const uniqueName = `${uuidv4()}_${imageFile.name}`;
    const imageRef = ref(storage, `${bucket}/${uniqueName}`);
    const snapshot = await uploadBytes(imageRef, imageFile);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  };

  const handleUpload = async () => {
    if (images instanceof FileList) {
      const promises = Array.from(images).map(uploadImage);
      urlList = await Promise.all(promises);
    } else if (images instanceof File) {
      const url = await uploadImage(images);
      if (url) {
        urlList.push(url);
      }
    }
  };

  await handleUpload();

  return urlList;
};
