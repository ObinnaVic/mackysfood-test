const categories = [
  {
    img: "https://res.cloudinary.com/dprw6oeba/image/upload/c_scale,f_avif,q_auto:eco,w_220/v1683987869/cookies_urvffa.avif",
    name: "Cookies",
    category: "snacks",
    id: 118,
    features: [
      {
        size: "Small",
        price: 50,
        id: 49,
        amount: 1,
      },
      {
        size: "Medium",
        price: 150,
        id: 50,
        amount: 1,
      },
      {
        size: "Large",
        price: 200,
        id: 51,
        amount: 1,
      },
    ],
  },
  {
    img: "https://res.cloudinary.com/dprw6oeba/image/upload/c_scale,f_avif,q_auto:eco,w_253/v1683987945/biscuites_apjuoj.avif",
    name: "Buscuites",
    category: "snacks",
    amount: 0,
    id: 119,
    features: [
      {
        size: "Small",
        price: 50,
        id: 52,
        amount: 1,
      },
      {
        size: "Medium",
        price: 150,
        id: 53,
        amount: 1,
      },
      {
        size: "Large",
        price: 200,
        id: 54,
        amount: 1,
      },
    ],
  },
  {
    img: "https://res.cloudinary.com/dprw6oeba/image/upload/c_scale,f_avif,q_auto:eco,w_275/v1683930163/pizza_fqxsjk.avif",
    name: "Cheese",
    category: "pizza",
    amount: 0,
    id: 115,
    features: [
      {
        size: "Small",
        price: 350,
        id: 40,
        amount: 1,
      },
      {
        size: "Medium",
        price: 650,
        id: 41,
        amount: 1,
      },
      {
        size: "Large",
        price: 1000,
        id: 42,
        amount: 1,
      },
    ],
  },
  {
    img: "https://res.cloudinary.com/dprw6oeba/image/upload/c_scale,f_avif,q_auto:eco,w_285/v1683987505/vegetable_yeliim.avif",
    name: "Vege",
    category: "pizza",
    amount: 0,
    id: 116,
    features: [
      {
        size: "Small",
        price: 300,
        id: 43,
        amount: 1,
      },
      {
        size: "Medium",
        price: 600,
        id: 44,
        amount: 1,
      },
      {
        size: "Large",
        price: 950,
        id: 45,
        amount: 1,
      },
    ],
  },
  {
    img: "https://res.cloudinary.com/dprw6oeba/image/upload/c_scale,f_avif,q_auto:eco,w_296/v1683986779/whiteYam_zgisia.avif",
    name: "Yam and Egg",
    category: "yam",
    amount: 0,
    id: 101,
    features: [
      {
        size: "Small",
        price: 150,
        id: 1,
        amount: 1,
      },
      {
        size: "Medium",
        price: 250,
        id: 2,
        amount: 1,
      },
      {
        size: "Large",
        price: 400,
        id: 3,
        amount: 1,
      },
    ],
  },
  {
    img: "https://res.cloudinary.com/dprw6oeba/image/upload/c_scale,f_avif,q_auto:eco,w_270/v1683986852/porridge_utgygn.avif",
    name: "Porridge",
    category: "yam",
    amount: 0,
    id: 102,
    features: [
      {
        size: "Small",
        price: 100,
        id: 4,
        amount: 1,
      },
      {
        size: "Medium",
        price: 200,
        id: 5,
        amount: 1,
      },
      {
        size: "Large",
        price: 300,
        id: 6,
        amount: 1,
      },
    ],
  },
  {
    img: "https://res.cloudinary.com/dprw6oeba/image/upload/c_scale,f_avif,q_auto:eco,w_270/v1683985484/white_ipzzhf.avif",
    name: "White Spag",
    category: "spag",
    amount: 0,
    id: 103,
    features: [
      {
        size: "Small",
        price: 250,
        id: 7,
        amount: 1,
      },
      {
        size: "Medium",
        price: 350,
        id: 8,
        amount: 1,
      },
      {
        size: "Large",
        price: 400,
        id: 9,
        amount: 1,
      },
    ],
  },
  {
    img: "https://res.cloudinary.com/dprw6oeba/image/upload/c_scale,f_avif,q_auto:eco,w_270/v1683985431/jollof_uf0way.avif",
    name: "Jollof Spag",
    category: "spag",
    amount: 0,
    id: 104,
    features: [
      {
        size: "Small",
        price: 200,
        id: 10,
        amount: 1,
      },
      {
        size: "Medium",
        price: 300,
        id: 11,
        amount: 1,
      },
      {
        size: "Large",
        price: 450,
        id: 12,
        amount: 1,
      },
    ],
  },
  {
    img: "https://res.cloudinary.com/dprw6oeba/image/upload/c_scale,f_avif,q_auto:eco,w_270/v1683984678/white_jpwjrd.avif",
    name: "White Rice",
    category: "rice",
    amount: 0,
    id: 112,
    features: [
      {
        size: "Small",
        price: 250,
        id: 31,
        amount: 1,
      },
      {
        size: "Medium",
        price: 350,
        id: 32,
        amount: 1,
      },
      {
        size: "Large",
        price: 400,
        id: 33,
        amount: 1,
      },
    ],
  },
  {
    img: "https://res.cloudinary.com/dprw6oeba/image/upload/c_scale,f_avif,q_auto:eco,w_270/v1683984990/jellof_kdorfm.avif",
    name: "Jollof Rice",
    category: "rice",
    amount: 0,
    id: 113,
    features: [
      {
        size: "Small",
        price: 200,
        id: 34,
        amount: 1,
      },
      {
        size: "Medium",
        price: 300,
        id: 35,
        amount: 1,
      },
      {
        size: "Large",
        price: 400,
        id: 36,
        amount: 1,
      },
    ],
  },
  {
    img: "https://res.cloudinary.com/dprw6oeba/image/upload/c_scale,f_avif,q_auto:eco,w_270/v1683984946/fried_eqwwnj.avif",
    name: "Fried Rice",
    category: "rice",
    amount: 0,
    id: 114,
    features: [
      {
        size: "Small",
        price: 200,
        id: 37,
        amount: 1,
      },
      {
        size: "Medium",
        price: 300,
        id: 38,
        amount: 1,
      },
      {
        size: "Large",
        price: 450,
        id: 39,
        amount: 1,
      },
    ],
  },
  {
    img: "https://res.cloudinary.com/dprw6oeba/image/upload/c_scale,f_avif,q_auto:eco,w_270/v1683985699/fried_fe1q9t.avif",
    name: "Fried Chicken",
    category: "chicken",
    amount: 0,
    id: 105,
    features: [
      {
        size: "Small",
        price: 200,
        id: 13,
        amount: 1,
      },
      {
        size: "Medium",
        price: 450,
        id: 14,
        amount: 1,
      },
      {
        size: "Large",
        price: 600,
        id: 15,
        amount: 1,
      },
    ],
  },
  {
    img: "https://res.cloudinary.com/dprw6oeba/image/upload/c_scale,f_avif,q_auto:eco,w_270/v1683986066/egusi_dwgdbn.avif",
    name: "Egusi",
    category: "soup",
    amount: 0,
    id: 106,
    features: [
      {
        size: "Small",
        price: 150,
        id: 16,
        amount: 1,
      },
      {
        size: "Medium",
        price: 250,
        id: 17,
        amount: 1,
      },
      {
        size: "Large",
        price: 300,
        id: 18,
        amount: 1,
      },
    ],
  },
  {
    img: "https://res.cloudinary.com/dprw6oeba/image/upload/c_scale,f_avif,q_auto:eco,w_270/v1683986120/okro_krtykk.avif",
    name: "Okro",
    category: "soup",
    amount: 0,
    id: 108,
    features: [
      {
        size: "Small",
        price: 150,
        id: 19,
        amount: 1,
      },
      {
        size: "Medium",
        price: 200,
        id: 20,
        amount: 1,
      },
      {
        size: "Large",
        price: 350,
        id: 21,
        amount: 1,
      },
    ],
  },
  {
    img: "https://res.cloudinary.com/dprw6oeba/image/upload/c_scale,f_avif,q_auto:eco,w_270/v1683986160/Ewedu_meujk1.avif",
    name: "Ewedu",
    category: "soup",
    amount: 0,
    id: 109,
    features: [
      {
        size: "Small",
        price: 200,
        id: 22,
        amount: 1,
      },
      {
        size: "Medium",
        price: 270,
        id: 23,
        amount: 1,
      },
      {
        size: "Large",
        price: 400,
        id: 24,
        amount: 1,
      },
    ],
  },
  {
    img: "https://res.cloudinary.com/dprw6oeba/image/upload/f_avif,q_auto:eco/v1683931193/eba_qspmlz.avif",
    name: "Yellow Ega",
    category: "eba",
    amount: 0,
    id: 110,
    features: [
      {
        size: "Small",
        price: 50,
        id: 25,
        amount: 1,
      },
      {
        size: "Medium",
        price: 150,
        id: 26,
        amount: 1,
      },
      {
        size: "Large",
        price: 200,
        id: 27,
        amount: 1,
      },
    ],
  },
  {
    img: "https://res.cloudinary.com/dprw6oeba/image/upload/f_avif,q_auto:eco/v1683987138/white_eba_tw57zi.avif",
    name: "White Ega",
    category: "eba",
    amount: 0,
    id: 111,
    features: [
      {
        size: "Small",
        price: 70,
        id: 28,
        amount: 1,
      },
      {
        size: "Medium",
        price: 100,
        id: 29,
        amount: 1,
      },
      {
        size: "Large",
        price: 200,
        id: 30,
        amount: 1,
      },
    ],
  },
  {
    img: "https://res.cloudinary.com/dprw6oeba/image/upload/c_scale,f_avif,q_auto:eco,w_270/v1683987670/fried_turkey_codumh.avif",
    name: "Fried Turkey",
    category: "turkey",
    amount: 0,
    id: 117,
    features: [
      {
        size: "Small",
        price: 250,
        id: 46,
        amount: 1,
      },
      {
        size: "Medium",
        price: 350,
        id: 47,
        amount: 1,
      },
      {
        size: "Large",
        price: 400,
        id: 48,
        amount: 1,
      },
    ],
  },
];