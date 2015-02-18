class Response < ActiveRecord::Base
	belongs_to :commenter, :class_name => "User"
	belongs_to :mantra
end
