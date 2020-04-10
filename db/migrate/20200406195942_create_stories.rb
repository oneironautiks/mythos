class CreateStories < ActiveRecord::Migration[6.0]
  def change
    create_table :stories do |t|
      t.string :title
      t.string :summary
      t.string :place_of_origin
      t.string :date_of_origin
      t.text :story
      t.references :comment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
