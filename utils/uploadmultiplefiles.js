// import express from "express";
// import multer from "multer" 
// import { google } from "googleapis";
// import keys from "../drive_file.js";
// import stream from "stream";

// const uploadRouter = express.Router();
// const upload = multer();

// const uploadFile = async (fileObject) => {
//   const bufferStream = new stream.PassThrough();
//   bufferStream.end(fileObject.buffer);
//   const { data } = await google.drive({ version: 'v3' }).files.create({
//     media: {
//       mimeType: fileObject.mimeType,
//       body: bufferStream,
//     },
//     requestBody: {
//       name: fileObject.originalname,
//       parents: ['DRIVE_FOLDER_ID'],
//     },
//     fields: 'id,name',
//   });
// //   let files =[data.name]
// //   files.push()
//   console.log(`Uploaded file ${data.name} ${data.id}`);
// };

// uploadRouter.post('/upload', upload.any(), async (req, res) => {
//   try {
//     const { body, files } = req;

//     for (let f = 0; f < files.length; f += 1) {
//       await uploadFile(files[f]);
//     }

//     console.log(body);
//     res.status(200).send('Form Submitted');
//   } catch (f) {
//     res.send(f.message);
//   }
// });

// export default uploadRouter;