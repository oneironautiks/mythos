class CreateStories < ActiveRecord::Migration[6.0]
  def change
    create_table :stories do |t|
      t.string :title
      t.string :summary
      t.string :place_of_origin
      t.string :date_of_origin
      t.text :story
      t.references :user

      t.timestamps
    end
  end
end
