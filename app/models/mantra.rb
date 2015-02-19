class Mantra < ActiveRecord::Base
	has_many :responses 
	has_many :commenters, :through => :responses
	has_many :upquotes
end
