const countries = [
  {
    country: "Afghanistan",
    code: "AF",
    cities: ["Kabul", "Kandahar", "Herat"],
  },
  {
    country: "Albania",
    code: "AL",
    cities: ["Tirana", "Durrës", "Vlorë"],
  },
  {
    country: "Algeria",
    code: "DZ",
    cities: ["Algiers", "Oran", "Constantine"],
  },
  {
    country: "Andorra",
    code: "AD",
    cities: ["Andorra la Vella", "Escaldes-Engordany", "Encamp"],
  },
  {
    country: "Angola",
    code: "AO",
    cities: ["Luanda", "N'dalatando", "Huambo"],
  },
  {
    country: "Antigua and Barbuda",
    code: "AG",
    cities: ["Saint John's", "All Saints", "Liberta"],
  },
  {
    country: "Argentina",
    code: "AR",
    cities: ["Buenos Aires", "Córdoba", "Rosario"],
  },
  {
    country: "Armenia",
    code: "AM",
    cities: ["Yerevan", "Gyumri", "Vanadzor"],
  },
  {
    country: "Australia",
    code: "AU",
    cities: ["Sydney", "Melbourne", "Brisbane"],
  },
  {
    country: "Austria",
    code: "AT",
    cities: ["Vienna", "Graz", "Linz"],
  },
  {
    country: "Azerbaijan",
    code: "AZ",
    cities: ["Baku", "Ganja", "Sumqayit"],
  },
  {
    country: "Bahamas",
    code: "BS",
    cities: ["Nassau", "Freeport", "West End"],
  },
  {
    country: "Bahrain",
    code: "BH",
    cities: ["Manama", "Riffa", "Muharraq"],
  },
  {
    country: "Bangladesh",
    code: "BD",
    cities: ["Dhaka", "Chittagong", "Khulna"],
  },
  {
    country: "Barbados",
    code: "BB",
    cities: ["Bridgetown", "Speightstown", "Oistins"],
  },
  {
    country: "Belarus",
    code: "BY",
    cities: ["Minsk", "Gomel", "Mogilev"],
  },
  {
    country: "Belgium",
    code: "BE",
    cities: ["Brussels", "Antwerp", "Ghent"],
  },
  {
    country: "Belize",
    code: "BZ",
    cities: ["Belize City", "San Ignacio", "Belmopan"],
  },
  {
    country: "Benin",
    code: "BJ",
    cities: ["Porto-Novo", "Cotonou", "Parakou"],
  },
  {
    country: "Bhutan",
    code: "BT",
    cities: ["Thimphu", "Phuntsholing", "Punakha"],
  },
  {
    country: "Bolivia",
    code: "BO",
    cities: ["La Paz", "Santa Cruz de la Sierra", "Cochabamba"],
  },
  {
    country: "Bosnia and Herzegovina",
    code: "BA",
    cities: ["Sarajevo", "Banja Luka", "Tuzla"],
  },
  {
    country: "Botswana",
    code: "BW",
    cities: ["Gaborone", "Francistown", "Molepolole"],
  },
  {
    country: "Brazil",
    code: "BR",
    cities: ["São Paulo", "Rio de Janeiro", "Brasília"],
  },
  {
    country: "Brunei",
    code: "BN",
    cities: ["Bandar Seri Begawan", "Kuala Belait", "Seria"],
  },
  {
    country: "Bulgaria",
    code: "BG",
    cities: ["Sofia", "Plovdiv", "Varna"],
  },
  {
    country: "Burkina Faso",
    code: "BF",
    cities: ["Ouagadougou", "Bobo-Dioulasso", "Koudougou"],
  },
  {
    country: "Burundi",
    code: "BI",
    cities: ["Bujumbura", "Gitega", "Ngozi"],
  },
  {
    country: "Cabo Verde",
    code: "CV",
    cities: ["Praia", "Mindelo", "Santa Maria"],
  },
  {
    country: "Cambodia",
    code: "KH",
    cities: ["Phnom Penh", "Siem Reap", "Battambang"],
  },
  {
    country: "Cameroon",
    code: "CM",
    cities: ["Yaoundé", "Douala", "Garoua"],
  },
  {
    country: "Canada",
    code: "CA",
    cities: ["Toronto", "Vancouver", "Montreal"],
  },
  {
    country: "Central African Republic",
    code: "CF",
    cities: ["Bangui", "Bimbo", "Berbérati"],
  },
  {
    country: "Chad",
    code: "TD",
    cities: ["N'Djamena", "Moundou", "Sarh"],
  },
  {
    country: "Chile",
    code: "CL",
    cities: ["Santiago", "Valparaíso", "Concepción"],
  },
  {
    country: "China",
    code: "CN",
    cities: ["Beijing", "Shanghai", "Chongqing"],
  },
  {
    country: "Colombia",
    code: "CO",
    cities: ["Bogotá", "Medellín", "Cali"],
  },
  {
    country: "Comoros",
    code: "KM",
    cities: ["Moroni", "Moutsamoudou", "Fomboni"],
  },
  {
    country: "Congo, Democratic Republic of the",
    code: "CD",
    cities: ["Kinshasa", "Lubumbashi", "Mbuji-Mayi"],
  },
  {
    country: "Congo, Republic of the",
    code: "CG",
    cities: ["Brazzaville", "Pointe-Noire", "Dolisie"],
  },
  {
    country: "Costa Rica",
    code: "CR",
    cities: ["San José", "Alajuela", "Cartago"],
  },
  {
    country: "Croatia",
    code: "HR",
    cities: ["Zagreb", "Split", "Rijeka"],
  },
  {
    country: "Cuba",
    code: "CU",
    cities: ["Havana", "Santiago de Cuba", "Camagüey"],
  },
  {
    country: "Cyprus",
    code: "CY",
    cities: ["Nicosia", "Limassol", "Larnaca"],
  },
  {
    country: "Czech Republic",
    code: "CZ",
    cities: ["Prague", "Brno", "Ostrava"],
  },
  {
    country: "Denmark",
    code: "DK",
    cities: ["Copenhagen", "Aarhus", "Odense"],
  },
  {
    country: "Djibouti",
    code: "DJ",
    cities: ["Djibouti", "Ali Sabieh", "Tadjoura"],
  },
  {
    country: "Dominica",
    code: "DM",
    cities: ["Roseau", "Portsmouth", "Marigot"],
  },
  {
    country: "Dominican Republic",
    code: "DO",
    cities: ["Santo Domingo", "Santiago de los Caballeros", "La Romana"],
  },
  {
    country: "Ecuador",
    code: "EC",
    cities: ["Quito", "Guayaquil", "Cuenca"],
  },
  {
    country: "Egypt",
    code: "EG",
    cities: ["Cairo", "Alexandria", "Giza"],
  },
  {
    country: "El Salvador",
    code: "SV",
    cities: ["San Salvador", "Santa Ana", "San Miguel"],
  },
  {
    country: "Equatorial Guinea",
    code: "GQ",
    cities: ["Malabo", "Bata", "Ebebiyin"],
  },
  {
    country: "Eritrea",
    code: "ER",
    cities: ["Asmara", "Keren", "Massawa"],
  },
  {
    country: "Estonia",
    code: "EE",
    cities: ["Tallinn", "Tartu", "Narva"],
  },
  {
    country: "Eswatini",
    code: "SZ",
    cities: ["Mbabane", "Manzini", "Big Bend"],
  },
  {
    country: "Ethiopia",
    code: "ET",
    cities: ["Addis Ababa", "Dire Dawa", "Mek'ele"],
  },
  {
    country: "Fiji",
    code: "FJ",
    cities: ["Suva", "Nadi", "Lautoka"],
  },
  {
    country: "Finland",
    code: "FI",
    cities: ["Helsinki", "Espoo", "Tampere"],
  },
  {
    country: "France",
    code: "FR",
    cities: ["Paris", "Marseille", "Lyon"],
  },
  {
    country: "Gabon",
    code: "GA",
    cities: ["Libreville", "Port-Gentil", "Franceville"],
  },
  {
    country: "Gambia",
    code: "GM",
    cities: ["Banjul", "Serekunda", "Brikama"],
  },
  {
    country: "Georgia",
    code: "GE",
    cities: ["Tbilisi", "Kutaisi", "Batumi"],
  },
  {
    country: "Germany",
    code: "DE",
    cities: ["Berlin", "Hamburg", "Munich"],
  },
  {
    country: "Ghana",
    code: "GH",
    cities: ["Accra", "Kumasi", "Tamale"],
  },
  {
    country: "Greece",
    code: "GR",
    cities: ["Athens", "Thessaloniki", "Patras"],
  },
  {
    country: "Grenada",
    code: "GD",
    cities: ["St. George's", "Gouyave", "Grenville"],
  },
  {
    country: "Guatemala",
    code: "GT",
    cities: ["Guatemala City", "Mixco", "Villa Nueva"],
  },

  {
    country: "Haiti",
    code: "HT",
    cities: ["Port-au-Prince", "Cap-Haïtien", "Gonaïves"],
  },
  {
    country: "Honduras",
    code: "HN",
    cities: ["Tegucigalpa", "San Pedro Sula", "La Ceiba"],
  },
  {
    country: "Hungary",
    code: "HU",
    cities: ["Budapest", "Debrecen", "Szeged"],
  },
  {
    country: "Iceland",
    code: "IS",
    cities: ["Reykjavik", "Kopavogur", "Hafnarfjordur"],
  },
  {
    country: "India",
    code: "IN",
    cities: ["New Delhi", "Mumbai", "Bangalore"],
  },
  {
    country: "Indonesia",
    code: "ID",
    cities: ["Jakarta", "Surabaya", "Bandung"],
  },
  {
    country: "Iran",
    code: "IR",
    cities: ["Tehran", "Mashhad", "Isfahan"],
  },
  {
    country: "Iraq",
    code: "IQ",
    cities: ["Baghdad", "Basra", "Erbil"],
  },
  {
    country: "Ireland",
    code: "IE",
    cities: ["Dublin", "Cork", "Limerick"],
  },
  {
    country: "Israel",
    code: "IL",
    cities: ["Jerusalem", "Tel Aviv", "Haifa"],
  },
  {
    country: "Italy",
    code: "IT",
    cities: ["Rome", "Milan", "Naples"],
  },
  {
    country: "Jamaica",
    code: "JM",
    cities: ["Kingston", "Montego Bay", "Spanish Town"],
  },
  {
    country: "Japan",
    code: "JP",
    cities: ["Tokyo", "Osaka", "Yokohama"],
  },
  {
    country: "Jordan",
    code: "JO",
    cities: ["Amman", "Zarqa", "Irbid"],
  },
  {
    country: "Kazakhstan",
    code: "KZ",
    cities: ["Nur-Sultan", "Almaty", "Shymkent"],
  },
  {
    country: "Kenya",
    code: "KE",
    cities: ["Nairobi", "Mombasa", "Kisumu"],
  },
  {
    country: "Kiribati",
    code: "KI",
    cities: ["Tarawa", "Betio", "Bairiki"],
  },
  {
    country: "Kuwait",
    code: "KW",
    cities: ["Kuwait City", "Al Ahmadi", "Hawalli"],
  },
  {
    country: "Kyrgyzstan",
    code: "KG",
    cities: ["Bishkek", "Osh", "Jalal-Abad"],
  },
  {
    country: "Laos",
    code: "LA",
    cities: ["Vientiane", "Luang Prabang", "Savannakhet"],
  },
  {
    country: "Latvia",
    code: "LV",
    cities: ["Riga", "Daugavpils", "Liepaja"],
  },
  {
    country: "Lebanon",
    code: "LB",
    cities: ["Beirut", "Tripoli", "Sidon"],
  },
  {
    country: "Lesotho",
    code: "LS",
    cities: ["Maseru", "Teyateyaneng", "Mafeteng"],
  },
  {
    country: "Liberia",
    code: "LR",
    cities: ["Monrovia", "Gbarnga", "Kakata"],
  },
  {
    country: "Libya",
    code: "LY",
    cities: ["Tripoli", "Benghazi", "Misrata"],
  },
  {
    country: "Liechtenstein",
    code: "LI",
    cities: ["Vaduz", "Schaan", "Balzers"],
  },
  {
    country: "Lithuania",
    code: "LT",
    cities: ["Vilnius", "Kaunas", "Klaipeda"],
  },
  {
    country: "Luxembourg",
    code: "LU",
    cities: ["Luxembourg City", "Esch-sur-Alzette", "Differdange"],
  },
  {
    country: "Madagascar",
    code: "MG",
    cities: ["Antananarivo", "Toamasina", "Antsirabe"],
  },
  {
    country: "Malawi",
    code: "MW",
    cities: ["Lilongwe", "Blantyre", "Mzuzu"],
  },
  {
    country: "Malaysia",
    code: "MY",
    cities: ["Kuala Lumpur", "George Town", "Johor Bahru"],
  },
  {
    country: "Maldives",
    code: "MV",
    cities: ["Malé", "Hithadhoo", "Fuvahmulah"],
  },
  {
    country: "Mali",
    code: "ML",
    cities: ["Bamako", "Sikasso", "Mopti"],
  },
  {
    country: "Malta",
    code: "MT",
    cities: ["Valletta", "Birkirkara", "Mosta"],
  },
  {
    country: "Marshall Islands",
    code: "MH",
    cities: ["Majuro", "Ebeye", "Jabor"],
  },
  {
    country: "Mauritania",
    code: "MR",
    cities: ["Nouakchott", "Nouadhibou", "Kaédi"],
  },
  {
    country: "Mauritius",
    code: "MU",
    cities: ["Port Louis", "Beau Bassin-Rose Hill", "Vacoas-Phoenix"],
  },
  {
    country: "Mexico",
    code: "MX",
    cities: ["Mexico City", "Guadalajara", "Monterrey"],
  },
  {
    country: "Micronesia",
    code: "FM",
    cities: ["Palikir", "Weno", "Tofol"],
  },
  {
    country: "Moldova",
    code: "MD",
    cities: ["Chișinău", "Tiraspol", "Bălți"],
  },
  {
    country: "Monaco",
    code: "MC",
    cities: ["Monaco"],
  },
  {
    country: "Mongolia",
    code: "MN",
    cities: ["Ulaanbaatar", "Erdenet", "Darkhan"],
  },
  {
    country: "Montenegro",
    code: "ME",
    cities: ["Podgorica", "Nikšić", "Herceg Novi"],
  },
  {
    country: "Morocco",
    code: "MA",
    cities: ["Rabat", "Casablanca", "Marrakesh"],
  },
  {
    country: "Mozambique",
    code: "MZ",
    cities: ["Maputo", "Matola", "Beira"],
  },
  {
    country: "Myanmar",
    code: "MM",
    cities: ["Yangon", "Mandalay", "Naypyidaw"],
  },
  {
    country: "Namibia",
    code: "NA",
    cities: ["Windhoek", "Rundu", "Walvis Bay"],
  },
  {
    country: "Nauru",
    code: "NR",
    cities: ["Yaren", "Denigomodu", "Baiti"],
  },
  {
    country: "Nepal",
    code: "NP",
    cities: ["Kathmandu", "Pokhara", "Lalitpur"],
  },
  {
    country: "Netherlands",
    code: "NL",
    cities: ["Amsterdam", "Rotterdam", "The Hague"],
  },
  {
    country: "New Zealand",
    code: "NZ",
    cities: ["Wellington", "Auckland", "Christchurch"],
  },
  {
    country: "Nicaragua",
    code: "NI",
    cities: ["Managua", "León", "Masaya"],
  },
  {
    country: "Niger",
    code: "NE",
    cities: ["Niamey", "Zinder", "Maradi"],
  },
  {
    country: "Nigeria",
    code: "NG",
    cities: ["Lagos", "Abuja", "Kano"],
  },
  {
    country: "North Macedonia",
    code: "MK",
    cities: ["Skopje", "Bitola", "Kumanovo"],
  },
  {
    country: "Norway",
    code: "NO",
    cities: ["Oslo", "Bergen", "Trondheim"],
  },
  {
    country: "Oman",
    code: "OM",
    cities: ["Muscat", "Salalah", "Sohar"],
  }
];

module.exports = countries;
