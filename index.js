const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.urlencoded( {extended: true} ));
app.set('view engine', 'ejs');



// "/" anasayfayı temsil eder.
app.get('/' , function(req, res){
    res.sendFile(__dirname + "/index.html");
});
app.get("/iletisim" , function(req, res)   {
    res.sendFile( __dirname + "/iletisim.html");
});
app.get("/giris" , function(req, res){
    res.sendFile(__dirname + "/giris.html");
});
app.get("/profil" , function(req, res){
    res.send("Şuanda get yöntemini kullanıyorsun.");
});
app.post("/profil" , function(req, res){
    // kullanıcı adı "hamza" şifre 1234 ise hoşgeldin yazalım, aksi durumda bilgiler hatalı..
    if(req.body.kullaniciadi == "hamza" && req.body.sifre == "1234"){
      res.send("Hoşgeldin : " + req.body.kullaniciadi);
    }else{
      res.send("Bilgiler hatalı.");
    }
});
app.get("/yazi", function(req , res){
     // gelen isteklere göre, o sayfanın içeriğini değiştireceğiz.
     // ejs = embedded javascript
     var gonderilecekler = {
       baslik : 'Almanya Hükümetinden Açıklama' ,
       yorumsayisi : '30' ,
       yazar : 'Recep Bey'
     };
     res.render('yazi' , gonderilecekler  );
});


app.get("/urun", (req,res)=>{
     var gosterilecekler = {
    baslik: 'elma',
    yorumsayisi:'55',
    uretici: 'amasya'
  };
  res.render('urun' , gosterilecekler  );
});


// kitap sayfasi için bir tane istek oluşturun. kitap sayfasına bağlanmak isteyn kişi için
// kitap.ejs dosyasını rnder edin ve kitap sayfasında kitap ismi, kitap yazarı, kitap açıklaması ve fiyatı olsun
app.get('/kitap', (req, res)=>{

        var kitapicerik = {
          kitapIsmi:'Eğitimde Sabirli Olma Sanati',
          kitapYazari:'Anonim',
          kitapAciklamasi:'Empati en önemli unsur, kendimizin bir yeni konuyu ilk defa ögrenmeye calistigi zamani hatirlayin ve ögrenmeye calisan insanlarin....... ve Ogrenenler de..... ',
          kitapFiyati:'İnsan Kazanma'
        };

        res.render('kitap' , kitapicerik);
});



app.get("*" , function(req, res){
    res.send("Hataaa ! Yanlış sayfadasınız, lütfen tarayıcınız ayarlarıyla oynayınız.");
});

app.listen(8000);
