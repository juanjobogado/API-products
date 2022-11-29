import dotenv from 'dotenv';
dotenv.config()
import  cloudinary from "cloudinary";
cloudinary.v2;
const { API_KEY, API_SECRET, CLOUD_NAME } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
  secure: true,
});

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "folder",
  });
};

export const deleteImg = async (id) => {
  await cloudinary.uploader.destroy(id);
};
