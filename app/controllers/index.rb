get '/' do
   erb :index
end

get '/price' do
  price_api = WinkDex::Client.new
  price = price_api.price["price"]/100.to_f
  content_type :json
  price.to_json
end

get '/transactions' do
  api = BlockChain::Client.new
  transactions = api.transactions
  Transaction.update_all(:old => true)
  ParseAPI.delete_old_transactions(transactions["txs"])
  ParseAPI.create_new_transactions(transactions["txs"])
  content_type :json
  Transaction.where(:old => false).to_json
end

