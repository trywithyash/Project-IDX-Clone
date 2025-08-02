import {create} from 'zustand'
import {QueryClient} from '@tanstack/react-query'
import {getProjectTree} from '../apis/projects'

export const useTreeStructureStore=create((set,get)=>{

    const queryClient=new QueryClient();

    return{
        projectId:null,
        treeStructure:null, 
        setTreeStructure:async()=>{
            const id=get().projectId;
            console.log("id", id);
            const data=await queryClient.fetchQuery({
                queryKey:[`projecttree-${id}`],
                queryFn:()=>getProjectTree({projectId: id}),
            });
            console.log(data, '111111111111');
            set({
                treeStructure:data
            });
        },
        setProjectId:(projectId)=>{
            set({
                projectId:projectId
            });
        }

    }
})