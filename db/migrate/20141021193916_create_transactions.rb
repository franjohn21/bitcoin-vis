class CreateTransactions < ActiveRecord::Migration

  def change
    create_table :transactions do |t|
      t.string :tx_hash
      t.integer :bitcoin, :limit => 8
      t.boolean :old, :default => false

      t.timestamps
    end

  end
end
