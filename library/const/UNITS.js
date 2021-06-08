const UNITS = {
  area: {
    mm2: [
      'mm²',
      'mm2',
      'mm^2',
      'millimetre carre',
      'millimetres carres',
      'mm carre',
      'mm carres'
    ],
    cm2: [
      'cm²',
      'cm2',
      'cm^2',
      'centimetre carre',
      'centimetres carres',
      'cm carre',
      'cm carres'
    ],
    m2: [
      'm²',
      'm2',
      'm^2',
      'metre carre',
      'metres carres',
      'm carre',
      'm carres'
    ],
    ha: ['ha', 'hectare', 'hectares'],
    km2: [
      'km²',
      'km2',
      'km^2',
      'kilometre carre',
      'kilometres carres',
      'km carre',
      'kms carres'
    ],
    in2: [
      'in²',
      'in2',
      'in^2',
      'inch2',
      'inch^2',
      'inch²',
      'pouce²',
      'pouces²',
      'pouce carre',
      'pouces carres'
    ],
    yd2: [
      'yd²',
      'yd2',
      'yd^2',
      'yard2',
      'yard²',
      'yard²',
      'yard carre',
      'yards carres',
      'verge carre',
      'verges carres',
      'verge²',
      'verges²'
    ],
    ft2: [
      'ft²',
      'ft2',
      'ft^2',
      'foot2',
      'foot^2',
      'feet2',
      'foot²',
      'feet²',
      'pied2',
      'pied²',
      'pieds²',
      'pied carre',
      'pieds carres'
    ],
    ac: ['ac', 'acre', 'acres'],
    mi2: [
      'mi²',
      'mi2',
      'mile²',
      'miles²',
      'mille²',
      'milles²',
      'mille carre',
      'milles carres',
      'miles carre',
      'milles carres'
    ]
  },
  force: {
    N: ['N', 'n', 'newton', 'newtons'],
    kN: ['kN', 'kn', 'kilonewton', 'kilonewtons'],
    lbf: [
      'lbf',
      'pound force',
      'pounds forces',
      'livre force',
      'livres forces'
    ]
  },
  length: {
    mm: ['mm', 'millimetre', 'millimetres'],
    cm: ['cm', 'centimetre', 'centimetres'],
    m: ['m', 'metre', 'metres'],
    km: ['km', 'kilometres'],
    in: ['in', 'inch', 'inches', '"', 'pouce', 'pouces'],
    yd: ['yd', 'yard', 'verge', 'verges'],
    'ft-us': ['ft-us'],
    ft: ['ft', 'foot', 'feet', 'pied', 'pieds'],
    fathom: ['fathom', 'fathoms', 'brasse', 'brasses'],
    mi: ['mi', 'mile', 'miles', 'mille', 'milles'],
    nMi: [
      'nMi',
      'mille marin',
      'milles marin',
      'mile marin',
      'miles marin',
      'nautical mile',
      'nauticals miles'
    ]
  },
  mass: {
    mcg: ['mcg', 'microgram', 'micrograms', 'microgramme', 'microgrammes'],
    mg: ['mg', 'milligram', 'milligrams', 'milligramme', 'milligrammes'],
    g: ['g', 'gram', 'grams', 'gramme', 'grammes'],
    kg: ['kg', 'kilogram', 'kilograms', 'kilogramme', 'kilogrammes'],
    mt: ['T', 'tonne', 'tonnes'],
    oz: ['oz', 'OZ', 'ounce', 'ounce', 'once', 'onces'],
    lb: ['lb', 'LB', 'pound', 'pounds', 'livre', 'livres']
  },
  pace: {
    'min/km': [
      'min/km',
      'minute/kilometre',
      'minutes/kilometre',
      'minute par kilometre',
      'minutes par kilometre'
    ],
    's/m': [
      's/m',
      'sec/m',
      'seconde/metre',
      'secondes/metre',
      'seconde par metre',
      'secondes par metre'
    ],
    'min/mi': [
      'min/mi',
      'm/m',
      'minute/mile',
      'minute per mile',
      'minutes per mile',
      'minute par mile',
      'minutes par mile'
    ],
    's/ft': [
      's/ft',
      'sec/ft',
      'sec/foot',
      'seconce/foot',
      'seconde per foot',
      'secondes per foot',
      'seconde par pied',
      'secondes par pied'
    ]
  },
  pressure: {
    Pa: ['pa', 'pas', 'pascal', 'pascals'],
    kPa: ['kpa', 'kpas', 'kilopascal', 'kilopascals'],
    MPa: ['mpa', 'mpas', 'megapascal', 'megapascals'],
    hPa: ['hpa', 'hpas', 'hectopascal', 'hectopascals'],
    bar: ['bar', 'bars'],
    torr: ['torr', 'mmhg', 'millimetre de mercure', 'millimetres de mercure'],
    psi: ['psi'],
    ksi: ['ksi']
  },
  speed: {
    'm/s': [
      'm/s',
      'meter/second',
      'meter per second',
      'meters per second',
      'metre/seconde',
      'metres/seconde',
      'metre par seconde',
      'metres par seconde'
    ],
    'km/h': [
      'km/h',
      'Kilometer per hour',
      'Kilometers per hour',
      'Kilometer/hour',
      'Kilometers/hour',
      'Kilometre par heure',
      'Kilometres par heure',
      'Kilometre/heure',
      'Kilometres/heure'
    ],
    'm/h': [
      'm/h',
      'mile per hour',
      'miles per hour',
      'mile/hour',
      'miles/hour',
      'mile par heure',
      'miles par heure',
      'mile/heure',
      'miles/heure',
      'mille par heure',
      'milles par heure',
      'mille/heure',
      'milles/heure'
    ],
    knot: [
      'nœuds',
      'knot',
      'knots',
      'noeud',
      'noeuds',
      'nœud',
      'nd',
      'kt',
      'nd'
    ],
    'ft/s': [
      'ft/s',
      'foot/second',
      'foot per second',
      'feet/second',
      'feet per second',
      'pied/seconde',
      'pied par seconde',
      'pieds par seconde'
    ]
  },
  temperature: {
    C: [
      '°C',
      'C',
      'C°',
      'C °',
      'degree celsius',
      'degrees celsius',
      'degre celsius',
      'degres celsius'
    ],
    K: [
      '°K',
      'K',
      'K°',
      'K °',
      'degree kelvin',
      'degrees kelvin',
      'degre kelvin',
      'degres kelvin'
    ],
    F: [
      '°F',
      'F',
      'F°',
      'F °',
      'degree fahrenheit',
      'degrees fahrenheit',
      'degre fahrenheit',
      'degres fahrenheit'
    ],
    R: [
      '°R',
      'R',
      'R°',
      'R °',
      'degree rankine',
      'degrees rankine',
      'degre rankine',
      'degres rankine'
    ]
  },
  time: {
    ns: ['ns', 'nanoseconde', 'nanosecondes', 'nanosecond', 'nanoseconds'],
    mu: [
      'μs',
      'us',
      'mu',
      'microseconde',
      'microsecondes',
      'microsecond',
      'microseconds'
    ],
    ms: ['ms', 'milliseconde', 'millisecondes', 'millisecond', 'milliseconds'],
    s: ['s', 'seconde', 'secondes', 'second', 'seconds'],
    min: ['min', 'minute', 'minutes'],
    h: ['h', 'heure', 'heures', 'hour', 'hours'],
    d: ['j', 'jour', 'jours', 'd', 'day', 'days'],
    week: ['sem', 'semaine', 'semaines', 'w', 'week', 'weeks'],
    month: ['mois', 'month', 'months'],
    year: ['ans', 'an', 'annee', 'annees', 'year', 'years']
  },
  volume: {
    mm3: [
      'mm³',
      'mm3',
      'mm^3',
      'cubic millimeter',
      'cubic millimeters',
      'millimetre cube',
      'millimetres cube'
    ],
    cm3: [
      'cm³',
      'cm3',
      'cm^3',
      'cubic centimeter',
      'cubic centimeters',
      'centimetre cube',
      'centimetres cube'
    ],
    ml: ['ml', 'mls', 'millilitre', 'millilitres', 'milliliter', 'milliliters'],
    cl: ['cl', 'cls', 'centilitre', 'centilitres', 'centiliter', 'centiliter'],
    dl: ['dl', 'dls', 'decilitre', 'decilitres', 'deciliter', 'deciliters'],
    l: ['l', 'ls', 'litre', 'litres', 'liter', 'liters'],
    kl: ['kl', 'kls', 'kilolitre', 'kilolitres', 'kiloliter', 'kiloliters'],
    m3: [
      'm³',
      'm3',
      'm^3',
      'cubic meter',
      'cubic meters',
      'metre cube',
      'metres cube'
    ],
    km3: [
      'km³',
      'km3',
      'km^3',
      'cubic kilometer',
      'cubic kilometers',
      'kilometre cube',
      'kilometres cube'
    ],
    tsp: [
      'CàF',
      'CaF',
      'teasp',
      'teaspoon',
      'teaspoons',
      'cuillere a cafe',
      'cuilleres a cafe'
    ],
    Tbs: [
      'CàS',
      'CaS',
      'tablesp',
      'tablespoon',
      'tablespoons',
      'cuillere a soupe',
      'cuilleres a soupe'
    ],
    in3: [
      'in³',
      'in^3',
      'in3',
      'cubic inch',
      'cubic inches',
      'pouce cube',
      'pouces cube'
    ],
    'fl-oz': [
      'fl-oz',
      'floz',
      'fluid Ounce',
      'fluid Ounces',
      'once liquide',
      'onces liquides'
    ],
    cup: ['cup', 'cups', 'tasse', 'tasses'],
    pnt: ['pnt', 'pint', 'pints', 'pinte', 'pintes'],
    quart: ['quart', 'quarts'],
    gal: ['gal', 'gals', 'gallon', 'gallons'],
    ft3: [
      'ft³',
      'ft3',
      'ft^3',
      'cubic foot',
      'cubic feet',
      'pied cube',
      'pieds cubes'
    ],
    yd3: [
      'yd³',
      'yd^3',
      'yd3',
      'cubic yard',
      'cubic yards',
      'yard cube',
      'yards cube',
      'verge cube',
      'Verges cubes'
    ]
  },
  volumeFlowRate: {
    'mm3/s': [
      'mm³/s',
      'mm3/s',
      'mm^3/s',
      'cubic millimeter per second',
      'cubic millimeters per second',
      'millimetre cube par seconde',
      'millimetres cubes par seconde'
    ],
    'cm3/s': [
      'cm³/s',
      'cm3/s',
      'cm^3/s',
      'cubic centimeter per second',
      'cubic centimeters per second',
      'cubic centimeter/second',
      'cubic centimeters/second',
      'centimetre cube par seconde',
      'centimetres cubes par seconde',
      'centimetre cube/seconde',
      'centimetres cubes/seconde'
    ],
    'ml/s': [
      'ml/s',
      'milliliter per second',
      'milliliters per second',
      'milliliter/second',
      'milliliters/second',
      'millilitre par seconde',
      'millilitres par seconde',
      'millilitres/seconde',
      'millilitres/seconde'
    ],
    'cl/s': [
      'cl/s',
      'centiliter per second',
      'centiliters per second',
      'centiliter/second',
      'centiliters/second',
      'centilitre par seconde',
      'centilitres par seconde',
      'centilitre/seconde',
      'centilitres/seconde'
    ],
    'dl/s': [
      'dl/s',
      'deciliter per second',
      'deciliters per second',
      'deciliter/second',
      'deciliters/second',
      'decilitre par seconde',
      'decilitres par seconde',
      'decilitre/seconde',
      'decilitres/seconde'
    ],
    'l/s': [
      'l/s',
      'liter per second',
      'liters per second',
      'liter/second',
      'liters/second',
      'litre par seconde',
      'litres par seconde',
      'litre/seconde',
      'litres/seconde'
    ],
    'l/min': [
      'l/min',
      'l/m',
      'liter per minute',
      'liters per minute',
      'liter/minute',
      'liters/minute',
      'litre par minute',
      'litres par minute',
      'litre/minute',
      'litres/minute'
    ],
    'l/h': [
      'l/h',
      'liter per hour',
      'liters per hour',
      'liter/hour',
      'liters/hour',
      'litre par heure',
      'litres par heure',
      'litre/heure',
      'litres/heure'
    ],
    'kl/h': [
      'kl/h',
      'kiloliter per hour',
      'kiloliters per hour',
      'kiloliter/hour',
      'kiloliters/hour',
      'kilolitre par heure',
      'kilolitres par heure',
      'kilolitre/heure',
      'kilolitres/heure'
    ],
    'm3/s': [
      'm³/s',
      'm3/s',
      'm^3/s',
      'cubic meter per second',
      'cubic meters per second',
      'cubic meter/second',
      'cubic meters/second',
      'metre cube par seconde',
      'metres cube par seconde',
      'metre cube/seconde',
      'metres cube/seconde'
    ],
    'm3/min': [
      'm³/min',
      'm3/min',
      'm^3/min',
      'cubic meter per minute',
      'cubic meters per minute',
      'cubic meter/minute',
      'cubic meters/minute',
      'metre cube par minute',
      'metres cube par minute',
      'metre cube/minute',
      'metres cube/minute'
    ],
    'm3/h': [
      'm³/h',
      'm3/h',
      'm^3/h',
      'cubic meter per hour',
      'cubic meters per hour',
      'cubic meter/hour',
      'cubic meters/hour',
      'metre cube par heure',
      'metres cube par heure',
      'metre cube/heure',
      'metres cube/heure'
    ],
    'km3/h': [
      'km³/h',
      'km3/h',
      'km^3/h',
      'cubic kilometer per hour',
      'cubic kilometers per hour',
      'cubic kilometer/hour',
      'cubic kilometers/hour',
      'kilometre cube par heure',
      'kilometres cube par heure',
      'kilometre cube/heure',
      'kilometres cube/heure'
    ],
    'tsp/s': [
      'CàF/s',
      'CaF/s',
      'teasp/s',
      'teaspoon per second',
      'teaspoons per second',
      'teaspoon/second',
      'teaspoons/second',
      'cuillere a cafe par seconde',
      'cuilleres a cafe par seconde',
      'cuilleres a cafe/seconde',
      'cuilleres a cafe/seconde'
    ],
    'Tbs/s': [
      'CàS/s',
      'CaS/s',
      'tablesp/s',
      'tablespoon per second',
      'tablespoons per second',
      'tablespoon/second',
      'tablespoons/second',
      'cuillere a cafe par seconde',
      'cuilleres a cafe par seconde',
      'cuillere a cafe/seconde',
      'cuilleres a cafe/seconde'
    ],
    'in3/s': [
      'in³/s',
      'in3/s',
      'in^3/s',
      'cubic inch per second',
      'cubic inches per second',
      'cubic inch/second',
      'cubic inches/second',
      'pouce cube par seconde',
      'pouces cube par seconde'
    ],
    'in3/min': [
      'in³/min',
      'in3/min',
      'in^3/min',
      'cubic inch per minute',
      'cubic inches per minute',
      'cubic inches/minute',
      'cubic inche/minute',
      'pouce cube par minute',
      'pouces cube par minute',
      'pouce cube/minute',
      'pouces cube/minute'
    ],
    'in3/h': [
      'in³/h',
      'in3/h',
      'in^3/h',
      'cubic inch per hour',
      'cubic inches per hour',
      'cubic inches/hour',
      'cubic inche/hour',
      'pouce cube par heure',
      'pouces cube par heure',
      'pouce cube/heure',
      'pouces cube/heure'
    ],
    'fl-oz/s': [
      'fl-oz/s',
      'fluid ounce per second',
      'fluid ounces per second',
      'fluid ounce/seconde',
      'fluid ounces/seconde',
      'once liquide par seconde',
      'onces liquide par seconde',
      'onces liquide/seconde',
      'onces liquides/seconde'
    ],
    'fl-oz/min': [
      'fl-oz/min',
      'fluid ounce per minute',
      'fluid ounces per minute',
      'fluid ounce/minute',
      'fluid ounces/minute',
      'once liquide par minute',
      'onces liquide par minute',
      'onces liquide/minute',
      'onces liquides/minute'
    ],
    'fl-oz/h': [
      'fl-oz/h',
      'fluid ounce per hour',
      'fluid ounces per hour',
      'fluid ounce/hour',
      'fluid ounces/hour',
      'once liquide par heure',
      'onces liquide par heure',
      'onces liquide/heure',
      'onces liquides/heure'
    ],
    'cup/s': [
      'cup/s',
      'cup per second',
      'cups per second',
      'cup/seconde',
      'cups/seconde',
      'tasse par seconde',
      'tasses par seconde',
      'tasses/seconde',
      'tasse/seconde'
    ],
    'pnt/s': [
      'pnt/s',
      'pint per second',
      'pints per second',
      'pint/second',
      'pints/second',
      'pinte par seconde',
      'pintes par seconde',
      'pinte/seconde',
      'pintes/seconde'
    ],
    'pnt/min': [
      'pnt/min',
      'pint per minute',
      'pints per minute',
      'pint/minute',
      'pints/minute',
      'pinte par minute',
      'pintes par minute',
      'pinte/minute',
      'pintes/minute'
    ],
    'pnt/h': [
      'pnt/h',
      'pint per hour',
      'pints per hour',
      'pint/hour',
      'pints/hour',
      'pinte par heure',
      'pintes par heure',
      'pinte/heure',
      'pintes/heure'
    ],
    'qt/s': [
      'qt/s',
      'quart per second',
      'quarts per second',
      'quart/second',
      'quarts/second',
      'quart par seconde',
      'quarts par seconde',
      'quart/seconde',
      'quarts/seconde'
    ],
    'gal/s': [
      'gal/s',
      'gallon per second',
      'gallons per second',
      'gallon/second',
      'gallons/second',
      'gallone par seconde',
      'gallons par seconde',
      'gallon/seconde',
      'gallons/seconde'
    ],
    'gal/min': [
      'gal/min',
      'gallon per minute',
      'gallons per minute',
      'gallon/minute',
      'gallons/minute',
      'gallone par minute',
      'gallons par minute',
      'gallon/minute',
      'gallons/minute'
    ],
    'gal/h': [
      'gal/h',
      'gallon per hour',
      'gallons per hour',
      'gallon/hour',
      'gallons/hour',
      'gallone par hours',
      'gallons par hours',
      'gallon/hours',
      'gallons/hours'
    ],
    'ft3/s': [
      'ft³/s',
      'ft3/s',
      'ft^3/s',
      'cubic foot per second',
      'cubic feet per second',
      'cubic foot/second',
      'cubic feet/second',
      'pied cube par seconde',
      'pieds cubes par seconde',
      'pied cube/seconde',
      'pieds cubes/seconde'
    ],
    'ft3/min': [
      'ft³/min',
      'ft3/min',
      'ft^3/min',
      'cubic foot per minute',
      'cubic feet per minute',
      'cubic foot/minute',
      'cubic feet/minute',
      'pied cube par minute',
      'pieds cubes par minute',
      'pied cube/minute',
      'pieds cubes/minute'
    ],
    'ft3/h': [
      'ft³/h',
      'ft3/h',
      'ft^3/h',
      'cubic foot per hour',
      'cubic feet per hour',
      'cubic foot/hour',
      'cubic feet/hour',
      'pied cube par heure',
      'pieds cubes par heure',
      'pied cube/heure',
      'pieds cubes/heure'
    ],
    'yd3/s': [
      'yd³/s',
      'yd3/s',
      'yd^3/s',
      'cubic yard per second',
      'cubic yards per second',
      'cubic yard/second',
      'cubic yards/second',
      'pied verge par seconde',
      'pieds verges par seconde',
      'pied verge/seconde',
      'pieds verges/seconde'
    ],
    'yd3/min': [
      'yd³/min',
      'yd3/min',
      'yd^3/min',
      'cubic yard per minute',
      'cubic yards per minute',
      'cubic yard/minute',
      'cubic yards/minute',
      'pied verge par minute',
      'pieds verges par minute',
      'pied verge/minute',
      'pieds verges/minute'
    ],
    'yd3/h': [
      'yd³/h',
      'yd3/h',
      'yd^3/h',
      'cubic yard per hour',
      'cubic yards per hour',
      'cubic yard/hour',
      'cubic yards/hour',
      'pied verge par heure',
      'pieds verges par heure',
      'pied verge/heure',
      'pieds verges/heure'
    ]
  }
}

export default UNITS
