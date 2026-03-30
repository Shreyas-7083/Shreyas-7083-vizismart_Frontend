import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs-extra';

// Define __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define paths
const distPath = join(__dirname, 'dist');
const staticPath = '/home/ubuntu/Vizismart/ViziSmart_Backend/static';
const staticfilesPath ='/home/ubuntu/Vizismart/ViziSmart_Backend/staticfiles';
const templatesPath = '/home/ubuntu/Vizismart/ViziSmart_Backend/templates';

const copyFiles = async () => {
  try {
    // Remove old files
    await fs.emptyDir(staticPath);
    await fs.emptyDir(staticfilesPath);
    
    // Copy dist to static
    await fs.copy(distPath, staticPath);
    

    // Copy dist to staticfiles
    await fs.copy(distPath, staticfilesPath);
    

    // Copy index.html to templates
    await fs.copy(join(distPath, 'index.html'), join(templatesPath, 'index.html'));
    console.log('copied')
  } catch (err) {
    console.error(`Error during copy process: ${err}`);
  }
};

copyFiles();
