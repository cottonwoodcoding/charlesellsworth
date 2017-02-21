class CreateReleases < ActiveRecord::Migration[5.0]
  def change
    create_table :releases do |t|
      t.string :body
      t.string :source

      t.timestamps
    end
  end
end
