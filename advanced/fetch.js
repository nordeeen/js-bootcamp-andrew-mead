/*
fetch() = sebuah method pada API Javascript untuk mengambil resources dari jaringan, dan mengembalikan promise
yang selesai (fullfilled) ketika ada response yang tersedia.

fetch(resources, init); 

resources :
1. URL (alamat dari sumber yang kita ambil)
2. Request Object (representasi permintaan sumber)

init(optional) = konfigurasi tambahan pada sebuah request berbentuk object. 
init : 
1. method       6. referrer 
2. headers      7. referrerPolicy
3. body         8. integrity
4. mode         9. keepalive
5. cache        10. signal

response = hasil dari fetch yang berupa promise.
response (property) :
1. headers      5. statusText
2. ok           6. type
3. redirected   7. url
4. status       8. body

response (method) :
1. clone()      5. formData()
2. error()      6. json()
3. redirect()   7. text()
4. blob()

*/
