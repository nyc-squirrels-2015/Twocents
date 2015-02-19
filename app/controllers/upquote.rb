get '/upquote/:id' do
	content_type :json 
	upquote = Upquote.create(mantra_id: params[:id]) 
	mantra = Mantra.find(params[:id])
	return{mantra_id: mantra.id, upquotes: mantra.upquotes.count}.to_json
end 