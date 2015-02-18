class User < ActiveRecord::Base
	has_secure_password

	has_many :authored_mantras, :class_name => "Mantra"
	has_many :responses, :foreign_key => :commenter_id
	has_many :commented_mantras, :through => :responses, :source => :mantra
end
