import request from "../../utils/request";

export function GetOrderAnalyze(mode) {
    return request.get('seller/Analyze/OrderAnalyze', {
        params: {
            mode: mode
        }
    })
        .then((res) => {

            return res.data;
        }).catch((e) => {

            return null;
        })
}
export function GetOrderChartData(mode) {
    return request.get('seller/Analyze/OrderChartData', {
        params: {
            mode: mode
        }
    })
        .then((res) => {

            return res.data;
        }).catch((e) => {

            return null;
        })
}