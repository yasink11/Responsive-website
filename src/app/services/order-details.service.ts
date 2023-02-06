import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  foodDetails = [
    {
      id:1,
      foodName:"Peynir Izgara Sandviç",
      foodDetails:"Tavada kızartılmış peynir.",
      foodPrice:200,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id:2,
      foodName:"Vegan Pizza",
      foodDetails:"Soğan / Yeşil Kırmızı Biber / Mantar / siyah zeytin, tatlı mısır, Üstüne Peynir serpilmiş Kırmızı Biber",
      foodPrice:369,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id:3,
      foodName:"Peynir Burger",
      foodDetails:"Mozarella peynir",
      foodPrice:149,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id:4,
      foodName:"Vegan Dürüm",
      foodDetails:"Hint baharatlarıyla tatlandırılmış, sade bir patates püresi ve sebze karışımı.",
      foodPrice:140,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
    {
      id:5,
      foodName:"Çikolatalı kek",
      foodDetails:"(Yumurtasız) Sevgiyle hazırlanmış ve üzerine ultra zengin çikolata deneyimi sağlayan acı tatlı çikolata serpilmiş çökmekte olan çikolatalı kekin tadını çıkarın.",
      foodPrice:105,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Dondurma",
      foodDetails:"Oreo Cheesecake Dondurma",
      foodPrice:219,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    }
  ]


  

}
