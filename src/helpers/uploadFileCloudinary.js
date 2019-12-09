import cloudinary from "cloudinary";
import DataUri from "datauri";
import path from "path";

const dataUri = new DataUri();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY
});

const processFile = file =>
  dataUri.format(path.extname(file.originalname).toString(), file.buffer).content;

export const uploadFile = async file => {
  try {
    const processedFile = processFile(file);
    const result = await cloudinary.v2.uploader.upload(processedFile);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteFile = async publicId => {
  try {
    const result = await cloudinary.v2.uploader.destroy(publicId);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const extractCloudinaryOutput = result => {
  let previewPublicId, collectionPublicId, previewUrl, collectionUrl;

  // eslint-disable-next-line array-callback-return
  result.map(output => {
    if (output.format === "pdf") {
      collectionPublicId = output.public_id;
      collectionUrl = output.url;
    } else {
      previewPublicId = output.public_id;
      previewUrl = output.url;
    }
  });

  return { previewPublicId, collectionPublicId, previewUrl, collectionUrl };
};
