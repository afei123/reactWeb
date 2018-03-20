import {doRequest,formRequest} from './apiUtils'
let toPost = 'POST'
export const _login = (userName,password,callback) => {
    doRequest(toPost,"worker/login",{userName,password},callback)
}
export const _searchWorkPlan = (data,callback) =>{
    doRequest(toPost,"workPlan/searchWorkPlan",data,callback)
}
export const _ImportWaterBillExcel = (data,callback) => {
    formRequest(toPost,"excelHandler/excelHandler",data,callback)
}
export const _searchWaterBill = (data,callback) =>{
    doRequest(toPost,"waterBill/searchWaterBill",data,callback)
}
export const _updateWorkCalenderByMouse = (date,worker) => {
    alert(date)
    console.log("==================================",date,worker)
}

export const _saveMonthPlanText = (date,text) => {
    alert(date)
    console.log("==================================",date,text)
}