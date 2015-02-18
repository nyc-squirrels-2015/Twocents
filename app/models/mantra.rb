class Mantra < ActiveRecord::Base
	has_many :responses 
	has_many :commenters, :through => :responses
end
