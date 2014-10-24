module ParseAPI

  def self.parse_transaction(tx)
     address_value = {}
       tx["out"].each do |output|
          address = output["addr"]
          address_value[address] = output["value"]
       end
      return address_value
  end

  def self.create_new_transactions(tx_list)
    tx_list.each do |tx|
    	receipts = parse_transaction(tx)
    	val = receipts.values.reduce(:+)
      new_tx = Transaction.create(:tx_hash => tx["hash"], :bitcoin => val)

    end
  end

  def self.delete_old_transactions(tx_list)
    hash_list = []
    tx_list.each do |tx|
      hash_list << tx["hash"]
    end
    delete_list = []
    Transaction.all.each do |tx|
      delete_list << tx.id unless hash_list.include? tx.tx_hash
    end
    Transaction.destroy(delete_list)
  end

end
