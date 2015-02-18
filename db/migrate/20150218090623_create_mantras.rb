class CreateMantras < ActiveRecord::Migration
  def change
  	create_table :mantras do |t|
  		t.text :focus 
  		t.integer :user_id
  	end 
  end
end
