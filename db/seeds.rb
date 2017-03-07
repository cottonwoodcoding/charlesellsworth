text = "Charles Elssworth gained an appreciation for simple not so distant pash in the White Mountains of Arizona where he was born and raised. Schooled in Salt Lake and transplanted to New York he has spent the better part of the past five years on the road playing music in each of the lower 48 states, sleeping on floors, couches, and in the van, coming home from tour to stay just long enough to set up the next tour. Ellsworth attributes no small part of his work ethic and life style to the words of one of his favorite writers, Roberto Bolaño, 'Make new sensations appear... subvert daily life... give it up again. Hit the road.'\nHis vivid lyrics and near-familiar melodies weave to tell stories of heartbreak and loneliness while shining a light on the perseverance of the human spirit. Charles has subtle way of exploring the idea that even when all seems lost, there is always a sliver of hope. Declan Ryan of Independent Clauses called his and Vincent Draper's split release Salt Lake City: A Love Story, 'a triumph for american songwriting... blending outlaw grit with a raw streak of self-awareness.' His ability to go from a stomp-your-boots anthem reminiscent of Springsteen, to a simple love song in the vein of Townes Van Zandt assures that it won't be long before his name, lyrics, and melodies are stuck in music lovers head's everywhere." 

Bio.create(body: text)

[
  { description: 'A Packed Suitcase', vid_id: 'J77AZ0FakZM'}, 
  { description: 'Folsom Prison', vid_id: 'Py7ZPBIQmgk'}, 
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

User.create(email: 'djungst@gmail.com', password: 'password', role: 'admin')
User.create(email: 'cellsworth54@gmail.com', password: 'password', role: 'admin')
User.create(email: 'jakesorce@gmail.com', password: 'password', role: 'admin')
