text = "Charles Elssworth gained an appreciation for simple not so distant pash in the White Mountains of Arizona where he was born and raised. Schooled in Salt Lake and transplanted to New York he has spent the better part of the past five years on the road playing music in each of the lower 48 states, sleeping on floors, couches, and in the van, coming home from tour to stay just long enough to set up the next tour. Ellsworth attributes no small part of his work ethic and life style to the words of one of his favorite writers, Roberto Bolaño, 'Make new sensations appear... subvert daily life... give it up again. Hit the road.'\nHis vivid lyrics and near-familiar melodies weave to tell stories of heartbreak and loneliness while shining a light on the perseverance of the human spirit. Charles has subtle way of exploring the idea that even when all seems lost, there is always a sliver of hope. Declan Ryan of Independent Clauses called his and Vincent Draper's split release Salt Lake City: A Love Story, 'a triumph for american songwriting... blending outlaw grit with a raw streak of self-awareness.' His ability to go from a stomp-your-boots anthem reminiscent of Springsteen, to a simple love song in the vein of Townes Van Zandt assures that it won't be long before his name, lyrics, and melodies are stuck in music lovers head's everywhere." 

press_release_text = "Charles Ellsworth, the southwest born and raised Brooklyn transplant escaped the harsh NYC winter to return to his roots in Arizona and make his first full length studio album in five years. He teamed up with producer Bob Hoag (Courtney Marie Andrews, The Format, Gin Blossoms) and the result is 'Cesaréa'. This new record stands on the shoulders of the folk/alt-country/Americana sound that Charles has become known for, while thoroughly exploring different areas of the psychedelic and post punk worlds he has only flirted with in the past. 'Cesaréa' is set to be released on Burro Borracho Records on May 26, 2017.\n

The first single titled '50 Cent Smile' was inspired by John Steinbeck's East of Eden and features the talents of Jon Rauhouse (Neko Case, Calexico, Jakob Dylan) on pedal steel. '50 Cent Smile' is available to stream on Spotify or as a digital download with a preorder of 'Cesaréa.' Pre-Orders for the album are available for Vinyl/CD/Digital formats through the official Charles Ellsworth website (www.charlesellsworthmusic.com) as well as iTunes.\n

Born and raised in the White Mountains of Arizona, Charles is no stranger to the struggles of the working class men and women who populate his songs. Much of his adult life has been spent on the road, always with a guitar in arms reach, talking his way onto bar stages and out of traffic tickets. He's taken to heart the advice of Roberto Bolano, 'Make new sensations appear…subvert daily life…give it all up again,' an author who has heavily influenced Charles's work and who created the character that the album is titled after. His songs wind down a familiar highway, a road more traveled but less explored. His vivid lyrics and near-familiar melodies weave to tell stories of heartbreak and loneliness while shining a light on the perseverance of the human spirit.\n

Please get in touch with Mark Ricks at wanderingmanproductions@gmail.com for guest list, interview requests, promo copies, and other information.\n"

Bio.create(body: text)

PressRelease.create(
  name: 'Charles Ellsworth', 
  presents: 'announces new album', 
  album: 'Cesaréa',
  sub_header: 'A new full length studio album available April 21, 2017',
  content: press_release_text,
  embed_url: "https://embed.spotify.com/?uri=spotify%3Atrack%3A3hg91B8v2BwteyuBq7R5bd"
)

[
  { description: 'A Packed Suitcase', vid_id: 'J77AZ0FakZM'}, 
  { description: 'Folsom Prison', vid_id: 'Py7ZPBIQmgk'}, 
  { description: 'In My Thoughts', vid_id: '4j8nksAlORY'}, 
  { description: 'Train to Vienna', vid_id: '4l-NQsQg998'}, 
  { description: 'Stuck Out In Texas', vid_id: 'CTCVUmLst7w'}, 
  { description: 'Take A Walk', vid_id: 'XRg7DEGRcBs'}, 
  { description: 'Drugs In My Blood', vid_id: 'WET2wyAIW7A'}, 
  { description: 'Arizona Pines', vid_id: '49-reoUhUq0'}, 
  { description: 'Sunday Shoes', vid_id: 'VOuKbsJmrmc'}, 
  { description: 'California', vid_id: '_cUxQJiGdFM'},
  { description: '50 Cent Smile', vid_id: '8jKM_bk5lrg'}, 
  { description: 'A Packed Suitcase', vid_id: 'ngDG2LjE9c8'} 
].each { |vid| Video.create(description: vid[:description], vid_id: vid[:vid_id]) }

[
  { body: "A remarkable songwriter and an observant storyteller in the western folk tradition — an heir to the likes of Townes Van Zand", source:  "Andrew Travers - The Aspen Times", link: "http://www.aspentimes.com/entertainment/singer-songwriter-charles-ellsworth-to-play-aspen-and-carbondale-over-thanksgiving-weekend" },
  { body: "Charles Ellsworth and Vincent Draper‘s Salt Lake City; A Love Story is a triumph for American songwriting... blending outlaw grit with a raw streak of self-awareness.", source: "Declan Ryan - Independent Clauses", link: "http://independentclauses.com/guest-review-salt-lake-city-a-love-story-by-charles-ellsworth-and-vincent-draper/" },
  { body: "Confidence, comfort, and soul pour directly from his gut... showcasing a genuine human spirit and a hyper-determined heartbeat on a mission; hypnotizing you to listen deeper and deeper still.", source: "Joe Touchette - SwitchBitch Magazine", link: "http://switchbitchnoise.com/noise-of-the-week-wildcat-chuck-charles-an-ep-by-charles-ellsworth" },
  { body: "An able, thoughtful kind of countrified folk, understated and melancholy while staying smart and literate... his voice is refreshingly strong and soulful… the guy’s good.", source: "Jeremy Hart - Space City Rock", link: "http://www.spacecityrock.com/2013/03/15/sxsw-overflow-2013-day-seven-charles-ellsworth-yusif-pillage-plunder-tom-blacklung-and-the-smokestacks-big-mess-kal-marks-more" },
  { body: "Ellsworth is a guitar-and-voice troubadour, gifted with a melodic sense in his hands and throat. It hits home to me, musically and lyrically.", source: "Stephen Carradini - Independent Clauses", link: "http://independentclauses.com/quick-hits-abandoned-delta-charles-ellsworth-hunters" }, 
  { body: "The relatable simplicity of this album makes for an emotional journey. I laid on my couch listening and weeping, and when it was over, I had a fuller understanding of not only myself but of humanity as a whole.", source: "LeAundra Jeffs - SLUG Magazine", link: "http://www.slugmag.com/local-music-reviews/charles-ellsworth-wildcat-chuck-charles" },
  { body: "It speaks to memories of days you thought would last forever, and the way you can still feel the joy they brought rattling in your soul. It does all this and more against top notch production led by a simple series of chords.", source: "James Shotwell - Under The Gun", link: "http://www.underthegunreview.net/2015/10/07/charles-ellsworth-a-packed-suitcase/" }
].reverse.each { |r| Release.create(body: r[:body], source: r[:source], link: r[:link]) }
