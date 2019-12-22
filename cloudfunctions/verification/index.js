// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: "xia-81fac9"
})


// 云函数入口函数
exports.main = async(event, context) => {
  let txt = event.inp
  const inviteRes = await cloud.openapi.security.msgSecCheck({
    content: txt
  })
  return inviteRes

}