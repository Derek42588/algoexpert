// https://leetcode.com/problems/defanging-an-ip-address/

function defangIpAddr(address:string): string {
  return address.split('.').join('[.]')
 
}

