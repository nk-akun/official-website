/*
    http 配置
*/
'use strict'

import axios from 'axios'
import { Loading, Message } from 'element-ui'

axios.defaults.baseURL = "http://120.79.76.250/api/"

//axios.defaults.baseURL = "http://192.168.1.13/api/"

//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//设置超时时间
axios.defaults.timeout = 40000

// 指定允许其他域名访问    

//http 拦截器
var loadinginstace

axios.interceptors.request.use(config => {
    // element ui Loading方法
    loadinginstace = Loading.service({ fullscreen: true })

    //axios.defaults.headers.common['Authorization'] = localStorage.getItem('Ticket')
    return config
}, error => {
    loadinginstace.close()
    Message.error({
        message: '加载超时'
    })
    return Promise.reject(error)
})

// http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
    loadinginstace.close()
    return data
}, error => {
    loadinginstace.close()
    Message.error({
        message: '加载失败'
    })
    return Promise.reject(error)
})

export default axios