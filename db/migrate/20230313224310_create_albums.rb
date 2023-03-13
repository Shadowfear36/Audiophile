class CreateAlbums < ActiveRecord::Migration[7.0]
  def change
    create_table :albums do |t|
      t.string :name
      t.integer :user_id
      t.integer :likes

      t.timestamps
    end
  end
end
