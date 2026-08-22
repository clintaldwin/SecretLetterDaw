import { LetterSectionData, FloatingFragment, PhotoMemory } from '../types';

/**
 * EXACT WORD-FOR-WORD LETTER FROM CLINT TO MAICA
 * Preserved with complete integrity, authentic punctuation, emojis, and Cebuano/Taglish phrasing.
 */
export const FULL_ORIGINAL_LETTER_TEXT = `Hi lovey heheheh, Grabe kaayu sa hahahahha, we are so far na hahaha, we didn't expect this nga maabot ta nga ngin ani nga time hahahahha 😅 , like kato, heheh, pag sauna nga classmate palang tayu, mauwaw ta each other, even palang bisag casual nga talk seems impossible and if naay moments rag ackward hahahhahaha, and kato to the point nga little by little we have a grasped na to each other ba, and then kato hahaha, and to this hehe, grabe kaayu hahahah, i did not expect of this, it feels like (akong e balik haha) DREAM, until now, mura jud ko nag damgo hahah, damgo rani? Kay u know what? Katong pag Grade 11 nato. Segi jud ko think ato nimo hahah char🤣, bitaw hahahah, tinood and naa gani sa akong huna² nga bisag ginagmay lang nga ka tabi² nimo ba, kanang u know hahah, casual talk, treasure na kay na para nako hahahah, so kato hahah, I always think ba nga, this is impossible because kato hqhq, i always feel ba nga layu kay tag Gap, bzta hahah, kanang layu nakay ka ba hahahha everything nga naa nimo about sa academics, layu kay tag gap hahah nya ako kay naa ra sa bottom japun hahaha, so mao to, hahaa, if ang Grade 11 lang nga ako no maka witness ani nato karon, dli to siya motoo hahah, dli to siya motoo kay impossible kaayo hahahah, and Yet. Karon naa😊, ako, ikaw, kita hahah, with memories, mga experiences hhehehe nga sa atong pag kuyug ba hhehheheh, until nga 11 months na heheh☺️, Happy 11th monthsarry lovey heheh, Im so thankful and grateful nga naa ka sakong life, support, naa ka sa akong side heheh, everyday all those updates, all those mga unsay pagabuhaton sa screen, tabi² chat2, hangtud sa kanang mga memories nato ug mga experience heheh, im thankful lovey, all this memories, treasures, mga late night talks, is for me to bear and keep it as a treasure for life lovey😚☺️, I love you, and I love you ehhehe 😚, and sana padayun ta, padayun ta lovey heheh, lets pray to God, pray to God heheh para sa matag usa kanato ehhehe.. Song of Solomon 1:15 ESV [15] Behold, you are beautiful, my love; behold, you are beautiful; your eyes are doves. 🤗🤭 hehehahhahahahahh... Happy monthsarry lovey, I love you Soo mucchhhhh☺️😚😊😇,`;

export const LETTER_SECTIONS: LetterSectionData[] = [
  {
    id: 'classmates',
    sceneNumber: 'SCENE 01',
    sceneTitle: 'The Letter Opens',
    paragraphs: [
      'Hi lovey heheheh,',
      'Grabe kaayu sa hahahahha, we are so far na hahaha, we didn\'t expect this nga maabot ta nga ngin ani nga time hahahahha 😅 ,',
      'like kato, heheh, pag sauna nga classmate palang tayu, mauwaw ta each other, even palang bisag casual nga talk seems impossible and if naay moments rag ackward hahahhahaha,',
      'and kato to the point nga little by little we have a grasped na to each other ba, and then kato hahaha, and to this hehe, grabe kaayu hahahah,',
      'i did not expect of this, it feels like (akong e balik haha) DREAM, until now, mura jud ko nag damgo hahah, damgo rani?'
    ],
    handwrittenNote: 'damgo rani? until now it feels like a dream...',
    targetVolume: 0.35
  },
  {
    id: 'grade11',
    sceneNumber: 'SCENE 02',
    sceneTitle: 'Grade 11',
    paragraphs: [
      'Kay u know what? Katong pag Grade 11 nato. Segi jud ko think ato nimo hahah char🤣,',
      'bitaw hahahah, tinood and naa gani sa akong huna² nga bisag ginagmay lang nga ka tabi² nimo ba, kanang u know hahah, casual talk, treasure na kay na para nako hahahah,'
    ],
    uiCommentary: 'Grade 11 Clint: “Casual talk with her would already be enough.”',
    handwrittenNote: 'A single conversation back then felt like winning everything.',
    targetVolume: 0.35
  },
  {
    id: 'gap',
    sceneNumber: 'SCENE 03',
    sceneTitle: 'The Gap',
    paragraphs: [
      'so kato hahah, I always think ba nga, this is impossible because kato hqhq, i always feel ba nga layu kay tag Gap,',
      'bzta hahah, kanang layu nakay ka ba hahahha everything nga naa nimo about sa academics, layu kay tag gap hahah nya ako kay naa ra sa bottom japun hahaha,'
    ],
    uiCommentary: 'The perceived distance before grace brought us together.',
    handwrittenNote: 'You were so far ahead in everything... and I was just looking from the bottom.',
    targetVolume: 0.35
  },
  {
    id: 'and-yet',
    sceneNumber: 'SCENE 04',
    sceneTitle: 'And Yet.',
    paragraphs: [
      'so mao to, hahaa, if ang Grade 11 lang nga ako no maka witness ani nato karon,',
      'dli to siya motoo hahah,',
      'dli to siya motoo kay impossible kaayo hahahah,'
    ],
    handwrittenNote: 'Grade 11 me would never have believed this.',
    targetVolume: 0.12
  },
  {
    id: 'karon-naa',
    sceneNumber: 'SCENE 04.5',
    sceneTitle: 'Karon Naa',
    paragraphs: [
      'and Yet. Karon naa😊,',
      'ako, ikaw, kita hahah, with memories, mga experiences hhehehe nga sa atong pag kuyug ba hhehheheh,'
    ],
    handwrittenNote: 'From impossible → to Us.',
    targetVolume: 0.35
  },
  {
    id: 'eleven-months',
    sceneNumber: 'SCENE 05',
    sceneTitle: '11 Months of Us',
    paragraphs: [
      'until nga 11 months na heheh☺️,',
      'Happy 11th monthsarry lovey heheh,',
      'Im so thankful and grateful nga naa ka sakong life, support, naa ka sa akong side heheh,'
    ],
    handwrittenNote: '11 whole months. August 22, 2026.',
    targetVolume: 0.35
  },
  {
    id: 'everyday',
    sceneNumber: 'SCENE 05.5',
    sceneTitle: 'The Everyday Moments',
    paragraphs: [
      'everyday all those updates, all those mga unsay pagabuhaton sa screen, tabi² chat2, hangtud sa kanang mga memories nato ug mga experience heheh,',
      'im thankful lovey, all this memories, treasures, mga late night talks, is for me to bear and keep it as a treasure for life lovey😚☺️,'
    ],
    handwrittenNote: 'Made of late night talks, random stories, screen updates, and us.',
    targetVolume: 0.35
  },
  {
    id: 'treasure',
    sceneNumber: 'SCENE 06',
    sceneTitle: 'Treasure for Life',
    paragraphs: [
      'I love you, and I love you ehhehe 😚,',
      'and sana padayun ta, padayun ta lovey heheh,'
    ],
    handwrittenNote: 'Padayun ta lovey... always and always.',
    targetVolume: 0.30
  },
  {
    id: 'prayer',
    sceneNumber: 'SCENE 07',
    sceneTitle: 'A Prayer & Promise',
    paragraphs: [
      'lets pray to God, pray to God heheh para sa matag usa kanato ehhehe..',
      'Song of Solomon 1:15 ESV [15] Behold, you are beautiful, my love; behold, you are beautiful; your eyes are doves.',
      '🤗🤭 hehehahhahahahahh...'
    ],
    handwrittenNote: 'Song of Solomon 1:15 — Forever grateful for God placing you in my life.',
    targetVolume: 0.20
  },
  {
    id: 'finale',
    sceneNumber: 'SCENE 08',
    sceneTitle: 'The Last Line',
    paragraphs: [
      'Happy monthsarry lovey,',
      'I love you Soo mucchhhhh☺️😚😊😇,'
    ],
    handwrittenNote: 'August 22, 2026 • 11 Months and counting.',
    targetVolume: 0.28
  }
];

export const EVERYDAY_FRAGMENTS: FloatingFragment[] = [
  { id: '1', text: 'update 💌', x: 12, y: 15, delay: 0.2, size: 'sm' },
  { id: '2', text: 'chat2 ✨', x: 78, y: 18, delay: 0.8, size: 'md' },
  { id: '3', text: 'late night call 🌙', x: 16, y: 48, delay: 1.4, size: 'lg' },
  { id: '4', text: 'random story 📖', x: 80, y: 52, delay: 0.5, size: 'sm' },
  { id: '5', text: '“naa na ka?” 👀', x: 22, y: 78, delay: 1.1, size: 'md' },
  { id: '6', text: '“hahahah” 😂', x: 74, y: 75, delay: 1.7, size: 'sm' },
  { id: '7', text: 'tabi² sa screen 💻', x: 50, y: 88, delay: 0.9, size: 'lg' },
  { id: '8', text: '“goodnight lovey 😴”', x: 48, y: 10, delay: 1.3, size: 'md' },
];

export const PHOTO_MEMORIES: PhotoMemory[] = [
  {
    id: 1,
    title: 'From Distance to Us',
    caption: 'one of the moments that became real',
    dateStr: 'Our beginning',
    imageUrl: 'https://lh3.googleusercontent.com/d/1smj64ajtPckAIyyWY5oqHY8RkzgKl7pB',
    fallbackUrls: [
      'https://drive.google.com/thumbnail?id=1smj64ajtPckAIyyWY5oqHY8RkzgKl7pB&sz=w1600',
      'https://drive.google.com/uc?export=view&id=1smj64ajtPckAIyyWY5oqHY8RkzgKl7pB'
    ],
    illustrationType: 'school-glance'
  },
  {
    id: 2,
    title: 'Together, Day by Day',
    caption: 'another little piece of us',
    dateStr: 'Ordinary afternoons made extraordinary',
    imageUrl: 'https://lh3.googleusercontent.com/d/1n_X73GgRwepXtp03alZD3Zrg8GxvJ3RG',
    fallbackUrls: [
      'https://drive.google.com/thumbnail?id=1n_X73GgRwepXtp03alZD3Zrg8GxvJ3RG&sz=w1600',
      'https://drive.google.com/uc?export=view&id=1n_X73GgRwepXtp03alZD3Zrg8GxvJ3RG'
    ],
    illustrationType: 'holding-hands'
  },
  {
    id: 3,
    title: 'Treasure for Life',
    caption: 'is for me to bear and keep as a treasure for life lovey',
    dateStr: 'August 22, 2026 • 11 Months',
    imageUrl: 'https://lh3.googleusercontent.com/d/1f3oBBoyh3T63C9W8iUw8U4iK3-cMKfbu',
    fallbackUrls: [
      'https://drive.google.com/thumbnail?id=1f3oBBoyh3T63C9W8iUw8U4iK3-cMKfbu&sz=w1600',
      'https://drive.google.com/uc?export=view&id=1f3oBBoyh3T63C9W8iUw8U4iK3-cMKfbu'
    ],
    illustrationType: 'stargazing-moment'
  }
];
