text = "Charles Elssworth gained an appreciation for simple not so distant pash in the White Mountains of Arizona where he was born and raised. Schooled in Salt Lake and transplanted to New York he has spent the better part of the past five years on the road playing music in each of the lower 48 states, sleeping on floors, couches, and in the van, coming home from tour to stay just long enough to set up the next tour. Ellsworth attributes no small part of his work ethic and life style to the words of one of his favorite writers, Roberto Bolaño, 'Make new sensations appear... subvert daily life... give it up again. Hit the road.'\nHis vivid lyrics and near-familiar melodies weave to tell stories of heartbreak and loneliness while shining a light on the perseverance of the human spirit. Charles has subtle way of exploring the idea that even when all seems lost, there is always a sliver of hope. Declan Ryan of Independent Clauses called his and Vincent Draper's split release Salt Lake City: A Love Story, 'a triumph for american songwriting... blending outlaw grit with a raw streak of self-awareness.' His ability to go from a stomp-your-boots anthem reminiscent of Springsteen, to a simple love song in the vein of Townes Van Zandt assures that it won't be long before his name, lyrics, and melodies are stuck in music lovers head's everywhere." 

Bio.create(body: text)

[
  { description: '"In My Thoughts" - Wireless Wednesday', vid_id: '4j8nksAlORY'}, 
  { description: '"Drugs In My Blood" - Wireless Wednesday', vid_id: 'WET2wyAIW7A'}, 
  { description: '"Ripped To Ribbons" - Wireless Wednesday', vid_id: 'JnEf_eq5HKg'}, 
  { description: '"Fuck Around"', vid_id: 'unDhdVk4QZU'}, 
  { description: '"Sunday Shoes" - Wireless Wednesday', vid_id: 'TOSFdEr7GJY'}, 
  { description: '"Arizona Pines" - Park City TV Sundance ...', vid_id: 'JfiPciGGaxI'}, 
  { description: '"Fifty Cent Smile" - Live at the State Room', vid_id: 'eb2_tdWuy_g'}, 
  { description: '"California" - Wireless Wednesdays', vid_id: '_cUxQJiGdFM'}
].each { |vid| Video.create(description: vid[:description], vid_id: vid[:vid_id]) }

User.create(email: 'djungst@gmail.com', password: 'password', role: 'admin')
User.create(email: 'cellsworth54@gmail.com', password: 'password', role: 'admin')
User.create(email: 'jakesorce@gmail.com', password: 'password', role: 'admin')
