//  4. IPv4 Address Validator Validate a string in format x.x.x.x where x is 0–255. Each octet must be a number, no leading zeros (except single 0).

function ipValidator(ip){
    let octets = ip.split('.')
    // return octets;
    for (let octet of octets){
        if(octet.length<0 || octet[0]<1) return false;
        if(octet< '0' || octet > '255') return false;
    }
    return true;
}
console.log(ipValidator('192.168.8.01'))