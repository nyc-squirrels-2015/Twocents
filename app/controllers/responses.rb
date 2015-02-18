get '/response/all' do 

end 

get '/response/new' do

end 

post '/response/new' do
	response = Response.create(params[:response])
	response.commenter_id = current_user.id 

	if response.save
		redirect "mantra/#{mantra.id}"
	else 
		redirect 'mantra/all'
	end 
end 

post '/response.json' do
	content_type :json
	response = Response.new(params[:response])
	response.commenter_id = current_user.id 

	if response.save
		response.to_json
	else 
		redirect '/mantra/all'
	end 
end 