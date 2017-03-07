class CreatePressReleases < ActiveRecord::Migration[5.0]
  def change
    create_table :press_releases do |t|
      t.string :name, null: false
      t.string :presents, null: false
      t.string :album, null: false
      t.string :sub_header, null: false
      t.text :content, null: false
      t.string :embed_url, null: false

      t.timestamps
    end
  end
end
