import config from "@/config";
import axios from 'axios'

const request = (options) => {
    let url = config.requestUrl + options.url
    return new Promise((resolve, reject) => {
        axios.post(url,{
            method: 'post',
            data: options.data,
            header: {
                'content-type': 'application/json'
            }
        }, {
            withCredentials: true
        }).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

export default request