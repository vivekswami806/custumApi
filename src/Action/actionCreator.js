import { DEL, ERROR, FETCHED, LOADING, SET, SUBMIT, UPDATE } from "./actionType";

export function textSetter(data)
{
    return {type:SET,payload:data}
}
export function submitData(data)
{
    return {type:SUBMIT,payload:data}
}
export function updateData(data)
{
    return {type:UPDATE,payload:data}
}
export function deleteData(id)
{
    return {type:DEL,payload:id}
}
//this action creator for the fetching the data
export function loadHandler()
{
    return { type: LOADING }
} 
export function fetchHandler(data)
{
    return { type: FETCHED, payload: data }
}
export function errorHandler(err)
{
    return { type:ERROR, payload: err }
}