// JavaScript for location page

// function for the iframe to display discription when the picture is clicked
function displayPicDesc(descArray, displayID, elementsName){
    var elements = document.getElementsByName(elementsName);
    for (let i = 0; i < elements.length; i++) {
        elements[i].onclick = function() {document.getElementById(displayID).innerHTML = descArray[i];};
    }
}

// create array for KyotoOsaka descriptions
var kyotoDescs = new Array();
kyotoDescs.push("<h4><strong>KIBUNE</strong></h4> Kibune is a small town developed around Kifune Shrine in a forested valley in the northern mountains of Kyoto. Kibune is well known for its traditional style of restaurants build on top of the kibune river. Flowing noodles was one of the iconic meal served by restaurants in Kibune.");
kyotoDescs.push("<h4><strong>KIFUNE SHRINE</strong></h4> According to legend, Kifune shrine is the end point where a goddess ride a boat from Osaka all the way up the river into mountains of Kyoto. It is dedicated for the god of water and rain and believed to be the protector of those at sea.");
kyotoDescs.push("<h4><strong>AMANOHASHIDATE</strong></h4> Amanohashidate is a sandbar that spans across the mouth of Miyazu Bay in the coastal region of northern Kyoto. The sandbar was translated as <q>bridge in heaven</q> by the locals as it looks like a pathway between heaven and earth. Amanohashidate is is ranked among the <q>three most scenic view</q> in Japan.");
kyotoDescs.push("<h4><strong>FUSHIMI INARI-TAISHA SHRINE</strong></h4> Undoubtly the most famost shrine in Southern kyoto. It is well known for its thousands of vermillion torri gates which line all the way up the sacred Mount Inari trails to the summit. Fox statues are all across the shrine grounds as foxes are thought to be the messenger for Inari.");
kyotoDescs.push("<h4><strong>FUSHIMI INARI-TAISHA SHRINE</strong></h4> A scenic view at the entrance of Fushimi Inari-Taisha Shrine which outlook the whole city of Kyoto");
kyotoDescs.push("<h4><strong>OSAKA CASTLE (OSAKOJO)</strong></h4> Certainly one of the famous landmark in Osaka with the most lavishly decorated exterior. Widely known as the representation of power and fortune of Hideyoshi Toyotomi. The castle is surrounded by impressive citadels, gates, turrets and moats.");

// call function for Kyoto Osaka iframe
displayPicDesc(kyotoDescs, "kyotoDescDisplay", "japan");

// create array for Sabah descriptions
var sabahDescs = new Array();
sabahDescs.push("<h2><strong>PULAU SIPADAN</strong></h2> Lying off the east coast of Borneo in Sabah Malaysia, Pulau Sipadan is well known as some of the best scuba diving spot in the world. Diving at Pulau Sipadan can be done throughout the year. The best way to travel to Pulau Sipadan is by an hour boat ride from a small town named Semporna in Sabah Malaysia. ");
sabahDescs.push("<h2><strong>PULAU SIPADAN</strong></h2> The outlook view of Pulau Sipadan from the dock outside accomodation. ");
sabahDescs.push("<h2><strong>PULAU SAPI</strong></h2> Pulau Sapi is also one of the  accessible diving and snorkeling spot in Sabah. It is the second smallest island of the Tunku Abdul Rahman Marine Park. Pulau Sapi is known for its huge diversity in corals, reefs and marine lifes. ");
sabahDescs.push("<h2><strong>PULAU SEMPORNA</strong></h2> The reveal of a sandbar beach view at Pulau Semporna during a low tide period. ");
sabahDescs.push("<h2><strong>MOUNT KINABALU</strong></h2> A renowned World Heritage Site, Mount Kinabalu is standing majestically at 4,095m (13,435 feet above sea level). It's name derived from the Kadazan word, ‘Aki Nabalu’ which translate as ‘the revered place of the dead’. Mount Kinabalu is one of the safest and most conquerable peak in the world along with tremendous amount of botanical and biological species. ");
sabahDescs.push("<h2><strong>MOUNT KINABALU</strong></h2> A view of Mount Kinabalu's summit from Desa Cattle Dairy Farm, which is located at the foot of Mount Kinabalu. The dairy farm is also one of the must visit spot when you are touring in the area of Kundasang. ");

// call function for Sabah iframe
displayPicDesc(sabahDescs,"sabahDescDisplay", "sabah")

// create array for Shanghai descriptions
const shanghaiDescs = ["<h4><strong>Oriental Pearl Tower</strong></h4> A TV tower in Shanghai. It is located at the tip of Lujiazui in the Pudong New Area by the side of Huangpu River, makes it a distinct landmark in Shanghai.",
"<h4><strong>Lujiazui</strong></h4> It lies directly across the river from the Bund, the old financial and business district of Shanghai, and just south of the confluence of the Suzhou Creek with the Huangpu River.",
"<h4><strong>Shanghai Disney</strong></h4> Shanghai Disneyland is the sixth Disney resort worldwide, but it's the first of its kind. It is not to simply clone an existing Disneyland but it is distinctly Chinese in flavor to give people Chinese version of Disney.",
"<h4><strong>Jing'an District</strong></h4> You can find many attractions in Jing'an District, such as Jing'an Temple, People's Square, Shanghai Museum, Shanghai Art Gallery and Nanjing Road.",
"<h4><strong>Wukang Road</strong></h4> It is a historic road in the Xuhui District of Shanghai, located in the western part of the former French Concession area of the city.",
"<h4><strong>Bar No.3</strong></h4> Shanghai has many various bars but Bar No.3 is absolutely one of the best."];

// call function for Shanghai iframe
displayPicDesc(shanghaiDescs, "ShanghaiDescDisplay", "shanghai");

// create array for Paris descriptions
const parisDescs = ["<h4><strong>Eiffel Tower</strong></h4> The Eiffel Tower is one of the world’s most recognizable landmarks, one of the most attractive sites for tourists.",
"<h4><strong>Musée du Louvre</strong></h4> This most world renowed museum contains the most prestigious art collection in the world. The most famous works of art include Leonardo da Vinci's Mona Lisa, Le Sacre de Napoléon 1er by Jacques Louis David, and the grandiose floor-to-ceiling painting Les Noces de Cana by Veronese.",
"<h4><strong>Moulin Rouge</strong></h4> The Moulin Rouge is a tourist attraction which provides visitors with musical dance entertainment.",
"<h4><strong>Wall of Love</strong></h4> The Wall of Love is a love-themed wall of 40 square metres in the Jehan Rictus garden square in Montmartre of Paris. The wall includes not only the words <i>I love you</i> in all major languages, but also in rarer languages.",
"<h4><strong>French Dessert</strong></h4> Paris is also renowned for its delicious recipes including Chouquettes, financiers and macarons.",
"<h4><strong>Musée d'Orsay</strong></h4> The Musée d'Orsay in Paris displays an exceptional assortment of 19th- and 20th-century art. The collection represents all the great masters of Impressionism: Boudin, Caillebotte, Corot, Courbet, Degas, Manet, Monet, Pissarro, Sisley, Renoir, and Vuillard."];

// call function for Paris iframe
displayPicDesc(parisDescs, "ParisDescDisplay", "paris");

// create array for Penghu descriptions
var penghuDescs = new Array();
penghuDescs.push("<h2><strong>PENGHU GREAT BRIDGE (TRANS-OCEAN BRIDGE)</strong></h2>At 2,494 meters, the Trans-Ocean Bridge links the islands of Baisha and Xiyu. It is the first sea-crossing bridge in the far eastern. Walking the length of the bridge, viewing the awesome oceanic vistas, listening to the roaring tides, and feeling the bracing sea breezes, is a uniquely refreshing experience. ");
penghuDescs.push("<h2><strong>TONGPAN ISLAND</strong></h2>Having the nickname of <q>The Yellowstone Park of the Penghu</q>, Tongpan features a typical basaltic landform on the shoreline bounded by cliffs made up of well-developed, neatly stacked basalt columns. Best way to Tongpan Island is by a ferry ride from Magong Harbour, Penghu. ");
penghuDescs.push("<h2><strong>ERKAN HISTORICAL HOUSE</strong></h2>Erkan is a well-preserved century-old residential complex owned by the Chen clan. It features relief carvings, windows, doors, and eaves in the classic southern Fujian style which highlishts the skills of its builders' craftmanship. ");
penghuDescs.push("<h2><strong>ZHONG YANG OLD STREET</strong></h2>Known as <q>the high street</q> or <q>downtown roads</q> in the old days, Zhongyang street is the earliest commercial district of Penghu. Today, various historic buildings can still be found here and the majority of the architecture here is longish since the buildings are use for both living and business purposes.  ");
penghuDescs.push("<h2><strong>TWIN HEARTS STONE WEIR</strong></h2>The curving weir is formed of piled rock walls in an intertidal zone. Fish swim into the weir during high tide and trapped inside during low tide. Among numbers of stone wiers in Penghu,Twin Hearts Stone Weir is the best preserved and best well known for its' romantic shape. ");
penghuDescs.push("<h2><strong>XIAOMEN ISLET</strong></h2>Located at the edge of Houmen Channel along the coastline, Xiaomen is a landmark that contains many of the natural and cultural features that characterize the archipelago as a whole. On the northwestern part of the landmark is Whale Cave, an eroded columnar basalt formation that is said to resemble a whale when viewed from distance. ");

// call function for Penghu iframe
displayPicDesc(penghuDescs,"penghuDescDisplay", "penghu")

// create array for Phuket descriptions
var phuketDescs = new Array();
phuketDescs.push("<h2><strong>PHI PHI ISLAND</strong></h2>Located around 48km away from the main Phuket Island, Phi Phi Island is well known for is abundance of corals and marine lifes. The islands feature beaches and clear water, and the natural environment is protected by national park status. ");
phuketDescs.push("<h2><strong>PHI PHI ISLAND</strong></h2>One of Phi Phi Island main tourism activity is non other than the longtail boat island tour. Touring around Phi Phi island provide the most sensational experience of natural beauty and manificient underwater scenery. ");
phuketDescs.push("<h2><strong>JAMES BOND ISLAND (KO KHAO PHING KAN)</strong></h2>In northeast of Phuket, 40 meters from the shores of Khao Phing Kan is the 20 meter tall islet called Ko Ta Pu. It is a limestone karst tower standing alone in the middle of water body. Ko Ta Pu became a popular tourist destination after it is featured in the James Bond movie which later obtain the name of <q>James Bond Island</q>.  ");
phuketDescs.push("<h2><strong>PHUKET BIG BUDDHA</strong></h2>One of the most important and revered landmarks of Phuket. The Big Buddha sitting ontop of Nakkerd Hills between Chalong and Kata sores at a heoght of 45 meters and can be seen from as far as Phuket Town and Karon Beach.  ");
phuketDescs.push("<h2><strong>PATONG BEACH</strong></h2>Spanning over 3km of golden sand, Patong beach is one of the most popular beaches in Phuket. It provides plenty of water activities and water sports for travallers. Along the beach is rows of tropical trees and lines of stalls selling snacks and drinks as well as beach massage.");
phuketDescs.push("<h2><strong>BANGLA ROAD (PATONG BEACH)</strong></h2> Bangla Road is  a friendly and lively place to walk around after sunset. The road is closed and becomes a 400-metre festival of neon lights, loud music and cheap beer. Dozens of bars and clubs are competing with each other for customers and is the best place for travellers to enjoy Patong's night life. ")

// call function for Penghu iframe
displayPicDesc(phuketDescs,"phuketDescDisplay", "phuket")
