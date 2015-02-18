get '/mantra/all' do 
	@mantras = Mantra.all 
	erb :'/mantra/all'
end 

get '/mantra/new' do 
	erb :'mantra/new'
end 

post '/mantra/new' do
	mantra = Mantra.create(params[mantra])
	redirect :'/mantra/all'
end 

get '/mantra/:id' do |id|
	@mantra = Mantra.find(id)
	erb :'/mantra/show'
end 

####EDIT AND DELETE##########
put '/mantra/:id' do |id|
	@mantra = Mantra.find(id)
	@mantra.update(params[:mantra])

	redirect("/mantra/#{@mantra.id}")
end 

delete '/mantra/:id/delete' do |id|
	Mantra.find(id).destroy 

	redirect("/mantra/all")
end 