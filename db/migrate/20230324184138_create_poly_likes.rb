class CreatePolyLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :poly_likes do |t|
      t.integer :user_id
      t.references :likeable, polymorphic: true, null: false

      t.timestamps
    end
  end
end
