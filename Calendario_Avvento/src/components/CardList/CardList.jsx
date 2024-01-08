import "./index.css";
import Card from "../Card/Card";

const cardData = [
  {
    id: 1,
    urlFront: "https://02dd5f64038d9e2d7aae-56d86e996af26366aec8b255ed6f7c7b.ssl.cf3.rackcdn.com/img-3adyJwCf-large.jpg?w=400",
    dayNumber: "Day 1",
    altImg: "Img 1",
    urlBack: "https://hips.hearstapps.com/hmg-prod/images/christmas-bible-verses-manger-under-a-tree-1671636722.jpeg?crop=1.00xw:0.669xh;0,0.310xh&resize=1200:*",
  },
  {
    id: 2,
    urlFront: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUFU7QTSagkukNy2xAIB4xoXvzCgz-635nYSz_sAVeJDQuqtweOI_8HIN4_g98h3MiCfM&usqp=CAU",
    dayNumber: "Day 2",
    altImg: "Img 2",
    urlBack: "https://hips.hearstapps.com/hmg-prod/images/christmas-bible-verses-manger-under-a-tree-1671636722.jpeg?crop=1.00xw:0.669xh;0,0.310xh&resize=1200:*",
  },
  {
    id: 3,
    urlFront: "https://ih1.redbubble.net/image.2641710486.9263/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    dayNumber: "Day 3",
    altImg: "Img 3",
    urlBack: "https://hips.hearstapps.com/hmg-prod/images/christmas-bible-verses-manger-under-a-tree-1671636722.jpeg?crop=1.00xw:0.669xh;0,0.310xh&resize=1200:*",
  },
  {
    id: 4,
    urlFront: "https://www.bajajallianz.com/blog/wp-content/uploads/2018/12/lovely-christmas-tree-with-gift-boxes_23-2147998301.jpg",
    dayNumber: "Day 4",
    altImg: "Img 4",
    urlBack: "https://hips.hearstapps.com/hmg-prod/images/christmas-bible-verses-manger-under-a-tree-1671636722.jpeg?crop=1.00xw:0.669xh;0,0.310xh&resize=1200:*",
  },
  {
    id: 5,
    urlFront: "https://vectorseek.com/wp-content/uploads/2022/12/Marry-Christmas-tree-decoration-01-1-scaled.jpg",
    dayNumber: "Day 5",
    altImg: "Img 5",
    urlBack: "https://hips.hearstapps.com/hmg-prod/images/christmas-bible-verses-manger-under-a-tree-1671636722.jpeg?crop=1.00xw:0.669xh;0,0.310xh&resize=1200:*",
  },
  {
    id: 6,
    urlFront: "https://i.pinimg.com/originals/22/43/6f/22436f17ae97d6ee1bcfa4147571f2db.jpg",
    dayNumber: "Day 6",
    altImg: "Img 6",
    urlBack: "https://hips.hearstapps.com/hmg-prod/images/christmas-bible-verses-manger-under-a-tree-1671636722.jpeg?crop=1.00xw:0.669xh;0,0.310xh&resize=1200:*",
  },
  {
    id: 7,
    urlFront: "https://www.shutterstock.com/shutterstock/photos/1229493499/display_1500/stock-vector-merry-christmas-card-cartoon-christmas-tree-isolated-on-white-background-winter-holidays-1229493499.jpg",
    dayNumber: "Day 7",
    altImg: "Img 7",
    urlBack: "https://hips.hearstapps.com/hmg-prod/images/christmas-bible-verses-manger-under-a-tree-1671636722.jpeg?crop=1.00xw:0.669xh;0,0.310xh&resize=1200:*",
  },
  {
    id: 8,
    urlFront: "https://as2.ftcdn.net/v2/jpg/01/83/26/55/1000_F_183265516_AoIOvt6NN6G70q3bjM3XVIgI6LG7CYbC.jpg",
    dayNumber: "Day 8",
    altImg: "Img 8",
    urlBack: "https://hips.hearstapps.com/hmg-prod/images/christmas-bible-verses-manger-under-a-tree-1671636722.jpeg?crop=1.00xw:0.669xh;0,0.310xh&resize=1200:*",
  },
  {
    id: 9,
    urlFront: "https://i.pinimg.com/474x/7b/7c/c3/7b7cc3707af4cbb2ef274fdc37f36079.jpg",
    dayNumber: "Day 9",
    altImg: "Img 9",
    urlBack: "https://hips.hearstapps.com/hmg-prod/images/christmas-bible-verses-manger-under-a-tree-1671636722.jpeg?crop=1.00xw:0.669xh;0,0.310xh&resize=1200:*",
  },
  {
    id: 10,
    urlFront: "https://im.indiatimes.in/content/2022/Dec/merry-christmas-2022-wishes-photos4_63a6b6ee568a8.png",
    dayNumber: "Day 10",
    altImg: "Img 10",
    urlBack: "https://hips.hearstapps.com/hmg-prod/images/christmas-bible-verses-manger-under-a-tree-1671636722.jpeg?crop=1.00xw:0.669xh;0,0.310xh&resize=1200:*",
  },
  {
    id: 11,
    urlFront: "https://i.pinimg.com/474x/63/cf/41/63cf41c4468e691152055d71d5d47eff.jpg",
    dayNumber: "Day 11",
    altImg: "Img 11",
    urlBack: "https://hips.hearstapps.com/hmg-prod/images/christmas-bible-verses-manger-under-a-tree-1671636722.jpeg?crop=1.00xw:0.669xh;0,0.310xh&resize=1200:*",
  },
  {
    id: 12,
    urlFront: "https://i.pinimg.com/originals/df/61/2c/df612cc1afd290b6a0a6ef252d585d99.png",
    dayNumber: "Day 12",
    altImg: "Img 12",
    urlBack: "https://hips.hearstapps.com/hmg-prod/images/christmas-bible-verses-manger-under-a-tree-1671636722.jpeg?crop=1.00xw:0.669xh;0,0.310xh&resize=1200:*",
  },
  {
    id: 13,
    urlFront: "https://02dd5f64038d9e2d7aae-56d86e996af26366aec8b255ed6f7c7b.ssl.cf3.rackcdn.com/img-pI01SWgV-large.jpg",
    dayNumber: "Day 13",
    altImg: "Img 13",
    urlBack: "https://hips.hearstapps.com/hmg-prod/images/christmas-bible-verses-manger-under-a-tree-1671636722.jpeg?crop=1.00xw:0.669xh;0,0.310xh&resize=1200:*",
  },
  {
    id: 14,
    urlFront: "https://images.thortful.com/cdn-cgi/image/width=600,format=auto,quality=90/card/6325e514dd725d0001e7b5b6/6325e514dd725d0001e7b5b6_medium.jpg?version=1",
    dayNumber: "Day 14",
    altImg: "Img 14",
    urlBack: "https://hips.hearstapps.com/hmg-prod/images/christmas-bible-verses-manger-under-a-tree-1671636722.jpeg?crop=1.00xw:0.669xh;0,0.310xh&resize=1200:*",
  },
  {
    id: 15,
    urlFront: "https://i.pinimg.com/474x/ee/8a/c2/ee8ac292cd8d589a7b9dad1ad67cd26d.jpg",
    dayNumber: "Day 15",
    altImg: "Img 15",
    urlBack: "https://hips.hearstapps.com/hmg-prod/images/christmas-bible-verses-manger-under-a-tree-1671636722.jpeg?crop=1.00xw:0.669xh;0,0.310xh&resize=1200:*",
  },
  {
    id: 16,
    urlFront: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBpScDWk-xb3mpfOFnwNNULu9Bc83qcWX1BVw3zYMalHSzHIwBD_y8sN94A2VB0Manx1Y&usqp=CAU",
    dayNumber: "Day 16",
    altImg: "Img 16",
    urlBack: "https://hips.hearstapps.com/hmg-prod/images/christmas-bible-verses-manger-under-a-tree-1671636722.jpeg?crop=1.00xw:0.669xh;0,0.310xh&resize=1200:*",
  },
  {
    id: 17,
    urlFront: "https://i.pinimg.com/564x/42/c6/a5/42c6a522f4570c63971aff2f56b5ccc9.jpg",
    dayNumber: "Day 17",
    altImg: "Img 17",
    urlBack: "https://hips.hearstapps.com/hmg-prod/images/christmas-bible-verses-manger-under-a-tree-1671636722.jpeg?crop=1.00xw:0.669xh;0,0.310xh&resize=1200:*",
  },
  {
    id: 18,
    urlFront: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMozLsaPM_o5qZ93PgNj5YuZmTnGska4xUCpKBdsBHhrBnyE8Xz3XZjdJ9MwUIAQZeYXI&usqp=CAU",
    dayNumber: "Day 18",
    altImg: "Img 18",
    urlBack: "https://hips.hearstapps.com/hmg-prod/images/christmas-bible-verses-manger-under-a-tree-1671636722.jpeg?crop=1.00xw:0.669xh;0,0.310xh&resize=1200:*",
  },
  {
    id: 19,
    urlFront: "https://i0.wp.com/vanityowl.com/wp-content/uploads/2021/12/merry-Christmas-and-Happy-New-year-wishes-free-download.png?resize=1080%2C1920&ssl=1",
    dayNumber: "Day 19",
    altImg: "Img 19",
    urlBack: "https://hips.hearstapps.com/hmg-prod/images/christmas-bible-verses-manger-under-a-tree-1671636722.jpeg?crop=1.00xw:0.669xh;0,0.310xh&resize=1200:*",
  },
  {
    id: 20,
    urlFront: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6YdCoWggwE07MGTKjK977rSeXXAKwkDvaittUZu0R3jraNSbzMiy07YC2TuwwMZz4u1c&usqp=CAU",
    dayNumber: "Day 20",
    altImg: "Img 20",
    urlBack: "https://hips.hearstapps.com/hmg-prod/images/christmas-bible-verses-manger-under-a-tree-1671636722.jpeg?crop=1.00xw:0.669xh;0,0.310xh&resize=1200:*",
  },
  {
    id: 21,
    urlFront: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqy7MAV8srOMFzEQ-8rOJbAmz_avPkPIPselBV-IeFqmV-CKYxVPg8GQuiz1M-JyxX84&usqp=CAU",
    dayNumber: "Day 21",
    altImg: "Img 21",
    urlBack: "https://hips.hearstapps.com/hmg-prod/images/christmas-bible-verses-manger-under-a-tree-1671636722.jpeg?crop=1.00xw:0.669xh;0,0.310xh&resize=1200:*",
  },
  {
    id: 22,
    urlFront: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxLKVXirCrVUToojyHlUL1QP8tsspTyvbQ6eM8_idXp7lrs0RhEro8AzmnE2rqOkdKRpI&usqp=CAU",
    dayNumber: "Day 22",
    altImg: "Img 22",
    urlBack: "https://hips.hearstapps.com/hmg-prod/images/christmas-bible-verses-manger-under-a-tree-1671636722.jpeg?crop=1.00xw:0.669xh;0,0.310xh&resize=1200:*",
  },
  {
    id: 23,
    urlFront: "https://rukminim2.flixcart.com/image/850/1000/kwxv98w0/sticker/d/h/a/small-wish-you-a-merry-christmas-and-happy-new-year-67-wd391-original-imag9g4e952yjxhf.jpeg?q=20",
    dayNumber: "Day 23",
    altImg: "Img 23",
    urlBack: "https://hips.hearstapps.com/hmg-prod/images/christmas-bible-verses-manger-under-a-tree-1671636722.jpeg?crop=1.00xw:0.669xh;0,0.310xh&resize=1200:*",
  },
  {
    id: 24,
    urlFront: "https://images.cdn.europe-west1.gcp.commercetools.com/163a392c-de12-4559-841a-25ed7bfdcebb/img-jnK-WaZ7-large.jpg",
    dayNumber: "Day 24",
    altImg: "Img 24",
    urlBack: "https://hips.hearstapps.com/hmg-prod/images/christmas-bible-verses-manger-under-a-tree-1671636722.jpeg?crop=1.00xw:0.669xh;0,0.310xh&resize=1200:*",
  },
];

const CardList = () => {
  return (
    <div className="CardList">
      {cardData.map((data) => (
        <Card
          key={data.id}
          frontImg={data.urlFront}
          dayNumber={data.dayNumber}
          alt={data.altImg}
          backImg={data.urlBack}
        />
      ))}
    </div>
  );
};

export default CardList;
