require 'json'
module BlockChain

  class Client
    include HTTParty

    base_uri "https://blockchain.info"

    def transactions
      response = self.class.get('/unconfirmed-transactions?format=json')
      return response
    end

  end
end
