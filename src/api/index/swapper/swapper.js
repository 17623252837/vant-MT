import {get ,post} from '../../../utils/request'

export  function getSwapper() {
  return get({
    url : '/v1/swapper/all'
  })
}
