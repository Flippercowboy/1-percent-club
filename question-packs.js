// ── QUESTION PACKS ────────────────────────────────────────────────────────────
// To add a new pack, copy the template below and append it to QUESTION_PACKS.
//
// Template:
// {
//   id:          'unique-id',          // lowercase, hyphens only
//   name:        'Pack Name',
//   description: 'One line description shown in the picker',
//   questions: [
//     {
//       text:           'Question text?',
//       options:        ['Option A', 'Option B', 'Option C', 'Option D'],
//       correct_answer: 'Option A',    // must match one of the options exactly
//       percentage:     '75%'          // 90%, 75%, 50%, 30%, 10%, 5%, or 1%
//     },
//   ]
// }
// ─────────────────────────────────────────────────────────────────────────────

const QUESTION_PACKS = [

  // ── GENERAL KNOWLEDGE ──────────────────────────────────────────────────────
  {
    id:          'general-knowledge',
    name:        'General Knowledge',
    description: 'A broad mix of questions to suit any group',
    questions: [
      {
        text:           'What colour do you get when you mix blue and yellow?',
        options:        ['Purple', 'Orange', 'Green', 'Brown'],
        correct_answer: 'Green',
        percentage:     '90%',
      },
      {
        text:           'How many days are there in a leap year?',
        options:        ['364', '365', '366', '367'],
        correct_answer: '366',
        percentage:     '75%',
      },
      {
        text:           'What is 15% of 80?',
        options:        ['10', '12', '14', '16'],
        correct_answer: '12',
        percentage:     '50%',
      },
      {
        text:           'What is the capital city of Australia?',
        options:        ['Sydney', 'Melbourne', 'Brisbane', 'Canberra'],
        correct_answer: 'Canberra',
        percentage:     '30%',
      },
      {
        text:           'How many hearts does an octopus have?',
        options:        ['1', '2', '3', '4'],
        correct_answer: '3',
        percentage:     '10%',
      },
      {
        text:           'In which year did the Berlin Wall fall?',
        options:        ['1987', '1988', '1989', '1990'],
        correct_answer: '1989',
        percentage:     '5%',
      },
      {
        text:           'What is the only metal that is liquid at room temperature?',
        options:        ['Lead', 'Tin', 'Mercury', 'Gallium'],
        correct_answer: 'Mercury',
        percentage:     '1%',
      },
    ],
  },

  // ── SCIENCE & NATURE ───────────────────────────────────────────────────────
  {
    id:          'science-nature',
    name:        'Science & Nature',
    description: 'From planets to elements — for the curious minds',
    questions: [
      {
        text:           'Which planet in our solar system is closest to the Sun?',
        options:        ['Venus', 'Mercury', 'Mars', 'Earth'],
        correct_answer: 'Mercury',
        percentage:     '90%',
      },
      {
        text:           'How many bones are in the adult human body?',
        options:        ['196', '206', '216', '226'],
        correct_answer: '206',
        percentage:     '75%',
      },
      {
        text:           'What is the chemical symbol for gold?',
        options:        ['Ag', 'Au', 'Go', 'Gd'],
        correct_answer: 'Au',
        percentage:     '50%',
      },
      {
        text:           'Approximately how fast does light travel per second?',
        options:        ['30,000 km', '300,000 km', '3,000,000 km', '30,000,000 km'],
        correct_answer: '300,000 km',
        percentage:     '30%',
      },
      {
        text:           'Which element has the atomic number 79?',
        options:        ['Silver', 'Platinum', 'Gold', 'Copper'],
        correct_answer: 'Gold',
        percentage:     '10%',
      },
      {
        text:           'In what year was the structure of DNA first described?',
        options:        ['1943', '1948', '1953', '1962'],
        correct_answer: '1953',
        percentage:     '5%',
      },
      {
        text:           'At approximately what temperature does water boil at the top of Mount Everest?',
        options:        ['50°C', '60°C', '70°C', '80°C'],
        correct_answer: '70°C',
        percentage:     '1%',
      },
    ],
  },

  // ── HISTORY & GEOGRAPHY ────────────────────────────────────────────────────
  {
    id:          'history-geography',
    name:        'History & Geography',
    description: 'Dates, places, and events from around the world',
    questions: [
      {
        text:           'In which country is the Eiffel Tower located?',
        options:        ['France', 'Germany', 'Italy', 'Spain'],
        correct_answer: 'France',
        percentage:     '90%',
      },
      {
        text:           'Who was the first person to walk on the Moon?',
        options:        ['Neil Armstrong', 'Buzz Aldrin', 'Yuri Gagarin', 'John Glenn'],
        correct_answer: 'Neil Armstrong',
        percentage:     '75%',
      },
      {
        text:           'What is the capital city of Canada?',
        options:        ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
        correct_answer: 'Ottawa',
        percentage:     '50%',
      },
      {
        text:           'In which year did World War I begin?',
        options:        ['1912', '1913', '1914', '1915'],
        correct_answer: '1914',
        percentage:     '30%',
      },
      {
        text:           'Which country has the longest coastline in the world?',
        options:        ['Russia', 'Australia', 'Canada', 'Norway'],
        correct_answer: 'Canada',
        percentage:     '10%',
      },
      {
        text:           'In which year was the Magna Carta signed?',
        options:        ['1066', '1215', '1348', '1492'],
        correct_answer: '1215',
        percentage:     '5%',
      },
      {
        text:           'What is the deepest lake in the world?',
        options:        ['Lake Superior', 'Lake Baikal', 'Lake Titicaca', 'Lake Victoria'],
        correct_answer: 'Lake Baikal',
        percentage:     '1%',
      },
    ],
  },

  // ── SPORT & ENTERTAINMENT ──────────────────────────────────────────────────
  {
    id:          'sport-entertainment',
    name:        'Sport & Entertainment',
    description: 'Football, film, music, and more',
    questions: [
      {
        text:           'How many players are on a football (soccer) team?',
        options:        ['10', '11', '12', '13'],
        correct_answer: '11',
        percentage:     '90%',
      },
      {
        text:           'Which band recorded "Bohemian Rhapsody"?',
        options:        ['The Beatles', 'Queen', 'Led Zeppelin', 'The Rolling Stones'],
        correct_answer: 'Queen',
        percentage:     '75%',
      },
      {
        text:           'How many Grand Slam tennis tournaments are held each year?',
        options:        ['2', '3', '4', '5'],
        correct_answer: '4',
        percentage:     '50%',
      },
      {
        text:           'In which city were the 2000 Summer Olympics held?',
        options:        ['Athens', 'Barcelona', 'Sydney', 'Atlanta'],
        correct_answer: 'Sydney',
        percentage:     '30%',
      },
      {
        text:           'How many times has Brazil won the FIFA World Cup?',
        options:        ['4', '5', '6', '7'],
        correct_answer: '5',
        percentage:     '10%',
      },
      {
        text:           'Who holds the record for the most Olympic gold medals?',
        options:        ['Usain Bolt', 'Michael Phelps', 'Carl Lewis', 'Mark Spitz'],
        correct_answer: 'Michael Phelps',
        percentage:     '5%',
      },
      {
        text:           'In what year was the first FIFA World Cup held?',
        options:        ['1924', '1926', '1928', '1930'],
        correct_answer: '1930',
        percentage:     '1%',
      },
    ],
  },

  // ── MERCEDES-BENZ HISTORY ──────────────────────────────────────────────────
  {
    id:          'mercedes-benz-history',
    name:        'Mercedes-Benz History',
    description: 'From Karl Benz to Silver Arrows — 20 questions, easy to expert',
    questions: [
      {
        text:           'What is the iconic symbol of Mercedes-Benz?',
        options:        ['A winged wheel', 'A three-pointed star', 'A laurel wreath', 'A silver arrow'],
        correct_answer: 'A three-pointed star',
        percentage:     '90%',
      },
      {
        text:           'In which country was Mercedes-Benz founded?',
        options:        ['France', 'Italy', 'United Kingdom', 'Germany'],
        correct_answer: 'Germany',
        percentage:     '90%',
      },
      {
        text:           'What year was the Mercedes-Benz brand officially created through the merger of Daimler and Benz?',
        options:        ['1920', '1926', '1931', '1935'],
        correct_answer: '1926',
        percentage:     '75%',
      },
      {
        text:           'Who is widely credited as the inventor of the first true petrol-powered automobile?',
        options:        ['Gottlieb Daimler', 'Wilhelm Maybach', 'Karl Benz', 'Rudolf Diesel'],
        correct_answer: 'Karl Benz',
        percentage:     '75%',
      },
      {
        text:           "What does the 'Mercedes' name originate from?",
        options:        ['A Greek goddess', 'The daughter of Emil Jellinek', 'A Spanish city', 'A Latin word for speed'],
        correct_answer: 'The daughter of Emil Jellinek',
        percentage:     '75%',
      },
      {
        text:           "What was the name of Karl Benz's first commercial automobile, patented in 1886?",
        options:        ['Benz Victoria', 'Benz Velo', 'Benz Patent-Motorwagen', 'Benz Landaulet'],
        correct_answer: 'Benz Patent-Motorwagen',
        percentage:     '75%',
      },
      {
        text:           "Which famous race did Mercedes-Benz dominate in the 1930s with their 'Silver Arrows' racing cars?",
        options:        ['Le Mans 24 Hours', 'Monaco Grand Prix', 'German Grand Prix', 'Mille Miglia'],
        correct_answer: 'German Grand Prix',
        percentage:     '50%',
      },
      {
        text:           "Why did the Mercedes-Benz racing cars become known as 'Silver Arrows'?",
        options:        ['They were painted silver by factory order', 'Their white paint was stripped to reduce weight, revealing bare aluminium', 'They were sponsored by a silver mine', 'Their speed made them appear as silver streaks'],
        correct_answer: 'Their white paint was stripped to reduce weight, revealing bare aluminium',
        percentage:     '50%',
      },
      {
        text:           "What was the model name of the iconic Mercedes-Benz 'Gullwing' sports car launched in 1954?",
        options:        ['300 SL', '190 SL', '450 SL', '600 SL'],
        correct_answer: '300 SL',
        percentage:     '50%',
      },
      {
        text:           'Which Mercedes-Benz model was the first car in history to feature anti-lock brakes (ABS) as standard?',
        options:        ['W116 S-Class', 'W123 E-Class', 'W126 S-Class', 'W114 /8'],
        correct_answer: 'W116 S-Class',
        percentage:     '30%',
      },
      {
        text:           "Bertha Benz made automotive history in 1888 by completing the world's first long-distance road trip. What was the approximate distance?",
        options:        ['20 km', '60 km', '104 km', '250 km'],
        correct_answer: '104 km',
        percentage:     '30%',
      },
      {
        text:           "What does 'AMG' stand for in Mercedes-AMG?",
        options:        ['Auto Motor Group', 'Aufrecht Melcher Grossaspach', 'Advanced Motor Gesellschaft', 'Automotive Motor Garage'],
        correct_answer: 'Aufrecht Melcher Grossaspach',
        percentage:     '30%',
      },
      {
        text:           'In what year did Mercedes-Benz introduce the revolutionary crumple zone, designed by Béla Barényi?',
        options:        ['1951', '1959', '1966', '1973'],
        correct_answer: '1959',
        percentage:     '30%',
      },
      {
        text:           "Which Mercedes-Benz model, produced from 1963 to 1971, is nicknamed the 'Pagoda' due to its unusual roof shape?",
        options:        ['230 SL', '350 SL', '280 SE', '600 Grosser'],
        correct_answer: '230 SL',
        percentage:     '10%',
      },
      {
        text:           'What was the original engine displacement of the Mercedes-Benz 300 SLR that competed at Le Mans in 1955?',
        options:        ['2.5 litres', '2.9 litres', '3.0 litres', '3.5 litres'],
        correct_answer: '3.0 litres',
        percentage:     '10%',
      },
      {
        text:           'The tragic 1955 Le Mans disaster involved a Mercedes-Benz 300 SLR. Who was the driver whose car was involved in the accident?',
        options:        ['Juan Manuel Fangio', 'Stirling Moss', 'Pierre Levegh', 'Karl Kling'],
        correct_answer: 'Pierre Levegh',
        percentage:     '10%',
      },
      {
        text:           "Which internal designation did Mercedes-Benz use for the legendary 600 'Grosser Mercedes' limousine produced from 1963?",
        options:        ['W100', 'W108', 'W112', 'W126'],
        correct_answer: 'W100',
        percentage:     '5%',
      },
      {
        text:           'Before the AMG brand was formally acquired by Daimler-Benz, in which year did the two companies form an exclusive cooperation agreement?',
        options:        ['1984', '1990', '1993', '1999'],
        correct_answer: '1990',
        percentage:     '5%',
      },
      {
        text:           "What innovative valve actuation system did AMG's famous 6.3-litre naturally aspirated V8 (M156) use?",
        options:        ['Pneumatic valve springs', 'Desmodromic valves', 'Roller finger followers only', 'Cosworth-type bucket tappets'],
        correct_answer: 'Pneumatic valve springs',
        percentage:     '1%',
      },
      {
        text:           'Karl Benz and Gottlieb Daimler are known never to have met. What fundamental technical detail differed between their earliest engines?',
        options:        ['Benz used a two-stroke engine; Daimler a four-stroke', 'Benz used a horizontal single-cylinder; Daimler used a vertical single-cylinder', 'Benz used liquid cooling; Daimler used air cooling', 'Benz used chain drive; Daimler used shaft drive'],
        correct_answer: 'Benz used a horizontal single-cylinder; Daimler used a vertical single-cylinder',
        percentage:     '1%',
      },
    ],
  },

];
