class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.belongs_to :story
      t.belongs_to :user
      t.string :title
      t.string :comment
      t.datetime :created_at
      t.datetime :updated_at

      t.timestamps
    end
  end
end
