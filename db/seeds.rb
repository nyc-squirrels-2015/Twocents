require 'faker'

remy = User.create(name: "Remy", email: "remy@dbc.com", password: "123", password_confirmation: "123")

20.times do
	User.create(
		name: Faker::Internet.user_name, 
		email: "blah@gmail.com",
		password: "123", 
		password_confirmation: "123"
	)

	mantra = Mantra.create(
		focus: "Keep Calm And Carry On", 
		user_id: remy.id
	)

	Response.create(
	  content: Faker::Lorem.sentence,
	  mantra_id: mantra.id ,
	  commenter_id: remy.id
	 )

 end 