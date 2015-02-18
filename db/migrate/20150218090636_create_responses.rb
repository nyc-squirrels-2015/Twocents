class CreateResponses < ActiveRecord::Migration
  def change
  	create_table :responses do |t|
  		t.text   :content
  		t.integer :mantra_id
  		t.integer :commenter_id
  	end 
  end
end
