require ('dotenv').config()
const db = require('./config/database')
// const City = require('./models/City')
// const User = require('./models/User')
const Activity = require('./models/Activity')
// User.create({
//     name: "Elba",
//     lastName: "Laso",
//     country: "Alagasia",
//     photo: "fotolinda.png",
//     mail: "lolito@juancito.jas",
//     password:"chau123"
// })

// ACTIVIDADES DE Tokyo en  Walk around the city
// Activity.create({
//     name: "Tokyo City light Tour",
//     photo: "https://media.tacdn.com/media/attractions-splice-spp-360x240/09/ae/4a/17.jpg",
//     itinerary: "6316673e981c8cdc211716be"
// })
// Activity.create({
//     name: "Tsukiji Food Tour",
//     photo: "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/6f/5d/53.jpg",
//     itinerary: "6316673e981c8cdc211716be"
// })
// Activity.create({
//     name: "Tournament Sumo",
//     photo: "https://media.tacdn.com/media/attractions-splice-spp-360x240/09/e9/2e/57.jpg",
//     itinerary: "6316673e981c8cdc211716be"
// })

 // Let's climb the fuji - tokyo
// Activity.create({
//     name: "Mountaineering",
//     photo: "https://www.explore-share.com/_next/image/?url=https%3A%2F%2Fwww.datocms-assets.com%2F55179%2F1650902854-mount-fuji-1-day-off-season-climbing-trip.jpg%3Ffit%3Dclip%26h%3D500%26w%3D500&w=1920&q=50",
//     itinerary: "63166032d5fc4c0bc157c398"
// })
// Activity.create({
//     name: "Discover Mount Fuji ",
//     photo: "https://www.datocms-assets.com/55179/1647360141-2-torii-gate-to-the-heaven.jpg?fit=clip&fm=webp&h=900&w=1200",
//     itinerary: "63166032d5fc4c0bc157c398"
// })
// Activity.create({
//     name: "Join Yukio",
//     photo: "https://www.datocms-assets.com/55179/1647368781-dscf1253a.jpg?fit=clip&fm=webp&h=900&w=1200",
//     itinerary: "63166032d5fc4c0bc157c398"
// })

// tokyo Visit ancient monuments
// Activity.create({
//     name: "Central Railway",
//     photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/67/ba/cd/img-20190505-184931-largejpg.jpg?w=500&h=-1&s=1",
//     itinerary: "6316673f981c8cdc211716bf"
// })
// Activity.create({
//     name: "Nezu Shrine ",
//     photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/b7/f9/9d/caption.jpg?w=500&h=400&s=1",
//     itinerary: "6316673f981c8cdc211716bf"
// })
// Activity.create({
//     name: "Yasukuni Shrine",
//     photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/81/cd/c1/caption.jpg?w=500&h=-1&s=1",
//     itinerary: "6316673f981c8cdc211716bf"
// })


// A walk in the Recoleta graveyard
// Activity.create({
//     name: "Blessed Sacrament",
//     photo: "https://www.buenosairesfreewalks.com/wp-content/uploads/2021/06/Santisimo-Sacramento.png",
//     itinerary: "6316673f981c8cdc211716c0"
// })
// Activity.create({
//     name: "Monumental Tower ",
//     photo: "https://www.buenosairesfreewalks.com/wp-content/uploads/2021/06/Torre-Monumental.png",
//     itinerary: "6316673f981c8cdc211716c0"
// })
// Activity.create({
//     name: "Pilar Church",
//     photo: "https://www.buenosairesfreewalks.com/wp-content/uploads/2021/06/Iglesia-del-Pilar.png",
//     itinerary: "6316673f981c8cdc211716c0"
// })

// Chill in El Rosedal

// Activity.create({
//     name: "Oasis of Roses",
//     photo: "https://9968c6ef49dc043599a5-e151928c3d69a5a4a2d07a8bf3efa90a.ssl.cf2.rackcdn.com/387998.jpg",
//     itinerary: "6316673f981c8cdc211716c1"
// })
// Activity.create({
//     name: "The Pergola",
//     photo: "https://www.buenosaires123.com.ar/imagenes/pergola-rosedal.jpg",
//     itinerary: "6316673f981c8cdc211716c1"
// })
// Activity.create({
//     name: "Poets Walk",
//     photo: "https://www.buenosaires123.com.ar/imagenes/paseo-poetas-rosedal.jpg",
//     itinerary: "6316673f981c8cdc211716c1"
// })

// Touring the walk of fame
// Activity.create({
//     name: "Hall of Fame",
//     photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/60/7d.jpg",
//     itinerary: "6316673f981c8cdc211716c4"
// })
// Activity.create({
//     name: "Bus Circuit",
//     photo: "https://media.tacdn.com/media/attractions-splice-spp-360x240/09/f6/0a/f8.jpg",
//     itinerary: "6316673f981c8cdc211716c4"
// })
// Activity.create({
//     name: "Full Day Excursion",
//     photo: "https://media.tacdn.com/media/attractions-splice-spp-360x240/09/9d/00/3e.jpg",
//     itinerary: "6316673f981c8cdc211716c4"
// })


 // Visit the most famous sets
//  Activity.create({
//     name: "Universal Studios",
//     photo: "https://www.viaggi-usa.it/wp-content/uploads/2014/03/universal-studios-los-angeles.jpg",
//     itinerary: "6316673f981c8cdc211716c5"
// })
// Activity.create({
//     name: "Hollywood",
//     photo: "https://www.fodors.com/wp-content/uploads/2019/09/05_LAMoviePlaces__HollywoodSign_shutterstock_114467512.jpg",
//     itinerary: "6316673f981c8cdc211716c5"
// })
// Activity.create({
//     name: "Beverly Hills",
//     photo: "https://www.planetware.com/wpimages/2022/04/california-los-angeles-top-rated-attractions-beverly-hills2.jpg",
//     itinerary: "6316673f981c8cdc211716c5"
// })

// To the top of the Eiffel Tower!
// Activity.create({
//     name: "Look at the World",
//     photo: "https://worldinparis.com/wp-content/uploads/2020/12/View-from-Eiffel-Tower.jpg",
//     itinerary: "6316673f981c8cdc211716c8"
// })
// Activity.create({
//     name: "rise to the top",
//     photo: "https://images.prismic.io/mystique/176165785806ad63e2877e071f24a72e3ae8dcb2_24b16aac-0dbd-4134-b8d4-ca795d7dd98e-6402-paris-eiffel-tower-summit-priority-access-tickets-with-host-05.jpg?auto=compress,format",
//     itinerary: "6316673f981c8cdc211716c8"
// })
// Activity.create({
//     name: "Vrtical Race",
//     photo: "https://www.toureiffel.paris/sites/default/files/styles/1200x675/public/events/2019-03/Verticale2019_1200px.jpg?itok=LKEEWfJZ",
//     itinerary: "6316673f981c8cdc211716c8"
// })

// Romantic dinner at the park
// Activity.create({
//     name: "Picnic Decoration",
//     photo: "https://i.pinimg.com/736x/ec/0e/e1/ec0ee1c9275e79f8e9cc9b16bc25a43e.jpg",
//     itinerary: "6316673f981c8cdc211716c9"
// })
// Activity.create({
//     name: "Romantic Nature",
//     photo: "https://i.pinimg.com/originals/c4/35/d2/c435d2653d52fc8f33584e4cdbfbe2c6.jpg",
//     itinerary: "6316673f981c8cdc211716c9"
// })
// Activity.create({
//     name: "Romantic Dinner Under the Oak",
//     photo: "https://thumbs.dreamstime.com/z/decorated-table-romantic-dinner-under-oak-autumn-park-45141533.jpg",
//     itinerary: "6316673f981c8cdc211716c9"
// })

// Casinos tour
// Activity.create({
//     name: "Sam Boyds Fremont",
//     photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtSOgMxtXKhk_kIFiB9iPe3i8XxFy55AFc_AzOsD9j9vscqyV5WrulKeT5Jqmqj1iBUZI&usqp=CAU",
//     itinerary: "6316673f981c8cdc211716cb"
// })
// Activity.create({
//     name: "Fabulous Las Vegas",
//     photo: "https://k7f6k2y7.stackpathcdn.com/latinoamerica/wp-content/uploads/sites/2/2021/03/Los-5-mejores-casinos-de-Las-Vegas-900x600.jpg",
//     itinerary: "6316673f981c8cdc211716cb"
// })
// Activity.create({
//     name: "Treasure island",
//     photo: "https://c8.alamy.com/zoomses/9/d74b4126dba2443dbec4d46cc7bb21c9/kb84e4.jpg",
//     itinerary: "6316673f981c8cdc211716cb"
// })


// Lunch at the beach
// Activity.create({
//     name: "Lunch in Copacabana",
//     photo: "https://c8.alamy.com/comp/S2N57M/lunch-at-a-beach-caf-in-copacabana-rio-de-janeiro-S2N57M.jpg",
//     itinerary: "6316673f981c8cdc211716ca"
// })
// Activity.create({
//     name: "Can't Miss Foods",
//     photo: "https://strawberrytours.com/wp-content/uploads/2019/10/list-18.jpg",
//     itinerary: "6316673f981c8cdc211716ca"
// })
// Activity.create({
//     name: "Lunch Table in Rio",
//     photo: "https://thumbs.dreamstime.com/z/lunch-table-rio-de-janeiro-served-beach-60161750.jpg",
//     itinerary: "6316673f981c8cdc211716ca"
// })

// Visit the Coliseum

// Activity.create({
//     name: "Photo to the Colosseum",
//     photo: "https://sn3.scholastic.com/content/dam/classroom-magazines/sn3/issues/2021-22/120621/secrets-of-an-ancient-arena/SN3-09-120621-P04-Colosseum-PO-5.jpg",
//     itinerary: "6316673f981c8cdc211716cc"
// })
// Activity.create({
//     name: "The Hypogeum",
//     photo: "https://www.thecolosseum.org/wp-content/uploads/2017/09/colosseum-inside-optimized-970x646.jpg",
//     itinerary: "6316673f981c8cdc211716cc"
// })
// Activity.create({
//     name: "Arena",
//     photo: "https://www.kolaboo.com/blog/wp-content/uploads/2020/01/partes-coliseo-romano-arena.jpg",
//     itinerary: "6316673f981c8cdc211716cc"
// })

// Picnic in the Palermo Woods

// Activity.create({
//     name: "Rose Park",
//     photo: "https://thumbs.dreamstime.com/b/zero-waste-picnic-al-fresco-vintage-picnic-basket-hamper-baguette-lemonade-outdoors-grass-cheese-vintage-picnic-217301473.jpg",
//     itinerary: "6316673f981c8cdc211716c2"
// })
// Activity.create({
//     name: "Park February 3",
//     photo: "https://c8.alamy.com/comp/KYM5DG/buenos-aires-argentinabosques-de-palermoparque-3-de-febreropublic-KYM5DG.jpg",
//     itinerary: "6316673f981c8cdc211716c2"
// })
// Activity.create({
//     name: "Japanes Gardens",
//     photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Jard%C3%ADn_Japon%C3%A9s_de_Buenos_Aires_01.jpg/800px-Jard%C3%ADn_Japon%C3%A9s_de_Buenos_Aires_01.jpg?20211115025037",
//     itinerary: "6316673f981c8cdc211716c2"
// })

//A day in the beach
// Activity.create({
//     name: "Laguna Beach",
//     photo: "https://www.roadaffair.com/wp-content/uploads/2020/11/walkway-view-pacific-ocean-heisler-park-california-usa-shutterstock_255981958.jpg",
//     itinerary: "6316673f981c8cdc211716c3"
// })
// Activity.create({
//     name: "Balboa Island",
//     photo: "https://www.roadaffair.com/wp-content/uploads/2020/11/sun-shining-over-balboa-island-california-usa-shutterstock_533718241.jpg",
//     itinerary: "6316673f981c8cdc211716c3"
// })
// Activity.create({
//     name: "Santa Monica",
//     photo: "https://media-cdn.tripadvisor.com/media/photo-s/19/78/05/4d/santa-monica-beach-los.jpg",
//     itinerary: "6316673f981c8cdc211716c3"
// })

// Tour to The Big Ben
// Activity.create({
//     name: "Transportation",
//     photo: "https://ak-d.tripcdn.com/images/1i63z120008xxm7hmAC18.jpg?proc=source%2Ftrip",
//     itinerary: "6316688ad9f86a8453160869"
// })
// Activity.create({
//     name: "The Big Ben Clock",
//     photo: "https://media.tuescapada.eu/xtras/2016/03/24201533/big-ben-londres-interior-clock-dials_tuescapada-eu.jpg?auto=compress&crop=faces%2Cedges&fit=scale&fm=pjpg&h=495&q=30&w=990&s=e0bca64141bbe8874dcf9cdc04b1e3a3",
//     itinerary: "6316688ad9f86a8453160869"
// })
// Activity.create({
//     name: "Queen Elisabeth Tower",
//     photo: "https://www.lavanguardia.com/files/article_main_microformat/uploads/2019/02/19/5fa51a8a521bf.jpeg",
//     itinerary: "6316688ad9f86a8453160869"
// })

// Let's visit the palace
// Activity.create({
//     name: "Buckingham",
//     photo: "https://cdn2.civitatis.com/reino-unido/londres/galeria/buckingham-palace-gate.jpg",
//     itinerary: "6316688ad9f86a845316086a"
// })
// Activity.create({
//     name: "Alexandra",
//     photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0sD61jZNrtj_K0Omo4jDauJJk6e0DQ8MESdaYPYnHjFfk_5KtZYMEERhamUP22MTtXxI&usqp=CAU",
//     itinerary: "6316688ad9f86a845316086a"
// })
// Activity.create({
//     name: "Kensington",
//     photo: "https://www.melbtravel.com/wp-content/uploads/2019/01/Out-the-front-of-the-palace.jpeg",
//     itinerary: "6316688ad9f86a845316086a"
// })
