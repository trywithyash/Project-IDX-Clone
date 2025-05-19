import util from 'util';
import child_process from 'child_process';
import fs from 'fs/promises';
import uuid4 from 'uuid4';
const execpro=util.promisify(child_process.exec);

export const createProjectController=async (req,res)=>{
//create a unique id and then inside the projects folder create a new folder with that id

const projectId=uuid4();
console.log("New project id: ",projectId);
await fs.mkdir(`projects/${projectId}`);
//after this call the npm create vite command in the newly created project folder
const respnse=await execpro( `npx --yes create-vite@latest ${projectId} --template react`,{
    cwd:`projects/${projectId}`
})
return res.json({message:'project created' , data:projectId});
}