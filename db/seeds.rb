# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Story.destroy_all

user_1 = User.create!({
  username: 'asht',
  email: 'light@light.com',
  password: '122356789'
})

story_1 = Story.create!({
  title: 'Seven Devils',
  summary: 'When the infamous seven hills surrounding the epicenter of the ancient world come to life, shedding light on the personalities buried deep in earth...',
  place_of_origin: 'here',
  date_of_origin: '2020',
  story: BetterLorem.p(10),
  user_id: user_1.id
})

story_2 = Story.create!({
  title: "Pandora's Box",
  summary: "Pandora's Box is a tale from ancient Greece that seeks to explain the cause for negativity in the world; ultimately portraying that it's all within human nature, and our vulnerability to desire.
  Much like the Biblical tale of Adam and Eve, this story ultimately pins the blame on a young woman who did seemingly no wrong, other than have an appetite for curiousity - Quite a suspicious plotline, it seems, 
  though perhaps it's worth noting here that bringing a more modern perspective with you to this read can reveal a drastic difference in interpretation. Come step into this tale, and see for yourself the stark picture
  painted by Zeus' abuse of authority - And humankind's rude awakening",
  place_of_origin: 'Ancient Greece',
  date_of_origin: '8th Century B.C.E.',
  story: "Pandora, (Greek: “All-Gifts”) in Greek mythology, the first woman. According to Hesiod’s Theogony, after Prometheus, a fire god and divine trickster, had stolen fire from heaven and bestowed it upon mortals, Zeus, the king of the gods, determined to counteract this blessing. He accordingly commissioned Hephaestus (a god of fire and patron of craftsmen) to fashion a woman out of earth, upon whom the gods bestowed their choicest gifts. In Hesiod’s Works and Days, Pandora had a jar containing all manner of misery and evil. Zeus sent her to Epimetheus, who forgot the warning of his brother Prometheus and made Pandora his wife. She afterward opened the jar, from which the evils flew out over the earth. Hope alone remained inside, the lid having been shut down before she could escape. In a later story the jar contained not evils but blessings, which would have been preserved for the human race had they not been lost through the opening of the jar out of curiosity. Pandora’s jar became a box in the 16th century, when the Renaissance humanist Erasmus either mistranslated the Greek or confused the vessel with the box in the story of Cupid and Psyche.",
  user_id: user_1.id
})

p "#{Story.count} stories were created!"

Favorite.create!({
  user_id: user_1.id,
  story_id: story_1.id
})

Favorite.create!({
  user_id: user_1.id,
  story_id: story_2.id
})



# p "#{}"