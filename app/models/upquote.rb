class Upquote < ActiveRecord::Base
	belongs_to :user
	belongs_to :mantra 
end
