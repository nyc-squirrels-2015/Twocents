require_relative '../spec_helper'

class ControllerSpec
	describe 'routes' do 
		let(:user){User.create(name: 'Winston', email: "calm@parliament.com", password: "123", password_confirmation: "123" )}
		let(:mantra){Mantra.create(focus: "Keep Calm and Carry On", user_id: user.id)}

		before do 
			user
			mantra
		end 

		it 'should have a login page' do
			get '/login'
			expect(last_response).to be_ok
			expect(last_response.body).to include 'Login'
		end 

		it 'should respond to /mantra/new' do 
			get '/mantra/new'
			expect(last_response).to be_ok
			expect(last_response.body).to include 'Focus'
		end 

		it 'should respond to /mantra/:id' do
			get '/mantra/1'
			expect(last_response).to be_ok
			expect(last_response.body).to include 'Focus'
		end 

		it 'should respond to /response/new' do
			get '/response/new'
			expect(last_response).to be_ok
		end


	end 
end 