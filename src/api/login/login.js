import {get ,post} from '../../utils/request'

//获取验证码
export function getCode(phone) {
  const url =  '/v1/login/check/phone/' + phone;
  return  get({
    url : url
  })
}

//验证验证码
export function putCode(phone, code) {
  const url = '/v1/login/check/phone/'+ phone +'/code/'+ code;
  return post({
    url : url,
    method : "POST"
  })
}

