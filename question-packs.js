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

];
