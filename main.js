var h = [
  { country: "Europe/Jersey" },
  { country: "Africa/Accra" },
  { country: "Europe/Brussels" },
  { country: "Europe/Rome" },
  { country: "Europe/Skopje" },
  { country: "Europe/Zurich" },
  { country: "Europe/Copenhagen" },
  { country: "Europe/Busingen" },
  { country: "Europe/Madrid" },
  { country: "Europe/Budapest" },
  { country: "Africa/Kigali" },
  { country: "Africa/Lubumbashi" },
  { country: "Europe/Kiev" },
  { country: "Africa/Johannesburg" },
  { country: "Indian/Antananarivo" },
  { country: "Asia/Riyadh" },
  { country: "Europe/Minsk" },
  { country: "Europe/Samara" },
  { country: "Asia/Dhaka" },
  { country: "Asia/Thimphu" },
  { country: "Asia/Qyzylorda" },
  { country: "Asia/Urumqi" },
  { country: "Asia/Pontianak" },
  { country: "Asia/Bangkok" },
  { country: "Asia/Novosibirsk" },
  { country: "Asia/Taipei" },
  { country: "Asia/Kuching" },
  { country: "Asia/Irkutsk" },
  { country: "Asia/Khandyga" },
  { country: "Asia/Yakutsk" },
  { country: "Australia/Brisbane" },
  { country: "Australia/Currie" },
  { country: "Pacific/Kwajalein" },
  { country: "Pacific/Auckland" },
  { country: "Antarctica/Palmer" },
  { country: "America/Jamaica" },
  { country: "America/Pangnirtung" },
  { country: "America/Thunder_Bay" },
  { country: "America/Whitehorse" },
  { country: "America/Tijuana" },
  { country: "America/Dawson" },
  { country: "Asia/Colombo" },
  { country: "Asia/Kolkata" },
  { country: "Asia/Rangoon" },
  { country: "America/Monterrey" },
  { country: "America/Tegucigalpa" },
  { country: "America/Costa_Rica" },
  { country: "America/Goose_Bay" }
];

var Ar = [];
for (var i = 0; i < h.length; i++) {
  Ar.push(h[i].country);
}
//console.log(Ar);

var time = [];
var DateTime;
for (var j = 0; j < Ar.length; j++) {
  DateTime = new Date().toLocaleString("en-US", {
    timeZone: Ar[j]
  });
  var a = new Date(DateTime).getTime();
  time.push({ date: a, country: h[j].country });
}

var sortObj = time.sort((a, b) => new Date(a.date) - new Date(b.date));
//console.log(sortObj);

var FixedTime = new Date(2019, 11, 31, 11, 00, 00).getTime();
//console.log('FixedTime = '+ FixedTime);

var Obj = [],
  res = 0;
for (var i = 0; i < sortObj.length; i++) {
  res = FixedTime - sortObj[i].date;
  Obj.push(res);
}
//console.log(Obj);

for (var j = 0; j < Obj.length; j++) {
  const country = sortObj[j].country;

  setTimeout(() => {
    console.log("Email has been Sent : " + country);
  }, Obj[j]);
}