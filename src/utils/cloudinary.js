//usable code -> save this
import {v2 as cloudinary} from "cloudinary"
import fs from "fs" // file system iiside node -> read/write/delete file


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async (localFilePath) => {
    
    try {
        if(!localFilePath) 
            return null

        //upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        //file has been successfully uploaded
        console.log("File is uploaded on cloudinary ", response.url);
        return response
    } 
    catch (error) {

        //remove the locally saved temporary file as the upload operation failed
        fs.unlinkSync(localFilePath)
        return null
        
    }
}

export {uploadOnCloudinary}