var numUniqueEmails = function (emails) {
  let map = new Map();
  for (let i = 0; i < emails.length; i++) {
    let key = "";
    let email = emails[i];
    let localName = email.split("@")[0];
    let domainName = email.split("@")[1];
    for (let j = 0; j < localName.length; j++) {
      if (localName[j] == ".") {
        continue;
      }
      if (localName[j] == "+") {
        break;
      }
      key = key + localName[j];
    }
    key = key + "@" + domainName;
    map.set(key, 1);
    console.log(map, key, email);
  }

  return Array.from(map.keys()).length;
};
let emails = [
  "test.email+alex@leetcode.com",
  "test.e.mail+bob.cathy@leetcode.com",
  "testemail+david@lee.tcode.com",
];
let res = numUniqueEmails(emails);
console.log(res);
