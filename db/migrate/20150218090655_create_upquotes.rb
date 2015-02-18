class CreateUpquotes < ActiveRecord::Migration
  def change
  	create_table :upquotes do |t|
  		t.integer :mantra_id
  		t.integer :user_id
  	end 
  end
end
