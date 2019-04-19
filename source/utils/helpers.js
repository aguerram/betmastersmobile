export const getResponse=(list,id, type=false)=>
{
    if(list[id])
    {
        if(!type)
            return list[id].message
        return list[id].type
    }
    return null
};