import { 
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

// R2 client configuration
const R2 = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
  },
});

// Bucket name from environment variables
const BUCKET_NAME = process.env.R2_BUCKET_NAME || '';

// Type definitions
export type ImageFile = {
  key: string;
  name: string;
  url?: string;
  size: number;
  uploadedAt: number;
  id: string;
};

/**
 * List all objects in the R2 bucket
 */
export async function listFiles(): Promise<ImageFile[]> {
  try {
    const command = new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
    });
    
    const response = await R2.send(command);
    
    if (!response.Contents) {
      return [];
    }
    
    const files = await Promise.all(
      response.Contents.map(async (object) => {
        const url = await getSignedUrl(
          R2, 
          new GetObjectCommand({
            Bucket: BUCKET_NAME,
            Key: object.Key,
          }),
          { expiresIn: 3600 } // URL expires in 1 hour
        );
        
        return {
          key: object.Key || '',
          name: object.Key?.split('/').pop() || '',
          url,
          size: object.Size || 0,
          uploadedAt: object.LastModified?.getTime() || Date.now(),
          id: object.ETag?.replace(/"/g, '') || '',
        };
      })
    );
    
    return files;
  } catch (error) {
    console.error('Error listing files from R2:', error);
    throw error;
  }
}